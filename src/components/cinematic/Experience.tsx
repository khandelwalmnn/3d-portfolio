'use client'

import { useLenis } from '@/hooks/use-lenis'
import dynamic from 'next/dynamic'
import { TravelBridge } from './Atmosphere'
import Beginning from './chapters/Beginning'
import Dreams from './chapters/Dreams'
import JourneyTimeline from './chapters/JourneyTimeline'
import Observatory from './chapters/Observatory'
import PlanetProjects from './chapters/PlanetProjects'
import SkillsConstellation from './chapters/SkillsConstellation'
import Workshop from './chapters/Workshop'
import ChapterNav from './ChapterNav'
import AssetCredits from './AssetCredits'
import ScrollAtmosphere from './ScrollAtmosphere'
import { ScrollProgressProvider } from './ScrollProgress'

const SpaceCanvas = dynamic(() => import('./SpaceCanvas'), { ssr: false })

function MeteorBridge() {
  return (
    <div className="pointer-events-none relative flex h-[48vh] items-center justify-center overflow-hidden" aria-hidden>
      {Array.from({ length: 14 }).map((_, i) => (
        <span
          key={i}
          className="meteor"
          style={{
            left: `${6 + i * 7}%`,
            animationDelay: `${i * 0.45}s`,
            animationDuration: `${2.8 + (i % 4) * 0.5}s`,
          }}
        />
      ))}
      <p className="relative z-10 font-body text-[10px] tracking-[0.5em] text-violet-200/40 uppercase">
        Through the shower
      </p>
    </div>
  )
}

function ExperienceInner() {
  useLenis()

  return (
    <>
      <SpaceCanvas />
      <ChapterNav />
      <ScrollAtmosphere />
      <main className="relative z-10">
        <Beginning />
        <TravelBridge label="Flying deeper" />
        <SkillsConstellation />
        <TravelBridge label="Into the night" />
        <PlanetProjects />
        <MeteorBridge />
        <JourneyTimeline />
        <TravelBridge label="Cherry blossoms fall" />
        <Workshop />
        <TravelBridge label="Back among the stars" />
        <Dreams />
        <TravelBridge label="Ascending" />
        <Observatory />
        <AssetCredits />
      </main>
    </>
  )
}

export default function Experience() {
  return (
    <ScrollProgressProvider>
      <ExperienceInner />
    </ScrollProgressProvider>
  )
}
