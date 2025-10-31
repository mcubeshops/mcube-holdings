import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "About Us - M'Cube | Building Tomorrow's Leading Businesses",
  description: "Learn about M'Cube's story, mission, vision, and the leadership team driving innovation across multiple industries.",
  keywords: "M'Cube, about us, company story, mission, vision, leadership team, corporate culture",
}

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            About M'Cube
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Building tomorrow's leading businesses through innovation, strategic investments, and operational excellence.
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-4xl">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                M'Cube was founded with a vision to create and nurture businesses that make a meaningful impact across multiple industries. 
                Our journey began with a simple belief: that innovation, combined with strategic thinking and operational excellence, 
                can transform industries and create lasting value.
              </p>
              <p className="text-gray-600">
                Today, we operate a diverse portfolio of companies spanning e-commerce, professional services, financial services, 
                and emerging fintech solutions, each contributing to our mission of building tomorrow's leading businesses.
              </p>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-6">
                To build, invest in, and operate innovative businesses that create sustainable value for all stakeholders 
                while contributing positively to the communities we serve.
              </p>
              
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-gray-600">
                To be recognized as a leading holding company that consistently identifies, develops, and scales 
                businesses that shape the future of their respective industries.
              </p>
            </div>
          </div>
          
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Values</h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-mcube-purple to-mcube-magenta rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <div className="w-8 h-8 bg-white/20 rounded-lg"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation</h3>
                <p className="text-gray-600">Embracing new ideas and technologies to drive progress</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-mcube-purple to-mcube-magenta rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <div className="w-8 h-8 bg-white/20 rounded-lg"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Excellence</h3>
                <p className="text-gray-600">Striving for the highest standards in everything we do</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-mcube-purple to-mcube-magenta rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <div className="w-8 h-8 bg-white/20 rounded-lg"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Integrity</h3>
                <p className="text-gray-600">Building trust through transparency and ethical practices</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-mcube-purple to-mcube-magenta rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <div className="w-8 h-8 bg-white/20 rounded-lg"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Growth</h3>
                <p className="text-gray-600">Fostering continuous learning and development</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
