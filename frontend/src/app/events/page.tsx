import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Calendar, Clock, MapPin, Users, ArrowRight, Mail, CalendarDays } from 'lucide-react'

export const metadata: Metadata = {
  title: "Events - M'Cube | Upcoming Events and Webinars",
  description: "Join M'Cube events, webinars, and industry gatherings. Stay connected with our community and industry insights.",
  keywords: "M'Cube events, webinars, conferences, networking, industry events",
}

// Mock events data - in real implementation, this would come from CMS
const upcomingEvents = [
  {
    id: 1,
    title: "M'Cube Annual Investment Summit 2025",
    description: "Join industry leaders and investors for insights into emerging market trends and investment opportunities.",
    date: "2025-03-15",
    time: "09:00 AM - 05:00 PM EST",
    location: "New York Convention Center",
    type: "In-Person",
    category: "Conference",
    attendees: "500+",
    status: "upcoming"
  },
  {
    id: 2,
    title: "Digital Transformation Webinar Series",
    description: "Learn how M'Cube Plus is helping businesses navigate digital transformation challenges.",
    date: "2025-02-20",
    time: "02:00 PM - 03:30 PM EST",
    location: "Virtual Event",
    type: "Virtual",
    category: "Webinar",
    attendees: "200+",
    status: "upcoming"
  },
  {
    id: 3,
    title: "E-commerce Innovation Workshop",
    description: "Discover the latest trends and technologies shaping the future of e-commerce with M'Cube Collections.",
    date: "2025-01-25",
    time: "10:00 AM - 12:00 PM EST",
    location: "M'Cube Headquarters",
    type: "Hybrid",
    category: "Workshop",
    attendees: "50+",
    status: "upcoming"
  }
]

const pastEvents = [
  {
    id: 4,
    title: "FinTech Future Forum 2024",
    description: "Explored the future of financial technology and cross-border payments.",
    date: "2024-10-15",
    location: "Virtual Event",
    type: "Virtual",
    category: "Panel Discussion"
  },
  {
    id: 5,
    title: "Startup Pitch Competition",
    description: "M'Cube Investment hosted emerging startups presenting innovative solutions.",
    date: "2024-09-20",
    location: "Innovation Hub, NYC",
    type: "In-Person",
    category: "Competition"
  }
]

export default function EventsPage() {
  return (
    <div className="flex flex-col min-h-screen py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Events & Webinars
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Join us for exclusive events, industry insights, and networking opportunities. 
            Connect with thought leaders, innovators, and fellow professionals in our community.
          </p>
        </div>

        {/* Coming Soon Notice */}
        <div className="mx-auto mt-16 max-w-4xl">
          <Card className="border-0 shadow-xl bg-gradient-to-br from-mcube-purple/5 to-mcube-magenta/5">
            <CardContent className="p-12 text-center">
              <div className="mx-auto w-20 h-20 bg-gradient-to-br from-mcube-purple to-mcube-magenta rounded-3xl flex items-center justify-center mb-8">
                <CalendarDays className="h-10 w-10 text-white" />
              </div>
              
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Events Platform Coming Soon
              </h2>
              
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                We're building a comprehensive events platform where you can discover, register for, 
                and participate in M'Cube events, webinars, and industry gatherings.
              </p>
              
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 max-w-2xl mx-auto mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-mcube-purple">Monthly</div>
                  <div className="text-gray-600">Webinars</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-mcube-purple">Quarterly</div>
                  <div className="text-gray-600">Workshops</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-mcube-purple">Annual</div>
                  <div className="text-gray-600">Summit</div>
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
                    Get Event Notifications
                  </Link>
                </Button>
                
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-mcube-purple text-mcube-purple hover:bg-mcube-purple hover:text-white"
                >
                  <Link href="/news" className="flex items-center gap-2">
                    View Latest News
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Preview: Upcoming Events */}
        <div className="mx-auto mt-16 max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Preview: Upcoming Events</h2>
          
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="border border-gray-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${
                      event.type === 'Virtual' 
                        ? 'bg-blue-50 text-blue-700' 
                        : event.type === 'Hybrid'
                        ? 'bg-purple-50 text-purple-700'
                        : 'bg-green-50 text-green-700'
                    }`}>
                      {event.type}
                    </span>
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      {event.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {event.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    {event.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Calendar className="h-4 w-4 text-mcube-purple" />
                      {new Date(event.date).toLocaleDateString('en-US', { 
                        weekday: 'long',
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="h-4 w-4 text-mcube-purple" />
                      {event.time}
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin className="h-4 w-4 text-mcube-purple" />
                      {event.location}
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Users className="h-4 w-4 text-mcube-purple" />
                      {event.attendees} Expected Attendees
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full"
                    variant="outline"
                    disabled
                  >
                    Register (Coming Soon)
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Past Events */}
        <div className="mx-auto mt-16 max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Recent Events</h2>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {pastEvents.map((event) => (
              <Card key={event.id} className="border border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                      {event.type}
                    </span>
                    <span className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded">
                      {event.category}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {event.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm">
                    {event.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(event.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {event.location}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Event Types */}
        <div className="mx-auto mt-16 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Event Types</h2>
          
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="border border-gray-200 text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-mcube-purple to-mcube-magenta rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Conferences</h3>
                <p className="text-sm text-gray-600">Large-scale industry gatherings</p>
              </CardContent>
            </Card>
            
            <Card className="border border-gray-200 text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-mcube-purple to-mcube-magenta rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Webinars</h3>
                <p className="text-sm text-gray-600">Online educational sessions</p>
              </CardContent>
            </Card>
            
            <Card className="border border-gray-200 text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-mcube-purple to-mcube-magenta rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Workshops</h3>
                <p className="text-sm text-gray-600">Hands-on learning experiences</p>
              </CardContent>
            </Card>
            
            <Card className="border border-gray-200 text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-mcube-purple to-mcube-magenta rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Networking</h3>
                <p className="text-sm text-gray-600">Professional connection events</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mx-auto mt-24 max-w-2xl text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Never Miss an Event</h3>
          <p className="text-gray-600 mb-6">
            Subscribe to receive notifications about upcoming events, webinars, and exclusive gatherings.
          </p>
          
          <Button 
            asChild 
            variant="outline"
            size="lg"
            className="border-2 border-mcube-purple text-mcube-purple hover:bg-mcube-purple hover:text-white"
          >
            <Link href="/contact">
              Subscribe to Event Updates
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
