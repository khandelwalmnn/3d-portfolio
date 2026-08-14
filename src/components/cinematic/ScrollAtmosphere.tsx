'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger, useGSAP)

export default function ScrollAtmosphere() {
  useGSAP(() => {
    const sections = gsap.utils.toArray<HTMLElement>('main > section')
    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { autoAlpha: 0.6 },
        {
          autoAlpha: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            end: 'top 40%',
            scrub: 1.4,
          },
        },
      )
    })
  }, [])

  return null
}
