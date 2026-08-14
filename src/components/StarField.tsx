'use client'

import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'

function Stars() {
  const ref = useRef<THREE.Group>(null)

  // Generate random star positions
  const positions = new Float32Array(5000 * 3)
  for (let i = 0; i < 5000; i++) {
    // Create stars in a sphere around the scene
    const radius = 50 + Math.random() * 50
    const theta = 2 * Math.PI * Math.random()
    const phi = Math.acos(2 * Math.random() - 1)

    positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
    positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
    positions[i * 3 + 2] = radius * Math.cos(phi)
  }

  // Animate rotation
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.01
      ref.current.rotation.y = state.clock.elapsedTime * 0.005
    }
  })

  return (
    <group ref={ref}>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={0.5}
          color="#ffffff"
          transparent
          opacity={0.6}
          sizeAttenuation={true}
        />
      </points>
    </group>
  )
}

export default function StarField() {
  return <Stars />
}
