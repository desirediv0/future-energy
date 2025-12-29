import Image from 'next/image';
import Hero from '@/components/Hero';
import CTA from '@/components/CTA';
import SectionHeader from '@/components/SectionHeader';
import StatCard from '@/components/StatCard';

export const metadata = {
    title: 'About Us',
    description:
        'Learn about Future Energy India - A leading battery and energy solutions company with presence in 30+ countries. Our story, mission, vision, and values.',
};

export default function AboutPage() {
    const values = [
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
            ),
            title: 'Quality First',
            description: 'We never compromise on quality. Every battery undergoes rigorous testing to ensure peak performance.',
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            title: 'Innovation',
            description: 'Powered by passion and fueled by innovation, we continuously evolve our products and processes.',
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: 'Global Reach',
            description: 'With presence in 30+ countries, we bring world-class energy solutions to customers worldwide.',
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
            title: 'Customer Focus',
            description: 'We deem it our privilege to serve your esteemed organization with long-term business relationships.',
        },
    ];

    // Company milestones
    const milestones = [
        {
            year: '2021',
            title: 'Foundation',
            description: 'Future Energy was established with a vision to revolutionize the energy solutions market in India.',
        },
        {
            year: '2023',
            title: 'Manufacturing Unit',
            description: 'State-of-the-art facility established at IMT Manesar, Gurugram with advanced production capabilities.',
        },
        {
            year: '2023',
            title: 'IT 700 Patent',
            description: 'Secured patent for our innovative IT 700 technology, setting new benchmarks in battery performance.',
        },
        {
            year: '2023',
            title: 'Global Expansion',
            description: 'Expanded presence to 20+ countries, establishing Future Energy as a trusted international brand.',
        },
        {
            year: '2024',
            title: 'Solar Solutions',
            description: 'Launched residential solar solutions, contributing to sustainable and clean energy adoption.',
        },
        {
            year: '2025',
            title: '30+ Countries',
            description: 'Now serving customers across 30+ countries with our comprehensive energy solutions portfolio.',
        },
    ];

    // Stats
    const stats = [
        { value: '30+', label: 'Countries', color: 'green' },
        { value: '15+', label: 'Years Experience', color: 'orange' },
        { value: '100K+', label: 'Batteries Delivered', color: 'blue' },
        { value: '200+', label: 'Team Members', color: 'green' },
    ];

    return (
        <>
            {/* Hero Section */}
            <Hero
                title="Powering India&apos;s Energy Future"
                subtitle="About Us"
                description="Powered by passion and fueled by innovation, Future Energy has established itself as a strong player in the energy solution space in India."
                primaryCTA="Contact Us"
                primaryHref="/contact"
                secondaryCTA="Our Products"
                secondaryHref="/products"
            />

            {/* Company Story Section */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left - Image */}
                        <div className="relative">
                            <div className="relative rounded-lg overflow-hidden shadow-2xl">
                                <Image
                                    src="/card1.jpg"
                                    alt="Future Energy Manufacturing Facility"
                                    width={600}
                                    height={500}
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                            {/* Floating Card */}
                            <div className="absolute -bottom-8 -right-8 bg-energy-green text-white p-8 rounded-lg shadow-xl hidden md:block">
                                <div className="text-4xl font-bold">30+</div>
                                <div className="text-white/80 text-sm">Countries Worldwide</div>
                            </div>
                            {/* Decorative Element */}
                            <div className="absolute -top-6 -left-6 w-24 h-24 bg-energy-orange/20 rounded-full blur-xl"></div>
                        </div>

                        {/* Right - Content */}
                        <div>
                            <span className="inline-flex items-center gap-2 px-4 py-2 bg-energy-green/10 rounded-full mb-6">
                                <span className="w-2 h-2 bg-energy-green rounded-full"></span>
                                <span className="text-energy-green font-semibold text-sm">Our Story</span>
                            </span>

                            <h2 className="text-3xl md:text-4xl font-bold text-energy-blue mb-6">
                                A Strong Player in Energy Solutions
                            </h2>

                            <div className="space-y-6 text-gray-600 leading-relaxed">
                                <p>
                                    Powered by passion and fueled by innovation, <strong className="text-energy-blue">FUTURE ENERGY</strong> has established itself as a strong player in the energy solution space in India. With our offerings in automotive batteries, Inverters and Inverter Batteries, Stabilizers, and Residential Solar Solutions, we are bringing in a new dimension of smart energy products.
                                </p>
                                <p>
                                    We take pride in informing you that our company is ideally suited to handle the diversified needs associated with large business houses of your stature and standing.
                                </p>
                                <p>
                                    While we deem it our privilege to serve your esteemed organization and have a long-term business relationship with you, we shall be happy to call on you for a personal interface at your earliest convenience.
                                </p>
                            </div>

                            {/* Quick Stats */}
                            <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-gray-200">
                                <div>
                                    <div className="text-2xl font-bold text-energy-green">2021</div>
                                    <div className="text-gray-500 text-sm">Founded</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-energy-orange">30+</div>
                                    <div className="text-gray-500 text-sm">Countries</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-energy-blue">100K+</div>
                                    <div className="text-gray-500 text-sm">Products</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Mission */}
                        <div className="bg-white rounded-xl p-10 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-energy-green">
                            <div className="w-16 h-16 bg-energy-green/10 rounded-lg flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-energy-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-energy-blue mb-4">Our Mission</h3>
                            <p className="text-gray-600 leading-relaxed">
                                To provide innovative, reliable, and sustainable energy solutions that power progress
                                across industries and homes. We are committed to bringing smart energy products that
                                meet the diversified needs of businesses worldwide while maintaining the highest
                                standards of quality and environmental responsibility.
                            </p>
                        </div>

                        {/* Vision */}
                        <div className="bg-white rounded-xl p-10 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-energy-orange">
                            <div className="w-16 h-16 bg-energy-orange/10 rounded-lg flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-energy-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-energy-blue mb-4">Our Vision</h3>
                            <p className="text-gray-600 leading-relaxed">
                                To be a global leader in energy storage solutions, recognized for innovation,
                                quality, and customer-centricity. We envision a future where clean, efficient
                                energy is accessible to all, and Future Energy is at the forefront of this
                                transformation with presence across 50+ countries by 2030.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <SectionHeader
                        subtitle="Our Core Values"
                        title="What Drives Us Forward"
                        description="These principles guide everything we do, from product development to customer relationships."
                    />

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <div
                                key={value.title}
                                className="group bg-gray-50 rounded-lg p-8 hover:bg-energy-green transition-colors duration-300"
                            >
                                <div className="w-16 h-16 bg-energy-green/10 rounded-lg flex items-center justify-center mb-6 text-energy-green group-hover:bg-white/20 group-hover:text-white transition-colors">
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-bold text-energy-blue mb-3 group-hover:text-white transition-colors">
                                    {value.title}
                                </h3>
                                <p className="text-gray-600 group-hover:text-white/80 transition-colors text-sm leading-relaxed">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="section-padding bg-energy-gradient text-white">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-4">
                            <span className="w-2 h-2 bg-energy-orange rounded-full"></span>
                            <span className="text-energy-orange font-semibold text-sm">Our Journey</span>
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Milestones That Define Us</h2>
                        <p className="text-white/80 max-w-2xl mx-auto">From humble beginnings to global presence, every milestone marks our commitment to excellence.</p>
                    </div>

                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-white/20 hidden lg:block"></div>

                        <div className="space-y-8 lg:space-y-0">
                            {milestones.map((milestone, index) => (
                                <div
                                    key={milestone.year}
                                    className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                                        }`}
                                >
                                    {/* Content */}
                                    <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors">
                                            <span className="text-energy-orange font-bold text-lg">{milestone.year}</span>
                                            <h3 className="text-xl font-bold mt-2 mb-2 text-white">
                                                {milestone.title}
                                            </h3>
                                            <p className="text-white/80 text-sm">{milestone.description}</p>
                                        </div>
                                    </div>

                                    {/* Center Dot */}
                                    <div className="w-4 h-4 bg-energy-orange rounded-full border-4 border-white/20 relative z-10 hidden lg:block"></div>

                                    {/* Empty space for alignment */}
                                    <div className="flex-1 hidden lg:block"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <SectionHeader
                        subtitle="Our Impact"
                        title="Numbers That Speak"
                        description="Our growth story in numbers - a testament to our commitment and your trust."
                    />

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {stats.map((stat, index) => (
                            <StatCard
                                key={stat.label}
                                value={stat.value}
                                label={stat.label}
                                color={stat.color}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <CTA
                title="Ready to Power Your Business?"
                description="Partner with Future Energy for reliable, innovative energy solutions. Let&apos;s discuss how we can serve your organization."
                buttonText="Get in Touch"
                buttonHref="/contact"
            />
        </>
    );
}
