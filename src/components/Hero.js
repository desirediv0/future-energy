"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HiArrowRight, HiArrowLeft, HiChevronDown, HiArrowDown } from 'react-icons/hi';
import { BsLightningChargeFill } from 'react-icons/bs';

export default function Hero(props) {
    const {
        isHomePage = false,
        backgroundImage: initialBg,
    } = props;

    // Define slides only for HomePage, otherwise use props as single slide
    const slides = isHomePage ? [
        {
            ...props,
            backgroundImage: initialBg || '/h/hero.jpg' // Ensure bg image
        },
        {
            title: "Advanced Automotive Batteries",
            subtitle: "Reliable Performance",
            description: "High-performance batteries for all vehicle types with extended life and reliability. Engineered for extreme weather.",
            backgroundImage: "/h/hero2.jpg",
            primaryCTA: "View Products",
            primaryHref: "/products",
            secondaryCTA: "Contact Us",
            secondaryHref: "/contact",
        },
        {
            title: "Sustainable Solar Solutions",
            subtitle: "Green Energy Revolution",
            description: "Harness the power of the sun with our cutting-edge solar energy systems for residential and commercial use.",
            backgroundImage: "/h/hero3.jpg",
            primaryCTA: "Go Solar",
            primaryHref: "/products#solar",
            secondaryCTA: "Learn More",
            secondaryHref: "/about",
        }
    ] : [props];

    const [currentSlide, setCurrentSlide] = useState(0);

    // Auto-advance slides
    useEffect(() => {
        if (slides.length <= 1) return;
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [slides.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const activeSlide = slides[currentSlide];
    const {
        title,
        subtitle,
        description,
        primaryCTA = 'Contact Us',
        primaryHref = '/contact',
        secondaryCTA,
        secondaryHref,
        backgroundImage
    } = activeSlide;

    return (
        <section
            className={`relative overflow-hidden transition-all duration-700 ${isHomePage ? 'min-h-screen py-10 md:py-12' : 'pt-32 pb-20'
                } ${backgroundImage ? 'bg-gray-900' : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'}`}
        >
            {/* Background Image with Transition */}
            {backgroundImage && (
                <>
                    <div className="absolute inset-0 z-0">
                        {slides.map((slide, index) => (
                            <div
                                key={index}
                                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                            >
                                <Image
                                    src={slide.backgroundImage || '/hero.jpg'}
                                    alt="Hero Background"
                                    fill
                                    priority={index === 0}
                                    className="object-cover"
                                />
                                {/* Dark Overlay Gradient per slide */}
                                <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/30"></div>
                            </div>
                        ))}
                    </div>
                </>
            )}

            {/* Background Pattern - Only show if no background image (Legacy support for other pages) */}
            {!backgroundImage && (
                <>
                    <div className="absolute inset-0 bg-hero-pattern"></div>
                    <div className="absolute inset-0 bg-grid-pattern"></div>
                    {/* Decorative Elements */}
                    <div className="absolute top-20 right-0 w-96 h-96 bg-energy-green/5 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 left-0 w-80 h-80 bg-energy-orange/5 rounded-full blur-3xl"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-energy-blue/3 rounded-full blur-3xl"></div>
                </>
            )}

            {/* Animated Energy Lines */}
            {isHomePage && !backgroundImage && (
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
                    {/* Content Container with Key for Animation */}
                    <div key={currentSlide} className="animate-fade-in-up">
                        {/* Subtitle/Badge */}
                        {subtitle && (
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-energy-green/10 rounded-full mb-6">
                                <span className="w-2 h-2 bg-energy-green rounded-full animate-pulse"></span>
                                <span className="text-energy-green font-semibold text-sm tracking-wide uppercase">
                                    {subtitle}
                                </span>
                            </div>
                        )}

                        {/* Main Title */}
                        <h1
                            className={`font-bold leading-tight mb-6 ${isHomePage
                                ? 'text-4xl md:text-5xl lg:text-6xl xl:text-7xl'
                                : 'text-3xl md:text-4xl lg:text-5xl'
                                } ${backgroundImage ? 'text-white' : 'text-energy-blue'}`}
                        >
                            {title.split(' ').map((word, index) => (
                                <span
                                    key={index}
                                    className={
                                        ['energy', 'future', 'smart', 'power', 'solar', 'batteries'].some(term => word.toLowerCase().includes(term))
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
                            <p className={`text-lg md:text-xl mb-8 max-w-2xl ${backgroundImage ? 'text-gray-200' : 'text-gray-600'}`}>
                                {description}
                            </p>
                        )}

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4">
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
                    </div>

                    {/* Stats Row - Only on Home Page */}
                    {isHomePage && (
                        <div className={`grid grid-cols-3 gap-8 mt-16 pt-8 border-t animate-fade-in delay-500 ${backgroundImage ? 'border-white/20' : 'border-gray-200'}`}>
                            <div>
                                <div className={`text-3xl md:text-4xl font-bold ${backgroundImage ? 'text-energy-green' : 'text-energy-green'}`}>
                                    30+
                                </div>
                                <div className={`text-sm mt-1 ${backgroundImage ? 'text-gray-300' : 'text-gray-600'}`}>Countries</div>
                            </div>
                            <div>
                                <div className={`text-3xl md:text-4xl font-bold ${backgroundImage ? 'text-white' : 'text-energy-orange'}`}>
                                    15+
                                </div>
                                <div className={`text-sm mt-1 ${backgroundImage ? 'text-gray-300' : 'text-gray-600'}`}>Years Experience</div>
                            </div>
                            <div>
                                <div className={`text-3xl md:text-4xl font-bold ${backgroundImage ? 'text-white' : 'text-energy-blue'}`}>
                                    100K+
                                </div>
                                <div className={`text-sm mt-1 ${backgroundImage ? 'text-gray-300' : 'text-gray-600'}`}>Units Delivered</div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Hero Image/Illustration (Battery) - Only on Home Page & No Background */}
                {/* This will be hidden if slide has backgroundImage, which is true for all carousel slides */}
                {isHomePage && !backgroundImage && (
                    <div className="hidden lg:block absolute right-10 top-1/2 -translate-y-1/2 w-[420px]">
                        <div className="relative">
                            <div className="relative w-72 h-[360px] mx-auto">
                                <div className="absolute inset-0 bg-gradient-to-b from-[#0B1D32] via-[#0F2A44] to-[#0A1628] rounded-[28px] shadow-2xl overflow-hidden border border-[#1E3A5F]/50">
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-7 bg-gradient-to-b from-[#6B7280] to-[#4B5563] rounded-t-lg shadow-lg">
                                        <div className="absolute inset-x-2 top-1 h-2 bg-gradient-to-b from-[#9CA3AF] to-[#6B7280] rounded-t-sm"></div>
                                    </div>
                                    <div className="absolute top-6 left-4 right-4 bottom-4 rounded-lg border-2 border-[#1E3A5F]/30 overflow-hidden">
                                        <div className="absolute inset-3 flex flex-col justify-end gap-3">
                                            <div className="relative h-14 rounded-lg overflow-hidden">
                                                <div className="absolute inset-0 bg-gradient-to-r from-[#1E8E3E] via-[#22C55E] to-[#1E8E3E] animate-pulse"></div>
                                                <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent"></div>
                                            </div>
                                            <div className="relative h-14 rounded-lg overflow-hidden" style={{ animationDelay: '150ms' }}>
                                                <div className="absolute inset-0 bg-gradient-to-r from-[#1E8E3E] via-[#22C55E] to-[#1E8E3E] animate-pulse"></div>
                                                <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent"></div>
                                            </div>
                                            <div className="relative h-14 rounded-lg overflow-hidden" style={{ animationDelay: '300ms' }}>
                                                <div className="absolute inset-0 bg-gradient-to-r from-[#34D399] via-[#4ADE80] to-[#34D399] animate-pulse"></div>
                                                <div className="absolute inset-0 bg-gradient-to-b from-white/25 to-transparent"></div>
                                            </div>
                                            <div className="relative h-14 rounded-lg overflow-hidden bg-[#1E3A5F]/50">
                                                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                                        <BsLightningChargeFill className="w-20 h-20 text-energy-orange drop-shadow-[0_0_20px_rgba(245,158,11,0.5)]" />
                                    </div>
                                    <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/5 to-transparent rounded-t-[28px]"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Navigation Buttons for Carousel */}
            {slides.length > 1 && (
                <>
                    <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-all hover:scale-110 hidden md:block"
                        aria-label="Previous Slide"
                    >
                        <HiArrowLeft className="w-8 h-8" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-all hover:scale-110 hidden md:block"
                        aria-label="Next Slide"
                    >
                        <HiArrowRight className="w-8 h-8" />
                    </button>

                    {/* Dots Indicator */}
                    <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                        {slides.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentSlide(idx)}
                                className={`w-3 h-3 rounded-full transition-all ${currentSlide === idx
                                    ? 'bg-energy-green w-8'
                                    : 'bg-white/50 hover:bg-white/80'
                                    }`}
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
                    </div>
                </>
            )}

            {/* Scroll Indicator - Only on Home Page */}
            {isHomePage && (
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-20">
                    <div className="flex flex-col items-center gap-2 text-gray-400">
                        <span className="text-xs uppercase tracking-widest">Scroll</span>
                        <HiArrowDown className="w-6 h-6" />
                    </div>
                </div>
            )}
        </section>
    );
}
