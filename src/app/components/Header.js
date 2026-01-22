import React from 'react'
import Link from 'next/link'
const Header = () => {
  return (
    <header className='bg-rose-50 shadow-md'>
      <nav className='container mx-auto px-6 py-4'>
        <div className='flex items-center justify-between'>
          <div className='text-2xl font-bold text-gray-800'>
            Logo
          </div>
          
          <div className='hidden md:flex space-x-8'>
            <Link href='/' className='text-gray-700 hover:text-blue-600 transition'>Home</Link>
            <Link href='/about' className='text-gray-700 hover:text-blue-600 transition'>About</Link>
            <Link href='#' className='text-gray-700 hover:text-blue-600 transition'>Services</Link>
            <Link href='/products' className='text-gray-700 hover:text-blue-600 transition'>Products</Link>
            <Link href='#' className='text-gray-700 hover:text-blue-600 transition'>Contact</Link>
            <Link href='#' className='text-gray-700 hover:text-blue-600 transition'>Blog</Link>
          </div>
          
          <div className='hidden md:flex space-x-4'>
            <Link href="/login">
              <button className='px-4 py-2 text-gray-700 hover:text-blue-600 transition'>
                Login
              </button>
            </Link>
            
            <Link href="/signup">
            <button className='px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition'>
              Sign Up
            </button></Link>
          </div>
          
          <button className='md:hidden text-gray-700'>
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header