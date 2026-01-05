import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { Button } from '@/components/ui/button'
import { ArrowRight, Mail, Github, Linkedin, Code2, Terminal, Braces, Database, Layers, Zap, Download, Facebook } from 'lucide-react'

const Hero = () => {
  const heroRef = useRef(null)
  const titleRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Floating code icons animation
      gsap.to('.floating-icon', {
        y: -20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut',
        stagger: 0.5
      })

      // Code brackets animation
      gsap.fromTo('.code-bracket', 
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1, ease: 'back.out(1.7)', stagger: 0.2, delay: 0.8 }
      )

      // Title animation
      gsap.fromTo(titleRef.current, 
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.3 }
      )

      // Terminal cursor blink
      gsap.to('.cursor', {
        opacity: 0,
        duration: 0.8,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut'
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  const socialLinks = [
    { icon: Github, href: 'https://github.com/mehedihasan53', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/mehedi-hasan-c3/', label: 'LinkedIn' },
    { icon: Facebook, href: 'https://www.facebook.com/mehadi.hassan.1153/', label: 'Facebook' },
    { icon: Mail, href: 'mailto:mehedihasan.codes3@gmail.com', label: 'Email' },
  ]

  const floatingIcons = [
    { icon: Code2, position: 'top-20 left-16', delay: 0 },
    { icon: Terminal, position: 'top-32 right-20', delay: 0.5 },
    { icon: Database, position: 'bottom-32 left-20', delay: 1 },
    { icon: Layers, position: 'bottom-20 right-16', delay: 1.5 },
    { icon: Braces, position: 'top-1/2 left-8', delay: 2 },
    { icon: Zap, position: 'top-1/3 right-12', delay: 2.5 },
  ]

  return (
    <section id="home" ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Modern Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background-dark via-slate-900 to-background-dark">
        {/* Floating Developer Icons */}
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            className={`floating-icon absolute ${item.position} text-primary/20 hidden lg:block`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 + item.delay * 0.2, duration: 0.8 }}
          >
            <item.icon className="w-8 h-8" />
          </motion.div>
        ))}
        
        {/* Code Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
        
        {/* Subtle Glow Effects */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 text-center">
        {/* Code Brackets */}
        <div className="flex justify-center items-center gap-8 mb-8">
          <motion.div className="code-bracket text-primary/60 text-6xl font-mono">&#60;</motion.div>
          <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="relative">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <div className="absolute inset-0 w-2 h-2 rounded-full bg-green-500 animate-ping opacity-75" />
            </div>
            <span className="text-sm font-medium text-slate-300">Available for hire</span>
          </div>
          <motion.div className="code-bracket text-primary/60 text-6xl font-mono">&#62;</motion.div>
        </div>

        {/* Main Content */}
        <div ref={titleRef} className="mb-8">
          <div className="mb-4">
            <span className="text-primary/80 font-mono text-lg">const developer = &#123;</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
            Mehedi Hasan Emon
          </h1>
          
          <div className="font-mono text-lg md:text-xl text-slate-300 mb-4">
            <span className="text-primary/80">role:</span> <span className="text-green-400">"MERN-Stack Developer"</span>,<br />
            <span className="text-primary/80">specialization:</span> <span className="text-yellow-400">"REACT & SEO"</span>,<br />
            <span className="text-primary/80">passion:</span> <span className="text-blue-400">"Building Amazing Web Apps"</span>
            <span className="cursor text-white">|</span>
          </div>
          
          <div className="mb-6">
            <span className="text-primary/80 font-mono text-lg">&#125;</span>
          </div>
        </div>

        {/* Tech Stack Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {['React', 'Node.js', 'MongoDB', 'JavaScript', 'TypeScript', 'SEO'].map((tech, index) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-slate-300 backdrop-blur-sm hover:bg-primary/10 hover:border-primary/30 hover:text-primary transition-all cursor-default"
            >
              {tech}
            </motion.div>
          ))}
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Crafting scalable web applications with clean code and modern technologies. 
          Specialized in React ecosystem and e-commerce optimization.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <Button 
            size="lg" 
            className="group bg-primary hover:bg-primary/90 text-white px-8 py-3 text-base font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all cursor-pointer"
            onClick={() => {
              const projectsSection = document.getElementById('projects')
              if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: 'smooth' })
              }
            }}
          >
            <Code2 className="mr-2 h-5 w-5" />
            View My Code
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="border-white/20 text-white hover:bg-white/10 hover:border-white/30 px-8 py-3 text-base font-semibold backdrop-blur-sm cursor-pointer hover:shadow-lg hover:shadow-primary/25 transition-all"
            onClick={() => {
              // Placeholder for resume download - functionality to be added later
              console.log('Resume download clicked - functionality coming soon!')
            }}
          >
            <Download className="mr-2 h-5 w-5" />
            Download Resume
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="border-white/20 text-white hover:bg-white/10 hover:border-white/30 px-8 py-3 text-base font-semibold backdrop-blur-sm cursor-pointer"
            onClick={() => {
              const contactSection = document.getElementById('contact')
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' })
              }
            }}
          >
            <Mail className="mr-2 h-5 w-5" />
            Let's Collaborate
          </Button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target={social.href.startsWith('mailto:') ? '_self' : '_blank'}
              rel={social.href.startsWith('mailto:') ? '' : 'noopener noreferrer'}
              className="p-3 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-primary/20 hover:border-primary/30 transition-all cursor-pointer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              title={social.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4 + index * 0.1 }}
            >
              <social.icon className="h-5 w-5" />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="flex flex-col items-center gap-2 text-slate-400"
        >
          <span className="text-xs font-medium uppercase tracking-wider">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-8 border border-slate-400/30 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-3 bg-slate-400/50 rounded-full mt-1"
            />
          </motion.div>
        </motion.div>



      </div>
    </section>
  )
}

export default Hero