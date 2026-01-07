import Image from 'next/image';
import Link from 'next/link';
import Hero from '@/components/Hero';
import CTA from '@/components/CTA';
import SectionHeader from '@/components/SectionHeader';
import ProductCard from '@/components/ProductCard';
import { HiArrowRight, HiLocationMarker, HiShieldCheck, HiLightningBolt, HiGlobeAlt, HiSupport, HiStar, HiCheckCircle } from 'react-icons/hi';
import { BsBatteryCharging, BsSun, BsBoxSeam } from 'react-icons/bs';

export default function HomePage() {
  const productCategories = [
    {
      title: 'Automotive Batteries',
      description: 'High-performance batteries for all vehicle types with extended life and reliability.',
      icon: <HiLightningBolt className="w-10 h-10" />,
      href: '/products#automotive',
      features: ['Long Life', 'High CCA', 'Maintenance Free'],
    },
    {
      title: 'Inverter Batteries',
      description: 'Reliable power backup solutions for homes and offices with superior performance.',
      icon: <BsBatteryCharging className="w-10 h-10" />,
      href: '/products#inverter',
      features: ['Deep Cycle', 'Fast Charging', 'Long Backup'],
    },
    {
      title: 'Solar Solutions',
      description: 'Sustainable energy solutions for residential applications with clean power.',
      icon: <BsSun className="w-10 h-10" />,
      href: '/products#solar',
      features: ['Eco-Friendly', 'Cost Effective', 'Low Maintenance'],
    },
    {
      title: 'Lead Acid Batteries',
      description: 'Industrial-grade batteries from 12V40Ah to 12V500Ah for diverse applications.',
      icon: <BsBoxSeam className="w-10 h-10" />,
      href: '/product-details',
      features: ['Wide Range', 'Heavy Duty', 'Reliable'],
    },
  ];

  const stats = [
    { value: '30+', label: 'Countries', color: 'green' },
    { value: '15+', label: 'Years Experience', color: 'orange' },
    { value: '100K+', label: 'Batteries Delivered', color: 'blue' },
    { value: '200+', label: 'Team Members', color: 'green' },
  ];

  const features = [
    {
      icon: <HiShieldCheck className="w-6 h-6" />,
      title: 'Quality Assured',
      description: 'Every battery undergoes rigorous quality testing',
    },
    {
      icon: <HiLightningBolt className="w-6 h-6" />,
      title: 'Innovation Driven',
      description: 'IT 700 Patent technology for superior performance',
    },
    {
      icon: <HiGlobeAlt className="w-6 h-6" />,
      title: 'Global Presence',
      description: 'Serving customers in 30+ countries worldwide',
    },
    {
      icon: <HiSupport className="w-6 h-6" />,
      title: '24/7 Support',
      description: 'Dedicated support for all your energy needs',
    },
  ];

  return (
    <>
      <Hero
        title="Powering the Future with Smart Energy Solutions"
        subtitle="Welcome to Future Energy"
        description="Powered by passion and fueled by innovation, Future Energy offers automotive batteries, inverters, solar solutions, and more. Presence in 30+ Countries."
        primaryCTA="Contact Us"
        primaryHref="/contact"
        secondaryCTA="Explore Products"
        secondaryHref="/products"
        isHomePage={true}
        backgroundImage="/hero.jpg"
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/card1.jpg"
                  alt="Future Energy Manufacturing"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-energy-orange text-white p-6 rounded-lg shadow-xl hidden md:block">
                <div className="text-3xl font-bold">15+</div>
                <div className="text-white/80 text-sm">Years of Excellence</div>
              </div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-energy-green/20 rounded-full blur-xl"></div>
            </div>

            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-energy-green/10 rounded-full mb-6">
                <span className="w-2 h-2 bg-energy-green rounded-full"></span>
                <span className="text-energy-green font-semibold text-sm">About Future Energy</span>
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-energy-blue mb-6">
                A Strong Player in Energy Solutions
              </h2>

              <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
                <p>
                  Powered by passion and fueled by innovation, <strong className="text-energy-blue">FUTURE ENERGY</strong> has established itself as a strong player in the energy solution space in India. With our offerings in automotive batteries, Inverters and Inverter Batteries, Stabilizers, and Residential Solar Solutions, we are bringing in a new dimension of smart energy products.
                </p>
                <p>
                  We take pride in informing you that our company is ideally suited to handle the diversified needs associated with large business houses of your stature and standing.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {features.map((feature) => (
                  <div key={feature.title} className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-energy-green/10 rounded-lg flex items-center justify-center text-energy-green flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-energy-blue">{feature.title}</h4>
                      <p className="text-gray-500 text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link href="/about" className="btn-primary inline-flex items-center gap-2">
                Learn More About Us
                <HiArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeader
            subtitle="Our Products"
            title="Complete Energy Solutions"
            description="From automotive to industrial, we provide comprehensive battery and energy solutions for every need."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {productCategories.map((product) => (
              <ProductCard
                key={product.title}
                title={product.title}
                description={product.description}
                icon={product.icon}
                href={product.href}
                features={product.features}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/products" className="btn-outline inline-flex items-center gap-2">
              View All Products
              <HiArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* IT 700 Patent Product Highlight */}
      <section className="section-padding bg-energy-blue text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="patentPattern" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="1" fill="white" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#patentPattern)" />
          </svg>
        </div>

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-energy-orange rounded-full mb-6">
                <HiStar className="w-4 h-4" />
                <span className="font-semibold text-sm">Patented Technology</span>
              </span>

              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                IT 700 Patent Product
              </h2>

              <p className="text-white/80 text-lg mb-8 leading-relaxed">
                Our flagship innovation - the IT 700 series represents years of research and development,
                delivering unmatched performance, reliability, and efficiency for demanding applications.
              </p>

              {/* Features */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {['300 TT', '350 TT', '400 TT', '450 TT', '500 TT'].map((model) => (
                  <div key={model} className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
                    <HiCheckCircle className="w-5 h-5 text-energy-orange" />
                    <span className="font-semibold">{model}</span>
                  </div>
                ))}
              </div>

              <Link href="/product-details" className="bg-energy-orange hover:bg-energy-orange-dark text-white font-semibold px-8 py-4 rounded-lg inline-flex items-center gap-2 transition-colors">
                Explore IT 700 Series
                <HiArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Right - Image */}
            <div className="relative">
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/card4.jpg"
                  alt="IT 700 Patent Product"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-energy-blue/50 to-transparent"></div>
              </div>
              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-energy-green text-white px-6 py-3 rounded-full shadow-lg">
                <span className="font-bold">Patent Protected</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Acid Range */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            subtitle="Product Range"
            title="Lead Acid Batteries: 12V300Ah to 12V500Ah"
            description="Our comprehensive lead acid battery lineup covers every capacity requirement, from small backup systems to large industrial applications."
          />

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {['300Ah', '350Ah', '400Ah', '450Ah', '500Ah'].map((capacity) => (
              <div
                key={capacity}
                className="bg-gray-50 rounded-lg p-6 text-center hover:bg-energy-green/10 transition-colors group"
              >
                <div className="text-energy-green font-bold text-xl mb-2">12V</div>
                <div className="text-3xl font-bold text-energy-blue group-hover:text-energy-green transition-colors">{capacity}</div>
                <div className="w-12 h-1 bg-energy-orange mx-auto mt-4 group-hover:w-20 transition-all"></div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/product-details" className="text-energy-green hover:text-energy-green-dark font-semibold inline-flex items-center gap-2">
              View Complete Range
              <HiArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-energy-gradient text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-4">
              <span className="w-2 h-2 bg-energy-orange rounded-full"></span>
              <span className="text-energy-orange font-semibold text-sm">Global Impact</span>
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Presence in 30+ Countries</h2>
            <p className="text-white/80 max-w-2xl mx-auto">Our reach spans continents, delivering quality energy solutions to customers worldwide.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center hover:bg-white/20 transition-colors">
                <div className={`text-4xl md:text-5xl font-bold mb-2 ${stat.color === 'green' ? 'text-energy-green' : stat.color === 'orange' ? 'text-energy-orange' : 'text-white'}`}>
                  {stat.value}
                </div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Preview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Content */}
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-energy-green/10 rounded-full mb-6">
                <span className="w-2 h-2 bg-energy-green rounded-full"></span>
                <span className="text-energy-green font-semibold text-sm">Manufacturing Unit</span>
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-energy-blue mb-6">
                State-of-the-Art Facility at IMT Manesar
              </h2>

              {/* Address */}
              <div className="bg-gray-50 rounded-lg p-6 mb-6 border-l-4 border-energy-orange">
                <div className="flex items-start gap-3">
                  <HiLocationMarker className="w-6 h-6 text-energy-orange flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-energy-blue mb-1">Manufacturing Address</h4>
                    <p className="text-gray-600">
                      Plot Number 18-19, Sector 2A,<br />
                      IMT Manesar, Gurugram,<br />
                      Haryana 122052, India
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 mb-8">
                Our manufacturing unit at IMT Manesar is equipped with cutting-edge technology,
                ensuring every battery meets international quality standards.
              </p>

              <Link href="/manufacturing" className="btn-primary inline-flex items-center gap-2">
                Explore Our Facility
                <HiArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Right - Images Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <Image src="/card2.jpg" alt="Manufacturing" width={300} height={200} className="w-full h-48 object-cover" />
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg mt-8">
                <Image src="/card3.jpg" alt="Production" width={300} height={200} className="w-full h-48 object-cover" />
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <Image src="/card5.jpg" alt="Quality" width={300} height={200} className="w-full h-48 object-cover" />
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg mt-8">
                <Image src="/card6.jpg" alt="Facility" width={300} height={200} className="w-full h-48 object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA
        title="Ready to Power Your Business?"
        description="While we deem it our privilege to serve your esteemed organization and have a long-term business relationship with you, we shall be happy to call on you for a personal interface."
        buttonText="Contact Us Today"
        buttonHref="/contact"
      />
    </>
  );
}
