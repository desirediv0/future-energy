import Link from 'next/link';
import { HiArrowRight, HiStar, HiShieldCheck, HiCheckCircle } from 'react-icons/hi';
import { BsLightningChargeFill } from 'react-icons/bs';

export default function CTA({
    title = 'Ready to Power Your Future?',
    description = 'Get in touch with our team to discuss your energy solution requirements.',
    buttonText = 'Contact Us Today',
    buttonHref = '/contact',
    variant = 'gradient',
}) {
    const variants = {
        primary: 'bg-energy-green',
        secondary: 'bg-energy-blue',
        gradient: 'bg-energy-gradient',
    };

    return (
        <section className={`${variants[variant]} relative overflow-hidden`}>
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full">
                    <svg
                        className="w-full h-full"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                    >
                        <defs>
                            <pattern
                                id="grid"
                                width="10"
                                height="10"
                                patternUnits="userSpaceOnUse"
                            >
                                <path
                                    d="M 10 0 L 0 0 0 10"
                                    fill="none"
                                    stroke="white"
                                    strokeWidth="0.5"
                                />
                            </pattern>
                        </defs>
                        <rect width="100" height="100" fill="url(#grid)" />
                    </svg>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-10 right-10 w-32 h-32 border-4 border-white/10 rounded-full"></div>
            <div className="absolute bottom-10 left-10 w-24 h-24 border-4 border-white/10 rounded-full"></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-full"></div>

            {/* Content */}
            <div className="container-custom py-10 relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                    {/* Lightning Icon */}
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-8">
                        <BsLightningChargeFill className="w-8 h-8 text-energy-orange" />
                    </div>

                    {/* Title */}
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                        {title}
                    </h2>

                    {/* Description */}
                    <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
                        {description}
                    </p>

                    {/* CTA Button */}
                    <Link
                        href={buttonHref}
                        className="inline-flex items-center gap-3 bg-white text-energy-blue font-bold px-8 py-4 rounded-lg transition-all duration-300 hover:bg-energy-orange hover:text-white hover:shadow-xl transform hover:-translate-y-1"
                    >
                        {buttonText}
                        <HiArrowRight className="w-5 h-5" />
                    </Link>

                    {/* Trust Indicators */}
                    <div className="flex flex-wrap justify-center gap-8 mt-12 pt-8 border-t border-white/20">
                        <div className="flex items-center gap-2 text-white/80">
                            <HiStar className="w-5 h-5 text-energy-orange" />
                            <span className="text-sm">Premium Quality</span>
                        </div>
                        <div className="flex items-center gap-2 text-white/80">
                            <HiShieldCheck className="w-5 h-5 text-energy-orange" />
                            <span className="text-sm">ISO Certified</span>
                        </div>
                        <div className="flex items-center gap-2 text-white/80">
                            <HiCheckCircle className="w-5 h-5 text-energy-orange" />
                            <span className="text-sm">30+ Countries</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
