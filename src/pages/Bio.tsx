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

  // Calculate years of experience (graduated end of May 2022)
  const graduationDate = new Date(2022, 4, 31) // May 31, 2022 (month is 0-indexed)
  const yearsOfExperience = ((new Date().getTime() - graduationDate.getTime()) / (1000 * 60 * 60 * 24 * 365.25)).toFixed(1)

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
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-terminal-bgLight rounded-lg border border-terminal-border p-4 sm:p-8 md:p-12 overflow-hidden">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Profile Image with Cycling */}
          <div className="order-2 md:order-1 relative">
            <div className="relative w-full max-w-md mx-auto aspect-[3/4] rounded-lg border-2 border-terminal-cyan/30 shadow-lg shadow-terminal-cyan/20">
              <img
                src={images[currentImageIndex]}
                alt="Lorne Zhang"
                className="rounded-lg w-full h-full object-cover transition-opacity duration-500"
              />

              {/* Image Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentImageIndex
                        ? 'bg-terminal-cyan w-6'
                        : 'bg-terminal-border w-2 hover:bg-terminal-comment'
                    }`}
                    aria-label={`View image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Intro Text */}
          <div className="order-1 md:order-2 space-y-3 overflow-x-auto">
            <div className="space-y-1 text-sm sm:text-base break-words">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-terminal-bright">
                <span className="text-terminal-yellow">const</span> <span className="text-terminal-blue">lorneZhang</span> <span className="text-terminal-text">=</span> <span className="text-terminal-cyan">{`{`}</span>
              </h1>
              <p className="text-sm sm:text-base text-terminal-comment italic font-mono pl-4 sm:pl-6">
                <span className="text-terminal-blue">pronunciation:</span> <span className="text-terminal-orange">"lorn (like Lorne Michaels from SNL; or 'corn' with an L)"</span><span className="text-terminal-text">,</span>
              </p>
              <p className="text-sm sm:text-base font-mono pl-4 sm:pl-6">
                <span className="text-terminal-blue">location:</span> <span className="text-terminal-orange">"Bay Area 📍"</span><span className="text-terminal-text">,</span>
              </p>
              <p className="text-sm sm:text-base font-mono pl-4 sm:pl-6">
                <span className="text-terminal-blue">experience:</span> <span className="text-terminal-green">{yearsOfExperience}</span> <span className="text-terminal-text">years</span><span className="text-terminal-text">,</span>
              </p>
              <div className="flex flex-wrap items-center pl-4 sm:pl-6 gap-1">
                <span className="text-terminal-blue font-mono text-sm sm:text-base">role:</span>
                <span className="text-terminal-cyan font-mono text-sm sm:text-base">&gt;</span>
                <span className="text-sm sm:text-base text-terminal-text font-mono">
                  {typingText}
                  <span className="cursor-blink text-terminal-cyan">|</span>
                </span>
              </div>
              <div className="text-2xl sm:text-3xl">
                <span className="text-terminal-cyan font-display">{`}`}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Me Section - Code Style with Line Numbers */}
      <div className="bg-terminal-bgLight rounded-lg border border-terminal-border p-4 sm:p-8 md:p-12 overflow-hidden">
        {/* File Tab Header */}
        <div className="flex items-center justify-between mb-6 -mt-2 sm:-mt-4 md:-mt-6 -mx-4 sm:-mx-8 md:-mx-12 px-4 sm:px-8 md:px-12 py-2 bg-terminal-bg border-b border-terminal-border">
          <div className="flex items-center gap-2 px-3 py-1 bg-terminal-bgLight border-t-2 border-terminal-cyan rounded-t text-xs sm:text-sm font-mono">
            <span className="text-terminal-text">Bio.tsx</span>
          </div>
          <div className="text-xs text-terminal-comment font-mono hidden sm:block">
            TypeScript JSX • 196 lines
          </div>
        </div>

        {/* Import Statements */}
        <div className="mb-6 space-y-1 text-xs sm:text-sm font-mono">
          <p className="text-terminal-purple">
            <span className="text-terminal-purple">import</span> <span className="text-terminal-text">{`{ `}</span>
            <span className="text-terminal-blue">passion</span><span className="text-terminal-text">, </span>
            <span className="text-terminal-blue">skills</span><span className="text-terminal-text">, </span>
            <span className="text-terminal-blue">experience</span> <span className="text-terminal-text">{`}`}</span>
            <span className="text-terminal-purple"> from </span>
            <span className="text-terminal-orange">'@/core/engineer'</span>
          </p>
          <p className="text-terminal-purple">
            <span className="text-terminal-purple">import</span> <span className="text-terminal-text">{`{ `}</span>
            <span className="text-terminal-blue">cats</span><span className="text-terminal-text">, </span>
            <span className="text-terminal-blue">fitness</span><span className="text-terminal-text">, </span>
            <span className="text-terminal-blue">diyProjects</span> <span className="text-terminal-text">{`}`}</span>
            <span className="text-terminal-purple"> from </span>
            <span className="text-terminal-orange">'@/hobbies'</span>
          </p>
        </div>

        {/* Function Declaration */}
        <h2 className="text-xl sm:text-2xl font-display font-bold text-terminal-yellow mb-4">
          <span className="text-terminal-purple">export function</span> <span className="text-terminal-yellow">AboutMe</span><span className="text-terminal-text">() {`{`}</span>
        </h2>

        <div className="pl-4 sm:pl-6 space-y-4 text-terminal-text leading-relaxed font-mono text-xs sm:text-sm overflow-x-auto break-words">
          <p className="text-terminal-purple">
            <span className="text-terminal-purple">return</span> <span className="text-terminal-text">{`{`}</span>
          </p>

          <div className="pl-4 sm:pl-6 space-y-4">
          {/* Paragraph 1 with line number */}
          <div className="flex gap-4">
            <span className="text-terminal-comment select-none flex-shrink-0 text-right w-8">1</span>
            <p className="flex-1">
              <span className="text-terminal-comment">// </span>Hey there! I'm a software engineer at{' '}
              <span className="line-through text-gray-500">TikTok</span>{' '}
              <span className="text-terminal-red font-bold bg-terminal-red/10 px-1">Meta</span> working in the Capacity organization,
              where I focus on infrastructure and regionalization{' '}
              <span className="text-terminal-cyan italic text-xs bg-terminal-cyan/10 px-1">(using AI tools extensively!)</span>.
              I'm passionate about building scalable systems that power products used by millions of people worldwide.
            </p>
          </div>

          {/* Paragraph 2 with line number */}
          <div className="flex gap-4">
            <span className="text-terminal-comment select-none flex-shrink-0 text-right w-8">2</span>
            <p className="flex-1">
              <span className="text-terminal-comment">// </span>As a Duke University graduate, I've built a strong foundation in computer science
              and software engineering. My career has taken me through{' '}
              <span className="line-through text-gray-500">roles</span>{' '}
              <span className="text-terminal-red font-bold bg-terminal-red/10 px-1">jobs</span> at TikTok, Sparrow Labs,
              and Capital One, where I've developed expertise in full-stack development, cloud
              infrastructure, and distributed systems.
            </p>
          </div>

          {/* Paragraph 3 with line number */}
          <div className="flex gap-4">
            <span className="text-terminal-comment select-none flex-shrink-0 text-right w-8">3</span>
            <p className="flex-1">
              <span className="text-terminal-comment">// </span>Outside of work, I'm an Eagle Scout who enjoys staying active,{' '}
              <span className="line-through text-gray-500">tackling</span>{' '}
              <span className="text-terminal-red font-bold bg-terminal-red/10 px-1">abandoning</span> DIY projects,
              and{' '}
              <span className="line-through text-gray-500">spending quality time with my cat</span>{' '}
              <span className="text-terminal-red font-bold bg-terminal-red/10 px-1">mourning my cat (RIP Mao Mao 2023)</span>.
              I'm always eager to{' '}
              <span className="line-through text-gray-500">explore</span>{' '}
              <span className="text-terminal-red font-bold bg-terminal-red/10 px-1">read documentation about</span> new technologies
              and solve challenging problems{' '}
              <span className="text-terminal-comment italic text-xs">
                (or at least{' '}
                <span className="line-through text-gray-500">Stack Overflow</span>{' '}
                <span className="text-terminal-red font-bold bg-terminal-red/10 px-1">ChatGPT</span> them)
              </span>.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-terminal-border">
            <p className="text-xs text-terminal-comment italic">
              <span className="font-semibold text-terminal-yellow">// Version History:</span>
              {' '}[12/2024: New job!]{' '}
              [03/2023: 😿]{' '}
              <span className="line-through">[2022: Graduated]</span>{' '}
              <span className="text-terminal-red">[2022: Escaped college]</span>
            </p>
          </div>

          <div className="mt-4 p-3 sm:p-4 bg-terminal-bg border-l-4 border-terminal-yellow rounded">
            <p className="text-xs sm:text-sm break-words">
              <span className="font-semibold text-terminal-yellow">// Current Status:</span>{' '}
              <span className="line-through text-terminal-comment">Building a crypto trading bot;</span>{' '}
              <span className="line-through text-terminal-comment">Grinding LeetCode</span>{' '}
              <span className="text-terminal-cyan font-semibold">
                Trying to get a 205 5x5 bench press & building a{' '}
                <a href="/projects#networth-tracker" className="underline hover:text-terminal-green transition-colors">
                  networth tracking tool
                </a>
              </span>
            </p>
          </div>

          <div className="mt-4 text-xs sm:text-sm overflow-x-auto">
            <p className="break-words">
              <span className="font-semibold text-terminal-purple">const</span> <span className="text-terminal-blue">languages</span> = [
              <span className="text-terminal-orange">"Python"</span>, <span className="line-through text-terminal-comment">"JavaScript"</span>{' '}
              <span className="text-terminal-red font-semibold">"TypeScript"</span>, <span className="text-terminal-orange">"Go"</span>,{' '}
              <span className="line-through text-terminal-comment">"Java"</span>{' '}
              <span className="text-terminal-comment">// retired</span>, <span className="text-terminal-orange">"C++"</span>{' '}
              <span className="text-terminal-comment italic">// rusty</span>
              ];
            </p>
          </div>
          </div>

          {/* Close return statement */}
          <p className="text-terminal-text pl-4 sm:pl-6">{`}`}</p>
        </div>

        {/* Close function */}
        <div className="text-xl sm:text-2xl font-display font-bold text-terminal-text mt-4">
          {`}`}
        </div>
      </div>
    </div>
  )
}
