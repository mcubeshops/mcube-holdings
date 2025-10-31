import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ExternalLink, ArrowRight } from 'lucide-react'

// Function to get appropriate professional images for each company
function getCompanyImage(companyName: string, index: number): string {
  const images = {
    "M'Cube Collections": "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop&crop=center",
    "M'Cube Plus": "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop&crop=center", 
    "M'Cube Investment": "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop&crop=center",
    "M'Cube Global": "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop&crop=center"
  }
  return images[companyName as keyof typeof images] || `https://picsum.photos/800/600?random=${index}`
}

export const metadata: Metadata = {
  title: "Our Companies - M'Cube | Diverse Portfolio of Leading Businesses",
  description: "Explore M'Cube's diverse portfolio of companies spanning e-commerce, professional services, financial services, and fintech.",
  keywords: "M'Cube companies, portfolio, M'Cube Collections, M'Cube Plus, M'Cube Investment, M'Cube Global",
}

const companies = [
  {
    name: "M'Cube Collections",
    industry: "E-commerce & Retail",
    description: "M'Cube Collections is our flagship e-commerce platform offering curated collections of premium products across multiple categories. We focus on delivering exceptional customer experiences through innovative technology and carefully selected merchandise.",
    url: "https://mcubecollections.com/",
    logo: "/mcube-collections-logo.png",
    color: "from-blue-500 to-cyan-500",
    status: "active",
    features: [
      "Curated premium product collections",
      "Advanced e-commerce technology platform",
      "Multi-category marketplace",
      "Customer-centric shopping experience",
      "Global shipping capabilities"
    ],
    metrics: {
      customers: "10,000+",
      products: "5,000+",
      satisfaction: "98%"
    }
  },
  {
    name: "M'Cube Plus",
    industry: "Professional Services",
    description: "M'Cube Plus delivers comprehensive professional services designed to help businesses optimize their operations, accelerate growth, and achieve their strategic objectives through innovative solutions and expert consultation.",
    url: "https://mcubeplus.com/",
    logo: "/mcube-plus-logo.png",
    color: "from-amber-500 to-orange-500",
    status: "active",
    features: [
      "Business strategy consulting",
      "Operational optimization",
      "Digital transformation services",
      "Process improvement solutions",
      "Performance analytics"
    ],
    metrics: {
      clients: "50+",
      projects: "200+",
      growth: "150%"
    }
  },
  {
    name: "M'Cube Investment",
    industry: "Property Rental & Investment",
    description: "M'Cube Investment specializes in premium property rental services and strategic real estate investments. We offer high-quality accommodations for short and long-term stays while building a diverse portfolio of investment properties.",
    url: "https://mcubeinvestment.com/",
    logo: "/mcube-investment-logo.png",
    color: "from-green-500 to-emerald-500",
    status: "active",
    features: [
      "Premium property rentals",
      "Short & long-term accommodations",
      "Strategic real estate investments",
      "Property management services",
      "Investment portfolio optimization"
    ],
    metrics: {
      properties: "25+",
      locations: "8",
      occupancy: "95%"
    }
  },
  {
    name: "M'Cube Global",
    industry: "Remittance & FinTech",
    description: "M'Cube Global is our upcoming fintech platform that will revolutionize cross-border remittance services through cutting-edge technology, competitive rates, and user-centric design, making international money transfers faster, safer, and more affordable.",
    url: "#",
    logo: null,
    color: "from-mcube-purple to-mcube-magenta",
    status: "coming-soon",
    features: [
      "Cross-border remittance platform",
      "Competitive exchange rates",
      "Real-time transaction tracking",
      "Multi-currency support",
      "Mobile-first design"
    ],
    metrics: {
      launch: "Q2 2025",
      countries: "15+",
      currencies: "25+"
    }
  }
]

