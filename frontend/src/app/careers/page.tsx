import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Users, Briefcase, TrendingUp, Heart, ArrowRight, Mail } from 'lucide-react'

export const metadata: Metadata = {
  title: "Careers - M'Cube | Join Our Team",
  description: "Explore career opportunities at M'Cube. Join our team of innovators building tomorrow's leading businesses.",
  keywords: "M'Cube careers, jobs, employment, opportunities, team",
}

const benefits = [
  {
    icon: Users,
    title: "Collaborative Culture",
    description: "Work with passionate professionals in a supportive, inclusive environment"
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    description: "Accelerate your career with mentorship, training, and advancement opportunities"
  },
  {
    icon: Briefcase,
    title: "Diverse Opportunities",
    description: "Explore roles across multiple industries and business functions"
  },
  {
    icon: Heart,
    title: "Work-Life Balance",
    description: "Enjoy flexible arrangements, comprehensive benefits, and wellness programs"
  }
]

export default function CareersPage() {
  return (
    <div className="flex flex-col min-h-screen py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Careers at M'Cube
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Join our team of innovators, strategists, and visionaries who are building the businesses of tomorrow. 
            Discover opportunities to grow your career while making a meaningful impact.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="mx-auto mt-16 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Why Join M'Cube?</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {benefits.map((benefit, index) => (
              <Card key={benefit.title} className="border border-gray-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-mcube-purple to-mcube-magenta rounded-xl flex items-center justify-center">
                        <benefit.icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Coming Soon Section */}
        <div className="mx-auto mt-24 max-w-4xl">
          <Card className="border-0 shadow-xl bg-gradient-to-br from-mcube-purple/5 to-mcube-magenta/5">
            <CardContent className="p-12 text-center">
              <div className="mx-auto w-20 h-20 bg-gradient-to-br from-mcube-purple to-mcube-magenta rounded-3xl flex items-center justify-center mb-8">
                <Briefcase className="h-10 w-10 text-white" />
              </div>
              
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Career Portal Coming Soon
              </h2>
              
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                We're building an amazing career portal where you'll be able to browse open positions, 
                submit applications, and track your progress. In the meantime, we'd love to hear from you!
              </p>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 max-w-2xl mx-auto">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-mcube-purple">5+</div>
                    <div className="text-gray-600">Open Positions</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-mcube-purple">4</div>
                    <div className="text-gray-600">Companies Hiring</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-mcube-purple">200%</div>
                    <div className="text-gray-600">Team Growth</div>
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
                      Get in Touch
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
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Current Opportunities */}
        <div className="mx-auto mt-16 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Current Focus Areas</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="border border-gray-200">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Technology</h3>
                <p className="text-gray-600 text-sm">Software engineers, product managers, UX/UI designers</p>
              </CardContent>
            </Card>
            
            <Card className="border border-gray-200">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Business Development</h3>
                <p className="text-gray-600 text-sm">Sales, partnerships, market expansion</p>
              </CardContent>
            </Card>
            
            <Card className="border border-gray-200">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Operations</h3>
                <p className="text-gray-600 text-sm">Finance, HR, legal, administrative</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mx-auto mt-16 max-w-2xl text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Stay Updated</h3>
          <p className="text-gray-600 mb-6">
            Be the first to know when new positions become available.
          </p>
          <Button 
            asChild 
            variant="outline"
            className="border-2 border-mcube-purple text-mcube-purple hover:bg-mcube-purple hover:text-white"
          >
            <Link href="/contact">
              Join Our Talent Network
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
