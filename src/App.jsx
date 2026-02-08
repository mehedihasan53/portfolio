import { useEffect, useState } from 'react'
import { useLenis } from './hooks/useLenis'
import LoadingScreen from './components/LoadingScreen'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import './App.css'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  // Initialize Lenis smooth scrolling
  useLenis()

  useEffect(() => {
    // Set dark mode by default
    document.documentElement.classList.add('dark')
  }, [])

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  return (
    <>
      {/* Loading Screen */}
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}

      {/* Main App Content */}
      <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display overflow-x-hidden antialiased selection:bg-primary selection:text-white">
        <div className="relative min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-grow">
            <Hero />
            <About />
            <Education />
            <Skills />
            <Projects />
            <Contact />
          </main>

          {/* Simple Clean Footer */}
          <footer className="relative border-t border-cyan-400/20 bg-gradient-to-b from-black/50 to-black/80 backdrop-blur-xl">
            <div className="relative z-10 mx-auto max-w-6xl px-6 py-8">
              {/* Main Footer Content */}
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">

                {/* Left Side - Copyright */}
                <div className="flex-shrink-0 order-2 md:order-1">
                  <p className="text-slate-500 text-sm">
                    © 2026 Mehedi Hasan Emon
                  </p>
                </div>

                {/* Center - Navigation Links */}
                <nav className="flex flex-wrap items-center justify-center gap-8 md:gap-12 order-1 md:order-2">
                  {[
                    { name: 'Home', href: '#home' },
                    { name: 'Skills', href: '#skills' },
                    { name: 'Projects', href: '#projects' },
                    { name: 'Contact', href: '#contact' }
                  ].map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="group relative text-slate-400 hover:text-cyan-300 transition-all duration-300 text-base font-medium"
                    >
                      <span className="relative z-10">{item.name}</span>

                      {/* Hover underline effect */}
                      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300 rounded-full" />

                      {/* Subtle glow on hover */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm">
                        <span className="text-cyan-400">{item.name}</span>
                      </div>
                    </a>
                  ))}
                </nav>

                {/* Right Side - Tech Stack */}
                <div className="flex-shrink-0 order-3">
                  <p className="text-slate-500 text-sm">
                    Built with React & Tailwind
                  </p>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  )
}

export default App