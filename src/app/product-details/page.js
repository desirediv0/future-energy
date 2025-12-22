import Link from 'next/link';
import Hero from '@/components/Hero';
import CTA from '@/components/CTA';
import SectionHeader from '@/components/SectionHeader';

export const metadata = {
    title: 'Product Details',
    description:
        'Detailed specifications of Future Energy\'s battery products including IT 700 Patent Product, 12V300Ah to 12V500Ah Lead Acid Batteries. Range from 12V40Ah to 12V500Ah.',
};

export default function ProductDetailsPage() {
    const batteryProducts = [
        {
            model: '12V300Ah',
            capacity: '300Ah',
            voltage: '12V',
            dimensions: '520 x 268 x 220 mm',
            weight: '95 kg',
            type: 'VRLA AGM',
            designLife: '10 years',
            applications: ['UPS Systems', 'Telecom', 'Solar Storage'],
            features: ['Deep cycle design', 'Low self-discharge', 'Maintenance-free'],
        },
        {
            model: '12V350Ah',
            capacity: '350Ah',
            voltage: '12V',
            dimensions: '520 x 268 x 240 mm',
            weight: '110 kg',
            type: 'VRLA AGM',
            designLife: '10 years',
            applications: ['Industrial UPS', 'Data Centers', 'Emergency Power'],
            features: ['High energy density', 'Excellent recovery', 'Wide temp range'],
        },
        {
            model: '12V400Ah',
            capacity: '400Ah',
            voltage: '12V',
            dimensions: '520 x 268 x 260 mm',
            weight: '125 kg',
            type: 'VRLA AGM',
            designLife: '12 years',
            applications: ['Large UPS', 'Industrial Backup', 'Renewable Energy'],
            features: ['Superior cycle life', 'Fast recharge', 'Robust construction'],
            featured: true,
        },
        {
            model: '12V450Ah',
            capacity: '450Ah',
            voltage: '12V',
            dimensions: '520 x 268 x 280 mm',
            weight: '140 kg',
            type: 'VRLA Gel',
            designLife: '12 years',
            applications: ['Heavy Industry', 'Grid Storage', 'Mining'],
            features: ['Gel technology', 'Extreme conditions', 'Long float life'],
        },
        {
            model: '12V500Ah',
            capacity: '500Ah',
            voltage: '12V',
            dimensions: '520 x 268 x 300 mm',
            weight: '155 kg',
            type: 'VRLA Gel',
            designLife: '12 years',
            applications: ['Power Plants', 'Large Scale Storage', 'Critical Infrastructure'],
            features: ['Maximum capacity', 'Premium quality', 'Extended warranty'],
        },
    ];

    const it700Features = [
        { label: 'Patented Technology', value: 'Exclusive IT 700 design' },
        { label: 'Cycle Life', value: '1500+ deep cycles' },
        { label: 'Float Life', value: 'Up to 15 years' },
        { label: 'Temperature Range', value: '-20°C to +55°C' },
        { label: 'Self Discharge', value: '<3% per month' },
        { label: 'Charge Efficiency', value: '>98%' },
    ];

    return (
        <>
            <Hero
                title="IT 700 Patent Product Details"
                subtitle="Product Specifications"
                description="Explore comprehensive specifications of our battery range. Each product is engineered for performance, reliability, and longevity."
                primaryCTA="Request Quote"
                primaryHref="/contact"
                secondaryCTA="View All Products"
                secondaryHref="/products"
            />

            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="bg-gradient-to-br from-energy-blue via-energy-blue to-energy-blue-light rounded-3xl overflow-hidden">
                        <div className="grid lg:grid-cols-2">
                            <div className="p-12 flex items-center justify-center relative">
                                <div className="absolute inset-0 opacity-10">
                                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                                        <defs>
                                            <pattern id="it700Pattern" width="20" height="20" patternUnits="userSpaceOnUse">
                                                <path d="M20 0L0 20M40-20L-20 40" stroke="white" strokeWidth="0.5" />
                                            </pattern>
                                        </defs>
                                        <rect width="100" height="100" fill="url(#it700Pattern)" />
                                    </svg>
                                </div>

                                <div className="relative">
                                    <div className="w-64 h-80 bg-gradient-to-b from-gray-700 to-gray-900 rounded-3xl border-4 border-gray-600 relative shadow-2xl">
                                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex gap-8">
                                            <div className="w-8 h-8 bg-red-600 rounded-full border-4 border-gray-400 flex items-center justify-center text-white text-xs font-bold">+</div>
                                            <div className="w-8 h-8 bg-gray-800 rounded-full border-4 border-gray-400 flex items-center justify-center text-white text-xs font-bold">-</div>
                                        </div>

                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                                            <div className="bg-energy-orange px-6 py-3 rounded-lg">
                                                <div className="text-white font-bold text-3xl">IT 700</div>
                                                <div className="text-white/80 text-sm">PATENT PRODUCT</div>
                                            </div>
                                            <div className="mt-4 text-white">
                                                <div className="text-lg font-semibold">FUTURE ENERGY</div>
                                                <div className="text-xs text-gray-400">Made in India</div>
                                            </div>
                                        </div>

                                        <div className="absolute bottom-4 left-4 right-4 flex gap-1">
                                            {[...Array(5)].map((_, i) => (
                                                <div key={i} className="flex-1 h-3 bg-energy-green rounded animate-pulse" style={{ animationDelay: `${i * 100}ms` }}></div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="absolute inset-0 rounded-3xl bg-energy-green/20 blur-xl -z-10"></div>
                                </div>
                            </div>

                            <div className="p-12 text-white flex flex-col justify-center">
                                <span className="inline-flex items-center gap-2 px-4 py-2 bg-energy-orange rounded-full w-fit mb-6">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                    <span className="font-semibold text-sm">Patented Innovation</span>
                                </span>

                                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                                    IT 700 Patent Product
                                </h2>
                                <p className="text-white/80 leading-relaxed mb-8">
                                    Our flagship IT 700 represents years of research and development, featuring
                                    proprietary technology that delivers unmatched performance. This patented
                                    design sets new standards in energy storage efficiency and reliability.
                                </p>

                                <div className="grid grid-cols-2 gap-4 mb-8">
                                    {it700Features.map((feature, index) => (
                                        <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                                            <div className="text-energy-orange text-sm font-medium mb-1">{feature.label}</div>
                                            <div className="text-white font-semibold">{feature.value}</div>
                                        </div>
                                    ))}
                                </div>

                                <Link href="/contact" className="btn-accent w-fit">
                                    Inquire About IT 700
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <SectionHeader
                        subtitle="Battery Range"
                        title="Lead Acid Batteries: 12V40Ah to 12V500Ah"
                        description="Our comprehensive range of high-capacity batteries designed for demanding applications across various industries."
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {batteryProducts.map((product, index) => (
                            <div
                                key={product.model}
                                className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border ${product.featured ? 'border-energy-green ring-2 ring-energy-green/20' : 'border-gray-100'
                                    }`}
                            >
                                <div className={`p-6 ${product.featured ? 'bg-energy-green' : 'bg-energy-blue'} text-white relative`}>
                                    {product.featured && (
                                        <span className="absolute top-4 right-4 px-3 py-1 bg-energy-orange text-white text-xs font-bold rounded-full">
                                            Best Seller
                                        </span>
                                    )}
                                    <div className="flex items-center gap-4">
                                        <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                                            <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M17 4h-3V2h-4v2H7a2 2 0 00-2 2v16a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold">{product.model}</h3>
                                            <p className="text-white/80">{product.type}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <div className="space-y-3 mb-6">
                                        <div className="flex justify-between items-center py-2 border-b border-gray-100">
                                            <span className="text-gray-600">Capacity</span>
                                            <span className="font-semibold text-energy-blue">{product.capacity}</span>
                                        </div>
                                        <div className="flex justify-between items-center py-2 border-b border-gray-100">
                                            <span className="text-gray-600">Voltage</span>
                                            <span className="font-semibold text-energy-blue">{product.voltage}</span>
                                        </div>
                                        <div className="flex justify-between items-center py-2 border-b border-gray-100">
                                            <span className="text-gray-600">Dimensions</span>
                                            <span className="font-semibold text-energy-blue text-sm">{product.dimensions}</span>
                                        </div>
                                        <div className="flex justify-between items-center py-2 border-b border-gray-100">
                                            <span className="text-gray-600">Weight</span>
                                            <span className="font-semibold text-energy-blue">{product.weight}</span>
                                        </div>
                                        <div className="flex justify-between items-center py-2 border-b border-gray-100">
                                            <span className="text-gray-600">Design Life</span>
                                            <span className="font-semibold text-energy-green">{product.designLife}</span>
                                        </div>
                                    </div>

                                    <div className="mb-6">
                                        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Applications</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {product.applications.map((app, idx) => (
                                                <span key={idx} className="px-3 py-1 bg-energy-green/10 text-energy-green text-xs font-medium rounded-full">
                                                    {app}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="mb-6">
                                        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Key Features</h4>
                                        <ul className="space-y-2">
                                            {product.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                                                    <svg className="w-4 h-4 text-energy-orange flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                                    </svg>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <Link
                                        href="/contact"
                                        className={`block text-center py-3 rounded-lg font-semibold transition-colors ${product.featured
                                            ? 'bg-energy-green text-white hover:bg-energy-green-dark'
                                            : 'bg-gray-100 text-energy-blue hover:bg-energy-green hover:text-white'
                                            }`}
                                    >
                                        Request Quote
                                    </Link>
                                </div>
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
                            <span className="text-energy-orange font-semibold text-sm">Complete Battery Range</span>
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Lead Acid Batteries: 12V40Ah to 12V500Ah
                        </h2>
                        <p className="text-white/80 max-w-2xl mx-auto">
                            Our lead acid battery lineup covers every capacity requirement, from small backup systems to large industrial applications.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {['40Ah', '100Ah', '150Ah', '200Ah', '250Ah', '300Ah', '350Ah', '400Ah', '450Ah', '500Ah'].map((capacity, index) => (
                            <div
                                key={capacity}
                                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-colors group"
                            >
                                <div className="text-xl font-bold text-energy-orange mb-2">12V</div>
                                <div className="text-2xl font-bold">{capacity}</div>
                                <div className="w-8 h-1 bg-energy-green mx-auto mt-4 group-hover:w-12 transition-all"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding bg-white">
                <div className="container-custom">
                    <SectionHeader
                        subtitle="Quick Comparison"
                        title="Battery Specifications at a Glance"
                        description="Compare our battery range to find the perfect fit for your requirements."
                    />

                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-energy-blue text-white">
                                    <th className="px-6 py-4 text-left font-semibold">Model</th>
                                    <th className="px-6 py-4 text-left font-semibold">Capacity</th>
                                    <th className="px-6 py-4 text-left font-semibold">Type</th>
                                    <th className="px-6 py-4 text-left font-semibold">Weight</th>
                                    <th className="px-6 py-4 text-left font-semibold">Design Life</th>
                                    <th className="px-6 py-4 text-left font-semibold">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {batteryProducts.map((product, index) => (
                                    <tr
                                        key={product.model}
                                        className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${product.featured ? 'bg-energy-green/5' : ''
                                            }`}
                                    >
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-2">
                                                <span className="font-semibold text-energy-blue">{product.model}</span>
                                                {product.featured && (
                                                    <span className="px-2 py-0.5 bg-energy-orange text-white text-xs rounded">Popular</span>
                                                )}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-gray-600">{product.capacity}</td>
                                        <td className="px-6 py-4 text-gray-600">{product.type}</td>
                                        <td className="px-6 py-4 text-gray-600">{product.weight}</td>
                                        <td className="px-6 py-4">
                                            <span className="text-energy-green font-medium">{product.designLife}</span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <Link
                                                href="/contact"
                                                className="text-energy-green hover:text-energy-green-dark font-medium"
                                            >
                                                Get Quote →
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <CTA
                title="Need Custom Specifications?"
                description="Our engineering team can customize battery solutions to meet your specific requirements. Contact us to discuss your project."
                buttonText="Contact Engineering Team"
                buttonHref="/contact"
            />
        </>
    );
}
