'use client'

import Link from 'next/link';
import React from 'react'
import { FaEye, FaEyeSlash, FaGithub, FaGoogle, FaTwitter } from 'react-icons/fa';

function LoginPage() {
  const [isPasswordShown, setIsPasswordShown] = React.useState(true);


  // const 

  return (
    <div className="min-h-screen pt-20 pb-10">
      <div className="max-w-md mx-auto px-4">
        <div className="glass mt-20 border border-[var(--border)] rounded-xl p-8">
          <h1 className="text-2xl font-bold text-center mb-6 text-[var(--foreground)]">
            Login
          </h1>
          <div className="input-fields">
            <div className="email">
              <label className="block text-[var(--foreground)] mb-2" htmlFor="email">Email</label>
              <input className="w-full p-2 rounded-lg border border-[var(--border)] bg-[var(--background-secondary)] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]" type="email" id="email" name="email" placeholder="please enter your email" />
            </div>
            <div className="password mt-4 relative">
              <label className="block text-[var(--foreground)] mb-2" htmlFor="password">Password</label>
              <input type={`${isPasswordShown ? "text" : "password"}`} className='w-full p-2 rounded-lg border border-[var(--border)] bg-[var(--background-secondary)] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]' />
              <button className='toggleButton absolute right-2 top-1/2 transform translate-y-1/2 text-[var(--foreground)]'>
                {isPasswordShown ? <FaEye onClick={() => setIsPasswordShown(!isPasswordShown)} /> : <FaEyeSlash onClick={() => setIsPasswordShown(!isPasswordShown)} style={{ opacity: 0.5 }} />}
              </button>
            </div>
            <div className="submit mt-6">
              <button className="w-full cursor-pointer py-2 rounded-lg bg-[var(--primary)] text-white font-semibold hover:bg-[var(--primary-dark)] transition-colors duration-300">Login</button>
            </div>
            <div className="mt-4 text-center">
              <p className="text-[var(--muted-foreground)]">Don&apos;t have an account? <Link href="/signup" className="text-[var(--primary)] hover:underline">Sign Up</Link></p>
            </div>
            <div className="otherAuthPlatforms">
              <div className="googleAuth">
                <button className='w-full cursor-pointer mt-4 py-2 rounded-lg border border-[var(--border)] bg-[var(--background-secondary)] text-[var(--foreground)] font-semibold hover:bg-[var(--background)] transition-colors duration-300 flex items-center justify-center space-x-2'>
                  <FaGoogle/>
                  <span>Continue with Google</span>
                </button>
              </div>
              <div className="githubAuth">
                <button className='w-full cursor-pointer mt-4 py-2 rounded-lg border border-[var(--border)] bg-[var(--background-secondary)] text-[var(--foreground)] font-semibold hover:bg-[var(--background)] transition-colors duration-300 flex items-center justify-center space-x-2'>
                  <FaGithub/>
                  <span>Continue with GitHub</span>
                </button>
              </div>
              <div className="twitterAuth">
                <button className='w-full cursor-pointer mt-4 py-2 rounded-lg border border-[var(--border)] bg-[var(--background-secondary)] text-[var(--foreground)] font-semibold hover:bg-[var(--background)] transition-colors duration-300 flex items-center justify-center space-x-2'>
                  <FaTwitter/>
                  <span>Continue with Twitter</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage