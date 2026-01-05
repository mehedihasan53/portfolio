import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  Code, 
  Server, 
  TrendingUp, 
  Database,
  Globe,
  Layers,
  Zap,
  ShoppingCart,
  Store,
  Palette
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const Skills = () => {
  const sectionRef = useRef(null)
  const cardsRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Cards stagger animation
      gsap.fromTo('.skill-card',
        { y: 100, opacity: 0, scale: 0.8 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
          }
        }
      )

      // Skill badges animation
      gsap.fromTo('.skill-badge',
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: '.skill-badge',
            start: 'top 90%',
          }
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const skillCategories = [
    {
      title: 'Frontend Dev',
      subtitle: 'Building interactive UIs',
      icon: Code,
      color: 'text-cyan-400',
      skills: [
        { name: 'React', icon: Code, color: 'text-cyan-400' },
        { name: 'JavaScript (ES6+)', icon: Zap, color: 'text-yellow-400' },
        { name: 'HTML5', icon: Globe, color: 'text-orange-500' },
        { name: 'CSS3', icon: Palette, color: 'text-blue-500' },
        { name: 'Tailwind CSS', icon: Palette, color: 'text-cyan-300' },
      ]
    },
    {
      title: 'Backend Dev',
      subtitle: 'Server-side logic & DBs',
      icon: Server,
      color: 'text-green-400',
      skills: [
        { name: 'Node.js', icon: Server, color: 'text-green-500' },
        { name: 'Express.js', icon: Layers, color: 'text-gray-400' },
        { name: 'MongoDB', icon: Database, color: 'text-green-400' },
        { name: 'Firebase', icon: Zap, color: 'text-orange-400' },
      ]
    },
    {
      title: 'SEO & E-Commerce',
      subtitle: 'Marketplace Optimization',
      icon: TrendingUp,
      color: 'text-purple-400',
      skills: [
        { name: 'Amazon SEO', icon: ShoppingCart, color: 'text-yellow-500' },
        { name: 'eBay Listings', icon: Store, color: 'text-blue-400' },
        { name: 'Etsy Shop', icon: Store, color: 'text-orange-600' },
        { name: 'Shopify', icon: Store, color: 'text-green-300' },
        { name: 'Wix SEO', icon: Globe, color: 'text-purple-400' },
      ]
    }
  ]

  return (
    <section id="skills" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/4 h-96 w-96 -translate-y-1/2 rounded-full bg-primary/20 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 h-96 w-96 translate-y-1/2 rounded-full bg-blue-900/20 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center mb-16 space-y-4"
        >
          <Badge variant="skill" className="gap-2">
            Expertise
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
            Technical Skills & SEO
          </h2>
          <p className="text-slate-400 max-w-2xl text-base md:text-lg">
            A comprehensive breakdown of my technical capabilities, ranging from modern frontend frameworks 
            to robust backend systems and strategic e-commerce optimization.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="skill-card"
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Card className="bg-white/5 border-white/10 backdrop-blur-md hover:border-primary/30 transition-all duration-300 group h-full">
                <CardHeader className="border-b border-white/5 pb-4">
                  <div className="flex items-center gap-4">
                    <motion.div 
                      className={`flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 ${category.color} group-hover:bg-primary group-hover:text-white transition-colors`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <category.icon className="h-7 w-7" />
                    </motion.div>
                    <div className="flex flex-col">
                      <CardTitle className="text-white text-xl font-bold">
                        {category.title}
                      </CardTitle>
                      <span className="text-sm text-slate-400">{category.subtitle}</span>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-6">
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        className="skill-badge flex items-center gap-2 rounded-lg bg-background-dark/50 border border-white/5 px-3 py-2 hover:border-primary/50 transition-colors cursor-default"
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ 
                          delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5,
                          type: "spring",
                          stiffness: 400,
                          damping: 10
                        }}
                      >
                        <skill.icon className={`h-5 w-5 ${skill.color}`} />
                        <span className="text-slate-200 text-sm font-medium">
                          {skill.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills