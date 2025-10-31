'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function LoadingSpinner() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-mcube-purple/95 to-mcube-dark/95 backdrop-blur-sm">
      <div className="relative flex flex-col items-center">
        {/* Spinning rings around logo */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        >
          <div className="w-32 h-32 border-4 border-mcube-lime/30 border-t-mcube-lime rounded-full"></div>
        </motion.div>
        
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ rotate: -360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        >
          <div className="w-40 h-40 border-2 border-mcube-lime/20 border-t-mcube-lime/50 rounded-full"></div>
        </motion.div>
        
        {/* Logo */}
        <motion.div
          className="relative z-10"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ 
            scale: [0.8, 1, 0.8],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Image
            src="/logo.png"
            alt="M'Cube"
            width={80}
            height={80}
            className="object-contain"
            priority
          />
        </motion.div>
        
        {/* Loading text */}
        <motion.p
          className="mt-20 text-white text-lg font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ 
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          Loading...
        </motion.p>
      </div>
    </div>
  )
}
