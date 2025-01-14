'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Heart, Gift, Music, Moon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import MoonPhase from './components/moon-phase'
import MusicPlayer from './components/music-player'
import GiftVoucher from './components/gift-voucher'

export default function Page() {
  const [activeSection, setActiveSection] = useState('message')
  const [isPlaying, setIsPlaying] = useState(false)

  const sections = {
    message: {
      component: (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 animate-pulse">
            Happy Birthday! 🎉
          </h1>
          
          {/* Image added in the first section */}
          <div className="relative w-64 h-64 md:w-96 md:h-96 mx-auto rounded-full overflow-hidden mb-8">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-14%20162320-Y5mX4pTpHnYf9vELIdPNGgpomGYWUb.png" 
              alt="Birthday Image"
              fill
              className="object-cover"
            />
          </div>

          <p className="text-xl md:text-2xl text-white leading-relaxed max-w-2xl mx-auto px-4">
            Dear Vridhiii, 
            On this special day, I want to celebrate the amazing person you are.
            Your friendship means the world to me, and I'm so grateful to have you in my life.
            May this year bring you all the joy, success, and happiness you deserve!
            ab jada nhi bolunga
            With love, Avinash
            (koi photo thi nhi to insta se hi utha li😅 )
          </p>
        </motion.div>
      )
    },
    moon: {
      component: <MoonPhase />
    },
    music: {
      component: <MusicPlayer isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
    },
    gift: {
      component: <GiftVoucher />
    }
  }

  return (
    <main className="min-h-screen py-8 px-4">
      <nav className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-lg rounded-full p-2 z-50">
        <div className="flex space-x-4">
          <Button
            variant={activeSection === 'message' ? 'default' : 'ghost'}
            size="icon"
            onClick={() => setActiveSection('message')}
          >
            <Heart className="w-6 h-6" />
          </Button>
          <Button
            variant={activeSection === 'moon' ? 'default' : 'ghost'}
            size="icon"
            onClick={() => setActiveSection('moon')}
          >
            <Moon className="w-6 h-6" />
          </Button>
          <Button
            variant={activeSection === 'music' ? 'default' : 'ghost'}
            size="icon"
            onClick={() => setActiveSection('music')}
          >
            <Music className="w-6 h-6" />
          </Button>
          <Button
            variant={activeSection === 'gift' ? 'default' : 'ghost'}
            size="icon"
            onClick={() => setActiveSection('gift')}
          >
            <Gift className="w-6 h-6" />
          </Button>
        </div>
      </nav>
      <div className="container mx-auto flex items-center justify-center min-h-screen">
        {sections[activeSection].component}
      </div>
    </main>
  )
}

