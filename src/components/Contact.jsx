import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import emailjs from '@emailjs/browser'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, Send, Github, Linkedin, Facebook, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const Contact = () => {
  const sectionRef = useRef(null)
  const formRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [formStatus, setFormStatus] = useState({
    loading: false,
    success: false,
    error: false,
    message: ''
  })

  // EmailJS configuration
  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_portfolio'
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_contact'
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'your_public_key'

  useEffect(() => {
    // Initialize EmailJS
    emailjs.init(EMAILJS_PUBLIC_KEY)
    
    const ctx = gsap.context(() => {
      // Form animation
      gsap.fromTo(formRef.current,
        { x: 100, opacity: 0, rotateY: 15 },
        {
          x: 0,
          opacity: 1,
          rotateY: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
          }
        }
      )

      // Contact info animation
      gsap.fromTo('.contact-info',
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.contact-info',
            start: 'top 80%',
          }
        }
      )

      // Social links animation
      gsap.fromTo('.social-link',
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: '.social-link',
            start: 'top 90%',
          }
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    
    // Clear any previous status when user starts typing
    if (formStatus.success || formStatus.error) {
      setFormStatus({
        loading: false,
        success: false,
        error: false,
        message: ''
      })
    }
  }

  const validateForm = () => {
    if (!formData.name.trim()) {
      setFormStatus({
        loading: false,
        success: false,
        error: true,
        message: 'Please enter your name'
      })
      return false
    }
    
    if (!formData.email.trim()) {
      setFormStatus({
        loading: false,
        success: false,
        error: true,
        message: 'Please enter your email'
      })
      return false
    }
    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setFormStatus({
        loading: false,
        success: false,
        error: true,
        message: 'Please enter a valid email address'
      })
      return false
    }
    
    if (!formData.subject.trim()) {
      setFormStatus({
        loading: false,
        success: false,
        error: true,
        message: 'Please enter a subject'
      })
      return false
    }
    
    if (!formData.message.trim()) {
      setFormStatus({
        loading: false,
        success: false,
        error: true,
        message: 'Please enter your message'
      })
      return false
    }
    
    return true
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    // Check if EmailJS is properly configured
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY || 
        EMAILJS_PUBLIC_KEY === 'your_public_key') {
      
      // Fallback to mailto
      const subject = encodeURIComponent(formData.subject)
      const body = encodeURIComponent(`Hi Mehedi,

${formData.message}

Best regards,
${formData.name}
${formData.email}`)
      
      window.open(`mailto:mehedihasan.codes3@gmail.com?subject=${subject}&body=${body}`, '_self')
      
      setFormStatus({
        loading: false,
        success: true,
        error: false,
        message: 'Opening your email client to send the message...'
      })
      return
    }

    setFormStatus({
      loading: true,
      success: false,
      error: false,
      message: 'Sending your message...'
    })

    try {
      // EmailJS template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'mehedihasan.codes3@gmail.com',
        reply_to: formData.email
      }

      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      )

      if (response.status === 200) {
        setFormStatus({
          loading: false,
          success: true,
          error: false,
          message: 'Message sent successfully! I\'ll get back to you soon.'
        })
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        })
      }
    } catch (error) {
      console.error('EmailJS Error Details:', error)
      console.error('Error status:', error.status)
      console.error('Error text:', error.text)
      
      // Fallback to mailto on error
      const subject = encodeURIComponent(formData.subject)
      const body = encodeURIComponent(`Hi Mehedi,

${formData.message}

Best regards,
${formData.name}
${formData.email}`)
      
      window.open(`mailto:mehedihasan.codes3@gmail.com?subject=${subject}&body=${body}`, '_self')
      
      setFormStatus({
        loading: false,
        success: true,
        error: false,
        message: 'Opening your email client to send the message...'
      })
    }
  }

  const socialLinks = [
    { icon: Github, href: 'https://github.com/mehedihasan53', label: 'GitHub', color: 'hover:bg-primary' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/mehedi-hasan-c3/', label: 'LinkedIn', color: 'hover:bg-[#0077b5]' },
    { icon: Facebook, href: 'https://www.facebook.com/mehadi.hassan.1153/', label: 'Facebook', color: 'hover:bg-[#1877F2]' },
  ]

  return (
    <section id="contact" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-screen flex items-center">
      {/* Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay"
          style={{
            backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAFxN1E413YPaJwNW501goQVHI05UyQnVWOmDohBnhS4hjViy_sLsuqCWFo7D5T6WXNSYDu5FRW1dDh4ax4xdwZd8aZR0QIF7TsuVrrm4YcNom569ccalmmtFtA7XwWmfyMV98AvdO8283YXC_aRlr6YOwhyljBUxHriOGv4KKUX1UNEhxJcQaMmI9mfd07JyyGTVDmShyoCWI0xgW5lfA5GWjSMRnYeQVF2qP9yNdkdMfQwVmYqpF0Pnwyc-UNpectsxyl8Rffntk')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background-dark via-background-dark/90 to-background-dark" />
        <div className="absolute inset-0 bg-hero-glow animate-pulse" style={{ animationDuration: '4s' }} />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-20">
          {/* Left Column - Contact Info */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left pt-4">
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="contact-info mb-6"
            >
              <Badge variant="skill" className="animate-float px-4 py-2 gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                </span>
                Contact
              </Badge>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="contact-info text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter mb-6 leading-tight drop-shadow-2xl"
            >
              Let's Start a <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
                Conversation
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="contact-info text-slate-400 text-base md:text-lg max-w-lg mb-10 leading-relaxed font-light"
            >
              Interested in working together? Whether you have a project in mind or just want to say hello, 
              I'm always open to discussing new ideas and opportunities.
            </motion.p>

            {/* Email Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="contact-info w-full max-w-md mb-8"
            >
              <Card 
                className="bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer group"
                onClick={() => window.open('mailto:mehedihasan.codes3@gmail.com', '_self')}
              >
                <CardContent className="p-4 flex items-center gap-4">
                  <motion.div 
                    className="size-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all shadow-inner shadow-white/5"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Mail className="h-5 w-5" />
                  </motion.div>
                  <div className="flex flex-col text-left">
                    <span className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-0.5">
                      Mail me at
                    </span>
                    <span className="text-sm md:text-base text-white font-medium break-all">
                      mehedihasan.codes3@gmail.com
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1 }}
              className="contact-info w-full flex flex-col gap-4 items-center lg:items-start"
            >
              <span className="text-xs text-slate-500 font-medium uppercase tracking-wider">
                Connect with me
              </span>
              <div className="flex items-center gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className={`social-link p-3 rounded-full bg-white/5 text-slate-400 hover:text-white hover:scale-110 transition-all border border-white/5 ${social.color}`}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    title={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
            <Card ref={formRef} className="bg-white/5 border-white/10 backdrop-blur-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
              
              <CardContent className="p-6 md:p-8 relative z-10">
                {/* Status Message */}
                {(formStatus.success || formStatus.error || formStatus.loading) && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`mb-6 p-4 rounded-lg border flex items-center gap-3 ${
                      formStatus.success 
                        ? 'bg-green-500/10 border-green-500/20 text-green-400' 
                        : formStatus.error 
                        ? 'bg-red-500/10 border-red-500/20 text-red-400'
                        : 'bg-blue-500/10 border-blue-500/20 text-blue-400'
                    }`}
                  >
                    {formStatus.loading && <Loader2 className="h-5 w-5 animate-spin" />}
                    {formStatus.success && <CheckCircle className="h-5 w-5" />}
                    {formStatus.error && <AlertCircle className="h-5 w-5" />}
                    <span className="text-sm font-medium">{formStatus.message}</span>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  {/* Name and Email Row */}
                  <div className="grid md:grid-cols-2 gap-5">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 1.2 }}
                      className="space-y-2"
                    >
                      <label className="text-sm text-slate-400 font-medium ml-1">Name *</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your name"
                        disabled={formStatus.loading}
                        className="bg-background-dark/50 border-white/10 text-white placeholder:text-slate-600 focus:border-primary focus:ring-1 focus:ring-primary hover:border-white/20 disabled:opacity-50 disabled:cursor-not-allowed"
                        required
                      />
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 1.3 }}
                      className="space-y-2"
                    >
                      <label className="text-sm text-slate-400 font-medium ml-1">Email *</label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="email@example.com"
                        disabled={formStatus.loading}
                        className="bg-background-dark/50 border-white/10 text-white placeholder:text-slate-600 focus:border-primary focus:ring-1 focus:ring-primary hover:border-white/20 disabled:opacity-50 disabled:cursor-not-allowed"
                        required
                      />
                    </motion.div>
                  </div>

                  {/* Subject */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 1.4 }}
                    className="space-y-2"
                  >
                    <label className="text-sm text-slate-400 font-medium ml-1">Subject *</label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Project inquiry"
                      disabled={formStatus.loading}
                      className="bg-background-dark/50 border-white/10 text-white placeholder:text-slate-600 focus:border-primary focus:ring-1 focus:ring-primary hover:border-white/20 disabled:opacity-50 disabled:cursor-not-allowed"
                      required
                    />
                  </motion.div>

                  {/* Message */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 1.5 }}
                    className="space-y-2"
                  >
                    <label className="text-sm text-slate-400 font-medium ml-1">Message *</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project..."
                      rows={5}
                      disabled={formStatus.loading}
                      className="bg-background-dark/50 border-white/10 text-white placeholder:text-slate-600 focus:border-primary focus:ring-1 focus:ring-primary hover:border-white/20 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                      required
                    />
                  </motion.div>

                  {/* Submit Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 1.6 }}
                  >
                    <Button 
                      type="submit" 
                      disabled={formStatus.loading}
                      className="mt-2 w-full group shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 active:translate-y-0 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                    >
                      {formStatus.loading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </>
                      )}
                    </Button>
                  </motion.div>

                  {/* Helper Text */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 1.8 }}
                    className="text-xs text-slate-500 text-center mt-2"
                  >
                    * Required fields. Your message will be sent directly to mehedihasan.codes3@gmail.com
                  </motion.p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact