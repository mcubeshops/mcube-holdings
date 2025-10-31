'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'

const companies = [
  {
    name: "M'Cube Collections",
    industry: "E-commerce & Retail",
    description: "Leading e-commerce platform offering curated collections of premium products across multiple categories.",
    url: "https://mcubecollections.com/",
    logo: "/mcube-collections-logo.png",
    color: "from-blue-500 to-cyan-500",
    status: "active"
  },
  {
    name: "M'Cube Plus",
    industry: "Professional Services",
    description: "Comprehensive professional services delivering innovative solutions for business growth and optimization.",
    url: "https://mcubeplus.com/",
    logo: "/mcube-plus-logo.png",
    color: "from-amber-500 to-orange-500",
    status: "active"
  },
  {
    name: "M'Cube Investment",
    industry: "Property Rental & Investment",
    description: "Premium property rental services offering high-quality accommodations and strategic real estate investment opportunities.",
    url: "https://mcubeinvestment.com/",
    logo: "/mcube-investment-logo.png",
    color: "from-green-500 to-emerald-500",
    status: "active"
  },
  {
    name: "M'Cube Global",
    industry: "Remittance & FinTech",
    description: "Next-generation remittance platform revolutionizing cross-border financial transactions.",
    url: "#",
    logo: null,
    color: "from-mcube-purple to-mcube-magenta",
    status: "coming-soon"
  }
]

export default function CompaniesSection() {
  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-base font-semibold leading-7 text-mcube-purple">Our Portfolio</h2>
            <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Diverse Companies, Unified Vision
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our portfolio spans multiple industries, each company leveraging innovation and excellence to create lasting value in their respective markets.
            </p>
          </motion.div>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {companies.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 group border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-white border border-gray-200 flex items-center justify-center shadow-lg p-2">
                      {company.logo ? (
                        <Image
                          src={company.logo}
                          alt={`${company.name} logo`}
                          width={48}
                          height={48}
                          className="w-full h-full object-contain"
                        />
                      ) : (
                        <div className={`w-full h-full rounded-xl bg-gradient-to-br ${company.color} flex items-center justify-center`}>
                          <div className="w-6 h-6 bg-white/20 rounded-lg"></div>
                        </div>
                      )}
                    </div>
                    {company.status === 'coming-soon' && (
                      <span className="inline-flex items-center rounded-full bg-yellow-50 px-3 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
                        Coming Soon
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{company.name}</h3>
                  <p className="text-sm font-medium text-mcube-purple mb-4">{company.industry}</p>
                  <p className="text-gray-600 mb-6 leading-relaxed">{company.description}</p>
                  
                  <div className="flex items-center justify-between">
                    {company.status === 'active' ? (
                      <Button 
                        asChild 
                        variant="outline" 
                        className="group-hover:bg-mcube-purple group-hover:text-white group-hover:border-mcube-purple transition-all duration-300"
                      >
                        <Link 
                          href={company.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          Visit Website
                          <ExternalLink className="h-4 w-4" />
                        </Link>
                      </Button>
                    ) : (
                      <Button 
                        disabled 
                        variant="outline"
                        className="opacity-50 cursor-not-allowed"
                      >
                        Launching Soon
                      </Button>
                    )}
                    
                    <Button 
                      asChild 
                      variant="ghost" 
                      size="sm"
                      className="text-mcube-purple hover:text-mcube-dark"
                    >
                      <Link href="/companies" className="flex items-center gap-1">
                        Learn More
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
            size="lg"
            className="bg-gradient-to-r from-mcube-purple to-mcube-magenta hover:from-mcube-dark hover:to-mcube-purple text-white"
          >
            <Link href="/companies" className="flex items-center gap-2">
              View All Companies
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
