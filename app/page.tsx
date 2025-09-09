'use client'

import { useState, useEffect } from 'react'
import { videoConfig, getCurrentVideoInfo } from '../config/video-config'

// Simple icons as SVGs to avoid import issues
const PlayIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M8 5v14l11-7z"/>
  </svg>
)

const PauseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
  </svg>
)

const VolumeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
  </svg>
)

const VolumeOffIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
  </svg>
)

const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
  </svg>
)

const XIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
  </svg>
)

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className={`text-2xl font-bold transition-colors duration-300 ${
              scrolled ? 'text-gray-900' : 'text-white'
            }`}>
              Lumina
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-300 hover:scale-105 transform ${
                    scrolled 
                      ? 'text-gray-700 hover:text-gray-900' 
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 transform shadow-lg">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 transition-colors duration-300 ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              {isOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      } overflow-hidden bg-white/95 backdrop-blur-md`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
            <a
              key={item}
              href="#"
              className="block px-3 py-2 text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200"
            >
              {item}
            </a>
          ))}
          <div className="px-3 py-2">
            <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

const HeroSection = () => {
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(true)

  const togglePlayPause = () => {
    const video = document.getElementById('hero-video') as HTMLVideoElement
    if (video) {
      if (isPlaying) {
        video.pause()
      } else {
        video.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    const video = document.getElementById('hero-video') as HTMLVideoElement
    if (video) {
      video.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Video Background - Only your chosen video, no fallbacks */}
      <video
        id="hero-video"
        autoPlay={videoConfig.heroVideo.autoplay}
        muted={videoConfig.heroVideo.muted}
        loop={videoConfig.heroVideo.loop}
        playsInline={videoConfig.heroVideo.playsInline}
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={videoConfig.heroVideo.src} type={videoConfig.heroVideo.type} />
      </video>
      
      {/* Enhanced Gradient Overlay for Better Aesthetics */}
      <div className={`absolute inset-0 bg-gradient-to-br ${videoConfig.overlay.gradient}`}></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-transparent to-blue-900/20"></div>
      
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-48 h-48 md:w-72 md:h-72 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-20 w-56 h-56 md:w-80 md:h-80 bg-gradient-to-r from-pink-400/10 to-rose-400/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-48 md:h-48 bg-gradient-to-r from-indigo-400/5 to-violet-400/5 rounded-full mix-blend-multiply filter blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Floating particles for aesthetic enhancement */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/20 rounded-full animate-float" style={{ animationDelay: '0s', animationDuration: '4s' }}></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-blue-300/30 rounded-full animate-float" style={{ animationDelay: '1s', animationDuration: '3s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-purple-300/25 rounded-full animate-float" style={{ animationDelay: '2s', animationDuration: '5s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-pink-300/20 rounded-full animate-float" style={{ animationDelay: '0.5s', animationDuration: '4.5s' }}></div>
        
        {/* Subtle shimmer effect */}
        <div className="absolute inset-0 animate-shimmer opacity-30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="animate-fadeIn">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight text-shadow mobile-optimized-text">
                Create
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent text-glow"> Beautiful </span>
                Experiences
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 md:mb-8 leading-relaxed font-light max-w-3xl text-shadow mobile-optimized-text">
                We craft digital experiences that inspire, engage, and transform your vision into reality with cutting-edge design and technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-8 md:mb-12">
                <button className="group bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 animate-gradient text-white px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold hover:from-blue-600 hover:via-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105 transform shadow-xl mobile-button">
                  <span className="flex items-center justify-center gap-2">
                    Start Your Journey
                    <svg className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </button>
                <button className="glass-effect text-white px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold hover:bg-white/30 transition-all duration-300 hover:scale-105 transform shadow-lg mobile-button">
                  Watch Our Story
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Controls - Mobile Optimized */}
      {videoConfig.overlay.showControls && (
        <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 flex gap-2 md:gap-3">
          <button
            onClick={togglePlayPause}
            className="bg-white/20 backdrop-blur-sm text-white p-2 md:p-3 rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110 transform border border-white/30 shadow-lg"
          >
            {isPlaying ? <PauseIcon /> : <PlayIcon />}
          </button>
          <button
            onClick={toggleMute}
            className="bg-white/20 backdrop-blur-sm text-white p-2 md:p-3 rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110 transform border border-white/30 shadow-lg"
          >
            {isMuted ? <VolumeOffIcon /> : <VolumeIcon />}
          </button>
        </div>
      )}

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      
      {/* Additional sections can be added here */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to transform your ideas?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Let&apos;s work together to create something extraordinary that stands out and makes an impact.
          </p>
        </div>
      </section>
    </main>
  )
}
