'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight, Play, TrendingUp, Users, Globe } from 'lucide-react'
import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop"
          alt="Modern business skyline"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-mcube-purple/80 via-mcube-purple/65 to-mcube-purple/50"></div>
        
        {/* Animated gradient orbs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-mcube-lime/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-mcube-lime/15 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl drop-shadow-lg">
              Building Tomorrow's{' '}
              <span className="text-mcube-lime">
                Leading Businesses
              </span>
            </h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 text-xl leading-8 text-gray-100 max-w-3xl mx-auto"
          >
            M'Cube is a diversified holding company that builds, invests in, and operates innovative businesses across multiple industries. We create value through strategic partnerships, operational excellence, and forward-thinking leadership.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Button 
              asChild 
              size="lg" 
              className="bg-mcube-lime hover:bg-mcube-lime/90 text-mcube-dark px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link href="/companies" className="flex items-center gap-2">
                Explore Our Companies
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="border-2 border-mcube-purple text-mcube-purple hover:bg-mcube-purple hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300"
            >
              <Link href="/careers" className="flex items-center gap-2">
                <Play className="h-5 w-5" />
                View Careers
              </Link>
            </Button>
          </motion.div>
          
          {/* Feature Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            <div className="flex flex-col items-center text-center text-white">
              <div className="w-16 h-16 rounded-full bg-mcube-lime/20 flex items-center justify-center mb-4">
                <TrendingUp className="h-8 w-8 text-mcube-lime" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Growth Focused</h3>
              <p className="text-sm text-gray-200">Strategic investments in high-growth sectors</p>
            </div>
            
            <div className="flex flex-col items-center text-center text-white">
              <div className="w-16 h-16 rounded-full bg-mcube-lime/20 flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-mcube-lime" />
              </div>
              <h3 className="font-semibold text-lg mb-2">People First</h3>
              <p className="text-sm text-gray-200">Building diverse, talented teams</p>
            </div>
            
            <div className="flex flex-col items-center text-center text-white">
              <div className="w-16 h-16 rounded-full bg-mcube-lime/20 flex items-center justify-center mb-4">
                <Globe className="h-8 w-8 text-mcube-lime" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Global Reach</h3>
              <p className="text-sm text-gray-200">Operating across multiple countries</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
