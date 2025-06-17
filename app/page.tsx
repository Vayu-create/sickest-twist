"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play, Upload, Users, Trophy } from "lucide-react"

export default function LandingPage() {
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    setIsVisible(true)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const foodCombos = [
    {
      title: "Dosa + Avacado Butter",
      description: "India meets Mexico?",
      image: "/placeholder.svg?height=300&width=400",
      votes: "2.3K",
    },
    {
      title: "Maggi + Black Olives",
      description: "We won't judge, but it's a bit weird",
      image: "/placeholder.svg?height=300&width=400",
      votes: "1.8K",
    },
    {
      title: "Gajar Ka Halwa + Brie Cheese",
      description: "I hate the idea, but my tastebuds are intrigued",
      image: "/placeholder.svg?height=300&width=400",
      votes: "3.1K",
    },
    {
      title: "Pizza + Pickle Juice",
      description: "Italians hate you for this",
      image: "/placeholder.svg?height=300&width=400",
      votes: "892",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-black to-green-900/40"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90" />

        <div
          className={`relative z-10 text-center max-w-4xl transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-green-400 via-pink-500 to-purple-600 bg-clip-text text-transparent leading-tight">
            THE SICKEST
            <br />
            TWIST
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Turn ordinary dishes into <span className="text-green-400 font-bold">extraordinary chaos</span>. Upload your
            most deliciously unhinged food twists and WIN BIG
          </p>

          <Button
            size="lg"
            className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold px-8 py-4 text-lg rounded-full transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-pink-500/25"
          >
            <Upload className="mr-2 h-5 w-5" />
            Submit Your Sick Twist Now
          </Button>
        </div>

        {/* Section Divider */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <div className="h-24 bg-gradient-to-b from-black to-purple-950/20" />
        </div>
      </section>

      {/* Hero Food Gallery Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-purple-950/20 via-black to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(0,0,0,0)_0%,rgba(0,0,0,0.8)_100%)]" />
        
        <div className="relative z-10 max-w-7xl mx-auto pt-12">
          <div className="relative z-10 mb-16 max-w-3xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-black text-center mb-6 bg-gradient-to-r from-green-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              SICKEST COMBOS
            </h2>
            <p className="text-center text-gray-100 text-xl leading-relaxed">
              These twisted creations broke the internet, offended traditions, but somehow...{" "}
              <span className="text-pink-400 font-bold">actually worked</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {foodCombos.slice(0, 2).map((combo, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-gray-900/80 to-black/80 border-0 overflow-hidden group cursor-pointer relative"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={combo.image || "/placeholder.svg"}
                    alt={combo.title}
                    className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

                  {/* Floating Vote Badge */}
                  <div className="absolute top-4 right-4 transform group-hover:scale-110 transition-transform duration-300">
                    <Badge className="bg-gradient-to-r from-green-400 to-green-600 text-black font-black px-3 py-1 text-sm">
                      <Users className="h-3 w-3 mr-1" />
                      {combo.votes} votes
                    </Badge>
                  </div>

                  {/* Play Button with Glow Effect */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button
                      size="lg"
                      className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border-2 border-white/30 hover:border-white/60 rounded-full w-20 h-20 group-hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-pink-500/30"
                    >
                      <Play className="h-8 w-8 ml-1" fill="currentColor" />
                    </Button>
                  </div>

                  {/* Trending Indicator */}
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold px-2 py-1 text-xs animate-pulse">
                      🔥 TRENDING
                    </Badge>
                  </div>
                </div>

                <div className="p-6 relative">
                  <h3 className="font-black text-2xl mb-3 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:to-purple-500 group-hover:bg-clip-text transition-all duration-300">
                    {combo.title}
                  </h3>
                  <p className="text-gray-400 text-lg leading-relaxed">{combo.description}</p>

                  {/* Interactive Bottom Bar */}
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-700/50">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-green-400 text-sm font-semibold">LIVE REACTIONS</span>
                    </div>
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-pink-500/20 to-purple-600/20 hover:from-pink-500/40 hover:to-purple-600/40 text-pink-400 border border-pink-500/30 hover:border-pink-400 transition-all duration-300"
                    >
                      Try This →
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {foodCombos.slice(2).map((combo, index) => (
              <Card
                key={index + 2}
                className="bg-gradient-to-br from-gray-900/60 to-black/60 border border-gray-800/50 overflow-hidden group cursor-pointer hover:border-pink-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={combo.image || "/placeholder.svg"}
                    alt={combo.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                  <div className="absolute top-3 right-3">
                    <Badge className="bg-green-500/90 text-black font-bold text-xs">
                      <Users className="h-3 w-3 mr-1" />
                      {combo.votes}
                    </Badge>
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                      size="sm"
                      className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-0 rounded-full w-12 h-12"
                    >
                      <Play className="h-4 w-4 ml-0.5" fill="currentColor" />
                    </Button>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2 text-white group-hover:text-pink-400 transition-colors duration-300">
                    {combo.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{combo.description}</p>
                </div>
              </Card>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 hover:from-purple-600/40 hover:to-pink-600/40 text-white border border-purple-500/50 hover:border-pink-400 font-bold px-8 py-3 rounded-full transition-all duration-300"
            >
              View All Sick Combos →
            </Button>
          </div>
        </div>
      </section>

      {/* Concept Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-8 text-white">
            FOOD IS <span className="text-green-400">PERSONAL</span>
          </h2>

          <div className="text-lg md:text-xl text-gray-300 space-y-6 leading-relaxed">
            <p>
              We all have those quirky preferences that turn an ordinary dish into <em>our dish</em>. Maybe it's
              overloading your dosa with gunpowder podi. Maybe it's tossing black olives into your Maggi.
            </p>

            <p>
            Sometimes genius. Sometimes unhinged. These twists are what make food culture
              <span className="text-pink-400 font-bold"> rich, chaotic, and ridiculously fun </span>.
            </p>

            <p className="text-2xl font-bold text-green-400">
              You don't get to truly great ideas without crossing a few lines first.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            HOW IT WORKS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-pink-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Upload className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Upload Your Twist</h3>
              <p className="text-gray-400">
                Take a classic dish and do something insane to it. Upload your recipe video.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-green-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Community Votes</h3>
              <p className="text-gray-400">POSHA users taste, vote, argue, and celebrate your creation.</p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-yellow-500 to-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Trophy className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Win Big</h3>
              <p className="text-gray-400">The sickest twist WINS.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-900/30 via-pink-900/30 to-green-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-black mb-6 text-white">
            READY TO BREAK THE
            <br />
            <span className="bg-gradient-to-r from-green-400 to-pink-500 bg-clip-text text-transparent">
              CULINARY RULES?
            </span>
          </h2>

          <p className="text-xl text-gray-300 mb-10">Your twisted recipe could be the next global sensation</p>

          <Button
            size="lg"
            className="bg-gradient-to-r from-green-500 to-pink-600 hover:from-green-600 hover:to-pink-700 text-white font-black px-12 py-6 text-xl rounded-full transform hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-green-500/25"
          >
            <Upload className="mr-3 h-6 w-6" />
            Submit Your Sick Twist Now
          </Button>

          <p className="text-sm text-gray-500 mt-6">Join thousands of food rebels breaking culinary rules worldwide</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-500">© 2024 POSHA. Powered by chaos, community, and creativity.</p>
        </div>
      </footer>
    </div>
  )
}
