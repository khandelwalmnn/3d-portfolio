'use client'

import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { Suspense, useMemo, useRef } from 'react'
import * as THREE from 'three'
import { useScrollProgress } from './ScrollProgress'

function seeded(seed: number) {
  const x = Math.sin(seed * 9999.12) * 10000
  return x - Math.floor(x)
}

function lerpPhase(progress: number, a: number, b: number) {
  return THREE.MathUtils.clamp((progress - a) / (b - a), 0, 1)
}

function CinematicCamera() {
  const { progress } = useScrollProgress()

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime
    const fly = lerpPhase(progress, 0.06, 0.18)
    const skills = lerpPhase(progress, 0.14, 0.28)
    const planets = lerpPhase(progress, 0.28, 0.42)
    const meteor = lerpPhase(progress, 0.42, 0.55)
    const workshop = lerpPhase(progress, 0.55, 0.7)
    const dreams = lerpPhase(progress, 0.7, 0.86)
    const observatory = lerpPhase(progress, 0.86, 1)

    const targetZ =
      5.2 - fly * 2.4 - planets * 0.5 + workshop * 0.8 - dreams * 1.2 + observatory * 0.6
    const targetY =
      Math.sin(t * 0.18) * 0.1 +
      meteor * Math.sin(t * 0.35) * 0.45 +
      observatory * 0.55 -
      workshop * 0.25
    const targetX = Math.sin(t * 0.12) * 0.08 + skills * 0.15 - planets * 0.2 + dreams * 0.35
    const targetRotZ = meteor * Math.sin(t * 0.28) * 0.12 + fly * 0.02
    const targetFov = 52 + fly * 8 - observatory * 4 + meteor * 3

    state.camera.position.x = THREE.MathUtils.damp(state.camera.position.x, targetX, 1.1, delta)
    state.camera.position.y = THREE.MathUtils.damp(state.camera.position.y, targetY, 1.1, delta)
    state.camera.position.z = THREE.MathUtils.damp(state.camera.position.z, targetZ, 1.0, delta)
    state.camera.rotation.z = THREE.MathUtils.damp(state.camera.rotation.z, targetRotZ, 1.0, delta)
    if (state.camera instanceof THREE.PerspectiveCamera) {
      state.camera.fov = THREE.MathUtils.damp(state.camera.fov, targetFov, 1.2, delta)
      state.camera.updateProjectionMatrix()
    }
  })

  return null
}

