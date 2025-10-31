'use client';

import Image from "next/image";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative" style={{ backgroundColor: 'rgb(16, 16, 16)' }}>
        {/* Subtle background gradient */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl" style={{ backgroundColor: 'rgb(1, 120, 207)' }}></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl" style={{ backgroundColor: 'rgb(0, 169, 71)' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="text-left">
              <div className="mb-8">
                <span className="inline-block px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-wider" style={{ backgroundColor: 'rgba(1, 120, 207, 0.15)', color: 'rgb(1, 120, 207)' }}>
                  Africa's Leading Defense Network
                </span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight" style={{ color: 'rgb(255, 255, 255)' }}>
                <span style={{ color: 'rgb(1, 120, 207)' }}>
                  ScamDetect
                </span>
                <br />
                <span className="text-4xl sm:text-4xl lg:text-5xl font-medium" style={{ color: 'rgb(255, 255, 255)' }}>
                  Enterprise Anti-Fraud
                </span>
                <br />
                <span className="text-3xl sm:text-3xl lg:text-4xl font-light" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                  Intelligence Platform
                </span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl mb-10 font-light leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                Advanced threat detection and risk intelligence designed for modern enterprises. 
                Trusted by businesses across Africa for comprehensive digital security.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://app.scamdetect.co.bw" 
                  className="group px-10 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl text-center"
                  style={{ backgroundColor: 'rgb(1, 120, 207)', color: 'rgb(255, 255, 255)' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgb(0, 169, 71)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgb(1, 120, 207)'}
                >
                  Access Platform
                  <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">→</span>
                </a>
                <button 
                  className="border-2 px-10 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl"
                  style={{ borderColor: 'rgb(1, 120, 207)', color: 'rgb(1, 120, 207)', backgroundColor: 'transparent' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgb(1, 120, 207)';
                    e.currentTarget.style.color = 'rgb(255, 255, 255)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = 'rgb(1, 120, 207)';
                  }}
                >
                  Request Demo
                </button>
              </div>
            </div>

            {/* Right Side - Video Card */}
            <div className="relative">
              <div 
                className="rounded-3xl overflow-hidden shadow-2xl"
                style={{
                  boxShadow: '0 25px 50px -12px rgba(1, 120, 207, 0.4), 0 0 0 1px rgba(1, 120, 207, 0.2)'
                }}
              >
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/Stop and Check  CSA's Sixth National Cybersecurity Campaign (15 secs) - Cyber Security Agency of Singapore (1080p, h264).mp4" type="video/mp4" />
                </video>
              </div>
              {/* Decorative glow behind video */}
              <div 
                className="absolute -inset-4 rounded-3xl opacity-30 blur-2xl -z-10"
                style={{ backgroundColor: 'rgb(1, 120, 207)' }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="min-h-screen flex items-center py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6" style={{ color: 'rgb(16, 16, 16)' }}>
              Enterprise-Grade 
              <span style={{ color: 'rgb(1, 120, 207)' }}> Security</span>
            </h2>
            <p className="text-xl max-w-3xl mx-auto font-light" style={{ color: 'rgba(16, 16, 16, 0.7)' }}>
              Advanced threat intelligence and fraud prevention technology 
              designed for modern businesses across Africa.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-8 rounded-2xl border transition-all duration-300 transform hover:-translate-y-2 shadow-lg hover:shadow-2xl" style={{ backgroundColor: 'rgb(255, 255, 255)', borderColor: 'rgba(16, 16, 16, 0.1)' }} onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgb(1, 120, 207)'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(16, 16, 16, 0.1)'}>
              <div className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: 'rgb(1, 120, 207)' }}>
                <svg className="w-8 h-8" fill="none" stroke="rgb(255, 255, 255)" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: 'rgb(16, 16, 16)' }}>Real-Time Protection</h3>
              <p className="text-lg leading-relaxed" style={{ color: 'rgba(16, 16, 16, 0.7)' }}>
                Instant threat detection and automated response systems powered by machine learning algorithms 
                and comprehensive threat intelligence.
              </p>
            </div>
            
            <div className="group p-8 rounded-2xl border transition-all duration-300 transform hover:-translate-y-2 shadow-lg hover:shadow-2xl" style={{ backgroundColor: 'rgb(255, 255, 255)', borderColor: 'rgba(16, 16, 16, 0.1)' }} onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgb(0, 169, 71)'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(16, 16, 16, 0.1)'}>
              <div className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: 'rgb(0, 169, 71)' }}>
                <svg className="w-8 h-8" fill="none" stroke="rgb(255, 255, 255)" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: 'rgb(16, 16, 16)' }}>Analytics Dashboard</h3>
              <p className="text-lg leading-relaxed" style={{ color: 'rgba(16, 16, 16, 0.7)' }}>
                Comprehensive reporting and analytics with customizable dashboards for enterprise visibility 
                and risk management insights.
              </p>
            </div>
            
            <div className="group p-8 rounded-2xl border transition-all duration-300 transform hover:-translate-y-2 shadow-lg hover:shadow-2xl" style={{ backgroundColor: 'rgb(255, 255, 255)', borderColor: 'rgba(16, 16, 16, 0.1)' }} onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgb(1, 120, 207)'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(16, 16, 16, 0.1)'}>
              <div className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: 'rgb(1, 120, 207)' }}>
                <svg className="w-8 h-8" fill="none" stroke="rgb(255, 255, 255)" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: 'rgb(16, 16, 16)' }}>Global Network</h3>
              <p className="text-lg leading-relaxed" style={{ color: 'rgba(16, 16, 16, 0.7)' }}>
                Leveraging Africa's largest fraud prevention network with global threat intelligence 
                and collaborative defense mechanisms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'rgba(1, 120, 207, 0.03)' }}>
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="mb-8">
                <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider" style={{ backgroundColor: 'rgba(1, 120, 207, 0.1)', color: 'rgb(1, 120, 207)' }}>
                  Trusted by Enterprises
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-8" style={{ color: 'rgb(16, 16, 16)' }}>
                About <span style={{ color: 'rgb(1, 120, 207)' }}>ScamDetect</span>
              </h2>
              <p className="text-xl mb-8 font-light leading-relaxed" style={{ color: 'rgba(16, 16, 16, 0.7)' }}>
                ScamDetect delivers enterprise-grade anti-fraud intelligence through a sophisticated 
                platform that balances advanced functionality with intuitive design. Our solution is 
                engineered for organizations that demand reliable, scalable security.
              </p>
              <p className="text-xl mb-10 font-light leading-relaxed" style={{ color: 'rgba(16, 16, 16, 0.7)' }}>
                Serving businesses, educational institutions, and professional organizations 
                across Africa, we provide sustainable, cutting-edge protection technology that 
                adapts to evolving digital threats.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <a 
                  href="https://app.scamdetect.co.bw" 
                  className="group px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
                  style={{ backgroundColor: 'rgb(1, 120, 207)', color: 'rgb(255, 255, 255)' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgb(0, 169, 71)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgb(1, 120, 207)'}
                >
                  Access Platform
                  <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">→</span>
                </a>
                <button 
                  className="border-2 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105"
                  style={{ borderColor: 'rgba(16, 16, 16, 0.2)', color: 'rgb(16, 16, 16)', backgroundColor: 'transparent' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(16, 16, 16, 0.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                >
                  Contact Sales
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl p-10 shadow-2xl" style={{ backgroundColor: 'rgb(1, 120, 207)', color: 'rgb(255, 255, 255)' }}>
                <div className="text-center">
                  <h3 className="text-3xl font-bold mb-6">Trusted Across Africa</h3>
                  <p className="mb-8 text-lg font-light" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                    Organizations across the continent rely on ScamDetect for comprehensive 
                    fraud prevention and risk intelligence.
                  </p>
                  <div className="grid grid-cols-2 gap-6 text-center">
                    <div className="rounded-xl p-6 backdrop-blur-sm" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
                      <div className="text-4xl font-bold" style={{ color: 'rgb(255, 255, 255)' }}>50,000+</div>
                      <div className="font-medium" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>Protected Users</div>
                    </div>
                    <div className="rounded-xl p-6 backdrop-blur-sm" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
                      <div className="text-4xl font-bold" style={{ color: 'rgb(255, 255, 255)' }}>15+</div>
                      <div className="font-medium" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>African Countries</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>      {/* CTA Section */}
      <section className="min-h-screen flex items-center py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'rgb(0, 169, 71)' }}>
        <div className="max-w-4xl mx-auto text-center w-full">
          <div className="mb-8">
            <span className="inline-block px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-wider backdrop-blur-sm" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', color: 'rgb(255, 255, 255)' }}>
              Ready to Get Started?
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-8 leading-tight" style={{ color: 'rgb(255, 255, 255)' }}>
            Join Africa's Most Trusted 
            <span className="block" style={{ color: 'rgb(255, 255, 255)' }}>
              Security Network
            </span>
          </h2>
          <p className="text-xl mb-12 font-light leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.95)' }}>
            Experience enterprise-grade fraud prevention designed for modern businesses. 
            Protect your organization with advanced threat intelligence and real-time monitoring.
          </p>
          <a 
            href="https://app.scamdetect.co.bw" 
            className="group inline-block px-12 py-4 rounded-lg text-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl"
            style={{ backgroundColor: 'rgb(255, 255, 255)', color: 'rgb(0, 169, 71)' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgb(1, 120, 207)';
              e.currentTarget.style.color = 'rgb(255, 255, 255)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgb(255, 255, 255)';
              e.currentTarget.style.color = 'rgb(0, 169, 71)';
            }}
          >
            Access ScamDetect Platform
            <span className="ml-3 group-hover:translate-x-1 transition-transform inline-block">→</span>
          </a>
          <div className="mt-8">
            <p className="font-light" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
              Trusted by 50,000+ users across 15 African countries
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'rgb(16, 16, 16)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <h3 className="text-2xl font-bold mb-4" style={{ color: 'rgb(1, 120, 207)' }}>
                ScamDetect
              </h3>
              <p className="mb-6 text-lg font-light leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                Africa's trusted anti-fraud & risk intelligence network. Enterprise-grade security 
                solutions designed for modern businesses across the continent.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="transition-colors" style={{ color: 'rgba(255, 255, 255, 0.6)' }} onMouseEnter={(e) => e.currentTarget.style.color = 'rgb(1, 120, 207)'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)'}>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="transition-colors" style={{ color: 'rgba(255, 255, 255, 0.6)' }} onMouseEnter={(e) => e.currentTarget.style.color = 'rgb(1, 120, 207)'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)'}>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="transition-colors" style={{ color: 'rgba(255, 255, 255, 0.6)' }} onMouseEnter={(e) => e.currentTarget.style.color = 'rgb(1, 120, 207)'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)'}>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4" style={{ color: 'rgb(255, 255, 255)' }}>Platform</h4>
              <ul className="space-y-2">
                <li><a href="#" className="transition-colors" style={{ color: 'rgba(255, 255, 255, 0.6)' }} onMouseEnter={(e) => e.currentTarget.style.color = 'rgb(255, 255, 255)'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)'}>Security Features</a></li>
                <li><a href="#" className="transition-colors" style={{ color: 'rgba(255, 255, 255, 0.6)' }} onMouseEnter={(e) => e.currentTarget.style.color = 'rgb(255, 255, 255)'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)'}>Analytics Dashboard</a></li>
                <li><a href="#" className="transition-colors" style={{ color: 'rgba(255, 255, 255, 0.6)' }} onMouseEnter={(e) => e.currentTarget.style.color = 'rgb(255, 255, 255)'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)'}>Enterprise Solutions</a></li>
                <li><a href="https://app.scamdetect.co.bw" className="transition-colors" style={{ color: 'rgb(1, 120, 207)' }} onMouseEnter={(e) => e.currentTarget.style.color = 'rgb(0, 169, 71)'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgb(1, 120, 207)'}>Access Platform</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4" style={{ color: 'rgb(255, 255, 255)' }}>Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="transition-colors" style={{ color: 'rgba(255, 255, 255, 0.6)' }} onMouseEnter={(e) => e.currentTarget.style.color = 'rgb(255, 255, 255)'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)'}>Documentation</a></li>
                <li><a href="#" className="transition-colors" style={{ color: 'rgba(255, 255, 255, 0.6)' }} onMouseEnter={(e) => e.currentTarget.style.color = 'rgb(255, 255, 255)'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)'}>Contact Sales</a></li>
                <li><a href="#" className="transition-colors" style={{ color: 'rgba(255, 255, 255, 0.6)' }} onMouseEnter={(e) => e.currentTarget.style.color = 'rgb(255, 255, 255)'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)'}>Privacy Policy</a></li>
                <li><a href="#" className="transition-colors" style={{ color: 'rgba(255, 255, 255, 0.6)' }} onMouseEnter={(e) => e.currentTarget.style.color = 'rgb(255, 255, 255)'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)'}>Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 text-center" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
            <p className="font-light" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
              © 2025 <span className="font-semibold" style={{ color: 'rgb(1, 120, 207)' }}>ScamDetect</span>. 
              All rights reserved. Africa's trusted anti-fraud & risk intelligence network.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
