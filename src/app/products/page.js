import Link from 'next/link';
import Image from 'next/image';
import Hero from '@/components/Hero';
import CTA from '@/components/CTA';
import SectionHeader from '@/components/SectionHeader';

export const metadata = {
    title: 'Products',
    description:
        'Explore Future Energy\'s comprehensive range of battery and energy solutions - Automotive Batteries, Inverter Batteries, Stabilizers, Solar Solutions, and Lead Acid Batteries from 12V40Ah to 12V500Ah.',
};


export default function ProductsPage() {

    const products = [
        {
            id: 'automotive',
            title: 'Automotive Batteries',
            tagline: 'Power Your Journey',
            description:
                'High-performance batteries designed for all vehicle types. Our automotive batteries deliver reliable starting power, extended life, and maintenance-free operation for cars, trucks, and commercial vehicles.',
            image: '/card4.jpg',
            features: [
                'High Cold Cranking Amps (CCA)',
                'Vibration Resistant Design',
                'Maintenance Free Technology',
                'Extended Warranty Coverage',
                'All Weather Performance',
            ],
            applications: ['Passenger Cars', 'SUVs & MUVs', 'Commercial Vehicles', 'Two-Wheelers'],
        },
        {
            id: 'inverter',
            title: 'Inverter & Inverter Batteries',
            tagline: 'Uninterrupted Power',
            description:
                'Reliable power backup solutions for homes and businesses. Our inverter batteries provide long backup hours, fast charging, and superior deep cycle performance for uninterrupted power supply.',
            image: '/card5.jpg',
            features: [
                'Deep Cycle Design',
                'Fast Charging Capability',
                'Long Backup Duration',
                'Low Water Loss',
                'Rugged Construction',
            ],
            applications: ['Home UPS', 'Office Backup', 'Retail Stores', 'Small Businesses'],
        },
        {
            id: 'stabilizers',
            title: 'Stabilizers',
            tagline: 'Stable Power Always',
            description:
                'Protect your valuable appliances from voltage fluctuations. Our stabilizers ensure consistent, clean power delivery, safeguarding your electronic equipment and extending their lifespan.',
            image: '/card6.jpg',
            features: [
                'Wide Input Voltage Range',
                'Instant Correction',
                'Digital Display',
                'Overload Protection',
                'Compact Design',
            ],
            applications: ['Air Conditioners', 'Refrigerators', 'TVs & Electronics', 'Computers'],
        },
        {
            id: 'solar',
            title: 'Residential Solar Solutions',
            tagline: 'Harness the Sun',
            description:
                'Sustainable energy solutions for modern homes. Our residential solar systems help you reduce electricity bills, minimize carbon footprint, and achieve energy independence with clean, renewable power.',
            image: '/card7.jpg',
            features: [
                'High Efficiency Panels',
                'Smart Monitoring',
                'Grid-Tie Compatible',
                'Low Maintenance',
                'Government Subsidy Eligible',
            ],
            applications: ['Rooftop Installations', 'Ground Mount Systems', 'Hybrid Systems', 'Off-Grid Solutions'],
        },
        {
            id: 'lead-acid',
            title: 'Lead Acid Batteries',
            tagline: 'Industrial Strength',
            description:
                'Industrial-grade batteries ranging from 12V40Ah to 12V500Ah. Our lead acid batteries are engineered for demanding applications requiring reliable, high-capacity energy storage.',
            image: '/card8.jpg',
            features: [
                'Wide Capacity Range (40Ah-500Ah)',
                'VRLA & Flooded Options',
                'Long Cycle Life',
                'Temperature Resistant',
                'Cost Effective',
            ],
            applications: ['UPS Systems', 'Telecom Towers', 'Data Centers', 'Industrial Backup'],
        },
    ];

    return (
        <>
            {/* Hero Section */}
            <Hero
                title="Complete Energy Solutions for Every Need"
                subtitle="Our Products"
                description="From automotive to industrial, we provide comprehensive battery and energy solutions backed by innovation, quality, and reliability."
                primaryCTA="Request Quote"
                primaryHref="/contact"
                secondaryCTA="View Specifications"
                secondaryHref="/product-details"
            />

            {/* Products Overview */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <SectionHeader
                        subtitle="What We Offer"
                        title="Smart Energy Products"
                        description="Bringing a new dimension of smart energy products with offerings in automotive batteries, inverters, stabilizers, and solar solutions."
                    />

                    {/* Quick Category Links */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {products.map((product) => (
                            <a
                                key={product.id}
                                href={`#${product.id}`}
                                className="px-6 py-3 bg-white rounded-full shadow-md hover:shadow-lg hover:bg-energy-green hover:text-white transition-all font-medium text-gray-700"
                            >
                                {product.title}
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Product Sections */}
            {products.map((product, index) => (
                <section
                    key={product.id}
                    id={product.id}
                    className={`section-padding ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                >
                    <div className="container-custom">
                        <div className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                            {/* Image */}
                            <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                                <div className="relative rounded-lg overflow-hidden shadow-2xl">
                                    <Image
                                        src={product.image}
                                        alt={product.title}
                                        width={600}
                                        height={450}
                                        className="w-full h-auto object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-energy-blue/30 to-transparent"></div>
                                </div>
                                {/* Floating Badge */}
                                <div className={`absolute -bottom-6 ${index % 2 === 0 ? '-right-6' : '-left-6'} bg-energy-orange text-white p-4 rounded-lg shadow-xl hidden md:block`}>
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                            </div>

                            {/* Content */}
                            <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                                <span className="inline-flex items-center gap-2 px-4 py-2 bg-energy-green/10 rounded-full mb-4">
                                    <span className="w-2 h-2 bg-energy-green rounded-full"></span>
                                    <span className="text-energy-green font-semibold text-sm">{product.tagline}</span>
                                </span>

                                <h2 className="text-3xl md:text-4xl font-bold text-energy-blue mb-4">
                                    {product.title}
                                </h2>

                                <p className="text-gray-600 leading-relaxed mb-6">
                                    {product.description}
                                </p>

                                {/* Features */}
                                <div className="mb-6">
                                    <h4 className="font-semibold text-energy-blue mb-3">Key Features</h4>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                        {product.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center gap-2 text-gray-600">
                                                <svg className="w-5 h-5 text-energy-green flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                                </svg>
                                                <span className="text-sm">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Applications */}
                                <div className="mb-8">
                                    <h4 className="font-semibold text-energy-blue mb-3">Applications</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {product.applications.map((app, idx) => (
                                            <span
                                                key={idx}
                                                className="px-3 py-1 bg-energy-blue/10 text-energy-blue text-sm rounded-full"
                                            >
                                                {app}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                                    Get Quote
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            ))}

            {/* Lead Acid Battery Range */}
            <section className="section-padding bg-energy-blue text-white">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-4">
                            <span className="w-2 h-2 bg-energy-orange rounded-full"></span>
                            <span className="text-energy-orange font-semibold text-sm">Battery Range</span>
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Lead Acid Batteries: 12V40Ah to 12V500Ah
                        </h2>
                        <p className="text-white/80 max-w-2xl mx-auto">
                            Complete range of lead acid batteries for every capacity requirement.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        {['40Ah', '100Ah', '200Ah', '350Ah', '500Ah'].map((capacity, index) => (
                            <div
                                key={capacity}
                                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-colors"
                            >
                                <div className="text-energy-orange font-bold text-xl mb-1">12V</div>
                                <div className="text-3xl font-bold text-white">{capacity}</div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-8">
                        <Link href="/product-details" className="bg-energy-orange hover:bg-energy-orange-dark text-white font-semibold px-8 py-4 rounded-lg inline-flex items-center gap-2 transition-colors">
                            View All Specifications
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>

            {/* IT 700 Highlight */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="bg-gradient-to-r from-energy-green to-energy-green-dark rounded-3xl overflow-hidden">
                        <div className="grid lg:grid-cols-2">
                            <div className="p-12 text-white">
                                <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full mb-6">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                    <span className="font-semibold text-sm">Featured Product</span>
                                </span>

                                <h2 className="text-3xl md:text-4xl font-bold mb-4">IT 700 Patent Product</h2>
                                <p className="text-white/80 mb-6">
                                    Our patented technology delivers superior performance with extended cycle life,
                                    fast charging, and exceptional reliability for demanding applications.
                                </p>

                                <ul className="space-y-3 mb-8">
                                    {['12V300Ah', '12V350Ah', '12V400Ah', '12V450Ah', '12V500Ah'].map((model) => (
                                        <li key={model} className="flex items-center gap-3">
                                            <svg className="w-5 h-5 text-energy-orange" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                            </svg>
                                            <span className="font-medium">{model}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Link href="/product-details" className="bg-white text-energy-green font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
                                    View Details
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Link>
                            </div>

                            <div className="relative hidden lg:block">
                                <Image
                                    src="/card8.jpg"
                                    alt="IT 700 Patent Product"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-energy-green to-transparent"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <CTA
                title="Need Help Choosing the Right Product?"
                description="Our energy experts are ready to help you find the perfect solution for your specific needs."
                buttonText="Talk to an Expert"
                buttonHref="/contact"
            />
        </>
    );
}
