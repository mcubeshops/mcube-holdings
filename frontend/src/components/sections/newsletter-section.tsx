'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Mail, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'

export default function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitted(true)
    setIsLoading(false)
    setEmail('')
    
    // Reset success state after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section className="py-24 sm:py-32 bg-gradient-to-br from-mcube-dark via-mcube-purple to-mcube-magenta">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="mx-auto w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8 backdrop-blur-sm">
            <Mail className="h-8 w-8 text-white" />
          </div>
          
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Stay Updated
          </h2>
          <p className="mt-6 text-lg leading-8 text-purple-100">
            Get the latest news, insights, and updates from M'Cube delivered directly to your inbox. 
            Be the first to know about new opportunities, company milestones, and industry insights.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mx-auto mt-12 max-w-md"
        >
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <div className="mx-auto w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Thank you for subscribing!</h3>
              <p className="text-purple-100">You'll receive our latest updates soon.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-white/10 border-white/20 text-white placeholder:text-purple-200 focus:border-white focus:ring-white backdrop-blur-sm"
                />
              </div>
              <Button
                type="submit"
                disabled={isLoading}
                className="bg-white text-mcube-purple hover:bg-gray-100 font-semibold px-8 whitespace-nowrap"
              >
                {isLoading ? 'Subscribing...' : 'Subscribe'}
              </Button>
            </form>
          )}
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-4 text-sm text-purple-200 text-center"
          >
            We respect your privacy. Unsubscribe at any time.{' '}
            <a href="/privacy" className="underline hover:text-white transition-colors">
              Privacy Policy
            </a>
          </motion.p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto mt-16 max-w-4xl"
        >
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 text-center">
            <div>
              <div className="text-3xl font-bold text-white">Weekly</div>
              <div className="text-purple-200">Company Updates</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">Monthly</div>
              <div className="text-purple-200">Industry Insights</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">Exclusive</div>
              <div className="text-purple-200">Investment Opportunities</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
