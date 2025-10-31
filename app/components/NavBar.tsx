
'use client';

import { useState } from 'react';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav 
            className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl rounded-2xl shadow-2xl border transition-all duration-300"
            style={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.7)',
                backdropFilter: 'blur(20px) saturate(180%)',
                WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                borderColor: 'rgba(255, 255, 255, 0.3)',
                boxShadow: '0 8px 32px 0 rgba(1, 120, 207, 0.15), 0 0 1px 0 rgba(255, 255, 255, 0.5) inset'
            }}
        >
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <h1 
                                className="text-2xl font-bold tracking-tight"
                                style={{ 
                                    color: 'rgb(1, 120, 207)',
                                    textShadow: '0 2px 10px rgba(1, 120, 207, 0.2)'
                                }}
                            >
                                ScamDetect
                            </h1>
                        </div>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-2">
                            <a 
                                href="#features" 
                                className="px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105"
                                style={{ color: 'rgb(16, 16, 16)' }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.color = 'rgb(1, 120, 207)';
                                    e.currentTarget.style.backgroundColor = 'rgba(1, 120, 207, 0.08)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.color = 'rgb(16, 16, 16)';
                                    e.currentTarget.style.backgroundColor = 'transparent';
                                }}
                            >
                                Features
                            </a>
                            <a 
                                href="#about" 
                                className="px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105"
                                style={{ color: 'rgb(16, 16, 16)' }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.color = 'rgb(1, 120, 207)';
                                    e.currentTarget.style.backgroundColor = 'rgba(1, 120, 207, 0.08)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.color = 'rgb(16, 16, 16)';
                                    e.currentTarget.style.backgroundColor = 'transparent';
                                }}
                            >
                                About
                            </a>
                            <a 
                                href="#contact" 
                                className="px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105"
                                style={{ color: 'rgb(16, 16, 16)' }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.color = 'rgb(1, 120, 207)';
                                    e.currentTarget.style.backgroundColor = 'rgba(1, 120, 207, 0.08)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.color = 'rgb(16, 16, 16)';
                                    e.currentTarget.style.backgroundColor = 'transparent';
                                }}
                            >
                                Contact
                            </a>
                            <a 
                                href="https://app.scamdetect.co.bw" 
                                className="ml-2 px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
                                style={{ 
                                    backgroundColor: 'rgb(1, 120, 207)', 
                                    color: 'rgb(255, 255, 255)',
                                    boxShadow: '0 4px 15px rgba(1, 120, 207, 0.3)'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = 'rgb(0, 169, 71)';
                                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 169, 71, 0.4)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = 'rgb(1, 120, 207)';
                                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(1, 120, 207, 0.3)';
                                }}
                            >
                                Access Platform
                            </a>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-xl focus:outline-none transition-all duration-300"
                            style={{ color: 'rgb(16, 16, 16)' }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.color = 'rgb(1, 120, 207)';
                                e.currentTarget.style.backgroundColor = 'rgba(1, 120, 207, 0.08)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.color = 'rgb(16, 16, 16)';
                                e.currentTarget.style.backgroundColor = 'transparent';
                            }}
                        >
                            <svg
                                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            <svg
                                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div 
                className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden mt-2 rounded-xl overflow-hidden`}
                style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(20px) saturate(180%)',
                    WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                    borderTop: '1px solid rgba(1, 120, 207, 0.1)'
                }}
            >
                <div className="px-3 pt-2 pb-3 space-y-1">
                    <a 
                        href="#features" 
                        className="block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300"
                        style={{ color: 'rgb(16, 16, 16)' }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.color = 'rgb(1, 120, 207)';
                            e.currentTarget.style.backgroundColor = 'rgba(1, 120, 207, 0.08)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.color = 'rgb(16, 16, 16)';
                            e.currentTarget.style.backgroundColor = 'transparent';
                        }}
                    >
                        Features
                    </a>
                    <a 
                        href="#about" 
                        className="block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300"
                        style={{ color: 'rgb(16, 16, 16)' }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.color = 'rgb(1, 120, 207)';
                            e.currentTarget.style.backgroundColor = 'rgba(1, 120, 207, 0.08)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.color = 'rgb(16, 16, 16)';
                            e.currentTarget.style.backgroundColor = 'transparent';
                        }}
                    >
                        About
                    </a>
                    <a 
                        href="#contact" 
                        className="block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300"
                        style={{ color: 'rgb(16, 16, 16)' }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.color = 'rgb(1, 120, 207)';
                            e.currentTarget.style.backgroundColor = 'rgba(1, 120, 207, 0.08)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.color = 'rgb(16, 16, 16)';
                            e.currentTarget.style.backgroundColor = 'transparent';
                        }}
                    >
                        Contact
                    </a>
                    <a 
                        href="https://app.scamdetect.co.bw" 
                        className="block px-4 py-3 rounded-xl text-base font-semibold transition-all duration-300 shadow-lg"
                        style={{ 
                            backgroundColor: 'rgb(1, 120, 207)', 
                            color: 'rgb(255, 255, 255)',
                            boxShadow: '0 4px 15px rgba(1, 120, 207, 0.3)'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = 'rgb(0, 169, 71)';
                            e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 169, 71, 0.4)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'rgb(1, 120, 207)';
                            e.currentTarget.style.boxShadow = '0 4px 15px rgba(1, 120, 207, 0.3)';
                        }}
                    >
                        Access Platform
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;