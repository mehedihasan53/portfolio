import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            setIsComplete(true)
            setTimeout(() => onLoadingComplete(), 500)
          }, 300)
          return 100
        }
        // Realistic loading curve - faster at start, slower at end
        const increment = prev < 50 ? Math.random() * 15 + 5 : Math.random() * 8 + 2
        return Math.min(prev + increment, 100)
      })
    }, 150)

    return () => clearInterval(interval)
  }, [onLoadingComplete])

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-gradient-to-br from-background-dark via-slate-900 to-black flex items-center justify-center"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="relative flex flex-col items-center space-y-8">
            {/* Logo Animation */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              <div className="size-20 bg-gradient-to-br from-white/10 via-white/5 to-transparent rounded-2xl flex items-center justify-center shadow-2xl shadow-black/40 border border-white/10 backdrop-blur-sm">
                <div className="relative w-16 h-16 overflow-hidden rounded-xl">
                  <img 
                    src="https://i.ibb.co.com/Kzxys5nC/logo.jpg" 
                    alt="Loading Logo"
                    className="w-full h-full object-cover object-center"
                    style={{
                      filter: 'contrast(1.2) brightness(1.2) saturate(1.3)',
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/10 rounded-xl opacity-40"></div>
                </div>
              </div>
              
              {/* Rotating Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-2xl border-2 border-transparent border-t-primary/60 border-r-primary/30"
              />
            </motion.div>

            {/* Loading Text */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-center space-y-2"
            >
              <h2 className="text-2xl font-bold text-white">Loading Portfolio</h2>
              <p className="text-slate-400 text-sm">Preparing your experience...</p>
            </motion.div>

            {/* Progress Bar */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "100%", opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="w-80 max-w-sm"
            >
              <div className="relative">
                {/* Progress Track */}
                <div className="h-1 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
                  {/* Progress Fill */}
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary via-blue-400 to-cyan-400 rounded-full relative"
                    style={{ width: `${progress}%` }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                  </motion.div>
                </div>
                
                {/* Progress Percentage */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="flex justify-between items-center mt-2 text-xs text-slate-400"
                >
                  <span>Loading assets...</span>
                  <span className="font-mono">{Math.round(progress)}%</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Floating Particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-primary/40 rounded-full"
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${30 + (i % 2) * 40}%`,
                  }}
                  animate={{
                    y: [-20, 20, -20],
                    opacity: [0.2, 0.8, 0.2],
                    scale: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 3 + i * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.3,
                  }}
                />
              ))}
            </div>

            {/* Loading States Text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="absolute bottom-20 text-center"
            >
              <motion.p
                key={Math.floor(progress / 25)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-xs text-slate-500"
              >
                {progress < 25 && "Initializing components..."}
                {progress >= 25 && progress < 50 && "Loading resources..."}
                {progress >= 50 && progress < 75 && "Preparing interface..."}
                {progress >= 75 && progress < 100 && "Almost ready..."}
                {progress >= 100 && "Welcome!"}
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default LoadingScreen