'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { HiOutlineMenuAlt3, HiX } from 'react-icons/hi';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About Us' },
        { href: '/products', label: 'Products' },
        { href: '/product-details', label: 'Product Details' },
        { href: '/manufacturing', label: 'Manufacturing' },
        { href: '/leadership', label: 'Leadership' },
        { href: '/global-presence', label: 'Global Presence' },
        { href: '/gallery', label: 'Gallery' },
        { href: '/contact', label: 'Contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-white/95 backdrop-blur-md shadow-lg'
                : 'bg-white/80 backdrop-blur-sm'
                }`}
        >
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between h-20">
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/logo.png"
                            alt="Future Energy Logo"
                            width={180}
                            height={60}
                            className="h-14 w-auto object-contain"
                            priority
                        />
                    </Link>

                    <div className="hidden lg:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${pathname === link.href
                                    ? 'bg-energy-green text-white'
                                    : 'text-gray-700 hover:bg-energy-green/10 hover:text-energy-green'
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    <div className="hidden lg:block">
                        <Link
                            href="/contact"
                            className="btn-primary text-sm"
                        >
                            Get in Touch
                        </Link>
                    </div>

                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? (
                            <HiX className="w-6 h-6 text-energy-blue" />
                        ) : (
                            <HiOutlineMenuAlt3 className="w-6 h-6 text-energy-blue" />
                        )}
                    </button>
                </div>
            </div>

            <div
                className={`lg:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="bg-white border-t border-gray-100 shadow-lg">
                    <div className="container-custom py-4">
                        <div className="flex flex-col gap-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${pathname === link.href
                                        ? 'bg-energy-green text-white'
                                        : 'text-gray-700 hover:bg-energy-green/10 hover:text-energy-green'
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <Link
                                href="/contact"
                                className="btn-primary text-center mt-4"
                            >
                                Get in Touch
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
