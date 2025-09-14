'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Animation utility functions
export const animations = {
  // Page loading animation
  pageLoad: () => {
    const tl = gsap.timeline();
    
    tl.from('.page-content', {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out'
    })
    .from('.animate-in', {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power2.out'
    }, '-=0.5');
    
    return tl;
  },

  // Text reveal animation
  textReveal: (element, options = {}) => {
    const defaults = {
      duration: 1,
      ease: 'power3.out',
      stagger: 0.05,
      delay: 0
    };
    const config = { ...defaults, ...options };

    return gsap.from(element, {
      opacity: 0,
      y: 50,
      rotationX: -90,
      transformOrigin: 'center bottom',
      duration: config.duration,
      stagger: config.stagger,
      ease: config.ease,
      delay: config.delay
    });
  },

  // Fade in up animation
  fadeInUp: (element, options = {}) => {
    const defaults = {
      duration: 1,
      y: 80,
      ease: 'power3.out',
      delay: 0
    };
    const config = { ...defaults, ...options };

    return gsap.from(element, {
      opacity: 0,
      y: config.y,
      duration: config.duration,
      ease: config.ease,
      delay: config.delay
    });
  },

  // Scale in animation
  scaleIn: (element, options = {}) => {
    const defaults = {
      duration: 0.8,
      scale: 0,
      ease: 'back.out(1.7)',
      delay: 0
    };
    const config = { ...defaults, ...options };

    return gsap.from(element, {
      opacity: 0,
      scale: config.scale,
      duration: config.duration,
      ease: config.ease,
      delay: config.delay
    });
  },

  // Slide in from left
  slideInLeft: (element, options = {}) => {
    const defaults = {
      duration: 1,
      x: -100,
      ease: 'power3.out',
      delay: 0
    };
    const config = { ...defaults, ...options };

    return gsap.from(element, {
      opacity: 0,
      x: config.x,
      duration: config.duration,
      ease: config.ease,
      delay: config.delay
    });
  },

  // Slide in from right
  slideInRight: (element, options = {}) => {
    const defaults = {
      duration: 1,
      x: 100,
      ease: 'power3.out',
      delay: 0
    };
    const config = { ...defaults, ...options };

    return gsap.from(element, {
      opacity: 0,
      x: config.x,
      duration: config.duration,
      ease: config.ease,
      delay: config.delay
    });
  },

  // Stagger animation for multiple elements
  staggerAnimation: (elements, options = {}) => {
    const defaults = {
      duration: 0.8,
      y: 50,
      stagger: 0.1,
      ease: 'power2.out',
      delay: 0
    };
    const config = { ...defaults, ...options };

    return gsap.from(elements, {
      opacity: 0,
      y: config.y,
      duration: config.duration,
      stagger: config.stagger,
      ease: config.ease,
      delay: config.delay
    });
  },

  // Hover animations
  hoverLift: (element) => {
    const tl = gsap.timeline({ paused: true });
    
    tl.to(element, {
      y: -10,
      scale: 1.05,
      duration: 0.3,
      ease: 'power2.out'
    })
    .to(element.querySelector('.glow'), {
      opacity: 1,
      duration: 0.3,
      ease: 'power2.out'
    }, 0);

    return tl;
  },

  // Card flip animation
  flipCard: (element) => {
    const tl = gsap.timeline();
    
    tl.to(element, {
      rotationY: 180,
      duration: 0.6,
      ease: 'power2.inOut'
    });

    return tl;
  },

  // Progress bar animation
  progressBar: (element, percentage, options = {}) => {
    const defaults = {
      duration: 2,
      ease: 'power2.out',
      delay: 0
    };
    const config = { ...defaults, ...options };

    return gsap.to(element, {
      width: `${percentage}%`,
      duration: config.duration,
      ease: config.ease,
      delay: config.delay
    });
  },

  // Typewriter effect
  typewriter: (element, text, options = {}) => {
    const defaults = {
      duration: 0.05,
      ease: 'none'
    };
    const config = { ...defaults, ...options };

    const chars = text.split('');
    element.textContent = '';
    
    const tl = gsap.timeline();
    
    chars.forEach((char, index) => {
      tl.call(() => {
        element.textContent += char;
      }, [], index * config.duration);
    });

    return tl;
  },

  // Parallax effect
  parallax: (element, options = {}) => {
    const defaults = {
      yPercent: -50,
      ease: 'none'
    };
    const config = { ...defaults, ...options };

    return gsap.to(element, {
      yPercent: config.yPercent,
      ease: config.ease,
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });
  },

  // Magnetic effect
  magnetic: (element, strength = 1) => {
    const moveElement = (e) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = (e.clientX - centerX) * strength * 0.1;
      const deltaY = (e.clientY - centerY) * strength * 0.1;

      gsap.to(element, {
        x: deltaX,
        y: deltaY,
        duration: 0.3,
        ease: 'power2.out'
      });
    };

    const resetElement = () => {
      gsap.to(element, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: 'power2.out'
      });
    };

    element.addEventListener('mousemove', moveElement);
    element.addEventListener('mouseleave', resetElement);

    return {
      destroy: () => {
        element.removeEventListener('mousemove', moveElement);
        element.removeEventListener('mouseleave', resetElement);
      }
    };
  }
};

