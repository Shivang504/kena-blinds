"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import type { HeroSlide } from "@/lib/cms-types"

type HeroSliderProps = {
  slides: HeroSlide[]
}

export function HeroSlider({ slides }: HeroSliderProps) {
  const safeSlides = slides.length ? slides : [{ img: "", headline: "Welcome", sub: " " }]
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % safeSlides.length)
    }, 5000)
    return () => clearInterval(id)
  }, [safeSlides.length])

  const current = safeSlides[index]

  return (
    <section aria-label="Hero" className="relative">
      <div className="relative h-[60vh] md:h-[80vh] overflow-hidden">
        {safeSlides.map((s, i) => (
          <img
            key={i}
            src={s.img || "/placeholder.svg"}
            alt="Decor with blinds and curtains"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${i === index ? "opacity-100" : "opacity-0"}`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/30 to-transparent" />
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            <h1 className="font-serif text-balance text-4xl md:text-6xl tracking-tight">{current.headline}</h1>
            <p className="mt-4 text-pretty text-base md:text-lg opacity-80">{current.sub}</p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <Button asChild size="lg" className="rounded-full">
                <a href="#contact">Get a Free Quote</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full bg-transparent">
                <a href="#products">Explore Products</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
