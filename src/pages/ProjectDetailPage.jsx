import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  ArrowLeft, 
  ExternalLink, 
  Github, 
  Heart, 
  ShoppingBag, 
  Gamepad2, 
  BookOpen,
  AlertTriangle,
  Lightbulb,
  Code,
  Globe
} from 'lucide-react'

const ProjectDetailPage = () => {
  const { projectId } = useParams()
  const [project, setProject] = useState(null)

  // Project data (in a real app, this would come from an API or context)
  const projectsData = {
    'blood-donation-platform': {
      id: 'blood-donation-platform',
      title: 'Blood Donation Platform',
      description: 'A comprehensive real-time platform designed to bridge the gap between blood donors and patients in urgent need. The application features sophisticated geolocation-based matching algorithms, real-time appointment scheduling, emergency alert systems, and secure user authentication.',
      image: 'https://images.unsplash.com/photo-1615461066841-6116e61058f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
      icon: Heart,
      tech: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Express.js', 'JWT', 'Mongoose', 'Bcrypt'],
      liveUrl: 'https://snazzy-salamander-1be15f.netlify.app/',
      githubUrl: 'https://github.com/mehedihasan53/blood-donation-client',
      challenges: [
        'Implementing real-time notifications for urgent blood requests using Socket.io',
        'Designing an efficient geolocation-based donor matching algorithm',
        'Ensuring data privacy and security for sensitive medical information',
        'Creating a responsi