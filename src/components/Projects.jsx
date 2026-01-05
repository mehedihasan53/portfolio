import { useEffect, useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { 
  ExternalLink, 
  Github, 
  Heart, 
  ShoppingBag, 
  Gamepad2, 
  BookOpen,
  ArrowRight,
  X
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const Projects = () => {
  const sectionRef = useRef(null)
  const projectsRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const [selectedProject, setSelectedProject] = useState(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Projects stagger animation
      gsap.fromTo('.project-card',
        { y: 100, opacity: 0, rotateX: 45 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 1,
          stagger: 0.3,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: projectsRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
          }
        }
      )

      // Image hover effects
      gsap.set('.project-image', { scale: 1 })
      
      document.querySelectorAll('.project-card').forEach(card => {
        const image = card.querySelector('.project-image')
        
        card.addEventListener('mouseenter', () => {
          gsap.to(image, { scale: 1.05, duration: 0.6, ease: 'power2.out' })
        })
        
        card.addEventListener('mouseleave', () => {
          gsap.to(image, { scale: 1, duration: 0.6, ease: 'power2.out' })
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const projects = [
    {
      id: 'blood-donation-platform',
      title: 'Blood Donation Platform',
      description: 'A real-time platform connecting donors with patients in urgent need. Features include geolocation matching, appointment scheduling, and emergency alerts.',
      image: 'https://images.unsplash.com/photo-1615461066841-6116e61058f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      icon: Heart,
      tech: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Express.js', 'JWT'],
      liveUrl: 'https://snazzy-salamander-1be15f.netlify.app/',
      githubUrl: 'https://github.com/mehedihasan53/blood-donation-client'
    },
    {
      id: 'pawmart-pet-shop',
      title: 'PawMart Pet Shop',
      description: 'A comprehensive e-commerce solution for pet supplies. Includes a custom shopping cart, secure Stripe payment integration, and an admin dashboard for inventory.',
      image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      icon: ShoppingBag,
      tech: ['React', 'Redux Toolkit', 'Stripe API', 'Express.js', 'MongoDB', 'Node.js'],
      liveUrl: 'https://animated-gingersnap-8dfbae.netlify.app/',
      githubUrl: 'https://github.com/mehedihasan53/A10_PawMart_Client'
    },
    {
      id: 'gamehub',
      title: 'GameHub',
      description: 'Dynamic video game discovery app using the rawg.io API. Features infinite scrolling, advanced filtering, and a responsive dark-mode UI.',
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      icon: Gamepad2,
      tech: ['React', 'Firebase', 'Chakra UI', 'Axios', 'RAWG API'],
      liveUrl: 'https://voluble-heliotrope-f0aabf.netlify.app/',
      githubUrl: 'https://github.com/mehedihasan53/A9-GameHub'
    },
    {
      id: 'book-store',
      title: 'Book Store',
      description: 'An online bookstore featuring robust inventory management, JWT-based user authentication, and a recommendation engine.',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      icon: BookOpen,
      tech: ['JavaScript', 'HTML5', 'CSS3', 'Local Storage', 'REST API'],
      liveUrl: 'https://glowing-marzipan-88af53.netlify.app/',
      githubUrl: 'https://github.com/mehedihasan53/Book-store-project'
    }
  ]

  return (
    <section id="projects" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute -top-[10%] -right-[5%] w-[600px] h-[600px] rounded-full bg-primary/20 blur-[120px] opacity-40 pointer-events-none" />
      <div className="absolute top-[40%] -left-[10%] w-[500px] h-[500px] rounded-full bg-purple-500/10 blur-[100px] opacity-30 pointer-events-none" />
      <div className="absolute -bottom-[10%] left-[20%] w-[800px] h-[800px] rounded-full bg-blue-900/10 blur-[130px] opacity-40 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center space-y-4 mb-16"
        >
          <Badge variant="skill" className="gap-2">
            Portfolio
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Projects</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-lg">
            A selection of my recent work in web development, featuring full-stack applications and modern UI interfaces.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div ref={projectsRef} className="flex flex-col gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              className="project-card group"
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Card className="bg-white/5 border-white/10 backdrop-blur-md hover:border-primary/30 transition-all duration-300 overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col lg:flex-row items-stretch">
                    {/* Image */}
                    <div className="w-full lg:w-2/5 shrink-0 relative overflow-hidden cursor-pointer" onClick={() => window.open(project.liveUrl, '_blank')}>
                      <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent opacity-60 z-10" />
                      <div 
                        className="project-image w-full h-full bg-center bg-no-repeat bg-cover aspect-video lg:aspect-auto lg:h-full min-h-[300px] transition-transform duration-300 hover:scale-105"
                        style={{ backgroundImage: `url(${project.image})` }}
                      />
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-primary/20 opacity-0 hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center">
                        <div className="bg-white/10 backdrop-blur-sm rounded-full p-3 border border-white/20">
                          <ExternalLink className="h-6 w-6 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col justify-between p-6 lg:p-8 grow gap-4">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <h3 
                            className="text-white text-2xl font-bold leading-tight cursor-pointer hover:text-primary transition-colors"
                            onClick={() => window.open(project.liveUrl, '_blank')}
                          >
                            {project.title}
                          </h3>
                          <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                          >
                            <project.icon className="text-primary h-6 w-6" />
                          </motion.div>
                        </div>
                        
                        <p className="text-slate-400 text-base leading-relaxed mb-4">
                          {project.description}
                        </p>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tech.map((tech) => (
                            <Badge key={tech} variant="outline" className="text-slate-300 border-white/20">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex items-center gap-3 mt-auto pt-4 border-t border-white/5">
                        <Button 
                          className="group shadow-lg shadow-primary/25 cursor-pointer"
                          onClick={() => setSelectedProject(project)}
                        >
                          <span>View Details</span>
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                        
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="border-white/20 text-slate-300 hover:text-white cursor-pointer"
                          onClick={() => window.open(project.liveUrl, '_blank')}
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          <span className="hidden sm:inline">Live Demo</span>
                        </Button>
                        
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="border-white/20 text-slate-300 hover:text-white cursor-pointer"
                          onClick={() => window.open(project.githubUrl, '_blank')}
                        >
                          <Github className="mr-2 h-4 w-4" />
                          <span className="hidden sm:inline">GitHub</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Footer Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.5 }}
          className="flex justify-center mt-12"
        >
          <motion.a
            href="https://github.com/mehedihasan53"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-slate-400 hover:text-primary transition-colors text-sm font-medium cursor-pointer"
            whileHover={{ x: 5 }}
          >
            <span>View more on GitHub</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </motion.a>
        </motion.div>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  )
}

// Clean Professional Modal Component
const ProjectModal = ({ project, onClose }) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <motion.div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />
      
      {/* Modal */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative w-full max-w-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        <Card className="bg-background-dark/95 border-white/10 backdrop-blur-xl shadow-2xl overflow-hidden">
          <CardContent className="p-0">
            <div className="flex flex-col lg:flex-row">
              {/* Fixed Image Section */}
              <div className="lg:w-2/5 h-64 lg:h-80 relative shrink-0">
                <div 
                  className="w-full h-full bg-center bg-cover bg-no-repeat"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                
                {/* Project Icon */}
                <div className="absolute bottom-4 left-4">
                  <div className="p-3 bg-primary/20 backdrop-blur-sm rounded-xl border border-white/20">
                    <project.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="lg:w-3/5 p-6 lg:p-8 flex flex-col justify-between">
                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl lg:text-3xl font-bold text-white leading-tight">
                      {project.title}
                    </h3>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-slate-400 hover:text-white hover:bg-white/10 shrink-0"
                      onClick={onClose}
                    >
                      <X className="h-5 w-5" />
                    </Button>
                  </div>
                  
                  <p className="text-slate-400 text-base leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, index) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.1 + index * 0.05 }}
                        >
                          <Badge 
                            variant="outline" 
                            className="text-slate-300 border-white/20 bg-white/5 hover:bg-primary/10 hover:border-primary/30 transition-colors"
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4 border-t border-white/10">
                  <Button 
                    className="flex-1 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-shadow"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="flex-1 border-white/20 text-slate-300 hover:text-white hover:border-white/40 transition-colors"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Source Code
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}

export default Projects