'use client'

import { ArrowRight, Download } from 'lucide-react'
import SocialIcons from './SocialIcons'
import FloatingElements from './FloatingElements'

export default function Hero() {
  return (
    <section className="relative min-h-screen hero-gradient overflow-hidden">
      {/* Scrolling Text Background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <div className="whitespace-nowrap text-6xl md:text-8xl font-bold text-white scrolling-text">
          Share your thoughts anonymously Share your thoughts anonymously Share your thoughts anonymously
        </div>
      </div>

      {/* Floating Elements */}
      <FloatingElements />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold italic mb-6">
                Ryzz
              </h1>
              <p className="text-xl md:text-2xl leading-relaxed mb-8">
                Create an account and start getting anonymous & secret messages from your friends! 😊😊😊
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white px-6 py-3 rounded-full font-medium transition-all">
                <Download className="w-5 h-5" />
                Install
              </button>
              
              <button className="flex items-center justify-center gap-2 bg-accent-yellow hover:bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105">
                Start Now
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right Content - Character & Stats */}
          <div className="relative flex items-center justify-center">
            {/* Main Character */}
            <div className="relative z-10">
              <img 
                src="/images/character.png" 
                alt="Ryzz Character" 
                className="w-80 h-80 md:w-96 md:h-96 object-contain"
              />
            </div>

            {/* Stats */}
            <div className="absolute top-8 right-8 text-white text-right">
              <div className="mb-4">
                <div className="text-3xl md:text-4xl font-bold">100+</div>
                <div className="text-sm opacity-80">Users</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold">2300+</div>
                <div className="text-sm opacity-80">Messages</div>
              </div>
            </div>

            {/* Social Icons */}
            <SocialIcons />

            {/* Decorative Stars */}
            <div className="absolute top-12 left-12 text-accent-yellow text-4xl animate-pulse">✨</div>
            <div className="absolute bottom-20 right-20 text-accent-yellow text-6xl animate-pulse">✨</div>
          </div>
        </div>
      </div>
    </section>
  )
}