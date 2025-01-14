'use client'

import { motion } from 'framer-motion'

export default function MoonPhase() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center space-y-6"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
        The Moon When You Were Born
      </h2>
      <div className="relative w-64 h-64 md:w-96 md:h-96 mx-auto">
        <div className="absolute inset-0 rounded-full bg-gray-800">
          {/* Add the image here */}
          <img
            src="https://themoonjoy.com/wp-content/themes/flatsome-child/assets/img/moon-phases/moon7of16_87.5.png" // Replace with your actual image path
            alt="Moon phase on 15 Jan 2003"
            className="absolute inset-0 w-full h-full object-cover rounded-full"
          />
        </div>
      </div>
      <p className="text-xl text-white mt-8">
        This was how the moon looked on 15 Jan 2003
      </p>
    </motion.div>
  )
}

