"use client"

import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Clock, Banknote } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const grants = [
  {
    id: 1,
    title: "Süni İntellekt və Rəqəmsal Transformasiya",
    description:
      "Maşın öyrənmələri, dərin öyrənmə və süni intellekt texnologiyalarının müxtəlif sahələrdə tətbiqi üzrə fundamental və tətbiqi tədqiqat layihələrinin maliyyələşdirilməsi.",
    category: "Texnologiya",
    deadline: "2026-04-15",
    amount: "50,000 - 120,000 AZN",
    accentColor: "bg-sky-500",
    accentColorLight: "bg-sky-500/20 text-sky-100",
    image: "/hero-ai.jpg",
  },
  {
    id: 2,
    title: "Yaşıl Enerji və Dayanıqlı İnkişaf",
    description:
      "Bərpa olunan enerji mənbələri, enerji səmərəliliyi və iqlim dəyişikliyinə qarşı mübarizə sahəsində innovativ tədqiqat layihələrinin dəstəklənməsi.",
    category: "Elm",
    deadline: "2026-05-01",
    amount: "75,000 - 150,000 AZN",
    accentColor: "bg-emerald-500",
    accentColorLight: "bg-emerald-500/20 text-emerald-100",
    image: "/hero-energy.jpg",
  },
  {
    id: 3,
    title: "Tibbi Biotexnologiya və Genomika",
    description:
      "Gen terapiyası, personalizə edilmiş tibb və bioinformatika sahəsində yeni metodların işlənib hazırlanması və tətbiqi üzrə tədqiqatların maliyyələşdirilməsi.",
    category: "İnnovasiya",
    deadline: "2026-05-20",
    amount: "100,000 - 200,000 AZN",
    accentColor: "bg-rose-500",
    accentColorLight: "bg-rose-500/20 text-rose-100",
    image: "/hero-biotech.jpg",
  },
  {
    id: 4,
    title: "Rəqəmsal Humanitar Elmlər",
    description:
      "Azərbaycan tarixinin, mədəniyyətinin və dilinin rəqəmsal texnologiyalar vasitəsilə tədqiqi, qorunması və təbliği üzrə layihələrin dəstəklənməsi.",
    category: "Elm",
    deadline: "2026-06-10",
    amount: "30,000 - 80,000 AZN",
    accentColor: "bg-amber-500",
    accentColorLight: "bg-amber-500/20 text-amber-100",
    image: "/hero-humanities.jpg",
  },
]

function getCountdown(deadline: string) {
  const now = new Date()
  const target = new Date(deadline)
  const diff = target.getTime() - now.getTime()
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0 }
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  return { days, hours, minutes }
}

const SLIDE_INTERVAL = 5000

export function HeroCarousel() {
  const [current, setCurrent] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [countdowns, setCountdowns] = useState(grants.map((g) => getCountdown(g.deadline)))

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning) return
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrent(index)
        setProgress(0)
        setTimeout(() => setIsTransitioning(false), 50)
      }, 300)
    },
    [isTransitioning]
  )

  const next = useCallback(() => {
    goTo((current + 1) % grants.length)
  }, [current, goTo])

  const prev = useCallback(() => {
    goTo((current - 1 + grants.length) % grants.length)
  }, [current, goTo])

  // Auto-play
  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          next()
          return 0
        }
        return prev + 100 / (SLIDE_INTERVAL / 50)
      })
    }, 50)
    return () => clearInterval(interval)
  }, [isPaused, next])

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdowns(grants.map((g) => getCountdown(g.deadline)))
    }, 60000)
    setCountdowns(grants.map((g) => getCountdown(g.deadline)))
    return () => clearInterval(timer)
  }, [])

  const grant = grants[current]
  const countdown = countdowns[current]

  return (
    <section
      className="relative w-full min-h-[600px] md:min-h-[700px] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background images - all preloaded, opacity toggled */}
      {grants.map((g, i) => (
        <div
          key={g.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={g.image}
            alt={g.title}
            fill
            className="object-cover"
            priority={i === 0}
          />
        </div>
      ))}

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-950/70 to-blue-950/40 z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-t from-blue-950/60 via-transparent to-blue-950/30 z-[1]" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 flex items-center min-h-[600px] md:min-h-[700px]">
        <div className="w-full max-w-3xl py-16 md:py-20">
          {/* Slide indicator label */}
          <div className="flex items-center gap-3 mb-6">
            <div className={`h-1 w-10 rounded-full ${grant.accentColor} transition-colors duration-500`} />
            <span className="text-sm font-medium text-blue-200 tracking-wide uppercase">
              Aktiv Qrant Müsabiqəsi {current + 1}/{grants.length}
            </span>
          </div>

          {/* Animated content */}
          <div
            className={`transition-all duration-500 ease-out ${
              isTransitioning
                ? "opacity-0 translate-y-4"
                : "opacity-100 translate-y-0"
            }`}
          >
            {/* Category badge */}
            <Badge
              className={`mb-5 px-3 py-1 text-sm font-medium border-0 ${grant.accentColorLight}`}
            >
              {grant.category}
            </Badge>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5 text-balance">
              {grant.title}
            </h1>

            {/* Description */}
            <p className="text-base md:text-lg text-blue-100/80 leading-relaxed mb-8 max-w-2xl">
              {grant.description}
            </p>

            {/* Meta info row */}
            <div className="flex flex-wrap items-center gap-4 md:gap-6 mb-8">
              {/* Funding */}
              

              {/* Countdown */}
              
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-white text-blue-900 hover:bg-blue-50 rounded-full px-8 py-4 text-base font-bold shadow-lg transition-transform hover:scale-105"
                asChild
              >
                <Link href="/grants">Müraciət Et</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 rounded-full px-8 py-4 text-base font-bold bg-transparent"
                asChild
              >
                <Link href="/grants">Ətraflı Məlumat</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar: dots + arrows + progress */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between pb-5">
            {/* Dot indicators */}
            <div className="flex items-center gap-2">
              {grants.map((g, i) => (
                <button
                  key={g.id}
                  onClick={() => goTo(i)}
                  className={`transition-all duration-300 rounded-full ${
                    i === current
                      ? `w-8 h-2 ${grant.accentColor}`
                      : "w-2 h-2 bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            {/* Arrow navigation - side by side, bottom right */}
            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                className="w-10 h-10 md:w-11 md:h-11 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-all duration-200 hover:border-white/40"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 md:w-11 md:h-11 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-all duration-200 hover:border-white/40"
                aria-label="Next slide"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="h-1 w-full bg-white/10">
          <div
            className={`h-full transition-all ease-linear ${grant.accentColor}`}
            style={{
              width: `${progress}%`,
              transitionDuration: "50ms",
            }}
          />
        </div>
      </div>
    </section>
  )
}
