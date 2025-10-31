'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Users, Briefcase, TrendingUp, Heart } from 'lucide-react'
import { motion } from 'framer-motion'

const benefits = [
  {
    icon: Users,
    title: "Collaborative Culture",
    description: "Work with passionate professionals in a supportive environment"
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    description: "Accelerate your career with mentorship and learning opportunities"
  },
  {
    icon: Briefcase,
    title: "Diverse Opportunities",
    description: "Explore roles across multiple industries and business functions"
  },
  {
    icon: Heart,
    title: "Work-Life Balance",
    description: "Enjoy flexible arrangements and comprehensive benefits"
  }
]

export default function CareersHighlight() {
  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-base font-semibold leading-7 text-mcube-purple">Join Our Team</h2>
              <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Build Your Future with M'Cube
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Be part of a dynamic team that's shaping the future of business across multiple industries. 
                At M'Cube, we believe in empowering our people to achieve their full potential while making a meaningful impact.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-8 space-y-6"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-mcube-purple to-mcube-magenta shadow-lg">
                      <benefit.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <Button 
                asChild 
                size="lg"
                className="bg-gradient-to-r from-mcube-purple to-mcube-magenta hover:from-mcube-dark hover:to-mcube-purple text-white"
              >
                <Link href="/careers" className="flex items-center gap-2">
                  View Open Positions
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="border-2 border-mcube-purple text-mcube-purple hover:bg-mcube-purple hover:text-white"
              >
                <Link href="/about" className="flex items-center gap-2">
                  Learn About Our Culture
                </Link>
              </Button>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative mx-auto w-full max-w-lg">
              {/* Background decoration */}
              <div className="absolute -inset-4 bg-gradient-to-r from-mcube-purple/20 to-mcube-magenta/20 rounded-3xl blur-2xl"></div>
              
              {/* Main content area */}
              <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                <div className="text-center">
                  <div className="mx-auto w-20 h-20 bg-gradient-to-br from-mcube-purple to-mcube-magenta rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <Users className="h-10 w-10 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Ready to Make an Impact?
                  </h3>
                  
                  <p className="text-gray-600 mb-6">
                    Join a team of innovators, strategists, and visionaries who are building the businesses of tomorrow.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <span className="font-medium text-gray-900">Current Openings</span>
                      <span className="text-2xl font-bold text-mcube-purple">17+</span>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <span className="font-medium text-gray-900">Team Growth</span>
                      <span className="text-2xl font-bold text-mcube-purple">200%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
