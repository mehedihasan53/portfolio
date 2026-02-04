import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Menu, X, Github, Mail } from 'lucide-react'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? 'bg-background-dark/80 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/5'
        : 'bg-transparent'
        }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Modern Text Logo */}
        <motion.div
          className="cursor-pointer group"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="relative flex items-center">
            {/* Main Logo Text */}
            <div className="relative">
              <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
                <span className="text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-blue-400 transition-all duration-500">
                  Mehedi
                </span>
              </h1>

              {/* Subtle Accent Line */}
              <div className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-blue-400 w-0 group-hover:w-full transition-all duration-500 ease-out"></div>

              {/* Subtle Glow Effect */}
              <div className="absolute inset-0 text-2xl md:text-3xl font-bold tracking-tight opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400 blur-sm">
                  Mehedi
                </span>
              </div>
            </div>

            {/* Optional Accent Dot */}
            <div className="ml-1 mt-1">
              <div className="w-2 h-2 bg-primary rounded-full opacity-60 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300"></div>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Desktop Navigation */}
        <nav className="hidden md:flex items-center">
          <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 px-3 py-2">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="relative px-5 py-2.5 text-sm font-medium text-slate-300 hover:text-white transition-all duration-300 rounded-xl group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -1 }}
              >
                <span className="relative z-10">{item.name}</span>
                {/* Hover Background */}
                <div className="absolute inset-0 bg-white/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {/* Active Indicator */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary rounded-full group-hover:w-6 transition-all duration-300"></div>
              </motion.a>
            ))}
          </div>
        </nav>

        {/* Enhanced Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          {/* Hire Me Button */}
          <motion.button
            className="group relative flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-primary/20 to-blue-500/20 hover:from-primary/30 hover:to-blue-500/30 border border-primary/30 hover:border-primary/50 rounded-xl backdrop-blur-sm transition-all duration-300"
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              const contactSection = document.getElementById('contact')
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' })
              }
            }}
          >
            <svg
              className="w-4 h-4 text-primary group-hover:text-white transition-colors duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors duration-300">
              Hire Me
            </span>
            <div className="absolute inset-0 bg-primary/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm"></div>
          </motion.button>

          {/* Social Links */}
          <div className="flex items-center gap-2">
            <motion.a
              href="https://github.com/mehedihasan53"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-2.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl backdrop-blur-sm transition-all duration-300"
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors duration-300" />
            </motion.a>

            <motion.a
              href="mailto:mehedihasan.codes3@gmail.com"
              className="group p-2.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl backdrop-blur-sm transition-all duration-300"
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors duration-300" />
            </motion.a>
          </div>
        </div>

        {/* Enhanced Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-white hover:bg-white/10 border border-white/10 rounded-xl backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <motion.div
            animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.div>
        </Button>
      </div>

      {/* Enhanced Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="md:hidden bg-background-dark/95 backdrop-blur-xl border-t border-white/10"
        >
          <div className="px-6 py-6 space-y-4">
            {/* Mobile Navigation Links */}
            <div className="space-y-2">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-300 border border-transparent hover:border-white/10"
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>

            {/* Mobile Actions */}
            <div className="pt-4 border-t border-white/10 space-y-3">
              {/* Hire Me Button */}
              <motion.button
                className="group w-full flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-primary/20 to-blue-500/20 hover:from-primary/30 hover:to-blue-500/30 border border-primary/30 rounded-xl backdrop-blur-sm transition-all duration-300"
                onClick={() => {
                  setIsMobileMenuOpen(false)
                  const contactSection = document.getElementById('contact')
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <svg
                  className="w-5 h-5 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                <span className="text-base font-medium text-slate-300 group-hover:text-white transition-colors duration-300">
                  Hire Me
                </span>
              </motion.button>

              {/* Social Links */}
              <div className="flex gap-3">
                <motion.a
                  href="https://github.com/mehedihasan53"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl backdrop-blur-sm transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Github className="w-4 h-4 text-slate-400" />
                  <span className="text-sm text-slate-400">GitHub</span>
                </motion.a>

                <motion.a
                  href="mailto:mehedihasan.codes3@gmail.com"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl backdrop-blur-sm transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Mail className="w-4 h-4 text-slate-400" />
                  <span className="text-sm text-slate-400">Email</span>
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}

export default Navigation