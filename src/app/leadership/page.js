import Image from 'next/image';
import Hero from '@/components/Hero';
import CTA from '@/components/CTA';
import SectionHeader from '@/components/SectionHeader';

export const metadata = {
    title: 'Leadership',
    description:
        'Meet the leadership team driving Future Energy\'s success - experienced professionals with decades of expertise in battery manufacturing and energy solutions.',
};

export default function LeadershipPage() {
    const leaders = [
        {
            name: 'Mr. Ananta Jena',
            role: 'Director - Production & R&D',
            experience: '30+ Years Experience',
            bio: 'A visionary leader with over three decades of expertise in battery production and research & development. Mr. Jena has been instrumental in establishing Future Energy\'s manufacturing excellence and driving innovation through the patented IT 700 technology.',
            expertise: ['Battery Manufacturing', 'R&D Leadership', 'Quality Management', 'Process Optimization'],
            email: 'ananta@futurenergy.co.in',
            image: '/profile2.png',
        },
        {
            name: 'Mr. Vikas Chaudhary',
            role: 'Director - Operations',
            experience: '20+ Years Experience',
            bio: 'An accomplished professional with two decades of experience in battery manufacturing and operations. Mr. Chaudhary oversees the company\'s manufacturing operations, supply chain, and international business development.',
            expertise: ['Operations Management', 'Supply Chain', 'Business Development', 'International Trade'],
            email: 'vikas@futurenergy.co.in',
            image: '/profile1.png',
        },
    ];

    const leadershipValues = [
        {
            title: 'Vision',
            description: 'Driving Future Energy towards becoming a global leader in sustainable energy solutions.',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
            ),
        },
        {
            title: 'Innovation',
            description: 'Continuously pushing boundaries with cutting-edge technology and research.',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
            ),
        },
        {
            title: 'Excellence',
            description: 'Committed to delivering world-class products that exceed customer expectations.',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
            ),
        },
        {
            title: 'Integrity',
            description: 'Building trust through transparent practices and ethical business conduct.',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
        },
    ];

    const experienceStats = [
        { value: '50+', label: 'Combined Years of Experience' },
        { value: '30+', label: 'Countries Reached' },
        { value: '100+', label: 'Industry Innovations' },
        { value: '200+', label: 'Team Members Led' },
    ];

    return (
        <>
            <Hero
                title="Experienced Leadership Driving Innovation"
                subtitle="Our Leadership"
                description="Meet the visionaries behind Future Energy - industry veterans with decades of combined experience in battery manufacturing and energy solutions."
                primaryCTA="Contact Leadership"
                primaryHref="/contact"
                secondaryCTA="About Company"
                secondaryHref="/about"
            />

            <section className="py-10 bg-white">
                <div className="container-custom">
                    <SectionHeader
                        subtitle="Meet Our Team"
                        title="The Minds Behind Future Energy"
                        description="Our leadership team brings together decades of expertise in battery technology, manufacturing excellence, and global business development."
                    />

                    <div className="space-y-16">
                        {leaders.map((leader, index) => (
                            <div
                                key={leader.name}
                                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                                    }`}
                            >
                                <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                                    <div className="relative rounded-lg overflow-hidden shadow-2xl aspect-[4/5]">
                                        <Image
                                            src={leader.image}
                                            alt={leader.name}
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-energy-blue/60 to-transparent"></div>

                                        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                                            <h3 className="text-2xl font-bold">{leader.name}</h3>
                                            <p className="text-white/80">{leader.role}</p>
                                        </div>
                                    </div>

                                    <div className={`absolute -bottom-6 ${index % 2 === 0 ? '-right-6' : '-left-6'} bg-energy-orange text-white p-4 rounded-lg shadow-xl hidden md:block`}>
                                        <div className="text-2xl font-bold">{leader.experience.split(' ')[0]}</div>
                                        <div className="text-white/80 text-sm">Years Experience</div>
                                    </div>
                                </div>

                                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-energy-green/10 rounded-full mb-4">
                                        <span className="w-2 h-2 bg-energy-green rounded-full"></span>
                                        <span className="text-energy-green font-semibold text-sm">{leader.experience}</span>
                                    </span>

                                    <h2 className="text-3xl md:text-4xl font-bold text-energy-blue mb-2">
                                        {leader.name}
                                    </h2>
                                    <p className="text-energy-orange font-semibold text-lg mb-6">{leader.role}</p>

                                    <p className="text-gray-600 leading-relaxed mb-6">
                                        {leader.bio}
                                    </p>

                                    <div className="mb-6">
                                        <h4 className="font-semibold text-energy-blue mb-3">Areas of Expertise</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {leader.expertise.map((skill, idx) => (
                                                <span
                                                    key={idx}
                                                    className="px-4 py-2 bg-energy-blue/10 text-energy-blue text-sm rounded-full font-medium"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <a
                                        href={`mailto:${leader.email}`}
                                        className="inline-flex items-center gap-2 text-energy-green hover:text-energy-green-dark font-medium transition-colors"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        {leader.email}
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <SectionHeader
                        subtitle="Our Approach"
                        title="Leadership Philosophy"
                        description="The principles that guide our leadership and shape our company culture."
                    />

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {leadershipValues.map((value, index) => (
                            <div
                                key={value.title}
                                className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group text-center"
                            >
                                <div className="w-16 h-16 bg-energy-green/10 rounded-lg flex items-center justify-center mx-auto mb-6 text-energy-green group-hover:bg-energy-green group-hover:text-white transition-colors">
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-bold text-energy-blue mb-3">{value.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-10 bg-energy-gradient text-white">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Combined Excellence</h2>
                        <p className="text-white/80 max-w-2xl mx-auto">Our leadership team&apos;s collective experience and achievements.</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {experienceStats.map((stat) => (
                            <div key={stat.label} className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center hover:bg-white/20 transition-colors">
                                <div className="text-4xl md:text-5xl font-bold text-energy-orange mb-2">{stat.value}</div>
                                <div className="text-white/80 text-sm">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-10 bg-white">
                <div className="container-custom">
                    <SectionHeader
                        subtitle="Our Team"
                        title="The Future Energy Family"
                        description="Behind every great product is a team of dedicated professionals working together towards a common goal."
                    />

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {['/card1.jpg', '/card2.jpg', '/card3.jpg', '/card4.jpg'].map((img, index) => (
                            <div
                                key={index}
                                className="relative rounded-lg overflow-hidden shadow-lg group aspect-square"
                            >
                                <Image
                                    src={img}
                                    alt={`Team ${index + 1}`}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    sizes="(max-width: 768px) 50vw, 25vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-energy-blue/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-8">
                        <p className="text-gray-600 mb-6">200+ dedicated team members across manufacturing, R&D, sales, and support</p>
                    </div>
                </div>
            </section>

            <CTA
                title="Want to Join Our Team?"
                description="We&apos;re always looking for talented individuals who share our passion for innovation and excellence in energy solutions."
                buttonText="Contact Us"
                buttonHref="/contact"
            />
        </>
    );
}
