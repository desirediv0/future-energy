import Image from 'next/image';
import Hero from '@/components/Hero';
import CTA from '@/components/CTA';
import SectionHeader from '@/components/SectionHeader';
import Link from 'next/link';
import { HiGlobeAlt, HiUserGroup, HiCube, HiClock, HiBadgeCheck, HiSwitchHorizontal, HiUsers, HiCheckCircle, HiArrowRight, HiCurrencyRupee } from 'react-icons/hi';

export const metadata = {
    title: 'Global Presence',
    description:
        'Future Energy serves customers across 30+ countries worldwide. Discover our international reach and distribution network.',
};


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
        { value: '30+', label: 'Countries', icon: <HiGlobeAlt className="w-10 h-10" /> },
        { value: '50+', label: 'Distributors', icon: <HiUserGroup className="w-10 h-10" /> },
        { value: '100K+', label: 'Units Exported', icon: <HiCube className="w-10 h-10" /> },
        { value: '15+', label: 'Years Exporting', icon: <HiClock className="w-10 h-10" /> },
    ];

    // Export highlights
    const exportHighlights = [
        {
            title: 'Quality Certified',
            description: 'All our export products meet international quality standards and certifications.',
            icon: <HiBadgeCheck className="w-8 h-8" />,
        },
        {
            title: 'Competitive Pricing',
            description: 'We offer competitive pricing without compromising on quality or service.',
            icon: <HiCurrencyRupee className="w-8 h-8" />,
        },
        {
            title: 'Reliable Supply',
            description: 'Consistent supply chain with on-time delivery to global destinations.',
            icon: <HiSwitchHorizontal className="w-8 h-8" />,
        },
        {
            title: 'Partner Support',
            description: 'Comprehensive support for distributors including marketing and technical assistance.',
            icon: <HiUsers className="w-8 h-8" />,
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
                        {globalStats.map((stat) => (
                            <div key={stat.label}>
                                <div className="flex justify-center mb-2">{stat.icon}</div>
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
                            className="w-full h-auto object-cover opacity-30 max-h-[500px]"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                                <div className="w-24 h-24 bg-energy-green rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                                    <HiGlobeAlt className="w-12 h-12 text-white" />
                                </div>
                                <h3 className="text-3xl font-bold text-energy-blue mb-2">30+ Countries</h3>
                                <p className="text-gray-600">Delivering energy solutions worldwide</p>
                            </div>
                        </div>
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
                        {regions.map((region) => (
                            <div
                                key={region.name}
                                className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow"
                            >
                                <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-6 ${region.color === 'energy-orange'
                                    ? 'bg-energy-orange/10 text-energy-orange'
                                    : region.color === 'energy-green'
                                        ? 'bg-energy-green/10 text-energy-green'
                                        : 'bg-energy-blue/10 text-energy-blue'
                                    }`}>
                                    <HiGlobeAlt className="w-8 h-8" />
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
                        {exportHighlights.map((highlight) => (
                            <div
                                key={highlight.title}
                                className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center hover:bg-white/20 transition-colors"
                            >
                                <div className="w-16 h-16 bg-energy-orange rounded-lg flex items-center justify-center mx-auto mb-6 text-white">
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
                            <div className="rounded-lg overflow-hidden shadow-2xl">
                                <Image
                                    src="/card7.jpg"
                                    alt="Global Partnership"
                                    width={600}
                                    height={450}
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-6 -right-6 bg-energy-green text-white p-6 rounded-lg shadow-xl hidden md:block">
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
                                        <HiCheckCircle className="w-5 h-5 text-energy-green flex-shrink-0" />
                                        {benefit}
                                    </li>
                                ))}
                            </ul>

                            <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                                Apply for Partnership
                                <HiArrowRight className="w-5 h-5" />
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
