'use client';

import React, { useEffect, useRef, useState } from 'react';
import { FaCode, FaBars, FaTimes } from 'react-icons/fa';
import { gsap } from 'gsap';
import { handleNavClick } from '../utils/smoothScroll';
import Link from 'next/link';
import { useRouter } from "next/navigation"; // or next/router if using pages router

const Header = () => {
  const headerRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1 } });

      tl.from('.header_div', {
        opacity: 0,
        y: -50,
        delay: 0.2,
        duration: 0.8,
        scale: 0.9
      })
        .from(".header_Icon", {
          opacity: 0,
          rotation: -180,
          scale: 0,
          duration: 0.8,
          ease: 'back.out(1.7)'
        }, '-=0.5')
        .from(".header_text", {
          opacity: 0,
          x: -30,
          duration: 0.8
        }, '-=0.6')
        .from(".nav-item", {
          opacity: 0,
          y: -20,
          duration: 0.6,
          stagger: 0.1
        }, '-=0.4');

    }, headerRef);

    return () => ctx.revert();
  }, []);

  // Handle scroll for auto-hide functionality
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Only start hiding after scrolling past 100px
      if (currentScrollY < 100) {
        setIsVisible(true);
      } else {
        // Show header when scrolling up, hide when scrolling down
        if (currentScrollY < lastScrollY) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const router = useRouter();

  // Handle hash-based navigation on page load
  useEffect(() => {
    const handleHashNavigation = () => {
      const hash = window.location.hash;
      if (hash) {
        const sectionId = hash.substring(1); // Remove the # symbol
        const element = document.getElementById(sectionId);
        if (element) {
          // Add a delay to ensure the page is fully loaded
          setTimeout(() => {
            element.scrollIntoView({ behavior: "smooth" });
          }, 100);
        }
      }
    };

    // Handle initial page load with hash
    handleHashNavigation();

    // Handle browser back/forward navigation
    window.addEventListener('hashchange', handleHashNavigation);

    return () => {
      window.removeEventListener('hashchange', handleHashNavigation);
    };
  }, []);

  const handleNavigation = (e, sectionId) => {
    e.preventDefault();

    if (window.location.pathname === "/") {
      // Already on homepage → smooth scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Navigate to homepage with hash and scroll after navigation
      router.push(`/#${sectionId}`);
      // Add a small delay to ensure page loads before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };
  const navItems = [
    { href: "/#about", label: "About", id: "about" },
    { href: "/#rapidfire", label: "Rapidfire", id: "rapidfire" },
    { href: "/#skills", label: "Skills", id: "skills" },
    { href: "/#projects", label: "Projects", id: "projects" },
    { href: "/#contact", label: "Contact", id: "contact" }
  ];


  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 glass border-b border-[var(--border)] backdrop-blur-md transition-transform duration-300 ease-in-out ${isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="header_div flex items-center">
            <div className="header_Icon w-12 h-12 rounded-xl glass border border-[var(--border)] flex items-center justify-center mr-4">
              <FaCode
                className="text-2xl"
                style={{ color: 'var(--primary)' }}
              />
            </div>
            <Link href={"/"} >
              <h1 className="header_text text-2xl font-bold text-[var(--foreground)]">
                <span className="text-gradient">Anees-ur-Rehman</span>
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex">
            <ul className="flex space-x-8">
              {navItems.map((item, index) => (
                <li key={index} className="nav-item">
                  <a
                    href={item.href}
                    onClick={(e) => handleNavigation(e, item.id)}
                    className="relative text-[var(--foreground)] hover:text-[var(--primary)] transition-all duration-300 font-medium group cursor-pointer"
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className='authButtons ml-6 flex space-x-4 hidden md:flex'>
            <Link className='px-4 py-2 rounded-lg glass border border-[var(--border)] text-[var(--foreground)] hover:bg-[var(--background-secondary)] hover:text-[var(--primary)] transition-all duration-300' href={"/login"}>Login</Link>
            <Link className='px-4 py-2 rounded-lg glass border border-[var(--border)] text-[var(--foreground)] hover:bg-[var(--background-secondary)] hover:text-[var(--primary)] transition-all duration-300' href={'/signup'} >Sign Up</Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden w-10 h-10 rounded-lg glass border border-[var(--border)] flex items-center justify-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <FaTimes className="text-xl text-[var(--foreground)]" />
            ) : (
              <FaBars className="text-xl text-[var(--foreground)]" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-[var(--border)]">
            <ul className="space-y-2">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      handleNavigation(e, item.id);
                      setIsMenuOpen(false);
                    }}
                    className="block py-2 px-4 text-[var(--foreground)] hover:text-[var(--primary)] hover:bg-[var(--background-secondary)] rounded-lg transition-all duration-300 cursor-pointer"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Mobile Auth Buttons */}
            <div className="mt-4 pt-4 border-t border-[var(--border)] flex flex-col space-y-2">
              <Link
                href="/login"
                className="block py-2 px-4 text-center rounded-lg glass border border-[var(--border)] text-[var(--foreground)] hover:bg-[var(--background-secondary)] hover:text-[var(--primary)] transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="block py-2 px-4 text-center rounded-lg glass border border-[var(--border)] text-[var(--foreground)] hover:bg-[var(--background-secondary)] hover:text-[var(--primary)] transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign Up
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
