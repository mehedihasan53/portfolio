import { useEffect, useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Mail, Download, Code2 } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
  const sectionRef = useRef(null)
  const contentRef = useRef(null)
  const imageRef = useRef(null)
  const backgroundRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-200px" })

  // Parallax scroll effects
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Advanced stagger animation with refined timing
      const tl = gsap.timeline({ delay: 0.2 })

      tl.fromTo('.hero-content-item',
        {
          y: 60,
          opacity: 0,
          scale: 0.95,
          filter: 'blur(10px)'
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          filter: 'blur(0px)',
          duration: 1.2,
          stagger: {
            amount: 0.6,
            ease: 'power3.out'
          },
          ease: 'power3.out'
        }
      )

      // Premium image entrance animation
      gsap.fromTo(imageRef.current,
        {
          scale: 0.8,
          opacity: 0,
          rotateY: 15,
          filter: 'blur(20px)'
        },
        {
          scale: 1,
          opacity: 1,
          rotateY: 0,
          filter: 'blur(0px)',
          duration: 1.8,
          ease: 'power4.out',
          delay: 0.4
        }
      )

      // Subtle floating animation for image
      gsap.to(imageRef.current, {
        y: -12,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut',
        delay: 2
      })

      // Background elements animation
      gsap.fromTo('.bg-element',
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 2,
          stagger: 0.3,
          ease: 'power3.out',
          delay: 0.8
        }
      )

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  // Premium button variants with micro-interactions
  const buttonVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: {
      scale: 0.98,
      transition: {
        type: "spring",
        stiffness: 600,
        damping: 15
      }
    }
  }

  const imageVariants = {
    initial: { scale: 1, rotateY: 0 }
  }

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Advanced Background with Parallax */}
      <motion.div
        ref={backgroundRef}
        style={{ y: backgroundY }}
        className="absolute inset-0 -z-10"
      >
        {/* Premium gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />

        {/* Sophisticated ambient lighting */}
        <div className="bg-element absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="bg-element absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-blue-500/6 rounded-full blur-[100px] pointer-events-none" />
        <div className="bg-element absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/3 rounded-full blur-[150px] pointer-events-none" />

        {/* Subtle texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)
            `,
            backgroundSize: '60px 60px'
          }}
        />
      </motion.div>

      {/* Main Content with Parallax */}
      <motion.div
        style={{ y: contentY }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center min-h-[80vh]">

          {/* Premium Content Column */}
          <div ref={contentRef} className="lg:col-span-7 space-y-10">

            {/* Status Badge with Premium Styling */}
            <motion.div
              className="hero-content-item"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Badge
                variant="skill"
                className="gap-3 px-4 py-2 text-sm font-medium bg-white/[0.03] border-white/[0.08] backdrop-blur-xl hover:bg-white/[0.05] transition-all duration-300"
              >
                <motion.span
                  className="block w-2.5 h-2.5 rounded-full bg-emerald-500"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [1, 0.7, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                Available for hire
              </Badge>
            </motion.div>

            {/* Premium Typography Hierarchy */}
            <div className="hero-content-item space-y-8">
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 1, delay: 0.2 }}
              >
                <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[0.9] tracking-tight">
                  <motion.span
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="block"
                  >
                    Mehedi Hasan
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-primary bg-300% animate-gradient"
                  >
                    Emon
                  </motion.span>
                </h1>

                <motion.div
                  className="space-y-3"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  <p className="text-2xl md:text-3xl lg:text-4xl text-slate-200 font-semibold tracking-tight">
                    Full-Stack Developer
                  </p>
                  <p className="text-lg md:text-xl text-slate-400 font-medium">
                    MERN Stack • React Specialist • SEO Expert
                  </p>
                </motion.div>
              </motion.div>
            </div>

            {/* Premium Description */}
            <motion.div
              className="hero-content-item"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl font-light">
                Crafting scalable web applications with modern technologies.
                Specialized in React ecosystem, performance optimization, and
                creating exceptional user experiences that drive results.
              </p>
            </motion.div>

            {/* Premium CTA Section */}
            <motion.div
              className="hero-content-item space-y-8"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div
                  variants={buttonVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                >
                  <Button
                    size="lg"
                    className="group bg-primary hover:bg-primary/90 text-white px-8 py-4 text-base font-semibold shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/40 transition-all duration-300 rounded-xl border border-primary/20"
                    onClick={() => {
                      const projectsSection = document.getElementById('projects')
                      if (projectsSection) {
                        projectsSection.scrollIntoView({ behavior: 'smooth' })
                      }
                    }}
                  >
                    <Code2 className="mr-2 h-5 w-5" />
                    View My Work
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </motion.div>

                <motion.div
                  variants={buttonVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white/20 text-white hover:bg-white/[0.08] hover:border-white/30 px-8 py-4 text-base font-semibold backdrop-blur-xl transition-all duration-300 rounded-xl shadow-lg hover:shadow-xl"
                    onClick={() => {
                      const contactSection = document.getElementById('contact')
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: 'smooth' })
                      }
                    }}
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Get In Touch
                  </Button>
                </motion.div>
              </div>

              {/* Premium Secondary Action */}
              <motion.div
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <Button
                  variant="ghost"
                  className="text-slate-400 hover:text-white hover:bg-white/[0.05] p-0 h-auto font-medium transition-all duration-300 group"
                  onClick={() => {
                    const link = document.createElement('a')
                    link.href = '/mehedi_resume.pdf'
                    link.download = 'Mehedi_Hasan_Emon_Resume.pdf'
                    document.body.appendChild(link)
                    link.click()
                    document.body.removeChild(link)
                  }}
                >
                  <Download className="mr-2 h-4 w-4 transition-transform group-hover:translate-y-[-1px]" />
                  Download Resume
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Premium Image Column */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              ref={imageRef}
              variants={imageVariants}
              initial="initial"
              className="relative w-full max-w-lg"
            >
              {/* Premium Image Frame */}
              <div className="relative">
                {/* Modern bordered background frame */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-white/[0.03] to-white/[0.01] rounded-2xl blur-sm" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.05] via-transparent to-blue-500/[0.05] rounded-2xl" />

                {/* Main image container */}
                <div className="relative bg-gradient-to-br from-slate-800/50 via-slate-700/30 to-slate-800/50 rounded-2xl p-1 backdrop-blur-xl border border-white/[0.1] shadow-2xl shadow-black/40">
                  <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900">
                    <img
                      src="/mehedi-profile.png"
                      alt="Mehedi Hasan Emon - Full Stack Developer"
                      className="w-full h-full object-cover object-top scale-105 transition-transform duration-700 ease-out"
                    />

                    {/* Premium overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                    {/* Subtle inner border */}
                    <div className="absolute inset-0 rounded-xl border border-white/[0.05]" />
                  </div>
                </div>

                {/* Premium decorative elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full blur-md"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-500/20 rounded-full blur-md"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.5, 0.2]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                />

                {/* Premium glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-blue-500/[0.03] rounded-2xl blur-2xl -z-10" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Premium Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="flex flex-col items-center gap-4 text-slate-500 mt-20"
        >
          <span className="text-xs font-medium uppercase tracking-wider">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-slate-500/20 rounded-full flex justify-center backdrop-blur-sm bg-white/[0.02]"
          >
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-3 bg-gradient-to-b from-primary to-blue-500 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Custom CSS for gradient animation */}
      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          animation: gradient 6s ease infinite;
        }
        .bg-300\\% {
          background-size: 300% 300%;
        }
      `}</style>
    </section>
  )
}

export default Hero