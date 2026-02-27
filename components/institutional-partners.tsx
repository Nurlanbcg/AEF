"use client"

import { useRef, useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight, Landmark, BookOpen, GraduationCap, Dumbbell, Monitor, Globe2, ShieldCheck, Newspaper, User, Building2, Heart, University, MapPin, Crown, BriefcaseBusiness } from "lucide-react"

const institutions = [
  { name: "Nazirlər Kabineti", icon: Landmark },
  { name: "Milli Məclisin Elm və Təhsil Komitəsi", icon: BookOpen },
  { name: "Azərbaycan Milli Elmlər Akademiyası", icon: University },
  { name: "Elm və Təhsil Nazirliyi", icon: GraduationCap },
  { name: "Gənclər və İdman Nazirliyi", icon: Dumbbell },
  { name: "Rəqəmsal İnkişaf və Nəqliyyat Nazirliyi", icon: Monitor },
  { name: "UNESCO üzrə Azərbaycan Respublikasının Milli Komissiyası", icon: Globe2 },
  { name: "Əqli Mülkiyyət Agentliyi", icon: ShieldCheck },
  { name: "Azərbaycan Dövlət İnformasiya Agentliyi - AzərTAc", icon: Newspaper },
  { name: "Azərbaycanın Ümummilli Lideri Heydər Əliyev", icon: Crown },
  { name: "Azərbaycan Respublikasının Prezidenti İlham Əliyev", icon: User },
  { name: "Heydər Əliyev Fondu", icon: Heart },
  { name: "Azərbaycan Portalı", icon: MapPin },
  { name: "Mehriban Əliyeva - Azərbaycanın Birinci Xanımı", icon: Heart },
  { name: "Prezident Administrasiyası", icon: Building2 },
]

export function InstitutionalPartners() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeftStart, setScrollLeftStart] = useState(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const isPausedRef = useRef(false)

  const checkScroll = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 2)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 2)
  }, [])

  // Calculate the width of one card to slide by exactly one card
  const getCardWidth = useCallback(() => {
    const el = scrollRef.current
    if (!el) return 280
    const firstCard = el.querySelector("[data-card]") as HTMLElement
    if (!firstCard) return 280
    return firstCard.offsetWidth + 16 // card width + gap
  }, [])

  const scrollByOne = useCallback((direction: "left" | "right") => {
    const el = scrollRef.current
    if (!el) return
    const cardW = getCardWidth()
    el.scrollBy({ left: direction === "left" ? -cardW : cardW, behavior: "smooth" })
  }, [getCardWidth])

  // Auto-slide every 5 seconds
  useEffect(() => {
    const startAutoSlide = () => {
      intervalRef.current = setInterval(() => {
        if (isPausedRef.current) return
        const el = scrollRef.current
        if (!el) return
        // If reached end, scroll back to start
        if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 2) {
          el.scrollTo({ left: 0, behavior: "smooth" })
        } else {
          scrollByOne("right")
        }
      }, 5000)
    }
    startAutoSlide()
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [scrollByOne])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    checkScroll()
    el.addEventListener("scroll", checkScroll, { passive: true })
    window.addEventListener("resize", checkScroll)
    return () => {
      el.removeEventListener("scroll", checkScroll)
      window.removeEventListener("resize", checkScroll)
    }
  }, [checkScroll])

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setStartX(e.pageX)
    setScrollLeftStart(scrollRef.current?.scrollLeft || 0)
    isPausedRef.current = true
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return
    e.preventDefault()
    const dx = e.pageX - startX
    scrollRef.current.scrollLeft = scrollLeftStart - dx
  }

  const handleMouseUp = () => {
    setIsDragging(false)
    // Resume auto-slide after 3 seconds of inactivity
    setTimeout(() => { isPausedRef.current = false }, 3000)
  }

  // Touch drag handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].pageX)
    setScrollLeftStart(scrollRef.current?.scrollLeft || 0)
    isPausedRef.current = true
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!scrollRef.current) return
    const dx = e.touches[0].pageX - startX
    scrollRef.current.scrollLeft = scrollLeftStart - dx
  }

  const handleTouchEnd = () => {
    setTimeout(() => { isPausedRef.current = false }, 3000)
  }

  const handleArrowClick = (direction: "left" | "right") => {
    isPausedRef.current = true
    scrollByOne(direction)
    setTimeout(() => { isPausedRef.current = false }, 5000)
  }

  return (
    <section
      className="relative py-5 overflow-hidden bg-blue-950"
      onMouseEnter={() => { isPausedRef.current = true }}
      onMouseLeave={() => {
        if (!isDragging) isPausedRef.current = false
      }}
    >
      {/* Left fade */}
      {canScrollLeft && (
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-gray-900 to-transparent" />
      )}
      {/* Right fade */}
      {canScrollRight && (
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-gray-900 to-transparent" />
      )}

      {/* Left arrow */}
      {canScrollLeft && (
        <button
          onClick={() => handleArrowClick("left")}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/70 backdrop-blur-sm hover:bg-white/20 hover:text-white transition-all border border-white/10"
          aria-label="Sola sürüşdür"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
      )}

      {/* Right arrow */}
      {canScrollRight && (
        <button
          onClick={() => handleArrowClick("right")}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/70 backdrop-blur-sm hover:bg-white/20 hover:text-white transition-all border border-white/10"
          aria-label="Sağa sürüşdür"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      )}

      {/* Scrollable row */}
      <div
        ref={scrollRef}
        className="flex items-stretch gap-4 overflow-x-auto px-14 select-none"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          cursor: isDragging ? "grabbing" : "grab",
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {institutions.map((inst) => {
          const Icon = inst.icon
          return (
            <div
              key={inst.name}
              data-card
              className="group flex-shrink-0 flex items-center gap-3 rounded-lg bg-white/[0.07] border border-white/10 px-6 py-3.5 hover:bg-white/[0.12] hover:border-white/20 transition-all cursor-pointer"
              style={{ minWidth: "260px" }}
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-white/10 group-hover:bg-white/15 transition-colors">
                <Icon className="h-4.5 w-4.5 text-blue-300 group-hover:text-blue-200 transition-colors" />
              </div>
              <span className="text-sm font-medium text-white/80 group-hover:text-white leading-snug transition-colors">
                {inst.name}
              </span>
            </div>
          )
        })}
      </div>
    </section>
  )
}
