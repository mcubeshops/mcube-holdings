'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { X, ArrowRight, Sparkles } from 'lucide-react'

export default function WelcomeModal() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Check if user has visited before
    const hasVisited = localStorage.getItem('mcube_visited')
    
    if (!hasVisited) {
      // Show modal after a short delay
      const timer = setTimeout(() => {
        setIsOpen(true)
        localStorage.setItem('mcube_visited', 'true')
      }, 1000)
      
      return () => clearTimeout(timer)
    }
  }, [])

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={handleClose}
          />
          
          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white text-gray-600 hover:text-gray-900 transition-all"
              >
                <X className="h-5 w-5" />
              </button>
              
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-mcube-purple/10 via-white to-mcube-lime/10"></div>
              
              <div className="relative p-8 md:p-12">
                {/* Header with logo and animation */}
                <div className="flex flex-col items-center text-center mb-6">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className="relative mb-6"
                  >
                    <div className="absolute inset-0 bg-mcube-lime/20 rounded-full blur-2xl"></div>
                    <Image
                      src="/logo.png"
                      alt="M'Cube"
                      width={100}
                      height={100}
                      className="relative object-contain"
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex items-center gap-2 mb-3"
                  >
                    <Sparkles className="h-5 w-5 text-mcube-lime" />
                    <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-mcube-purple to-mcube-purple bg-clip-text text-transparent">
                      Welcome to M'Cube
                    </h2>
                    <Sparkles className="h-5 w-5 text-mcube-lime" />
                  </motion.div>
                  
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-gray-600 text-lg max-w-lg"
                  >
                    Building Tomorrow's Leading Businesses Through Innovation and Excellence
                  </motion.p>
                </div>
                
                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="space-y-4 mb-8"
                >
                  <p className="text-gray-700 text-center">
                    We're a diversified holding company investing in and operating innovative businesses across multiple industries. 
                    Explore our portfolio, discover career opportunities, and join us in shaping the future.
                  </p>
                  
                  {/* Quick stats */}
                  <div className="grid grid-cols-3 gap-4 py-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-mcube-purple">17+</div>
                      <div className="text-sm text-gray-600">Years</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-mcube-purple">5</div>
                      <div className="text-sm text-gray-600">Companies</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-mcube-purple">15+</div>
                      <div className="text-sm text-gray-600">Team Members</div>
                    </div>
                  </div>
                </motion.div>
                
                {/* Action buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <Button
                    asChild
                    className="flex-1 bg-mcube-lime hover:bg-mcube-lime/90 text-mcube-dark font-semibold py-6"
                    onClick={handleClose}
                  >
                    <Link href="/companies" className="flex items-center justify-center gap-2">
                      Explore Our Companies
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </Button>
                  
                  <Button
                    asChild
                    variant="outline"
                    className="flex-1 border-2 border-mcube-purple text-mcube-purple hover:bg-mcube-purple hover:text-white font-semibold py-6"
                    onClick={handleClose}
                  >
                    <Link href="/careers" className="flex items-center justify-center gap-2">
                      View Careers
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </Button>
                </motion.div>
                
                {/* Footer */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="text-center text-sm text-gray-500 mt-6"
                >
                  You can access this information anytime from our navigation menu
                </motion.p>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
