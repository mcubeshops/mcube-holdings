'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, Calendar, Clock, TrendingUp, Package, Building2 } from 'lucide-react'
import { motion } from 'framer-motion'

// Mock news data - in real implementation, this would come from CMS
const newsItems = [
  {
    id: 1,
    title: "M'Cube Announces Strategic Expansion into FinTech",
    excerpt: "Our upcoming M'Cube Global platform will revolutionize cross-border remittance services with cutting-edge technology and user-centric design.",
    category: "Company News",
    date: "2024-10-25",
    readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=500&fit=crop",
    slug: "mcube-fintech-expansion",
    icon: TrendingUp
  },
  {
    id: 2,
    title: "M'Cube Collections Reaches New Milestone",
    excerpt: "Our e-commerce platform has successfully served over 10,000 customers, marking a significant achievement in our retail journey.",
    category: "Business Update",
    date: "2024-10-20",
    readTime: "2 min read",
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&h=500&fit=crop",
    slug: "collections-milestone",
    icon: Package
  },
  {
    id: 3,
    title: "Investment Insights: Market Trends for 2025",
    excerpt: "M'Cube Investment shares key insights on emerging market trends and investment opportunities for the upcoming year.",
    category: "Industry Insights",
    date: "2024-10-15",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    slug: "investment-insights-2025",
    icon: Building2
  }
]

export default function NewsSection() {
  return (
    <section className="py-24 sm:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-base font-semibold leading-7 text-mcube-purple">Latest Updates</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            News & Insights
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Stay updated with the latest developments, insights, and achievements across the M'Cube portfolio.
          </p>
        </motion.div>
        
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {newsItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 group border-0 shadow-lg overflow-hidden">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 rounded-full bg-mcube-lime flex items-center justify-center">
                      <item.icon className="h-6 w-6 text-mcube-dark" />
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span className="inline-flex items-center rounded-full bg-mcube-purple/10 px-3 py-1 text-xs font-medium text-mcube-purple">
                      {item.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(item.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-mcube-purple transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {item.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <Clock className="h-4 w-4" />
                      {item.readTime}
                    </div>
                    
                    <Button 
                      asChild 
                      variant="ghost" 
                      size="sm"
                      className="text-mcube-purple hover:text-mcube-dark group-hover:bg-mcube-purple/10"
                    >
                      <Link href={`/news/${item.slug}`} className="flex items-center gap-1">
                        Read More
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Button 
            asChild 
            variant="outline"
            size="lg"
            className="border-2 border-mcube-purple text-mcube-purple hover:bg-mcube-purple hover:text-white"
          >
            <Link href="/news" className="flex items-center gap-2">
              View All News
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
