'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { gsap } from 'gsap';

// Safely register GSAP plugins
let ScrollTrigger;
if (typeof window !== 'undefined') {
  ScrollTrigger = require('gsap/ScrollTrigger').ScrollTrigger;
  gsap.registerPlugin(ScrollTrigger);
}

const AnimatedLayout = ({ children }) => {
  const containerRef = useRef(null);
  const gridRef = useRef(null);
  const pageLoaderRef = useRef(null);
  const [isNavigating, setIsNavigating] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const isClient = typeof window !== 'undefined';
  const pathname = usePathname();

  // Handle page load animation
  useEffect(() => {
    if (!isClient) return;
    
    // Wait for DOM to be ready to prevent hydration mismatches
    const timer = setTimeout(() => {
      const pageLoader = pageLoaderRef.current;
      if (!pageLoader || isLoaded) return;

      // Initial page load animation
      const tl = gsap.timeline();
      
      tl.set(pageLoader, { opacity: 1 })
        .to(pageLoader, { 
          opacity: 0, 
          duration: 0.5, 
          delay: 0.5,
          onComplete: () => {
            setIsLoaded(true);
            // Safely hide instead of removing to prevent DOM errors
            if (pageLoader) {
              pageLoader.style.display = 'none';
            }
          }
        })
        .from('.page-content', {
          opacity: 0,
          y: 50,
          duration: 1,
          ease: 'power3.out'
        }, '-=0.3');
    }, 100);

    // Cleanup
    return () => {
      clearTimeout(timer);
    };
  }, [isClient, pathname]); // Re-run on pathname change

  // Handle navigation changes
  useEffect(() => {
    setIsNavigating(true);
    const timer = setTimeout(() => {
      setIsNavigating(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    if (!isClient) return;

    // Mouse movement parallax effect
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      const moveX = (clientX - centerX) * 0.01;
      const moveY = (clientY - centerY) * 0.01;

      // Check if floating elements exist before animating
      const floatingElements = document.querySelectorAll('.floating-element');
      if (floatingElements.length > 0) {
        gsap.to('.floating-element', {
          x: moveX,
          y: moveY,
          duration: 1,
          ease: 'power2.out'
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isClient]);

  return (
    <>
      {/* Page Loader */}
      <div 
        ref={pageLoaderRef}
        className="page-loader fixed inset-0 bg-[var(--background)] z-50 flex items-center justify-center"
        style={{ display: isLoaded ? 'none' : 'flex' }}
      >
        <div className="relative">
          <div className="spinner glow-primary"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 bg-[var(--primary)] rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Animated Grid Background */}
      <div ref={gridRef} className="grid-bg"></div>

      {/* Floating Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-[-1]">
        <div className="floating-element absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-[var(--primary)] to-transparent rounded-full opacity-10 blur-xl"></div>
        <div className="floating-element absolute top-40 right-40 w-24 h-24 bg-gradient-to-r from-[var(--secondary)] to-transparent rounded-full opacity-15 blur-lg"></div>
        <div className="floating-element absolute bottom-40 left-1/3 w-40 h-40 bg-gradient-to-r from-[var(--accent)] to-transparent rounded-full opacity-8 blur-2xl"></div>
        <div className="floating-element absolute bottom-20 right-20 w-20 h-20 bg-gradient-to-r from-[var(--warning)] to-transparent rounded-full opacity-12 blur-lg"></div>
      </div>

      {/* Page Content */}
      <div ref={containerRef} className="page-content relative z-10">
        {children}
      </div>

      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 h-1 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] z-50 transform origin-left scale-x-0" 
           style={{
             transformOrigin: 'left',
             animation: 'none'
           }}
           id="scroll-progress"></div>

      {/* Custom Cursor */}
      <div className="custom-cursor fixed w-6 h-6 pointer-events-none z-50 mix-blend-difference">
        <div className="w-full h-full bg-white rounded-full transition-transform duration-200 ease-out"></div>
      </div>

      <style jsx>{`
        .custom-cursor {
          transform: translate(-50%, -50%);
        }
        
        .custom-cursor.hover {
          transform: translate(-50%, -50%) scale(1.5);
        }
        
        @media (max-width: 768px) {
          .custom-cursor {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

export default AnimatedLayout;