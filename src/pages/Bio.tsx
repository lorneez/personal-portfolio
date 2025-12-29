import { useState, useEffect } from 'react'
import duke1 from '@/assets/duke_1.jpeg'
import dukeGraduation from '@/assets/duke_graduation.jpeg'
import japan1 from '@/assets/japan_1.jpeg'
import japan2 from '@/assets/japan_2.jpeg'
import { useTypingEffect } from '@/hooks/useTypingEffect'

export default function Bio() {
  const images = [duke1, dukeGraduation, japan1, japan2]
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 4000) // Change image every 4 seconds

    return () => clearInterval(interval)
  }, [images.length])

  const roles = [
    'Engineer @ Meta',
    'Duke Alumni',
    'Eagle Scout',
    'Fitness Enthusiast',
    'Casual Handyman',
    'Cat Lover',
    'Mediocre Cook',
  ]

  const typingText = useTypingEffect({
    phrases: roles,
    typingSpeed: 80,
    deletingSpeed: 40,
    pauseDuration: 2000,
  })

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Profile Image with Cycling */}
          <div className="order-2 md:order-1 relative">
            <div className="relative w-full max-w-md mx-auto aspect-[3/4]">
              <img
                src={images[currentImageIndex]}
                alt="Lorne Zhang"
                className="rounded-2xl shadow-lg w-full h-full object-cover transition-opacity duration-500"
              />

              {/* Image Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentImageIndex
                        ? 'bg-white w-6'
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                    aria-label={`View image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Intro Text */}
          <div className="order-1 md:order-2 space-y-6">
            <div>
              <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-4">
                Lorne Zhang
              </h1>
              <p className="text-lg text-gray-600 italic">
                Pronounced: <span className="font-medium">lorn jäNG</span>
              </p>
            </div>

            <div className="h-8 flex items-center">
              <span className="text-primary-500 mr-2 text-xl">▸</span>
              <span className="text-xl text-gray-700 font-medium">
                {typingText}
                <span className="animate-pulse">|</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* About Me Section - Scrappy/Edited Style */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-12">
        <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
          About Me
        </h2>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            Hey there! I'm a software engineer at{' '}
            <span className="line-through text-gray-400">TikTok</span>{' '}
            <span className="text-red-600 font-medium">Meta</span> working in the Capacity organization,
            where I focus on infrastructure and regionalization{' '}
            <span className="text-blue-600 italic text-sm">(using AI tools extensively!)</span>.
            I'm passionate about building scalable systems that power products used by millions of people worldwide.
          </p>
          <p>
            As a Duke University graduate, I've built a strong foundation in computer science
            and software engineering. My career has taken me through{' '}
            <span className="line-through text-gray-400">roles</span>{' '}
            <span className="text-red-600 font-medium">jobs</span> at TikTok, Sparrow Labs,
            and Capital One, where I've developed expertise in full-stack development, cloud
            infrastructure, and distributed systems.
          </p>
          <p>
            Outside of work, I'm an Eagle Scout who enjoys staying active,{' '}
            <span className="line-through text-gray-400">tackling</span>{' '}
            <span className="text-red-600 font-medium">abandoning</span> DIY projects,
            and{' '}
            <span className="line-through text-gray-400">spending quality time with my cat</span>{' '}
            <span className="text-red-600 font-medium">mourning my cat (RIP Mao Mao 2023)</span>.
            I'm always eager to{' '}
            <span className="line-through text-gray-400">explore</span>{' '}
            <span className="text-red-600 font-medium">read documentation about</span> new technologies
            and solve challenging problems{' '}
            <span className="text-gray-500 italic text-sm">
              (or at least{' '}
              <span className="line-through text-gray-400">Stack Overflow</span>{' '}
              <span className="text-red-600 font-medium">ChatGPT</span> them)
            </span>.
          </p>

          <div className="mt-6 pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-500 italic">
              <span className="font-semibold">Version History:</span>
              {' '}[12/2024: New job!]{' '}
              [03/2023: 😿]{' '}
              <span className="line-through">[2022: Graduated]</span>{' '}
              <span className="text-red-600">[2022: Escaped college]</span>
            </p>
          </div>

          <div className="mt-4 p-4 bg-amber-50 border-l-4 border-amber-400 rounded">
            <p className="text-sm text-gray-700">
              <span className="font-semibold">Current Status:</span>{' '}
              <span className="line-through text-gray-400">Building a crypto trading bot;</span>{' '}
              <span className="line-through text-gray-400">Grinding LeetCode</span>{' '}
              <span className="text-red-600 font-medium">
                Trying to get a 205 5x5 bench press & building a{' '}
                <a href="/projects#networth-tracker" className="underline hover:text-red-700">
                  networth tracking tool
                </a>
              </span>
            </p>
          </div>

          <div className="mt-4 text-sm text-gray-600">
            <p>
              <span className="font-semibold">Languages I use:</span>{' '}
              Python, <span className="line-through text-gray-400">JavaScript</span>{' '}
              <span className="text-red-600 font-medium">TypeScript</span>, Go,{' '}
              <span className="line-through text-gray-400">Java</span>{' '}
              <span className="text-gray-400">(retired)</span>, C++{' '}
              <span className="text-gray-400 italic">(rusty)</span>
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}
