import Link from 'next/link'
import Image from 'next/image'
import { Linkedin, Mail, Phone, MapPin } from 'lucide-react'

const navigation = {
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Companies', href: '/companies' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ],
  companies: [
    { name: "M'Cube Collections", href: 'https://mcubecollections.com/' },
    { name: "M'Cube Plus", href: 'https://mcubeplus.com/' },
    { name: "M'Cube Investment", href: 'https://mcubeinvestment.com/' },
    { name: "M'Cube Global", href: '#', disabled: true },
  ],
  resources: [
    { name: 'News & Insights', href: '/news' },
    { name: 'Events', href: '/events' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ],
  social: [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/mcubegh/',
      icon: Linkedin,
    },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-mcube-dark" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Image
              className="h-12 w-auto"
              src="/logo.png"
              alt="M'Cube Logo"
              width={120}
              height={48}
            />
            <p className="text-sm leading-6 text-gray-300">
              Building tomorrow's leading businesses through innovation, strategic investments, and operational excellence.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-mcube-lime flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-300">
                  Regus House, Admirals Park,<br />
                  Victory Way, Dartford, DA2 6QD
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-mcube-lime flex-shrink-0" />
                <a href="mailto:info@mcubeholdings.com" className="text-sm text-gray-300 hover:text-mcube-lime transition-colors">
                  info@mcubeholdings.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-mcube-lime flex-shrink-0" />
                <a href="tel:+442038181029" className="text-sm text-gray-300 hover:text-mcube-lime transition-colors">
                  +44 203 818 1029
                </a>
              </div>
            </div>
            
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <Link 
                  key={item.name} 
                  href={item.href} 
                  className="text-gray-400 hover:text-mcube-lime transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Our Companies</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.companies.map((item) => (
                    <li key={item.name}>
                      {item.disabled ? (
                        <span className="text-sm leading-6 text-gray-500">
                          {item.name} <span className="text-xs">(Coming Soon)</span>
                        </span>
                      ) : (
                        <Link 
                          href={item.href} 
                          className="text-sm leading-6 text-gray-300 hover:text-white transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Resources</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.resources.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <div className="flex flex-col items-center justify-between sm:flex-row">
            <p className="text-xs leading-5 text-gray-400">
              &copy; {new Date().getFullYear()} M'Cube. All rights reserved.
            </p>
            <div className="mt-4 flex space-x-6 sm:mt-0">
              <Link href="/privacy" className="text-xs leading-5 text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-xs leading-5 text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
