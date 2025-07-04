import { Variants } from 'framer-motion'

// About

export const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
}

export const textVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

// Skills

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2,
    },
  },
}

export const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
}

// Timeline
export const itemVariantsTimeline = {
  hidden: {
    opacity: 0,
    y: 60,
    x: -30,
    scale: 0.8,
    rotateY: -15,
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    rotateY: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
      type: 'spring',
      stiffness: 100,
      damping: 15,
    },
  },
}

export const iconVariants = {
  hidden: {
    scale: 0,
    rotate: -180,
    opacity: 0,
  },
  visible: {
    scale: 1,
    rotate: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 260,
      damping: 20,
      delay: 0.3,
    },
  },
}

export const lineVariants = {
  hidden: {
    scaleY: 0,
    opacity: 0,
  },
  visible: {
    scaleY: 1,
    opacity: 1,
    transition: {
      duration: 1,
      ease: 'easeInOut',
      delay: 0.6,
    },
  },
}

export const cardHoverVariants = {
  hover: {
    y: -8,
    scale: 1.02,
    rotateX: 2,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
}

export const glowVariants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: {
    opacity: [0, 0.6, 0],
    scale: [0.8, 1.2, 0.8],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

/////
export const smoothTransition = {
  hidden: {
    opacity: 0.5,
    transition: {
      delay: 0,
      duration: 1,
      type: 'spring',
      stiffness: 30,
      damping: 20,
      mass: 0.5,
    },
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0,
      duration: 0.5,
      type: 'spring',
      stiffness: 50,
      damping: 20,
      mass: 0.5,
    },
  },
}

export const smoothScale = {
  initial: { scale: 1.5, opacity: 0 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.5,
      duration: 0.3,
      type: 'spring',
      stiffness: 30,
      damping: 20,
      mass: 0.5,
    },
  },
}

export const letterVariant = {
  hidden: { x: -100, opacity: 0 },
  visible: (delay: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: delay,
      duration: 0.5,
      type: 'spring',
      stiffness: 50,
      damping: 20,
    },
  }),
}

export const fadeInFromX = {
  hidden: {
    opacity: 0,
    y: 100,
  },

  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2 * index,
      stiffness: 20,
      damping: 10,
      mass: 0.2,
    },
  }),
}
export const fadeInFromNegativeX = {
  hidden: {
    opacity: 0,
    x: -50,
  },

  visible: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.3 * index,
      stiffness: 10,
      damping: 5,
      mass: 0.2,
    },
  }),
}

export const fadeInFromY = {
  hidden: {
    opacity: 0,
    y: 100,
    scale: 0.95,
  },

  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4 * index,
      ease: 'easeOut',
    },
  }),
}

export const fadeInSlider = {
  hidden: {
    opacity: 0,
    x: 100,
  },

  visible: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.1 * index,
      type: 'spring',
      stiffness: 5,
      damping: 5,
      mass: 0.5,
    },
  }),
}

export function underlineVariant(duration: number) {
  return {
    hidden: { width: 0 },
    visible: {
      width: '100%',
      transition: {
        delay: 0.5,
        duration: duration,
        type: 'tween',
        ease: 'easeInOut',
      },
    },
  }
}
export function underlineHeight(duration: number) {
  return {
    hidden: { height: 0 },
    visible: {
      height: '90%',
      transition: {
        delay: 0.5,
        duration: duration,
        type: 'tween',
        ease: 'easeInOut',
      },
    },
  }
}

export function getTransitionProps(delay: number) {
  return {
    transition: {
      delay: delay,
      duration: 0.1, // Increase duration for a smoother transition
      type: 'spring',
      stiffness: 20, // Lower stiffness for a smoother, less rigid spring
      damping: 10, // Increase damping to reduce oscillation
      mass: 0.2, // Adjust mass to control the inertia of the spring
    },
  }
}

export function slideInFromLeft(delay: number): Variants {
  return {
    hidden: {
      x: -100,
      opacity: 0,
      transition: {
        delay: 0,
        duration: 0.3,
        type: 'spring',
        stiffness: 50,
        damping: 20,
        mass: 0.5,
      },
    },
    visible: {
      x: 0,
      opacity: 1,
      ...getTransitionProps(delay),
    },
  }
}
export function slideInFromRight(delay: number) {
  return {
    hidden: {
      x: 100,
      opacity: 0,
      transition: {
        delay: 0,
        duration: 0.3,
        type: 'spring',
        stiffness: 50,
        damping: 20,
        mass: 0.5,
      },
    },
    visible: {
      x: 0,
      opacity: 1,
      ...getTransitionProps(delay),
    },
  }
}

export function slideInFromTop(delay: number) {
  return {
    hidden: {
      y: -100,
      opacity: 0,
      transition: {
        delay: 0,
        duration: 0.3,
        type: 'spring',
        stiffness: 50,
        damping: 20,
        mass: 0.5,
      },
    },
    visible: {
      y: 0,
      opacity: 1,
      ...getTransitionProps(delay),
    },
  }
}

export function slideInFromBottom(delay: number) {
  return {
    hidden: {
      y: 80,
      opacity: 0,
      transition: {
        delay: 0,
        duration: 0.1,
        type: 'spring',
        stiffness: 40,
        damping: 20,
        mass: 0.5,
      },
    },
    visible: {
      y: 0,
      opacity: 1,
      ...getTransitionProps(delay),
    },
  }
}

export function fadeIn(delay: number) {
  return {
    hidden: {
      opacity: 0,
      transition: {
        delay: 0,
        duration: 0.1,
        type: 'spring',
        stiffness: 20,
        damping: 80,
        mass: 0.5,
      },
    },
    visible: {
      opacity: 1,
      ...getTransitionProps(delay),
    },
  }
}

export const fadeInSkills = {
  hidden: {
    opacity: 0,
    y: 100,
  },

  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index,
      type: 'spring',
      stiffness: 40,
      damping: 20,
      mass: 1,
    },
  }),
}

// <motion.div
// key={item._id}
// ref={ref}
// initial={{ opacity: 0, y: 20 }}
// animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
// transition={{ delay: index * animationDelay, duration: 0.5 }}
// >
// {/* Product card content */}
// </motion.div>
