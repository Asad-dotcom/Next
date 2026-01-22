import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-gray-300 py-12'>
      <div className='container mx-auto px-6'>
        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8'>
          
          <div>
            <h3 className='text-white font-semibold mb-4'>Company</h3>
            <ul className='space-y-2'>
              <li><a href='#' className='hover:text-white transition'>About Us</a></li>
              <li><a href='#' className='hover:text-white transition'>Careers</a></li>
              <li><a href='#' className='hover:text-white transition'>Press</a></li>
              <li><a href='#' className='hover:text-white transition'>Blog</a></li>
              <li><a href='#' className='hover:text-white transition'>Partners</a></li>
            </ul>
          </div>

          <div>
            <h3 className='text-white font-semibold mb-4'>Products</h3>
            <ul className='space-y-2'>
              <li><a href='#' className='hover:text-white transition'>Features</a></li>
              <li><a href='#' className='hover:text-white transition'>Pricing</a></li>
              <li><a href='#' className='hover:text-white transition'>Enterprise</a></li>
              <li><a href='#' className='hover:text-white transition'>Security</a></li>
              <li><a href='#' className='hover:text-white transition'>Integrations</a></li>
            </ul>
          </div>

          <div>
            <h3 className='text-white font-semibold mb-4'>Resources</h3>
            <ul className='space-y-2'>
              <li><a href='#' className='hover:text-white transition'>Documentation</a></li>
              <li><a href='#' className='hover:text-white transition'>Tutorials</a></li>
              <li><a href='#' className='hover:text-white transition'>API Reference</a></li>
              <li><a href='#' className='hover:text-white transition'>Community</a></li>
              <li><a href='#' className='hover:text-white transition'>Webinars</a></li>
            </ul>
          </div>

          <div>
            <h3 className='text-white font-semibold mb-4'>Support</h3>
            <ul className='space-y-2'>
              <li><a href='#' className='hover:text-white transition'>Help Center</a></li>
              <li><a href='#' className='hover:text-white transition'>Contact Us</a></li>
              <li><a href='#' className='hover:text-white transition'>Status</a></li>
              <li><a href='#' className='hover:text-white transition'>FAQ</a></li>
              <li><a href='#' className='hover:text-white transition'>Live Chat</a></li>
            </ul>
          </div>

          <div>
            <h3 className='text-white font-semibold mb-4'>Legal</h3>
            <ul className='space-y-2'>
              <li><a href='#' className='hover:text-white transition'>Privacy Policy</a></li>
              <li><a href='#' className='hover:text-white transition'>Terms of Service</a></li>
              <li><a href='#' className='hover:text-white transition'>Cookie Policy</a></li>
              <li><a href='#' className='hover:text-white transition'>GDPR</a></li>
              <li><a href='#' className='hover:text-white transition'>Licenses</a></li>
            </ul>
          </div>

        </div>

        <div className='border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center'>
          <p className='text-sm'>© 2026 Company. All rights reserved.</p>
          <div className='flex space-x-4 mt-4 md:mt-0'>
            <a href='#' className='hover:text-white transition'>Twitter</a>
            <a href='#' className='hover:text-white transition'>LinkedIn</a>
            <a href='#' className='hover:text-white transition'>GitHub</a>
            <a href='#' className='hover:text-white transition'>YouTube</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer