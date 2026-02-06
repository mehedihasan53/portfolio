import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Mail, Code, Briefcase, AtSign, Facebook } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
  const sectionRef = useRef(null)
  const imageRef = useRef(null)
  const contentRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image animation
      gsap.fromTo(imageRef.current,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
          }
        }
      )

      // Content stagger animation
      gsap.fromTo('.about-item',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
          }
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const stats = [
    { value: '1+', label: 'Years Experience' },
    { value: '20+', label: 'Projects Completed' },
    { value: '100%', label: 'Client Satisfaction' },
  ]

  const skills = [
    { name: 'React.js', icon: Code },
    { name: 'JavaScript', icon: Code },
    { name: 'Tailwind CSS', icon: Code },
    { name: 'Next.js', icon: Code },
    { name: 'Node.js', icon: Code },
    { name: 'MongoDB', icon: Code },
  ]

  const socialLinks = [
    { icon: Code, href: 'https://github.com/mehedihasan53', label: 'GitHub' },
    { icon: Briefcase, href: 'https://www.linkedin.com/in/mehedi-hasan-c3/', label: 'LinkedIn' },
    { icon: Facebook, href: 'https://www.facebook.com/mehadi.hassan.1153/', label: 'Facebook' },
    { icon: AtSign, href: 'mailto:mehedihasan.codes3@gmail.com', label: 'Email' },
  ]

  return (
    <section id="about" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/4 h-96 w-96 -translate-y-1/2 rounded-full bg-primary/20 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 h-96 w-96 translate-y-1/2 rounded-full bg-primary/10 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center md:text-left"
        >
          <Badge variant="skill" className="mb-4 gap-2">
            <span className="block w-2 h-2 rounded-full bg-primary animate-pulse" />
            About Me
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Professional Summary
          </h2>
          <p className="text-slate-400 max-w-2xl">
            Get to know the developer behind the code.
          </p>
        </motion.div>

        {/* Main Content */}
        <Card className="bg-white/5 border-white/10 backdrop-blur-md relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

          <CardContent className="p-6 md:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Profile Image Column */}
              <div className="lg:col-span-4 flex flex-col gap-6">
                <motion.div
                  ref={imageRef}
                  className="relative w-full aspect-[4/5] rounded-xl overflow-hidden border border-white/10 shadow-2xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 to-transparent z-10" />
                  <img
                    src="/mehedi-profile.png"
                    alt="Portrait of Mehedi Hasan Emon"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Status Card */}
                  <div className="absolute bottom-4 left-4 right-4 z-20">
                    <Card className="bg-white/10 border-white/20 backdrop-blur-md">
                      <CardContent className="p-3 flex items-center justify-between">
                        <div>
                          <p className="text-xs text-slate-400">Status</p>
                          <p className="text-sm font-medium text-white flex items-center gap-1">
                            <span className="block w-1.5 h-1.5 rounded-full bg-green-500" />
                            Available for work
                          </p>
                        </div>
                        <Button
                          size="icon"
                          variant="ghost"
                          className="h-8 w-8 rounded-full bg-white/10 hover:bg-primary hover:text-white cursor-pointer"
                          onClick={() => {
                            const contactSection = document.getElementById('contact')
                            if (contactSection) {
                              contactSection.scrollIntoView({ behavior: 'smooth' })
                            }
                          }}
                        >
                          <Mail className="h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>

                {/* Social Links */}
                <div className="flex justify-center gap-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target={social.href.startsWith('mailto:') ? '_self' : '_blank'}
                      rel={social.href.startsWith('mailto:') ? '' : 'noopener noreferrer'}
                      className="p-3 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-primary/20 transition-all cursor-pointer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      title={social.label}
                    >
                      <social.icon className="h-5 w-5" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Content Column */}
              <div ref={contentRef} className="lg:col-span-8 flex flex-col gap-8">
                {/* Biography */}
                <div className="about-item space-y-4">
                  <h3 className="text-2xl font-bold text-white leading-tight">
                    Building Modern Web Interfaces with <span className="text-primary">Purpose</span> & Precision
                  </h3>
                  <div className="space-y-4 text-slate-400 leading-relaxed text-base md:text-lg">
                    <p>
                      Hi, I'm <strong className="text-slate-200">Mehedi Hasan Emon</strong> — a <strong className="text-primary/90">MERN stack developer</strong> with a passion for building clean, modern web applications. I'm a <strong className="text-slate-200">BSc in Computer Science and Engineering graduate from City University</strong>, where I built a strong foundation in software development, algorithms, and system design.
                    </p>
                    <p>
                      My programming journey began on <strong className="text-slate-200">Programming Hero</strong>, where I took my first steps learning coding. Inspired by the top developers there, I started my journey from the very beginning and gradually built my skills, focusing on React and full-stack development. Over time, I've turned this learning into practical experience, creating responsive, user-friendly web interfaces and writing clean, maintainable code.
                    </p>
                    <p>
                      I enjoy working on projects that challenge me creatively and technically—whether it's designing an interactive frontend, optimizing performance, or integrating backend functionality. <strong className="text-slate-200">Seeing users interact with something I built and having it work seamlessly is what keeps me motivated.</strong>
                    </p>
                    <p>
                      Outside of programming, I love <strong className="text-primary/90">traveling and exploring new things</strong>. Discovering new places, learning about different cultures, and finding inspiration from the world around me often sparks fresh ideas for my projects and helps me think outside the box.
                    </p>
                    <p>
                      I like to think of myself as <strong className="text-slate-200">curious, creative, and persistent</strong>. I approach challenges with an open mind and a problem-solving attitude, always aiming to grow both as a developer and as a person.
                    </p>
                  </div>
                </div>

                {/* Stats Row */}
                <div className="about-item grid grid-cols-2 md:grid-cols-3 gap-4">
                  {stats.map((stat) => (
                    <Card key={stat.label} className="bg-white/5 border-white/10 border-l-2 border-l-primary">
                      <CardContent className="p-4">
                        <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
                        <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                          {stat.label}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Skills */}
                <div className="about-item">
                  <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-4">
                    Core Competencies
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {skills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 1.5 + index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <Badge variant="skill" className="gap-2 cursor-default">
                          <skill.icon className="h-4 w-4" />
                          {skill.name}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Education */}
                <div className="about-item">
                  <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-4">
                    Education
                  </h4>
                  <Card className="bg-white/5 border-white/10 border-l-2 border-l-primary">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h5 className="text-lg font-semibold text-white">Bachelor of Science in Computer Science and Engineering</h5>
                          <p className="text-primary font-medium">City University</p>
                        </div>
                        <Badge variant="skill" className="text-xs">
                          Graduate
                        </Badge>
                      </div>
                      <p className="text-slate-400 text-sm">
                        Comprehensive study in software development, algorithms, data structures, system design,
                        and computer science fundamentals. Built strong analytical and problem-solving skills
                        that form the foundation of my development approach.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* CTA Button */}
                <div className="about-item pt-4">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href="/Mehedi_Hasan_FullStack_Resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block"
                    >
                      <Button
                        variant="outline"
                        className="border-white/20 text-white hover:bg-white/10 hover:border-white/30 cursor-pointer"
                      >
                        <Code className="mr-2 h-4 w-4" />
                        View Resume
                      </Button>
                    </a>
                    <Button
                      variant="outline"
                      className="border-white/20 text-white hover:bg-white/10 hover:border-white/30 cursor-pointer"
                      onClick={() => {
                        const contactSection = document.getElementById('contact')
                        if (contactSection) {
                          contactSection.scrollIntoView({ behavior: 'smooth' })
                        }
                      }}
                    >
                      <Mail className="mr-2 h-4 w-4" />
                      Get In Touch
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>
    </section>
  )
}

export default About