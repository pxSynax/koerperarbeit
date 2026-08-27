'use client';

import Link from 'next/link';

const socialLinks = [
    { name: 'Facebook', url: '#', icon: 'f' },
    { name: 'Instagram', url: '#', icon: '📷' },
    { name: 'WhatsApp', url: '#', icon: '💬' },
];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                {/* Main Footer Content */}


                {/* Social Links and Copyright */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
                    {/* Social Media Links */}
                    <div className="flex flex-wrap justify-center sm:justify-start gap-4">
                        {socialLinks.map((social) => (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-amber-300 hover:bg-amber-400 transition flex items-center justify-center text-lg text-gray-900"
                                title={social.name}
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>

                    {/* Copyright */}
                    <p className="text-gray-900 text-sm text-center sm:text-right">
                        © {currentYear} Körperarbeit. Alle Rechte vorbehalten.
                    </p>
                </div>

                {/* Legal Links */}
                <div className="flex flex-wrap justify-center gap-4 mt-6 pt-6 border-t border-gray-300">
                    <Link href="/datenschutz" className="text-gray-700 hover:text-gray-900 text-xs transition">
                        Datenschutz
                    </Link>
                    <span className="text-gray-700">•</span>
                    <Link href="/nutzungsbedingungen" className="text-gray-700 hover:text-gray-900 text-xs transition">
                        Nutzungsbedingungen
                    </Link>
                    <span className="text-gray-700">•</span>
                    <Link href="/impressum" className="text-gray-700 hover:text-gray-900 text-xs transition">
                        Impressum
                    </Link>
                </div>
            </div>
        </footer>
    );
}