/** Soft painterly nebula sprites (Gaussian PNGs) — replaces hard circleGeometry blobs */
function SoftNebulae() {
  const textures = useLoader(THREE.TextureLoader, [
    '/textures/nebula/nebula_violet.png',
    '/textures/nebula/nebula_indigo.png',
    '/textures/nebula/nebula_magenta.png',
  ])
  const group = useRef<THREE.Group>(null)
  const { progress } = useScrollProgress()

  const sprites = useMemo(
    () => [
      { tex: 0, pos: [-8, 2, -28] as const, scale: 22, speed: 0.01 },
      { tex: 1, pos: [10, -1, -32] as const, scale: 26, speed: -0.008 },
      { tex: 2, pos: [0, 4, -36] as const, scale: 20, speed: 0.012 },
      { tex: 0, pos: [-14, -3, -24] as const, scale: 16, speed: -0.006 },
    ],
    [],
  )

  useFrame((state) => {
    if (!group.current) return
    const dreams = lerpPhase(progress, 0.68, 0.9)
    group.current.children.forEach((child, i) => {
      child.rotation.z = state.clock.elapsedTime * sprites[i].speed
      const mat = (child as THREE.Mesh).material as THREE.MeshBasicMaterial
      mat.opacity = 0.22 + dreams * 0.18 + Math.sin(state.clock.elapsedTime * 0.3 + i) * 0.04
    })
  })

  return (
    <group ref={group}>
      {sprites.map((s, i) => (
        <mesh key={i} position={[...s.pos]} scale={[s.scale, s.scale * 0.7, 1]}>
          <planeGeometry args={[1, 1]} />
          <meshBasicMaterial
            map={textures[s.tex]}
            transparent
            opacity={0.25}
            depthWrite={false}
            blending={THREE.AdditiveBlending}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}
    </group>
  )
}

function Starfield({ count = 4500 }: { count?: number }) {
  const points = useRef<THREE.Points>(null)
  const { progress } = useScrollProgress()

  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    const palette = [
      new THREE.Color('#f5f3ff'),
      new THREE.Color('#ddd6fe'),
      new THREE.Color('#c4b5fd'),
      new THREE.Color('#a5b4fc'),
    ]
    for (let i = 0; i < count; i++) {
      const r = 38 + seeded(i) * 70
      const theta = seeded(i + 1) * Math.PI * 2
      const phi = Math.acos(2 * seeded(i + 2) - 1)
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = r * Math.cos(phi)
      const c = palette[Math.floor(seeded(i + 3) * palette.length)]
      colors[i * 3] = c.r
      colors[i * 3 + 1] = c.g
      colors[i * 3 + 2] = c.b
    }
    return { positions, colors }
  }, [count])

  useFrame((state, delta) => {
    if (!points.current) return
    const fly = lerpPhase(progress, 0.05, 0.2)
    points.current.rotation.y += delta * (0.01 + fly * 0.06)
    points.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.04) * 0.03
    points.current.position.z = THREE.MathUtils.damp(
      points.current.position.z,
      fly * 20 + progress * 6,
      1.8,
      delta,
    )
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.11}
        vertexColors
        transparent
        opacity={0.85}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

function FloatingDust({ count = 200 }: { count?: number }) {
  const points = useRef<THREE.Points>(null)
  const { progress } = useScrollProgress()
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (seeded(i * 3) - 0.5) * 28
      arr[i * 3 + 1] = (seeded(i * 3 + 1) - 0.5) * 16
      arr[i * 3 + 2] = (seeded(i * 3 + 2) - 0.5) * 18
    }
    return arr
  }, [count])

  useFrame((state, delta) => {
    if (!points.current) return
    const rise = lerpPhase(progress, 0.88, 1)
    points.current.rotation.y = state.clock.elapsedTime * 0.018
    points.current.position.y = THREE.MathUtils.damp(
      points.current.position.y,
      Math.sin(state.clock.elapsedTime * 0.15) * 0.35 + rise * 0.8,
      1.5,
      delta,
    )
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.045}
        color="#c4b5fd"
        transparent
        opacity={0.45}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

function Fireflies({ count = 36 }: { count?: number }) {
  const points = useRef<THREE.Points>(null)
  const { progress } = useScrollProgress()
  const base = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (seeded(i + 200) - 0.5) * 14
      arr[i * 3 + 1] = (seeded(i + 201) - 0.5) * 8
      arr[i * 3 + 2] = (seeded(i + 202) - 0.5) * 10
    }
    return arr
  }, [count])

  useFrame((state) => {
    if (!points.current) return
    const journey = lerpPhase(progress, 0.48, 0.68)
    const mat = points.current.material as THREE.PointsMaterial
    mat.opacity = 0.12 + journey * 0.65
    const pos = points.current.geometry.attributes.position as THREE.BufferAttribute
    const t = state.clock.elapsedTime
    for (let i = 0; i < count; i++) {
      pos.setXYZ(
        i,
        base[i * 3] + Math.sin(t * 0.4 + i) * 0.35,
        base[i * 3 + 1] + Math.cos(t * 0.55 + i * 0.7) * 0.4,
        base[i * 3 + 2] + Math.sin(t * 0.3 + i * 1.1) * 0.25,
      )
    }
    pos.needsUpdate = true
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[base.slice(), 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.11}
        color="#fde68a"
        transparent
        opacity={0.15}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

function Moon() {
  const moon = useRef<THREE.Mesh>(null)
  const glow = useRef<THREE.Mesh>(null)
  const texture = useLoader(THREE.TextureLoader, '/textures/planets/moon.jpg')
  const { progress } = useScrollProgress()

  useMemo(() => {
    texture.colorSpace = THREE.SRGBColorSpace
  }, [texture])

  useFrame((state, delta) => {
    if (!moon.current || !glow.current) return
    const t = state.clock.elapsedTime
    const observatory = lerpPhase(progress, 0.85, 1)
    const targetY = 2.2 + observatory * 1.4
    const targetX = 3.8 - observatory * 3.8
    const targetZ = -12 + observatory * 2
    moon.current.position.x = THREE.MathUtils.damp(moon.current.position.x, targetX, 1.2, delta)
    moon.current.position.y = THREE.MathUtils.damp(moon.current.position.y, targetY, 1.2, delta)
    moon.current.position.z = THREE.MathUtils.damp(moon.current.position.z, targetZ, 1.2, delta)
    glow.current.position.copy(moon.current.position)
    moon.current.rotation.y = t * 0.05
    glow.current.scale.setScalar(1 + Math.sin(t * 0.55) * 0.04)
  })

  return (
    <group>
      <mesh ref={glow}>
        <sphereGeometry args={[1.65, 32, 32]} />
        <meshBasicMaterial color="#ddd6fe" transparent opacity={0.1} depthWrite={false} />
      </mesh>
      <mesh ref={moon}>
        <sphereGeometry args={[1.05, 64, 64]} />
        <meshStandardMaterial
          map={texture}
          color="#e8e4f5"
          emissive="#6b5b95"
          emissiveIntensity={0.15}
          roughness={0.92}
          metalness={0.02}
        />
      </mesh>
    </group>
  )
}

function SoftClouds() {
  const texture = useLoader(THREE.TextureLoader, '/textures/nebula/glow_soft.png')
  const group = useRef<THREE.Group>(null)
  const clouds = useMemo(
    () =>
      Array.from({ length: 7 }, (_, i) => ({
        x: -12 + i * 3.8,
        y: 0.6 + seeded(i + 40) * 2.2,
        z: -8 - seeded(i + 50) * 4,
        s: 2.2 + seeded(i + 60) * 2.5,
        speed: 0.05 + seeded(i + 70) * 0.05,
      })),
    [],
  )

  useFrame((_, delta) => {
    if (!group.current) return
    group.current.children.forEach((child, i) => {
      child.position.x += clouds[i].speed * delta
      if (child.position.x > 16) child.position.x = -16
    })
  })

  return (
    <group ref={group}>
      {clouds.map((c, i) => (
        <mesh key={i} position={[c.x, c.y, c.z]} scale={[c.s * 2.2, c.s * 0.9, 1]}>
          <planeGeometry args={[1, 1]} />
          <meshBasicMaterial
            map={texture}
            color="#9b8ec4"
            transparent
            opacity={0.18}
            depthWrite={false}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      ))}
    </group>
  )
}

function ShootingStar({ delay = 2, rate = 1 }: { delay?: number; rate?: number }) {
  const ref = useRef<THREE.Mesh>(null)
  const trail = useRef<THREE.Mesh>(null)
  const local = useRef({ active: false, t: 0, delay })
  const { progress } = useScrollProgress()

  useFrame((_, delta) => {
    if (!ref.current || !trail.current) return
    const observatory = lerpPhase(progress, 0.88, 1)
    const meteorZone = lerpPhase(progress, 0.42, 0.55)
    const s = local.current
    s.delay -= delta * (1 + meteorZone * 2.5 + observatory * rate)
    if (s.delay <= 0 && !s.active) {
      s.active = true
      s.t = 0
      ref.current.position.set(3 + Math.random() * 6, 2 + Math.random() * 3, -5)
      trail.current.position.copy(ref.current.position)
      ref.current.visible = true
      trail.current.visible = true
    }
    if (s.active) {
      s.t += delta
      const speed = 7 + meteorZone * 5
      ref.current.position.x -= delta * speed
      ref.current.position.y -= delta * speed * 0.4
      trail.current.position.copy(ref.current.position)
      trail.current.position.x += 0.5
      trail.current.position.y += 0.2
      const opacity = Math.max(0, 1 - s.t * 1.3)
      ;(ref.current.material as THREE.MeshBasicMaterial).opacity = opacity
      ;(trail.current.material as THREE.MeshBasicMaterial).opacity = opacity * 0.4
      if (s.t > 1) {
        s.active = false
        s.delay = 2.5 + Math.random() * 4
        ref.current.visible = false
        trail.current.visible = false
      }
    }
  })

  return (
    <group>
      <mesh ref={ref} visible={false} rotation={[0, 0, -0.45]}>
        <planeGeometry args={[0.35, 0.03]} />
        <meshBasicMaterial color="#fff7ed" transparent opacity={0.95} depthWrite={false} />
      </mesh>
      <mesh ref={trail} visible={false} rotation={[0, 0, -0.45]}>
        <planeGeometry args={[1.8, 0.02]} />
        <meshBasicMaterial color="#e9d5ff" transparent opacity={0.5} depthWrite={false} />
      </mesh>
    </group>
  )
}

function MeteorField() {
  const group = useRef<THREE.Group>(null)
  const { progress } = useScrollProgress()
  const streaks = useMemo(
    () =>
      Array.from({ length: 10 }, (_, i) => ({
        x: -8 + seeded(i + 300) * 16,
        y: 4 + seeded(i + 301) * 4,
        z: -4 - seeded(i + 302) * 6,
        speed: 4 + seeded(i + 303) * 6,
        len: 0.8 + seeded(i + 304) * 1.2,
      })),
    [],
  )

  useFrame((_, delta) => {
    if (!group.current) return
    const active = lerpPhase(progress, 0.4, 0.58)
    group.current.visible = active > 0.05
    group.current.children.forEach((child, i) => {
      const s = streaks[i]
      child.position.x -= s.speed * delta * active
      child.position.y -= s.speed * 0.35 * delta * active
      if (child.position.x < -12) {
        child.position.x = 10
        child.position.y = 3 + seeded(i + 10) * 5
      }
      ;((child as THREE.Mesh).material as THREE.MeshBasicMaterial).opacity = active * 0.65
    })
  })

  return (
    <group ref={group} visible={false}>
      {streaks.map((s, i) => (
        <mesh key={i} position={[s.x, s.y, s.z]} rotation={[0, 0, -0.4]}>
          <planeGeometry args={[s.len, 0.025]} />
          <meshBasicMaterial
            color="#f5e9ff"
            transparent
            opacity={0}
            depthWrite={false}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      ))}
    </group>
  )
}

function Scene() {
  return (
    <>
      <color attach="background" args={['#060310']} />
      <fog attach="fog" args={['#060310', 30, 95]} />
      <ambientLight intensity={0.28} />
      <pointLight position={[5, 4, 2]} intensity={0.55} color="#c4b5fd" />
      <pointLight position={[-6, -1, 3]} intensity={0.25} color="#818cf8" />
      <directionalLight position={[4, 6, 2]} intensity={0.35} color="#f5e9ff" />
      <CinematicCamera />
      <Suspense fallback={null}>
        <SoftNebulae />
        <SoftClouds />
        <Moon />
      </Suspense>
      <Starfield />
      <FloatingDust />
      <Fireflies />
      <MeteorField />
      <ShootingStar delay={1.5} rate={1.2} />
      <ShootingStar delay={3.5} rate={1} />
      <ShootingStar delay={5.5} rate={1.4} />
    </>
  )
}

export default function SpaceCanvas() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 5.2], fov: 52, near: 0.1, far: 160 }}
        dpr={[1, 1.6]}
        gl={{ antialias: true, alpha: false, powerPreference: 'high-performance' }}
      >
        <Scene />
      </Canvas>
      <div className="vignette pointer-events-none absolute inset-0" />
    </div>
  )
}