// Scroll-triggered animations
export const scrollAnimations = {
  // Fade in on scroll
  fadeInOnScroll: (element, options = {}) => {
    const defaults = {
      trigger: element,
      start: 'top 80%',
      end: 'bottom 20%',
      duration: 1,
      y: 50
    };
    const config = { ...defaults, ...options };

    return gsap.fromTo(element, 
      {
        opacity: 0,
        y: config.y
      },
      {
        opacity: 1,
        y: 0,
        duration: config.duration,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: config.trigger,
          start: config.start,
          end: config.end,
          toggleActions: 'play none none reverse'
        }
      }
    );
  },

  // Reveal on scroll
  revealOnScroll: (element, direction = 'up', options = {}) => {
    const defaults = {
      trigger: element,
      start: 'top 80%',
      duration: 1
    };
    const config = { ...defaults, ...options };

    const fromVars = { opacity: 0 };
    const toVars = { opacity: 1, ease: 'power3.out', duration: config.duration };

    switch (direction) {
      case 'up':
        fromVars.y = 80;
        toVars.y = 0;
        break;
      case 'down':
        fromVars.y = -80;
        toVars.y = 0;
        break;
      case 'left':
        fromVars.x = -80;
        toVars.x = 0;
        break;
      case 'right':
        fromVars.x = 80;
        toVars.x = 0;
        break;
      case 'scale':
        fromVars.scale = 0;
        toVars.scale = 1;
        break;
    }

    return gsap.fromTo(element, fromVars, {
      ...toVars,
      scrollTrigger: {
        trigger: config.trigger,
        start: config.start,
        toggleActions: 'play none none reverse'
      }
    });
  },

  // Counter animation
  counterAnimation: (element, endValue, options = {}) => {
    const defaults = {
      duration: 2,
      ease: 'power2.out',
      trigger: element,
      start: 'top 80%'
    };
    const config = { ...defaults, ...options };

    const obj = { value: 0 };
    
    return gsap.to(obj, {
      value: endValue,
      duration: config.duration,
      ease: config.ease,
      onUpdate: () => {
        element.textContent = Math.floor(obj.value);
      },
      scrollTrigger: {
        trigger: config.trigger,
        start: config.start,
        toggleActions: 'play none none reverse'
      }
    });
  }
};

// Utility hooks for React components
export const useGSAP = () => {
  return { animations, scrollAnimations };
};

// Intersection Observer utility for triggering animations
export const createIntersectionObserver = (callback, options = {}) => {
  const defaults = {
    threshold: 0.1,
    rootMargin: '0px 0px -10% 0px'
  };
  const config = { ...defaults, ...options };

  return new IntersectionObserver(callback, config);
};

export default animations;