import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Badge } from '@/components/ui/badge'
import { GraduationCap, BookOpen, Award, Code } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const Education = () => {
    const sectionRef = useRef(null)
    const timelineRef = useRef(null)
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate timeline line
            gsap.fromTo('.timeline-line',
                { scaleY: 0, transformOrigin: 'top' },
                {
                    scaleY: 1,
                    duration: 1.5,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: timelineRef.current,
                        start: 'top 80%',
                        end: 'bottom 20%',
                    }
                }
            )

            // Animate timeline items
            gsap.fromTo('.timeline-item',
                { x: -50, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.3,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: timelineRef.current,
                        start: 'top 70%',
                        end: 'bottom 20%',
                    }
                }
            )

            // Animate dots
            gsap.fromTo('.timeline-dot',
                { scale: 0, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 0.6,
                    stagger: 0.3,
                    ease: 'back.out(1.7)',
                    scrollTrigger: {
                        trigger: timelineRef.current,
                        start: 'top 70%',
                    }
                }
            )
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    const educationTimeline = [
        {
            id: 1,
            year: '2024',
            icon: GraduationCap,
            iconColor: 'text-primary',
            iconBg: 'bg-primary/10',
            borderColor: 'border-primary/30',
            glowColor: 'shadow-primary/20',
            title: 'Bachelor of Science in Computer Science and Engineering',
            institution: 'City University',
            institutionColor: 'text-primary',
            status: 'Graduate',
            statusColor: 'bg-primary/10 text-primary border-primary/20',
            description: 'Comprehensive study in software development, algorithms, data structures, system design, and computer science fundamentals. Built strong analytical and problem-solving skills that form the foundation of my development approach.',
            skills: [
                'Software Development',
                'Data Structures',
                'Algorithms',
                'System Design',
                'Database Management',
                'Web Technologies'
            ]
        },
        {
            id: 2,
            year: 'Ongoing',
            icon: BookOpen,
            iconColor: 'text-blue-400',
            iconBg: 'bg-blue-500/10',
            borderColor: 'border-blue-400/30',
            glowColor: 'shadow-blue-400/20',
            title: 'Self-Directed Learning & Professional Development',
            institution: 'Programming Hero & Online Platforms',
            institutionColor: 'text-blue-400',
            status: 'Continuous Learning',
            statusColor: 'bg-blue-500/10 text-blue-400 border-blue-400/20',
            description: 'Continuously expanding my skill set through online courses, coding bootcamps, and hands-on projects. Focused on modern web development technologies, best practices, and industry-standard tools.',
            skills: [
                'React.js',
                'Node.js',
                'MongoDB',
                'Full-Stack Development',
                'Modern JavaScript',

            ]
        }
    ]

    return (
        <section id="education" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Dark Background Effects */}
            <div className="absolute top-0 left-1/4 h-96 w-96 -translate-y-1/2 rounded-full bg-primary/20 blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 h-96 w-96 translate-y-1/2 rounded-full bg-primary/10 blur-[120px] pointer-events-none" />

            <div className="max-w-5xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="mb-20 text-center"
                >
                    <Badge variant="skill" className="mb-6 gap-2">
                        <Award className="h-4 w-4" />
                        Education
                    </Badge>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight mb-4">
                        Academic <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Journey</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-base md:text-lg">
                        A structured path of learning and growth in computer science
                    </p>
                </motion.div>

                {/* Timeline */}
                <div ref={timelineRef} className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-8 md:left-12 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/30 to-transparent timeline-line" />

                    {/* Timeline Items */}
                    <div className="space-y-16">
                        {educationTimeline.map((item, index) => (
                            <motion.div
                                key={item.id}
                                className="timeline-item relative"
                                initial={{ opacity: 0 }}
                                animate={isInView ? { opacity: 1 } : {}}
                                transition={{ delay: index * 0.3 }}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-8 md:left-12 -translate-x-1/2 timeline-dot">
                                    <motion.div
                                        className={`w-4 h-4 rounded-full ${item.iconBg} border-2 ${item.borderColor} ${item.glowColor} shadow-lg`}
                                        whileHover={{ scale: 1.3 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                    />
                                </div>

                                {/* Content */}
                                <div className="ml-20 md:ml-28">
                                    {/* Year Badge */}
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ delay: index * 0.3 + 0.2 }}
                                        className="mb-4"
                                    >
                                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-background-dark/50 border border-white/10 text-slate-400 text-sm font-medium">
                                            <Code className="h-3 w-3" />
                                            {item.year}
                                        </span>
                                    </motion.div>

                                    {/* Main Content */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ delay: index * 0.3 + 0.3 }}
                                        className="space-y-6"
                                    >
                                        {/* Header */}
                                        <div className="space-y-3">
                                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                                                <div className="flex items-start gap-4">
                                                    {/* Icon */}
                                                    <motion.div
                                                        className={`flex-shrink-0 w-14 h-14 rounded-xl ${item.iconBg} border ${item.borderColor} flex items-center justify-center ${item.glowColor} shadow-lg`}
                                                        whileHover={{ rotate: 360, scale: 1.1 }}
                                                        transition={{ duration: 0.6 }}
                                                    >
                                                        <item.icon className={`w-7 h-7 ${item.iconColor}`} />
                                                    </motion.div>

                                                    {/* Title */}
                                                    <div className="flex-grow">
                                                        <h3 className="text-xl md:text-2xl font-bold text-white leading-tight mb-2">
                                                            {item.title}
                                                        </h3>
                                                        <p className={`${item.institutionColor} font-semibold text-base md:text-lg`}>
                                                            {item.institution}
                                                        </p>
                                                    </div>
                                                </div>

                                                {/* Status Badge */}
                                                <span className={`flex-shrink-0 self-start px-3 py-1.5 rounded-lg ${item.statusColor} border text-xs font-semibold uppercase tracking-wider`}>
                                                    {item.status}
                                                </span>
                                            </div>

                                            {/* Description */}
                                            <p className="text-slate-400 leading-relaxed text-base md:text-lg pl-0 sm:pl-[72px]">
                                                {item.description}
                                            </p>
                                        </div>

                                        {/* Skills/Highlights */}
                                        <div className="pl-0 sm:pl-[72px] space-y-3">
                                            <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                                                {index === 0 ? 'Key Areas of Study' : 'Learning Focus'}
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {item.skills.map((skill, idx) => (
                                                    <motion.span
                                                        key={skill}
                                                        initial={{ opacity: 0, scale: 0.8 }}
                                                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                                        transition={{
                                                            delay: index * 0.3 + 0.5 + idx * 0.05,
                                                            type: "spring",
                                                            stiffness: 400,
                                                            damping: 10
                                                        }}
                                                        whileHover={{ scale: 1.05, y: -2 }}
                                                        className="px-3 py-1.5 rounded-md bg-background-dark/50 border border-white/10 text-slate-300 text-sm font-medium hover:border-primary/30 hover:bg-primary/5 transition-all cursor-default"
                                                    >
                                                        {skill}
                                                    </motion.span>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Connector Line to Next Item */}
                                {index < educationTimeline.length - 1 && (
                                    <div className="absolute left-8 md:left-12 bottom-0 -translate-x-1/2 translate-y-full h-16 w-px bg-gradient-to-b from-primary/20 to-transparent" />
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Education
