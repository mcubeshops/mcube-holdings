'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const stats = [
  { id: 1, name: 'Years in Business', value: 17, suffix: '+' },
  { id: 2, name: 'Companies in Portfolio', value: 5, suffix: '' },
  { id: 3, name: 'Team Members', value: 15, suffix: '+' },
  { id: 4, name: 'Countries Served', value: 10, suffix: '+' },
]

function AnimatedCounter({ end, duration = 2000, suffix = '' }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      setCount(Math.floor(progress * end))
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [end, duration, isVisible])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      onViewportEnter={() => setIsVisible(true)}
    >
      <span className="text-4xl font-bold text-white sm:text-6xl">
        {count}{suffix}
      </span>
    </motion.div>
  )
}

export default function StatsSection() {
  return (
    <section className="bg-gradient-to-r from-mcube-purple to-mcube-purple py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Driving Growth Across Industries
          </h2>
          <p className="mt-4 text-lg leading-8 text-purple-100">
            Our impact spans multiple sectors, creating value and opportunities worldwide.
          </p>
        </motion.div>
        
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              <p className="mt-4 text-lg font-semibold leading-8 text-purple-100">{stat.name}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-purple-100 max-w-3xl mx-auto">
            From innovative e-commerce solutions to strategic investments, M'Cube continues to expand its reach and impact, 
            building sustainable businesses that create lasting value for all stakeholders.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
