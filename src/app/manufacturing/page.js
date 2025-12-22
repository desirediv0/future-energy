import Image from 'next/image';
import Hero from '@/components/Hero';
import CTA from '@/components/CTA';
import SectionHeader from '@/components/SectionHeader';

export const metadata = {
    title: 'Manufacturing Unit',
    description:
        'Explore Future Energy\'s state-of-the-art manufacturing facility at IMT Manesar, Gurugram. Plot No 18-19, Sector 2A, IMT Manesar, Gurugram, Haryana 122052.',
};

export default function ManufacturingPage() {
    const capabilities = [
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
            ),
            title: 'Modern Facility',
            description: 'State-of-the-art manufacturing plant spread across 50,000 sq. ft. with advanced production lines.',
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
            title: 'Quality Control',
            description: 'Every battery undergoes 20+ quality checkpoints ensuring international standards compliance.',
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            title: 'High Capacity',
            description: 'Production capacity of 10,000+ batteries per month across all product categories.',
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: 'Eco-Friendly',
            description: 'Sustainable manufacturing practices with proper waste management and recycling programs.',
        },
    ];

    const processSteps = [
        {
            step: '01',
            title: 'Raw Material Testing',
            description: 'All incoming materials undergo rigorous quality testing before entering production.',
        },
        {
            step: '02',
            title: 'Plate Manufacturing',
            description: 'Advanced grid casting and paste mixing for optimal battery plate performance.',
        },
        {
            step: '03',
            title: 'Assembly Line',
            description: 'Precision assembly of cells with automated welding and sealing processes.',
        },
        {
            step: '04',
            title: 'Formation & Charging',
            description: 'Controlled formation process to activate battery chemistry and optimize capacity.',
        },
        {
            step: '05',
            title: 'Quality Testing',
            description: 'Comprehensive testing including capacity, voltage, and endurance tests.',
        },
        {
            step: '06',
            title: 'Packaging & Dispatch',
            description: 'Secure packaging with proper documentation for domestic and export shipments.',
        },
    ];

    const facilityHighlights = [
        { label: 'Total Area', value: '50,000+ Sq. Ft.' },
        { label: 'Production Lines', value: '8 Advanced Lines' },
        { label: 'Monthly Capacity', value: '10,000+ Units' },
        { label: 'Quality Checkpoints', value: '20+ Tests' },
        { label: 'Skilled Workers', value: '200+ Team' },
        { label: 'Export Countries', value: '30+ Nations' },
    ];

    return (
        <>
            <Hero
                title="World-Class Manufacturing Excellence"
                subtitle="Manufacturing Unit"
                description="Our state-of-the-art facility at IMT Manesar is where innovation meets precision. Discover how we create reliable energy solutions."
                primaryCTA="Schedule a Visit"
                primaryHref="/contact"
                secondaryCTA="View Gallery"
                secondaryHref="/gallery"
            />

            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <div className="rounded-lg overflow-hidden shadow-2xl">
                                <Image
                                    src="/card2.jpg"
                                    alt="Future Energy Manufacturing Plant"
                                    width={600}
                                    height={450}
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-6 -right-6 bg-energy-green text-white p-6 rounded-lg shadow-xl hidden md:block">
                                <svg className="w-10 h-10 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <div className="text-sm font-medium">IMT Manesar</div>
                                <div className="text-white/70 text-xs">Gurugram, India</div>
                            </div>
                        </div>

                        <div>
                            <span className="inline-flex items-center gap-2 px-4 py-2 bg-energy-green/10 rounded-full mb-6">
                                <span className="w-2 h-2 bg-energy-green rounded-full"></span>
                                <span className="text-energy-green font-semibold text-sm">Our Facility</span>
                            </span>

                            <h2 className="text-3xl md:text-4xl font-bold text-energy-blue mb-6">
                                Manufacturing Address
                            </h2>

                            <div className="bg-gray-50 rounded-lg p-8 mb-8 border-l-4 border-energy-orange">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-energy-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-energy-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-energy-blue mb-2">Future Energy Manufacturing</h3>
                                        <p className="text-gray-600 text-lg">
                                            <strong>Plot Number 18-19, Sector 2A,</strong><br />
                                            IMT Manesar, Gurugram,<br />
                                            Haryana 122052, India
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <p className="text-gray-600 leading-relaxed mb-8">
                                Our manufacturing unit is strategically located in the Industrial Model Township (IMT)
                                Manesar, one of India&apos;s premier industrial hubs. This location provides excellent
                                connectivity to major highways, ports, and airports, ensuring efficient logistics
                                for both domestic and international deliveries.
                            </p>

                            <div className="grid grid-cols-2 gap-4">
                                {facilityHighlights.slice(0, 4).map((item, index) => (
                                    <div key={item.label} className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                                        <div className="text-xl font-bold text-energy-green">{item.value}</div>
                                        <div className="text-gray-500 text-sm">{item.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <SectionHeader
                        subtitle="Our Capabilities"
                        title="Engineered for Excellence"
                        description="Our facility is equipped with cutting-edge technology and processes to deliver world-class battery solutions."
                    />

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {capabilities.map((capability, index) => (
                            <div
                                key={capability.title}
                                className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                            >
                                <div className="w-16 h-16 bg-energy-blue/10 rounded-lg flex items-center justify-center mb-6 text-energy-blue group-hover:bg-energy-blue group-hover:text-white transition-colors">
                                    {capability.icon}
                                </div>
                                <h3 className="text-xl font-bold text-energy-blue mb-3">{capability.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{capability.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding bg-energy-blue text-white">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-4">
                            <span className="w-2 h-2 bg-energy-orange rounded-full"></span>
                            <span className="text-energy-orange font-semibold text-sm">Production Process</span>
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">From Raw Materials to Finished Products</h2>
                        <p className="text-white/80 max-w-2xl mx-auto">Our meticulous production process ensures every battery meets the highest quality standards.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {processSteps.map((step, index) => (
                            <div
                                key={step.step}
                                className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/20 transition-colors relative overflow-hidden"
                            >
                                <div className="absolute top-4 right-4 text-6xl font-bold text-white/10">
                                    {step.step}
                                </div>
                                <div className="relative z-10">
                                    <span className="inline-block px-3 py-1 bg-energy-orange text-white text-sm font-bold rounded-full mb-4">
                                        Step {step.step}
                                    </span>
                                    <h3 className="text-xl font-bold mb-3 text-white">{step.title}</h3>
                                    <p className="text-white/70 text-sm leading-relaxed">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding bg-white">
                <div className="container-custom">
                    <SectionHeader
                        subtitle="Facility Gallery"
                        title="Inside Our Manufacturing Plant"
                        description="Take a visual tour of our world-class manufacturing facility."
                    />

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {['/card3.jpg', '/card4.jpg', '/card5.jpg', '/card6.jpg'].map((img, index) => (
                            <div
                                key={index}
                                className="relative rounded-lg overflow-hidden shadow-lg group cursor-pointer aspect-square"
                            >
                                <Image
                                    src={img}
                                    alt={`Manufacturing facility ${index + 1}`}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    sizes="(max-width: 768px) 50vw, 25vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {facilityHighlights.map((item, index) => (
                            <div key={item.label} className="bg-white rounded-lg p-6 text-center shadow-lg">
                                <div className="text-2xl md:text-3xl font-bold text-energy-green mb-2">{item.value}</div>
                                <div className="text-gray-500 text-sm">{item.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding bg-energy-gradient">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Find Us</h2>
                        <p className="text-white/80">Visit our manufacturing facility at IMT Manesar, Gurugram</p>
                    </div>

                    <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3510.571285349388!2d76.9333082752791!3d28.371808275808178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d3dcf3b437681%3A0x6191e66e87c7bbf3!2sFuture%20Energy%20Plot%20No%2018-19!5e0!3m2!1sen!2sin!4v1766386636701!5m2!1sen!2sin"
                            width="100%"
                            height="400"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Future Energy Manufacturing Location"
                        ></iframe>
                    </div>
                </div>
            </section>

            <CTA
                title="Want to Visit Our Facility?"
                description="Schedule a tour of our manufacturing plant and witness our commitment to quality firsthand."
                buttonText="Schedule a Visit"
                buttonHref="/contact"
            />
        </>
    );
}
