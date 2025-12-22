import Link from 'next/link';
import { HiArrowRight, HiChevronDown, HiArrowDown } from 'react-icons/hi';
import { BsLightningChargeFill } from 'react-icons/bs';

export default function Hero({
    title,
    subtitle,
    description,
    primaryCTA = 'Contact Us',
    primaryHref = '/contact',
    secondaryCTA,
    secondaryHref,
    isHomePage = false,
}) {
    return (
        <section
            className={`relative overflow-hidden ${isHomePage ? 'min-h-screen py-10 md:py-16' : 'pt-32 pb-20'
                } bg-gradient-to-br from-gray-50 via-white to-gray-100`}
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-hero-pattern"></div>
            <div className="absolute inset-0 bg-grid-pattern"></div>

            {/* Decorative Elements */}
            <div className="absolute top-20 right-0 w-96 h-96 bg-energy-green/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-0 w-80 h-80 bg-energy-orange/5 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-energy-blue/3 rounded-full blur-3xl"></div>

            {/* Animated Energy Lines */}
            {isHomePage && (
                <>
                    <div className="absolute top-1/4 left-10 w-32 h-0.5 bg-gradient-to-r from-energy-green to-transparent animate-pulse"></div>
                    <div className="absolute top-1/3 right-20 w-24 h-0.5 bg-gradient-to-l from-energy-orange to-transparent animate-pulse delay-300"></div>
                    <div className="absolute bottom-1/4 left-1/4 w-40 h-0.5 bg-gradient-to-r from-energy-blue to-transparent animate-pulse delay-500"></div>
                </>
            )}

            <div
                className={`container-custom relative z-10 ${isHomePage ? 'flex items-center min-h-screen' : ''
                    }`}
            >
                <div className={`${isHomePage ? 'py-20' : ''} max-w-4xl`}>
                    {/* Subtitle/Badge */}
                    {subtitle && (
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-energy-green/10 rounded-full mb-6 animate-fade-in">
                            <span className="w-2 h-2 bg-energy-green rounded-full animate-pulse"></span>
                            <span className="text-energy-green font-semibold text-sm tracking-wide uppercase">
                                {subtitle}
                            </span>
                        </div>
                    )}

                    {/* Main Title */}
                    <h1
                        className={`font-bold text-energy-blue leading-tight mb-6 animate-slide-up ${isHomePage
                            ? 'text-4xl md:text-5xl lg:text-6xl xl:text-7xl'
                            : 'text-3xl md:text-4xl lg:text-5xl'
                            }`}
                    >
                        {title.split(' ').map((word, index) => (
                            <span
                                key={index}
                                className={
                                    word.toLowerCase() === 'energy' ||
                                        word.toLowerCase() === 'future' ||
                                        word.toLowerCase() === 'smart' ||
                                        word.toLowerCase() === 'power'
                                        ? 'text-energy-green'
                                        : ''
                                }
                            >
                                {word}{' '}
                            </span>
                        ))}
                    </h1>

                    {/* Description */}
                    {description && (
                        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl animate-slide-up delay-200">
                            {description}
                        </p>
                    )}

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap gap-4 animate-slide-up delay-300">
                        <Link href={primaryHref} className="btn-primary inline-flex items-center gap-2">
                            {primaryCTA}
                            <HiArrowRight className="w-5 h-5" />
                        </Link>
                        {secondaryCTA && secondaryHref && (
                            <Link href={secondaryHref} className="btn-outline inline-flex items-center gap-2">
                                {secondaryCTA}
                                <HiChevronDown className="w-5 h-5" />
                            </Link>
                        )}
                    </div>

                    {/* Stats Row - Only on Home Page */}
                    {isHomePage && (
                        <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-gray-200 animate-fade-in delay-500">
                            <div>
                                <div className="text-3xl md:text-4xl font-bold text-energy-green">
                                    30+
                                </div>
                                <div className="text-gray-600 text-sm mt-1">Countries</div>
                            </div>
                            <div>
                                <div className="text-3xl md:text-4xl font-bold text-energy-orange">
                                    15+
                                </div>
                                <div className="text-gray-600 text-sm mt-1">Years Experience</div>
                            </div>
                            <div>
                                <div className="text-3xl md:text-4xl font-bold text-energy-blue">
                                    100K+
                                </div>
                                <div className="text-gray-600 text-sm mt-1">Units Delivered</div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Hero Image/Illustration - Only on Home Page - IMPROVED BATTERY DESIGN */}
                {isHomePage && (
                    <div className="hidden lg:block absolute right-10 top-1/2 -translate-y-1/2 w-[420px]">
                        <div className="relative">
                            {/* Modern Battery Illustration */}
                            <div className="relative">
                                {/* Outer Glow */}
                                <div className="absolute inset-0 bg-energy-green/20 rounded-[32px] blur-2xl scale-105"></div>

                                {/* Battery Container */}
                                <div className="relative w-72 h-[360px] mx-auto">
                                    {/* Main Battery Body */}
                                    <div className="absolute inset-0 bg-gradient-to-b from-[#0B1D32] via-[#0F2A44] to-[#0A1628] rounded-[28px] shadow-2xl overflow-hidden border border-[#1E3A5F]/50">

                                        {/* Top Terminal */}
                                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-7 bg-gradient-to-b from-[#6B7280] to-[#4B5563] rounded-t-lg shadow-lg">
                                            <div className="absolute inset-x-2 top-1 h-2 bg-gradient-to-b from-[#9CA3AF] to-[#6B7280] rounded-t-sm"></div>
                                        </div>

                                        {/* Inner Frame */}
                                        <div className="absolute top-6 left-4 right-4 bottom-4 rounded-lg border-2 border-[#1E3A5F]/30 overflow-hidden">

                                            {/* Energy Bars Container */}
                                            <div className="absolute inset-3 flex flex-col justify-end gap-3">
                                                {/* Energy Bar 1 - Full */}
                                                <div className="relative h-14 rounded-lg overflow-hidden">
                                                    <div className="absolute inset-0 bg-gradient-to-r from-[#1E8E3E] via-[#22C55E] to-[#1E8E3E] animate-pulse"></div>
                                                    <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent"></div>
                                                    <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-black/10"></div>
                                                </div>

                                                {/* Energy Bar 2 - Full */}
                                                <div className="relative h-14 rounded-lg overflow-hidden" style={{ animationDelay: '150ms' }}>
                                                    <div className="absolute inset-0 bg-gradient-to-r from-[#1E8E3E] via-[#22C55E] to-[#1E8E3E] animate-pulse"></div>
                                                    <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent"></div>
                                                    <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-black/10"></div>
                                                </div>

                                                {/* Energy Bar 3 - Lighter */}
                                                <div className="relative h-14 rounded-lg overflow-hidden" style={{ animationDelay: '300ms' }}>
                                                    <div className="absolute inset-0 bg-gradient-to-r from-[#34D399] via-[#4ADE80] to-[#34D399] animate-pulse"></div>
                                                    <div className="absolute inset-0 bg-gradient-to-b from-white/25 to-transparent"></div>
                                                    <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-black/10"></div>
                                                </div>

                                                {/* Energy Bar 4 - Empty/Low */}
                                                <div className="relative h-14 rounded-lg overflow-hidden bg-[#1E3A5F]/50">
                                                    <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent"></div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Lightning Bolt Overlay */}
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                                            <BsLightningChargeFill className="w-20 h-20 text-energy-orange drop-shadow-[0_0_20px_rgba(245,158,11,0.5)]" />
                                        </div>

                                        {/* Reflective Shine */}
                                        <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/5 to-transparent rounded-t-[28px]"></div>
                                    </div>
                                </div>

                                {/* Floating Elements */}
                                <div className="absolute -top-8 -right-4 w-16 h-16 bg-energy-green/30 rounded-full animate-bounce shadow-lg shadow-energy-green/20"></div>
                                <div className="absolute -bottom-6 -left-6 w-14 h-14 bg-energy-orange/30 rounded-full animate-bounce shadow-lg shadow-energy-orange/20" style={{ animationDelay: '200ms' }}></div>
                                <div className="absolute top-1/3 -right-12 w-10 h-10 bg-energy-blue/30 rounded-full animate-bounce shadow-lg" style={{ animationDelay: '400ms' }}></div>
                                <div className="absolute top-2/3 -left-8 w-8 h-8 bg-energy-green/20 rounded-full animate-pulse"></div>

                                {/* Energy Particles */}
                                <div className="absolute top-1/4 right-0 w-2 h-2 bg-energy-orange rounded-full animate-ping"></div>
                                <div className="absolute bottom-1/3 left-0 w-2 h-2 bg-energy-green rounded-full animate-ping" style={{ animationDelay: '500ms' }}></div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Scroll Indicator - Only on Home Page */}
            {isHomePage && (
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                    <div className="flex flex-col items-center gap-2 text-gray-400">
                        <span className="text-xs uppercase tracking-widest">Scroll</span>
                        <HiArrowDown className="w-6 h-6" />
                    </div>
                </div>
            )}
        </section>
    );
}
