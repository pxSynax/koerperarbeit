'use client';

import { useState } from 'react';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false);
        }
    };

    return (
        <header className="sticky top-0 z-50 bg-slate-50/95 backdrop-blur-sm border-b border-slate-200 shadow-lg">
            <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex justify-between items-center">
                    <div className="text-2xl font-bold text-slate-900">
                        Körperarbeit
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex gap-4">
                        <button
                            onClick={() => scrollToSection('home')}
                            className="text-slate-800 hover:text-slate-950 hover:bg-slate-200 rounded-full px-3 py-2 transition-colors duration-200 font-medium"
                        >
                            Startseite
                        </button>
                        <button
                            onClick={() => scrollToSection('services')}
                            className="text-slate-800 hover:text-slate-950 hover:bg-slate-200 rounded-full px-3 py-2 transition-colors duration-200 font-medium"
                        >
                            Leistungen
                        </button>
                        <button
                            onClick={() => scrollToSection('about')}
                            className="text-slate-800 hover:text-slate-950 hover:bg-slate-200 rounded-full px-3 py-2 transition-colors duration-200 font-medium"
                        >
                            Über mich
                        </button>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="bg-amber-300 text-brown-900 px-6 py-2 rounded-xl hover:bg-amber-200 transition-colors duration-200 font-medium"
                        >
                            Kontakt
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden flex items-center justify-center p-2 rounded-lg bg-slate-100 text-slate-900 hover:bg-slate-200 transition-colors duration-200"
                        aria-label="Toggle navigation"
                    >
                        {isOpen ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-6 w-6"
                            >
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-6 w-6"
                            >
                                <line x1="3" y1="6" x2="21" y2="6" />
                                <line x1="3" y1="12" x2="21" y2="12" />
                                <line x1="3" y1="18" x2="21" y2="18" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="md:hidden mt-4 pb-4 border-t border-slate-200 pt-4 flex flex-col gap-3">
                        <button
                            onClick={() => scrollToSection('home')}
                            className="text-slate-800 hover:text-slate-950 hover:bg-slate-200 rounded-xl px-4 py-3 transition-colors duration-200 font-medium text-left"
                        >
                            Startseite
                        </button>
                        <button
                            onClick={() => scrollToSection('services')}
                            className="text-slate-800 hover:text-slate-950 hover:bg-slate-200 rounded-xl px-4 py-3 transition-colors duration-200 font-medium text-left"
                        >
                            Leistungen
                        </button>
                        <button
                            onClick={() => scrollToSection('about')}
                            className="text-slate-800 hover:text-slate-950 hover:bg-slate-200 rounded-xl px-4 py-3 transition-colors duration-200 font-medium text-left"
                        >
                            Über mich
                        </button>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="bg-amber-300 text-brown-900 px-6 py-2 rounded-xl hover:bg-amber-200 transition-colors duration-200 font-medium w-full"
                        >
                            Kontakt
                        </button>
                    </div>
                )}
            </nav>
        </header>
    );
}
