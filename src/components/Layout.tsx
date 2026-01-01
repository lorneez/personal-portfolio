import { ReactNode, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const LAST_UPDATED = new Date(2025, 11, 31); // month is 0-based

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { path: '/', label: 'Bio' },
    { path: '/projects', label: 'Projects' },
    { path: '/career', label: 'Career' },
  ]

  const isActive = (path: string) => {
    return location.pathname === path
  }

  const getCurrentPath = () => {
    if (location.pathname === '/') return ''
    return location.pathname
  }

  return (
    <div className="min-h-screen bg-terminal-bg flex flex-col">
      {/* Navigation */}
      <nav className="bg-terminal-bgLight border-b border-terminal-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo/Name */}
            <Link
              to="/"
              className="text-base sm:text-xl lg:text-2xl font-display font-bold text-terminal-bright hover:text-terminal-cyan transition-colors truncate"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="text-terminal-green">~</span>
              <span className="text-terminal-text">/lorne.zhang{getCurrentPath()}</span>
              <span className="text-terminal-yellow">$</span>
              <span className="cursor-blink text-terminal-cyan">|</span>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex space-x-1">
              {navLinks.map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  className={`px-4 py-2 rounded-md text-sm font-mono font-medium transition-colors ${
                    isActive(path)
                      ? 'bg-terminal-bgLighter text-terminal-cyan'
                      : 'text-terminal-text hover:bg-terminal-bgLighter hover:text-terminal-bright'
                  }`}
                >
                  <span className="text-terminal-comment">//</span> {label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-terminal-text hover:text-terminal-cyan transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-2 border-t border-terminal-border">
              {navLinks.map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-2 rounded-md text-sm font-mono font-medium transition-colors ${
                    isActive(path)
                      ? 'bg-terminal-bgLighter text-terminal-cyan'
                      : 'text-terminal-text hover:bg-terminal-bgLighter hover:text-terminal-bright'
                  }`}
                >
                  <span className="text-terminal-comment">//</span> {label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-terminal-bgLight border-t border-terminal-border mt-auto">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center space-y-1">
            <div className="text-terminal-comment text-sm font-mono">
              <span className="text-terminal-blue">©</span> {new Date().getFullYear()} Lorne Zhang<span className="text-terminal-comment">;</span> <span className="text-terminal-comment">// All rights reserved</span>
            </div>
            <div className="text-terminal-comment text-xs font-mono">
             <span className="text-terminal-comment">/* </span>
              Last updated:{' '}
              {new Date(LAST_UPDATED).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
              <span className="text-terminal-comment"> */</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
