'use client'

import Image from 'next/image'
import { useState } from 'react'

interface ProfessionalImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
  fallback?: string
}

export default function ProfessionalImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  fallback
}: ProfessionalImageProps) {
  const [imgSrc, setImgSrc] = useState(src)
  const [isLoading, setIsLoading] = useState(true)

  const handleError = () => {
    if (fallback) {
      setImgSrc(fallback)
    }
  }

  const handleLoad = () => {
    setIsLoading(false)
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 bg-gray-300 rounded-lg"></div>
        </div>
      )}
      <Image
        src={imgSrc}
        alt={alt}
        width={width}
        height={height}
        className={`transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'} ${className}`}
        onError={handleError}
        onLoad={handleLoad}
        priority={priority}
      />
    </div>
  )
}