export default function CompaniesPage() {
  return (
    <div className="flex flex-col min-h-screen py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Our Companies
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Discover our diverse portfolio of companies, each leading innovation in their respective industries 
            and contributing to our mission of building tomorrow's leading businesses.
          </p>
        </div>

        {/* Companies Grid */}
        <div className="mx-auto mt-16 space-y-16">
          {companies.map((company, index) => (
            <Card key={company.name} className="overflow-hidden border-0 shadow-xl">
              <CardContent className="p-0">
                <div className={`grid grid-cols-1 lg:grid-cols-2 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Content */}
                  <div className={`p-12 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-20 h-20 rounded-3xl bg-white border border-gray-200 flex items-center justify-center shadow-lg p-3">
                        {company.logo ? (
                          <Image
                            src={company.logo}
                            alt={`${company.name} logo`}
                            width={64}
                            height={64}
                            className="w-full h-full object-contain"
                          />
                        ) : (
                          <div className={`w-full h-full rounded-2xl bg-gradient-to-br ${company.color} flex items-center justify-center`}>
                            <div className="w-8 h-8 bg-white/20 rounded-xl"></div>
                          </div>
                        )}
                      </div>
                      {company.status === 'coming-soon' && (
                        <span className="inline-flex items-center rounded-full bg-yellow-50 px-4 py-2 text-sm font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
                          Coming Soon
                        </span>
                      )}
                    </div>
                    
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">{company.name}</h2>
                    <p className="text-lg font-medium text-mcube-purple mb-6">{company.industry}</p>
                    <p className="text-gray-600 mb-8 leading-relaxed">{company.description}</p>
                    
                    {/* Features */}
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Features</h3>
                      <ul className="space-y-2">
                        {company.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-mcube-purple rounded-full"></div>
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      {Object.entries(company.metrics).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-2xl font-bold text-mcube-purple">{value}</div>
                          <div className="text-sm text-gray-500 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      {company.status === 'active' ? (
                        <Button 
                          asChild 
                          className="bg-gradient-to-r from-mcube-purple to-mcube-magenta hover:from-mcube-dark hover:to-mcube-purple text-white"
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
                          className="opacity-50 cursor-not-allowed"
                        >
                          Launching Soon
                        </Button>
                      )}
                      
                      <Button 
                        asChild 
                        variant="outline"
                        className="border-2 border-mcube-purple text-mcube-purple hover:bg-mcube-purple hover:text-white"
                      >
                        <Link href="/contact" className="flex items-center gap-2">
                          Learn More
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                  
                  {/* Visual */}
                  <div className={`relative overflow-hidden ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className="relative h-96 w-full">
                      <Image
                        src={getCompanyImage(company.name, index)}
                        alt={`${company.name} business environment`}
                        fill
                        className="object-cover"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${company.color} opacity-80`}></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative">
                          <div className="w-32 h-32 bg-white/10 rounded-3xl backdrop-blur-sm flex items-center justify-center">
                            {company.logo ? (
                              <Image
                                src={company.logo}
                                alt={`${company.name} logo`}
                                width={80}
                                height={80}
                                className="object-contain filter brightness-0 invert"
                              />
                            ) : (
                              <div className="w-16 h-16 bg-white/20 rounded-2xl"></div>
                            )}
                          </div>
                          <div className="absolute -top-4 -right-4 w-16 h-16 bg-white/10 rounded-2xl backdrop-blur-sm"></div>
                          <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-white/10 rounded-xl backdrop-blur-sm"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mx-auto mt-24 max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Interested in Partnership Opportunities?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            We're always looking for strategic partnerships and investment opportunities. 
            Get in touch to explore how we can work together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg"
              className="bg-gradient-to-r from-mcube-purple to-mcube-magenta hover:from-mcube-dark hover:to-mcube-purple text-white"
            >
              <Link href="/contact">
                Contact Us
              </Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="border-2 border-mcube-purple text-mcube-purple hover:bg-mcube-purple hover:text-white"
            >
              <Link href="/careers">
                Join Our Team
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
