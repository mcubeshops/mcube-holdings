'use client'

import { useState } from 'react'
import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card, CardContent } from '@/components/ui/card'
import { Mail, Phone, MapPin, Clock, CheckCircle } from 'lucide-react'

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    details: "info@mcubeholdings.com",
    description: "Send us an email anytime",
    href: "mailto:info@mcubeholdings.com",
    clickable: true
  },
  {
    icon: Phone,
    title: "Call Us",
    details: "+44 203 818 1029",
    description: "Mon-Fri from 9am to 5pm GMT",
    href: "tel:+442038181029",
    clickable: true
  },
  {
    icon: MapPin,
    title: "Visit Us",
    details: "Regus House, Admirals Park\nVictory Way, Dartford, DA2 6QD",
    description: "Come say hello at our office",
    clickable: false
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: "Monday - Friday: 9:00 AM - 5:00 PM GMT\nSaturday: Closed",
    description: "We're here to help",
    clickable: false
  }
]


export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, subject: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitted(true)
    setIsLoading(false)
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      subject: '',
      message: ''
    })
    
    // Reset success state after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <div className="flex flex-col min-h-screen py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Contact Us
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We'd love to hear from you. Get in touch with our team for partnerships, 
            investment opportunities, or general inquiries.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Contact Form */}
          <div>
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Message Sent!</h3>
                    <p className="text-gray-600 mb-6">
                      Thank you for reaching out. We'll get back to you within 24 hours.
                    </p>
                    <Button 
                      onClick={() => setIsSubmitted(false)}
                      variant="outline"
                      className="border-2 border-mcube-purple text-mcube-purple hover:bg-mcube-purple hover:text-white"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div>
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            className="mt-2"
                            placeholder="Your full name"
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            className="mt-2"
                            placeholder="your.email@example.com"
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div>
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="mt-2"
                            placeholder="+44 203 818 1029"
                          />
                        </div>
                        <div>
                          <Label htmlFor="company">Company</Label>
                          <Input
                            id="company"
                            name="company"
                            type="text"
                            value={formData.company}
                            onChange={handleInputChange}
                            className="mt-2"
                            placeholder="Your company name"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="subject">Subject *</Label>
                        <Select onValueChange={handleSelectChange} required>
                          <SelectTrigger className="mt-2">
                            <SelectValue placeholder="Select a subject" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">General Inquiry</SelectItem>
                            <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                            <SelectItem value="investment">Investment Inquiry</SelectItem>
                            <SelectItem value="press">Press & Media</SelectItem>
                            <SelectItem value="careers">Career Opportunities</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          value={formData.message}
                          onChange={handleInputChange}
                          className="mt-2"
                          rows={6}
                          placeholder="Tell us more about your inquiry..."
                        />
                      </div>
                      
                      <Button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-gradient-to-r from-mcube-purple to-mcube-magenta hover:from-mcube-dark hover:to-mcube-purple text-white"
                      >
                        {isLoading ? 'Sending Message...' : 'Send Message'}
                      </Button>
                    </form>
                  </>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in touch</h2>
              <p className="text-gray-600 mb-8">
                Whether you're interested in partnership opportunities, investment inquiries, 
                or just want to learn more about M'Cube, we're here to help.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {contactInfo.map((item, index) => (
                <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-br from-mcube-purple to-mcube-lime rounded-xl flex items-center justify-center">
                          <item.icon className="h-6 w-6 text-white" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h3>
                        {item.clickable ? (
                          <a 
                            href={item.href} 
                            className="text-gray-900 font-medium mb-1 whitespace-pre-line hover:text-mcube-lime transition-colors cursor-pointer"
                          >
                            {item.details}
                          </a>
                        ) : (
                          <p className="text-gray-900 font-medium mb-1 whitespace-pre-line">{item.details}</p>
                        )}
                        <p className="text-gray-600 text-sm">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

          </div>
        </div>

        {/* Interactive Map */}
        <div className="mx-auto mt-24 max-w-6xl">
          <Card className="border-0 shadow-xl overflow-hidden">
            <div className="relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d544326.9642567221!2d-0.6592090853966213!3d5.770211490549726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf837b41d4ae53%3A0x72d6d04c6ae1fc1!2sM&#39;Cube!5e0!3m2!1sen!2sgh!4v1761741089679!5m2!1sen!2sgh"
                width="100%" 
                height="450" 
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="M'Cube Location - Regus House, Admirals Park, Victory Way, Dartford, DA2 6QD"
              />
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
