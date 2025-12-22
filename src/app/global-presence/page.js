import Image from 'next/image';
import Hero from '@/components/Hero';
import CTA from '@/components/CTA';
import SectionHeader from '@/components/SectionHeader';
import Link from 'next/link';

/**
 * Global Presence Page Metadata
 */
export const metadata = {
    title: 'Global Presence',
    description:
        'Future Energy serves customers across 30+ countries worldwide. Discover our international reach and distribution network.',
};

/**
 * Global Presence Page
 * International reach and distribution network
 */
export default function GlobalPresencePage() {
    // Regions and countries
    const regions = [
        {
            name: 'Middle East & Africa',
            countries: ['UAE', 'Saudi Arabia', 'Qatar', 'Kuwait', 'Oman', 'Kenya', 'Nigeria', 'South Africa', 'Egypt', 'Morocco'],
            stats: '12+ Countries',
            color: 'energy-orange',
        },
        {
            name: 'Asia Pacific',
            countries: ['India', 'Bangladesh', 'Nepal', 'Sri Lanka', 'Myanmar', 'Thailand', 'Vietnam', 'Indonesia', 'Philippines', 'Malaysia'],
            stats: '10+ Countries',
            color: 'energy-green',
        },
        {
            name: 'Europe & CIS',
            countries: ['Germany', 'UK', 'France', 'Italy', 'Spain', 'Russia', 'Ukraine', 'Poland'],
            stats: '8+ Countries',
            color: 'energy-blue',
        },
    ];

    // Global stats
    const globalStats = [
        { value: '30+', label: 'Countries', icon: '🌍' },
        { value: '50+', label: 'Distributors', icon: '🤝' },
        { value: '100K+', label: 'Units Exported', icon: '📦' },
        { value: '15+', label: 'Years Exporting', icon: '⏱️' },
    ];

    // Export highlights
    const exportHighlights = [
        {
            title: 'Quality Certified',
            description: 'All our export products meet international quality standards and certifications.',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
            ),
        },
        {
            title: 'Competitive Pricing',
            description: 'We offer competitive pricing without compromising on quality or service.',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
        },
        {
            title: 'Reliable Supply',
            description: 'Consistent supply chain with on-time delivery to global destinations.',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
            ),
        },
        {
            title: 'Partner Support',
            description: 'Comprehensive support for distributors including marketing and technical assistance.',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
        },
    ];

    return (
        <>
            {/* Hero Section */}
            <Hero
                title="Powering the World with Indian Excellence"
                subtitle="Global Presence"
                description="From India to the world - Future Energy serves customers across 30+ countries with reliable energy solutions."
                primaryCTA="Become a Partner"
                primaryHref="/contact"
                secondaryCTA="Our Products"
                secondaryHref="/products"
            />

            {/* Global Stats Banner */}
            <section className="py-12 bg-energy-green text-white">
                <div className="container-custom">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {globalStats.map((stat, index) => (
                            <div key={stat.label}>
                                <div className="text-4xl mb-2">{stat.icon}</div>
                                <div className="text-3xl md:text-4xl font-bold">{stat.value}</div>
                                <div className="text-white/80">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* World Map Section */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <SectionHeader
                        subtitle="Our Reach"
                        title="Presence in 30+ Countries"
                        description="Our global footprint continues to expand as we bring quality energy solutions to new markets across continents."
                    />

                    {/* Map Placeholder with actual image */}
                    <div className="relative bg-gray-100 rounded-3xl overflow-hidden shadow-xl mb-12">
                        <Image
                            src="/card1.jpg"
                            alt="Global Presence Map"
                            width={1200}
                            height={600}
                            className="w-full h-auto object-cover opacity-30"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                                <div className="w-24 h-24 bg-energy-green rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-3xl font-bold text-energy-blue mb-2">30+ Countries</h3>
                                <p className="text-gray-600">Delivering energy solutions worldwide</p>
                            </div>
                        </div>

                        {/* Animated Dots representing countries */}
                        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-energy-orange rounded-full animate-ping"></div>
                        <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-energy-green rounded-full animate-ping delay-300"></div>
                        <div className="absolute bottom-1/3 left-1/2 w-4 h-4 bg-energy-blue rounded-full animate-ping delay-500"></div>
                        <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-energy-orange rounded-full animate-ping delay-700"></div>
                    </div>
                </div>
            </section>

            {/* Regional Breakdown */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <SectionHeader
                        subtitle="Regional Coverage"
                        title="Markets We Serve"
                        description="Our distribution network spans across major regions, bringing Future Energy products to diverse markets."
                    />

                    <div className="grid md:grid-cols-3 gap-8">
                        {regions.map((region, index) => (
                            <div
                                key={region.name}
                                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                            >
                                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${region.color === 'energy-orange'
                                    ? 'bg-energy-orange/10 text-energy-orange'
                                    : region.color === 'energy-green'
                                        ? 'bg-energy-green/10 text-energy-green'
                                        : 'bg-energy-blue/10 text-energy-blue'
                                    }`}>
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>

                                <h3 className="text-2xl font-bold text-energy-blue mb-2">{region.name}</h3>
                                <div className={`font-semibold mb-4 ${region.color === 'energy-orange'
                                    ? 'text-energy-orange'
                                    : region.color === 'energy-green'
                                        ? 'text-energy-green'
                                        : 'text-energy-blue'
                                    }`}>
                                    {region.stats}
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {region.countries.map((country, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
                                        >
                                            {country}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Export Highlights */}
            <section className="section-padding bg-energy-blue text-white">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-4">
                            <span className="w-2 h-2 bg-energy-orange rounded-full"></span>
                            <span className="text-energy-orange font-semibold text-sm">Why Partner With Us</span>
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Export Excellence</h2>
                        <p className="text-white/80 max-w-2xl mx-auto">We are committed to supporting our international partners with quality products and comprehensive services.</p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {exportHighlights.map((highlight, index) => (
                            <div
                                key={highlight.title}
                                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-colors"
                            >
                                <div className="w-16 h-16 bg-energy-orange rounded-2xl flex items-center justify-center mx-auto mb-6 text-white">
                                    {highlight.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-white">{highlight.title}</h3>
                                <p className="text-white/70 text-sm">{highlight.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Partnership Section */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left - Image */}
                        <div className="relative">
                            <div className="rounded-2xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/card7.jpg"
                                    alt="Global Partnership"
                                    width={600}
                                    height={450}
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-6 -right-6 bg-energy-green text-white p-6 rounded-xl shadow-xl hidden md:block">
                                <div className="text-3xl font-bold">50+</div>
                                <div className="text-white/80 text-sm">Global Partners</div>
                            </div>
                        </div>

                        {/* Right - Content */}
                        <div>
                            <span className="inline-flex items-center gap-2 px-4 py-2 bg-energy-green/10 rounded-full mb-6">
                                <span className="w-2 h-2 bg-energy-green rounded-full"></span>
                                <span className="text-energy-green font-semibold text-sm">Partnership Opportunity</span>
                            </span>

                            <h2 className="text-3xl md:text-4xl font-bold text-energy-blue mb-6">
                                Become Our Distribution Partner
                            </h2>

                            <div className="space-y-6 text-gray-600 leading-relaxed mb-8">
                                <p>
                                    We&apos;re actively seeking distribution partners in new markets. If you&apos;re
                                    looking to add quality battery products to your portfolio, Future Energy
                                    offers competitive pricing, reliable supply, and comprehensive support.
                                </p>
                                <p>
                                    Our partners benefit from:
                                </p>
                            </div>

                            <ul className="space-y-3 mb-8">
                                {[
                                    'Exclusive territory rights',
                                    'Marketing support materials',
                                    'Technical training programs',
                                    'Competitive pricing structure',
                                    'Dedicated account management',
                                ].map((benefit, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-gray-700">
                                        <svg className="w-5 h-5 text-energy-green flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                        </svg>
                                        {benefit}
                                    </li>
                                ))}
                            </ul>

                            <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                                Apply for Partnership
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <CTA
                title="Ready to Join Our Global Network?"
                description="Partner with Future Energy and bring quality energy solutions to your market. Contact us to discuss partnership opportunities."
                buttonText="Contact Us"
                buttonHref="/contact"
            />
        </>
    );
}
