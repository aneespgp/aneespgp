import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Anees-ur-Rehman - Full Stack Developer Portfolio',
    short_name: 'Anees Portfolio',
    description: 'Full-stack developer specializing in React, Next.js, Node.js, and MongoDB. Expert in MERN stack with years of freelancing experience.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#3b82f6',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
