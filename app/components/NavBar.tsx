
'use client';

import { useState } from 'react';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-white/95 backdrop-blur-sm shadow-lg fixed w-full top-0 z-50 border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <h1 className="text-2xl font-bold" style={{ color: 'rgb(1, 120, 207)' }}>
                                ScamDetect
                            </h1>
                        </div>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <a href="#features" className="px-3 py-2 rounded-lg text-sm font-medium transition-colors" style={{ color: 'rgb(16, 16, 16)' }} onMouseEnter={(e) => e.currentTarget.style.color = 'rgb(1, 120, 207)'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgb(16, 16, 16)'}>
                                Features
                            </a>
                            <a href="#about" className="px-3 py-2 rounded-lg text-sm font-medium transition-colors" style={{ color: 'rgb(16, 16, 16)' }} onMouseEnter={(e) => e.currentTarget.style.color = 'rgb(1, 120, 207)'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgb(16, 16, 16)'}>
                                About
                            </a>
                            <a href="#contact" className="px-3 py-2 rounded-lg text-sm font-medium transition-colors" style={{ color: 'rgb(16, 16, 16)' }} onMouseEnter={(e) => e.currentTarget.style.color = 'rgb(1, 120, 207)'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgb(16, 16, 16)'}>
                                Contact
                            </a>
                            <a 
                                href="https://app.scamdetect.co.bw" 
                                className="px-4 py-2 rounded-lg text-sm font-semibold transition-all"
                                style={{ backgroundColor: 'rgb(1, 120, 207)', color: 'rgb(255, 255, 255)' }}
                                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgb(0, 169, 71)'}
                                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgb(1, 120, 207)'}
                            >
                                Launch Platform
                            </a>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-lg hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset transition-colors"
                            style={{ color: 'rgb(16, 16, 16)' }}
                            onMouseEnter={(e) => e.currentTarget.style.color = 'rgb(1, 120, 207)'}
                            onMouseLeave={(e) => e.currentTarget.style.color = 'rgb(16, 16, 16)'}
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
            <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-white border-t border-slate-200`}>
                <div className="px-2 pt-2 pb-3 space-y-1">
                    <a href="#features" className="block px-3 py-2 rounded-lg text-base font-medium transition-colors" style={{ color: 'rgb(16, 16, 16)' }} onMouseEnter={(e) => e.currentTarget.style.color = 'rgb(1, 120, 207)'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgb(16, 16, 16)'}>
                        Features
                    </a>
                    <a href="#about" className="block px-3 py-2 rounded-lg text-base font-medium transition-colors" style={{ color: 'rgb(16, 16, 16)' }} onMouseEnter={(e) => e.currentTarget.style.color = 'rgb(1, 120, 207)'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgb(16, 16, 16)'}>
                        About
                    </a>
                    <a href="#contact" className="block px-3 py-2 rounded-lg text-base font-medium transition-colors" style={{ color: 'rgb(16, 16, 16)' }} onMouseEnter={(e) => e.currentTarget.style.color = 'rgb(1, 120, 207)'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgb(16, 16, 16)'}>
                        Contact
                    </a>
                    <a 
                        href="https://app.scamdetect.co.bw" 
                        className="block px-3 py-2 rounded-lg text-base font-semibold transition-all"
                        style={{ backgroundColor: 'rgb(1, 120, 207)', color: 'rgb(255, 255, 255)' }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgb(0, 169, 71)'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgb(1, 120, 207)'}
                    >
                        Launch Platform
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;