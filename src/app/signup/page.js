'use client'
import React, { useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from 'react-icons/fa'
import Link from 'next/link';
import { connectToDatabase } from '../../utils/connectToDatabase';
import axios from 'axios';

function SignupPage() {
  const [isPasswordShown, setIsPasswordShown] = useState(true);

  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');


  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.min-h-screen', {
        y: 50,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1
      });
    });
    return () => ctx.revert();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', { fullName, email, password });

    try {
      const response = await axios.post('/api/auth/register', {
        fullName,
        email,
        password
      });
      console.log('User registered successfully:', response.data);
    } catch (error) {
      console.error('Error registering user:', error);
    }
  }

  return (
    <div className="min-h-screen pt-20 pb-10">
      <div className="mt-20 max-w-md mx-auto px-4">
        <div className="glass border border-[var(--border)] rounded-xl p-8">
          <h1 className="text-2xl font-bold text-center mb-6 text-[var(--foreground)]">
            Sign Up
          </h1>
          <div className="signupForm">
            <div className="FormFields">
              <div className="fullName">
                <label className="block text-[var(--foreground)] mb-2" htmlFor="fullName">Full Name</label>
                <input className="w-full p-2 rounded-lg border border-[var(--border)] bg-[var(--background-secondary)] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]" type="text" id="fullName" name="fullName" placeholder="please enter your full name" onChange={(e) => setFullName(e.target.value)} />
              </div>
              <div className="email mt-4">
                <label className="block text-[var(--foreground)] mb-2" htmlFor="email">Email</label>
                <input className="w-full p-2 rounded-lg border border-[var(--border)] bg-[var(--background-secondary)] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]" type="email" id="email" name="email" placeholder="please enter your email" onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="password mt-4 relative">
                <label className="block text-[var(--foreground)] mb-2" htmlFor="password">Password</label>
                <input type={isPasswordShown ? "password" : "text"} className='w-full p-2 rounded-lg border border-[var(--border)] bg-[var(--background-secondary)] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]' onChange={(e) => setPassword(e.target.value)} />
                <button className='absolute cursor-pointer right-4 top-1/2 transform translate-y-1/2 text-[var(--background)]'>
                  {
                    isPasswordShown ? <FaEye onClick={() => setIsPasswordShown(!isPasswordShown)} /> : <FaEyeSlash onClick={() => setIsPasswordShown(!isPasswordShown)} style={{ opacity: 0.5 }} />
                  }
                </button>
              </div>
              <div className="submit mt-6">
                <button className="w-full cursor-pointer py-2 rounded-lg bg-[var(--primary)] text-white font-semibold hover:bg-[var(--primary-dark)] transition-colors duration-300" onClick={onSubmit}>Sign Up</button>
              </div>
              <div className="mt-4 text-center">
                <p className="text-[var(--muted-foreground)]">Already have an account? <Link href="/login" className="text-[var(--primary)] hover:underline">Login</Link></p>
              </div>
            </div>
            <div className="otherAuthGrid grid grid-cols-1 gap-4 mt-6">
              <div className="googleAuth">
                <button className="w-full flex justify-center items-center cursor-pointer py-2 rounded-lg border border-[var(--border)] text-[var(--foreground)] hover:bg-[var(--background-secondary)] transition-colors duration-300"><FaGoogle className="inline mr-2" />Continue with Google</button>
              </div>
              <div className="githubAuth mt-4">
                <button className="w-full flex text-center items-center justify-center cursor-pointer py-2 rounded-lg border border-[var(--border)] text-[var(--foreground)] hover:bg-[var(--background-secondary)] transition-colors duration-300"><FaGithub className="inline mr-2" />Continue with GitHub</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignupPage