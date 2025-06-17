"use client"

import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play, Upload, Users, Trophy, ChevronLeft, ChevronRight } from "lucide-react"
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

export default function LandingPage() {
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: "start",
    skipSnaps: false,
    dragFree: false
  }, [Autoplay()])

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollY(Math.max(0, window.scrollY * 0.5))
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    setIsVisible(true)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Add scroll functions
  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev()
    }
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext()
    }
  }, [emblaApi])

  const foodCombos = [
    {
      title: "Dosa + Avacado Butter",
      description: "India meets Mexico?",
      video: "/placeholder.svg?height=640&width=360",
      votes: "2.3K",
    },
    {
      title: "Maggi + Black Olives",
      description: "We won't judge, but it's a bit weird",
      video: "/placeholder.svg?height=640&width=360",
      votes: "1.8K",
    },
    {
      title: "Gajar Ka Halwa + Brie Cheese",
      description: "I hate the idea, but my tastebuds are intrigued",
      video: "/placeholder.svg?height=640&width=360",
      votes: "3.1K",
    },
    {
      title: "Pizza + Pickle Juice",
      description: "Italians hate you for this",
      video: "/placeholder.svg?height=640&width=360",
      votes: "892",
    },
    {
      title: "Gulab Jamun Cheesecake",
      description: "Can't go wrong with this",
      video: "/placeholder.svg?height=640&width=360",
      votes: "4.2K",
    },
    {
      title: "Masala Chai Boba",
      description: "I will try anything once",
      video: "/placeholder.svg?height=640&width=360",
      votes: "1.5K",
    },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden" style={{ backgroundColor: 'rgba(35,35,35,255)' }}>
        <div
          className="absolute inset-0 will-change-transform"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)`,
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-7xl md:text-9xl font-display font-black mb-8 text-white leading-[1.1] tracking-tight">
            THE SICKEST
            <br />
            TWIST
          </h1>

          <p className="text-xl md:text-2xl text-white mb-12 max-w-2xl mx-auto leading-relaxed">
            Turn ordinary dishes into extraordinary chaos. Upload your
            most deliciously unhinged food twists and <span className="text-yellow-400 font-semibold">WIN BIG</span>
          </p>

          <Button
            size="lg"
            id="cta-submit"
            className="text-lg px-10 py-6 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            onClick={() => {
              const ctaElement = document.getElementById("cta-submit");
              if (ctaElement) {
                ctaElement.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Submit Your Twist
          </Button>
        </div>
      </section>

      {/* Hero Food Gallery Section */}
      <section className="relative py-32 px-4 bg-white">
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="relative z-10 mb-20 max-w-3xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-display font-black text-center mb-8 text-gray-900">
              SICKEST COMBOS
            </h2>
            <p className="text-center text-gray-600 text-xl leading-relaxed">
              These twisted creations broke the internet, offended traditions, inspired hate threads,{" "}
              <span className="text-yellow-500 font-semibold">but some of them changed food forever!</span>
            </p>
          </div>

          {/* Reels Carousel */}
          <div className="relative max-w-[95%] mx-auto">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex gap-6 pl-4">
                {foodCombos.map((combo, index) => (
                  <div key={index} className="flex-[0_0_320px] min-w-0">
                    <Card className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 overflow-hidden group cursor-pointer relative h-[533px] card-hover">
                      <div className="relative h-full overflow-hidden">
                  <img
                          src={combo.video}
                    alt={combo.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/30 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-500" />

                  {/* Floating Vote Badge */}
                  <div className="absolute top-4 right-4 transform group-hover:scale-110 transition-transform duration-300">
                          <Badge className="bg-black dark:bg-white text-white dark:text-black font-semibold px-4 py-1.5 text-sm shadow-lg">
                            <Users className="h-3.5 w-3.5 mr-1.5" />
                      {combo.votes} votes
                    </Badge>
                  </div>

                        {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button
                      size="lg"
                            className="bg-black hover:bg-gray-900 dark:bg-white dark:hover:bg-gray-100 text-white dark:text-black border-2 border-white/20 hover:border-white/30 rounded-full w-20 h-20 group-hover:scale-110 transition-all duration-300 shadow-lg"
                    >
                            <Play className="h-7 w-7 ml-1" fill="currentColor" />
                    </Button>
                  </div>

                        {/* Title and Description Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent">
                          <h3 className="font-display font-bold text-2xl mb-3 text-white group-hover:text-amber-400 transition-all duration-300">
                    {combo.title}
                  </h3>
                          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">{combo.description}</p>
                  </div>
                </div>
              </Card>
                  </div>
                ))}
                  </div>
                </div>

            {/* Navigation Arrows */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-black hover:bg-gray-900 dark:bg-white dark:hover:bg-gray-100 text-white dark:text-black rounded-full w-12 h-12 z-10 shadow-lg hover-lift"
              onClick={scrollPrev}
            >
              <ChevronLeft className="h-6 w-6" />
              <span className="sr-only">Previous slide</span>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-black hover:bg-gray-900 dark:bg-white dark:hover:bg-gray-100 text-white dark:text-black rounded-full w-12 h-12 z-10 shadow-lg hover-lift"
              onClick={scrollNext}
            >
              <ChevronRight className="h-6 w-6" />
              <span className="sr-only">Next slide</span>
            </Button>
          </div>

          {/* View More Button */}
          <div className="text-center mt-16">
            <Button
              size="lg"
              className="bg-black hover:bg-gray-900 dark:bg-white dark:hover:bg-gray-100 text-white dark:text-black font-semibold px-10 py-4 text-lg rounded-full transition-all duration-300 hover-lift"
            >
              View All Sick Combos →
            </Button>
          </div>
        </div>
      </section>

      {/* Concept Section */}
      <section className="py-20 px-4" style={{ backgroundColor: 'rgba(35,35,35,255)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-display font-black mb-8 text-white">
            FOOD IS <span className="text-white">PERSONAL</span>
          </h2>

          <div className="text-lg md:text-xl text-white space-y-6 leading-relaxed">
            <p>
              We all have those quirky preferences that turn an ordinary dish into <em>our dish</em>.
              Sometimes genius. Sometimes unhinged. These twists are what make food culture{" "}
              <span className="text-yellow-400 font-semibold">rich, chaotic, and ridiculously fun.</span>
            </p>

            <p className="text-2xl font-bold text-yellow-400">
              You don't get to truly great ideas without crossing a few bad ones
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-black text-center mb-16 text-gray-900">
            HOW IT WORKS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100 dark:from-purple-900/20 dark:via-pink-900/20 dark:to-orange-900/20 p-8 rounded-2xl mb-6 transform transition-all duration-300 group-hover:scale-105">
                <Upload className="h-12 w-12 mx-auto mb-4 text-purple-600 dark:text-purple-400" />
                <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-400">Upload Your Twist</h3>
                <p className="text-gray-600 dark:text-gray-300">Share your most creative (or controversial) food combinations with the world</p>
              </div>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100 dark:from-purple-900/20 dark:via-pink-900/20 dark:to-orange-900/20 p-8 rounded-2xl mb-6 transform transition-all duration-300 group-hover:scale-105">
                <Users className="h-12 w-12 mx-auto mb-4 text-pink-600 dark:text-pink-400" />
                <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-400">Community Votes</h3>
                <p className="text-gray-600 dark:text-gray-300">Let the community decide which twists are truly revolutionary</p>
              </div>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100 dark:from-purple-900/20 dark:via-pink-900/20 dark:to-orange-900/20 p-8 rounded-2xl mb-6 transform transition-all duration-300 group-hover:scale-105">
                <Trophy className="h-12 w-12 mx-auto mb-4 text-orange-600 dark:text-orange-400" />
                <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-400">Win Big</h3>
                <p className="text-gray-600 dark:text-gray-300">Top creators get featured, win prizes, and become food trendsetters</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-4" style={{ backgroundColor: 'rgba(35,35,35,255)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-display font-black mb-8 text-white">
            READY TO BREAK THE
            <br />
            CULINARY RULES?
          </h2>

          <p className="text-2xl md:text-3xl text-white mb-12 max-w-2xl mx-auto leading-relaxed">
            Your twisted recipe could be the next{" "}
            <span className="text-yellow-400 font-semibold">global sensation</span>
          </p>

          <div className="space-y-8">
          <Button
            size="lg"
              id="cta-submit"
              className="text-lg px-10 py-6 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
              <Upload className="mr-2 h-5 w-5" />
              Submit Your Twist
          </Button>

            <p className="text-lg text-gray-500 dark:text-gray-400">
              Join thousands of food rebels breaking culinary rules worldwide
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 text-center text-gray-500 dark:text-gray-400">
        <p>© 2025 Sickest Twist. All rights reserved.</p>
      </footer>
    </div>
  )
}
