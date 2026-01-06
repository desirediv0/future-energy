import Link from 'next/link';
import Image from 'next/image';
import { FaLinkedinIn, FaTwitter, FaFacebookF } from 'react-icons/fa';
import { HiChevronRight, HiLocationMarker, HiMail } from 'react-icons/hi';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About Us' },
        { href: '/products', label: 'Products' },
        { href: '/product-details', label: 'Product Details' },
        { href: '/manufacturing', label: 'Manufacturing' },
        { href: '/leadership', label: 'Leadership' },
        { href: '/global-presence', label: 'Global Presence' },
        { href: '/gallery', label: 'Gallery' },
        { href: '/contact', label: 'Contact Us' },
    ];

    const productLinks = [
        { href: '/products#automotive', label: 'Automotive Batteries' },
        { href: '/products#inverter', label: 'Inverter Batteries' },
        { href: '/products#solar', label: 'Solar Solutions' },
        { href: '/products#stabilizers', label: 'Stabilizers' },
        { href: '/products#lead-acid', label: 'Lead Acid Batteries' },
    ];

    return (
        <footer className="bg-energy-blue text-white">
            <div className="container-custom py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    <div className="lg:col-span-1">
                        <Link href="/" className="inline-block mb-6">
                            <Image
                                src="/logo.png"
                                alt="Future Energy Logo"
                                width={180}
                                height={60}
                                className="h-14 w-auto object-contain bg-white rounded-lg p-2"
                            />
                        </Link>
                        <p className="text-gray-300 text-sm leading-relaxed mb-6">
                            Powering the future with smart energy solutions. A trusted name in
                            battery manufacturing with presence in 30+ countries worldwide.
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-energy-green transition-colors"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedinIn className="w-5 h-5" />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-energy-green transition-colors"
                                aria-label="Twitter"
                            >
                                <FaTwitter className="w-5 h-5" />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-energy-green transition-colors"
                                aria-label="Facebook"
                            >
                                <FaFacebookF className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-300 hover:text-energy-green transition-colors text-sm flex items-center gap-2 group"
                                    >
                                        <HiChevronRight className="w-4 h-4 text-energy-orange opacity-0 group-hover:opacity-100 transition-opacity" />
                                        <span className="group-hover:translate-x-1 transition-transform">
                                            {link.label}
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white">Our Products</h3>
                        <ul className="space-y-3">
                            {productLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-300 hover:text-energy-green transition-colors text-sm flex items-center gap-2 group"
                                    >
                                        <HiChevronRight className="w-4 h-4 text-energy-orange opacity-0 group-hover:opacity-100 transition-opacity" />
                                        <span className="group-hover:translate-x-1 transition-transform">
                                            {link.label}
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <HiLocationMarker className="w-5 h-5 text-energy-orange mt-0.5 flex-shrink-0" />
                                <span className="text-gray-300 text-sm">
                                    Plot No 18-19, Sector 2A, IMT Manesar,<br />
                                    Gurugram, Haryana – 122052, India
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <HiMail className="w-5 h-5 text-energy-orange flex-shrink-0" />
                                <div className="flex flex-col">
                                    <a
                                        href="mailto:ananta@futurenergy.co.in"
                                        className="text-gray-300 hover:text-energy-green transition-colors text-sm"
                                    >
                                        ananta@futurenergy.co.in
                                    </a>
                                    <a
                                        href="mailto:vikas@futurenergy.co.in"
                                        className="text-gray-300 hover:text-energy-green transition-colors text-sm"
                                    >
                                        vikas@futurenergy.co.in
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="border-t border-white/10">
                <div className="container-custom py-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-gray-400 text-sm text-center md:text-left">
                            © {currentYear} Future Energy. All rights reserved.
                        </p>
                        <div className="flex items-center gap-6">
                            <Link
                                href="/privacy-policy"
                                className="text-gray-400 hover:text-white transition-colors text-sm"
                            >
                                Privacy Policy
                            </Link>
                            <Link
                                href="/terms-of-service"
                                className="text-gray-400 hover:text-white transition-colors text-sm"
                            >
                                Terms of Service
                            </Link>
                        </div>
                    </div>
                    <div className="text-center mt-4 pt-4 border-t border-white/5">
                        <p className="text-gray-500 text-xs">
                            Designed & Developed by{' '}
                            <a
                                href="https://desirediv.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-energy-orange hover:text-energy-orange-light transition-colors font-medium"
                            >
                                Desire Div
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
