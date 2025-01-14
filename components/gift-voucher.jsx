'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import confetti from 'canvas-confetti'
import { Button } from '@/components/ui/button'

export default function GiftVoucher() {
  const [isRevealed, setIsRevealed] = useState(false)

  const handleReveal = () => {
    setIsRevealed(true)
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center space-y-6"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
        Your Special Gift
      </h2>
      <div className="relative w-full max-w-md mx-auto">
        {!isRevealed ? (
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-r from-purple-500 to-pink-500 p-8 rounded-lg cursor-pointer"
            onClick={handleReveal}
          >
            <h3 className="text-2xl font-bold text-white mb-4">Click to Reveal Your Gift!</h3>
            <div className="text-6xl">🎁</div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white p-8 rounded-lg"
          >
            <div className="border-4 border-purple-500 border-dashed p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-purple-800 mb-4">Special Wish Voucher</h3>
              <p className="text-gray-700 mb-4">
                This voucher entitles you to one special wish! Whatever you want, consider it done! 
                Valid forever because you're special! ❤️
                  ( bs thoda dekh lena meri taraf😁)
              </p>
              <div className="text-sm text-gray-500 mt-4">
                With love, Avinash
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}

