'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Play, Pause } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function MusicPlayer({ isPlaying, setIsPlaying }) {
  const audioRef = useRef(null)

  useEffect(() => {
    if (isPlaying) {
      audioRef.current?.play()
    } else {
      audioRef.current?.pause()
    }
  }, [isPlaying])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center space-y-6"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
        tumhara favorite song to mughe pta nhi, to ye hi shi
      </h2>
      <div className="relative w-64 h-64 mx-auto rounded-lg overflow-hidden bg-white/10 backdrop-blur-lg p-6 flex flex-col items-center justify-center">
        <div className="w-32 h-32 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 animate-spin-slow"></div>
        <audio
          ref={audioRef}
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a-birthday-to-remember-201324-24qcHw1sG2bB56erwlWPT202voOXWQ.mp3"
          onEnded={() => setIsPlaying(false)}
        />
        <Button
          variant="outline"
          size="icon"
          className="mt-4"
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
        </Button>
      </div>
      <p className="text-xl text-white mt-4">
        A Birthday to Remember
      </p>
    </motion.div>
  )
}

