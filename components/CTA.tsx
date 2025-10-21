'use client'

import { ArrowRight, MessageCircle } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="cta-gradient rounded-3xl p-12 text-center relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-8 left-8 w-16 h-16 bg-white rounded-full" />
            <div className="absolute top-16 right-12 w-12 h-12 bg-white rounded-full" />
            <div className="absolute bottom-12 left-16 w-20 h-20 bg-white rounded-full" />
            <div className="absolute bottom-8 right-8 w-14 h-14 bg-white rounded-full" />
          </div>

          <div className="relative z-10">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-8">
              <MessageCircle className="w-8 h-8 text-gray-800" />
            </div>

            {/* Content */}
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready to start messaging?
            </h2>
            
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Join Ryzz today and start getting anonymous messages from your friends and family.
            </p>

            {/* CTA Button */}
            <button className="inline-flex items-center gap-3 bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105">
              Let's Go!
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}