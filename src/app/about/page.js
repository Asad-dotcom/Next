import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function About() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <Header />

      {/* About Hero */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-700 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-indigo-100">Learn more about our mission, vision, and the team behind our success</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Our Story</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Founded in 2020, we started with a simple idea: make web development accessible to everyone. What began as a small project has grown into a platform trusted by thousands of developers worldwide.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Our journey has been driven by innovation, dedication, and a commitment to excellence. We believe in creating tools that empower creators to build amazing digital experiences.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Today, we continue to push boundaries and redefine what's possible in web development.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 h-80 rounded-2xl"></div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-lg">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Our Mission</h3>
              <p className="text-gray-600 dark:text-gray-300">
                To democratize web development by providing powerful, intuitive tools that enable anyone to bring their ideas to life without barriers.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-lg">
              <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">🚀</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Our Vision</h3>
              <p className="text-gray-600 dark:text-gray-300">
                To become the world's leading platform for web creation, fostering a global community of innovators and creators shaping the future of the internet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">Our Core Values</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💡</span>
              </div>
              <h4 className="font-semibold text-lg mb-2 text-gray-800 dark:text-white">Innovation</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Constantly pushing boundaries</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h4 className="font-semibold text-lg mb-2 text-gray-800 dark:text-white">Integrity</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Honest and transparent always</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⭐</span>
              </div>
              <h4 className="font-semibold text-lg mb-2 text-gray-800 dark:text-white">Excellence</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Delivering quality in everything</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">❤️</span>
              </div>
              <h4 className="font-semibold text-lg mb-2 text-gray-800 dark:text-white">Community</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Growing together as one</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              { name: 'Alex Johnson', role: 'CEO & Founder', color: 'bg-blue-500' },
              { name: 'Sarah Williams', role: 'CTO', color: 'bg-purple-500' },
              { name: 'Michael Chen', role: 'Lead Designer', color: 'bg-green-500' },
              { name: 'Emily Davis', role: 'Head of Marketing', color: 'bg-pink-500' },
            ].map((member, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 rounded-xl p-6 text-center shadow-md">
                <div className={`w-24 h-24 ${member.color} rounded-full mx-auto mb-4`}></div>
                <h4 className="font-semibold text-lg text-gray-800 dark:text-white">{member.name}</h4>
                <p className="text-gray-500 dark:text-gray-400">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4">Want to Join Our Journey?</h2>
          <p className="text-xl mb-8 text-blue-100">We're always looking for talented people to join our team</p>
          <button className="bg-white text-blue-600 px-10 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition">
            View Open Positions
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}