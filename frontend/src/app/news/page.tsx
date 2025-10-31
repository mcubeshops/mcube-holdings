import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Calendar, Clock, ArrowRight, Newspaper, Mail, Bell } from 'lucide-react'

export const metadata: Metadata = {
  title: "News & Insights - M'Cube | Latest Updates and Industry Insights",
  description: "Stay updated with the latest news, insights, and developments from M'Cube and our portfolio companies.",
  keywords: "M'Cube news, insights, updates, press releases, industry news, blog",
}

// Mock news data - in real implementation, this would come from CMS
const featuredNews = {
  id: 1,
  title: "M'Cube Announces Strategic Expansion into FinTech with M'Cube Global",
  excerpt: "Our upcoming M'Cube Global platform will revolutionize cross-border remittance services with cutting-edge technology, competitive rates, and user-centric design.",
  category: "Company News",
  date: "2024-10-25",
  readTime: "5 min read",
  image: "/api/placeholder/800/400",
  slug: "mcube-fintech-expansion"
}

const recentNews = [
  {
    id: 2,
    title: "M'Cube Collections Reaches 10,000 Customer Milestone",
    excerpt: "Our e-commerce platform has successfully served over 10,000 customers, marking a significant achievement in our retail journey.",
    category: "Business Update",
    date: "2024-10-20",
    readTime: "3 min read",
    slug: "collections-milestone"
  },
  {
    id: 3,
    title: "Investment Insights: Market Trends for 2025",
    excerpt: "M'Cube Investment shares key insights on emerging market trends and investment opportunities for the upcoming year.",
    category: "Industry Insights",
    date: "2024-10-15",
    readTime: "7 min read",
    slug: "investment-insights-2025"
  },
  {
    id: 4,
    title: "M'Cube Plus Launches New Digital Transformation Services",
    excerpt: "Expanding our professional services portfolio to help businesses navigate the digital landscape more effectively.",
    category: "Service Launch",
    date: "2024-10-10",
    readTime: "4 min read",
    slug: "digital-transformation-services"
  },
  {
    id: 5,
    title: "Quarterly Review: Strong Performance Across All Subsidiaries",
    excerpt: "M'Cube reports robust growth and performance metrics across all portfolio companies in Q3 2024.",
    category: "Financial Update",
    date: "2024-10-05",
    readTime: "6 min read",
    slug: "q3-2024-review"
  }
]

const categories = [
  "All",
  "Company News",
  "Business Update", 
  "Industry Insights",
  "Service Launch",
  "Financial Update"
]

export default function NewsPage() {
  return (
    <div className="flex flex-col min-h-screen py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            News & Insights
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Stay updated with the latest developments, insights, and achievements across the M'Cube portfolio. 
            Discover industry trends, company updates, and strategic insights.
          </p>
        </div>

        {/* Coming Soon Notice */}
        <div className="mx-auto mt-16 max-w-4xl">
          <Card className="border-0 shadow-xl bg-gradient-to-br from-mcube-purple/5 to-mcube-magenta/5">
            <CardContent className="p-12 text-center">
              <div className="mx-auto w-20 h-20 bg-gradient-to-br from-mcube-purple to-mcube-magenta rounded-3xl flex items-center justify-center mb-8">
                <Newspaper className="h-10 w-10 text-white" />
              </div>
              
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                News Portal Coming Soon
              </h2>
              
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                We're building a comprehensive news and insights platform where you'll find the latest updates, 
                industry analysis, and thought leadership content from M'Cube and our portfolio companies.
              </p>
              
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 max-w-2xl mx-auto mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-mcube-purple">Weekly</div>
                  <div className="text-gray-600">Company Updates</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-mcube-purple">Monthly</div>
                  <div className="text-gray-600">Industry Insights</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-mcube-purple">Exclusive</div>
                  <div className="text-gray-600">Investment Analysis</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild 
                  size="lg"
                  className="bg-gradient-to-r from-mcube-purple to-mcube-magenta hover:from-mcube-dark hover:to-mcube-purple text-white"
                >
                  <Link href="/contact" className="flex items-center gap-2">
                    <Mail className="h-5 w-5" />
                    Subscribe for Updates
                  </Link>
                </Button>
                
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-mcube-purple text-mcube-purple hover:bg-mcube-purple hover:text-white"
                >
                  <Link href="/companies" className="flex items-center gap-2">
                    Explore Our Companies
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Preview Content */}
        <div className="mx-auto mt-16 max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Preview: Recent Updates</h2>
          
          {/* Featured Article Preview */}
          <Card className="mb-12 border-0 shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="aspect-video lg:aspect-auto bg-gradient-to-br from-mcube-purple/10 to-mcube-magenta/10 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-mcube-purple to-mcube-magenta rounded-3xl mx-auto mb-4 flex items-center justify-center">
                    <Newspaper className="h-10 w-10 text-white" />
                  </div>
                  <p className="text-gray-600">Featured Article Image</p>
                </div>
              </div>
              
              <CardContent className="p-8 lg:p-12">
                <span className="inline-flex items-center rounded-full bg-mcube-purple/10 px-3 py-1 text-sm font-medium text-mcube-purple mb-4">
                  {featuredNews.category}
                </span>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {featuredNews.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {featuredNews.excerpt}
                </p>
                
                <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {new Date(featuredNews.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {featuredNews.readTime}
                  </div>
                </div>
                
                <Button 
                  variant="outline"
                  className="border-2 border-mcube-purple text-mcube-purple hover:bg-mcube-purple hover:text-white"
                  disabled
                >
                  Read Full Article (Coming Soon)
                </Button>
              </CardContent>
            </div>
          </Card>

          {/* Recent Articles Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {recentNews.map((article) => (
              <Card key={article.id} className="border border-gray-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <span className="inline-flex items-center rounded-full bg-mcube-purple/10 px-3 py-1 text-xs font-medium text-mcube-purple mb-4">
                    {article.category}
                  </span>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(article.date).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {article.readTime}
                      </div>
                    </div>
                    
                    <Button 
                      variant="ghost" 
                      size="sm"
                      disabled
                      className="text-mcube-purple opacity-50"
                    >
                      Read More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mx-auto mt-24 max-w-2xl text-center">
          <div className="mx-auto w-16 h-16 bg-mcube-purple/10 rounded-2xl flex items-center justify-center mb-6">
            <Bell className="h-8 w-8 text-mcube-purple" />
          </div>
          
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Stay in the Loop</h3>
          <p className="text-gray-600 mb-6">
            Be the first to receive our latest news, insights, and company updates.
          </p>
          
          <Button 
            asChild 
            variant="outline"
            size="lg"
            className="border-2 border-mcube-purple text-mcube-purple hover:bg-mcube-purple hover:text-white"
          >
            <Link href="/contact">
              Subscribe to Updates
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
