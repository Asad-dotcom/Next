import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-24">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Build Something Amazing</h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">Create stunning websites with our powerful platform</p>
          <div className="flex justify-center gap-4">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">Get Started</button>
            <button className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">Learn More</button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">Our Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Lightning Fast</h3>
              <p className="text-gray-600 dark:text-gray-300">Optimized performance for the best user experience</p>
            </div>
            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Secure</h3>
              <p className="text-gray-600 dark:text-gray-300">Enterprise-grade security for your data</p>
            </div>
            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Beautiful Design</h3>
              <p className="text-gray-600 dark:text-gray-300">Stunning templates and customization options</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold">10K+</p>
              <p className="text-blue-200">Users</p>
            </div>
            <div>
              <p className="text-4xl font-bold">50K+</p>
              <p className="text-blue-200">Projects</p>
            </div>
            <div>
              <p className="text-4xl font-bold">99%</p>
              <p className="text-blue-200">Uptime</p>
            </div>
            <div>
              <p className="text-4xl font-bold">24/7</p>
              <p className="text-blue-200">Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">What Our Users Say</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md">
              <p className="text-gray-600 dark:text-gray-300 mb-4">"Amazing platform! It helped us launch our product in record time."</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-500 rounded-full mr-3"></div>
                <div>
                  <p className="font-semibold text-gray-800 dark:text-white">John Doe</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">CEO, TechCorp</p>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md">
              <p className="text-gray-600 dark:text-gray-300 mb-4">"The best tool I've ever used for web development. Highly recommended!"</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-500 rounded-full mr-3"></div>
                <div>
                  <p className="font-semibold text-gray-800 dark:text-white">Jane Smith</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Designer, Creative Co</p>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md">
              <p className="text-gray-600 dark:text-gray-300 mb-4">"Incredible support team and powerful features. Love it!"</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-purple-500 rounded-full mr-3"></div>
                <div>
                  <p className="font-semibold text-gray-800 dark:text-white">Mike Wilson</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Developer, StartupXYZ</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-purple-100">Join thousands of satisfied users today</p>
          <button className="bg-white text-purple-600 px-10 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition">Start Free Trial</button>
        </div>
      </section>

      <Footer />
    </div>
  );
}