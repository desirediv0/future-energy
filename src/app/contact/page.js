import Link from 'next/link';
import Image from 'next/image';
import Hero from '@/components/Hero';
import SectionHeader from '@/components/SectionHeader';
import { HiMail, HiLocationMarker, HiGlobeAlt } from 'react-icons/hi';

export const metadata = {
    title: 'Enquiry Form',
    description:
        'Get in touch with Future Energy. Email us at Info@futurenergy.co.in. Visit our manufacturing unit at IMT Manesar, Gurugram.',
};

export default function ContactPage() {
    const contactMethods = [
        {
            title: 'Email Us',
            description: 'Get in touch with our team directly',
            contacts: [
                { label: 'Mr. Ananta Jena', value: 'Info@futurenergy.co.in', href: 'mailto:Info@futurenergy.co.in' },
            ],
            icon: <HiMail className="w-8 h-8" />,
        },
        {
            title: 'Visit Us',
            description: 'Our manufacturing facility',
            contacts: [
                { label: 'Address', value: 'Plot No 18-19, Sector 2A, IMT Manesar, Gurugram, Haryana 122052', href: 'https://maps.app.goo.gl/34NTcr1tmhJ82Ywm7' },
            ],
            icon: <HiLocationMarker className="w-8 h-8" />,
        },
    ];

    return (
        <>
            <Hero
                title="Enquiry Form"
                subtitle="Contact Us"
                description="Fill out the form below to get in touch with us. We will get back to you as soon as possible."
                primaryCTA="Send Email"
                primaryHref="mailto:Info@futurenergy.co.in"
                secondaryCTA="View Location"
                secondaryHref="#location"
            />

            <section className="py-10 bg-white">
                <div className="container-custom">
                    <SectionHeader
                        subtitle="Get in Touch"
                        title="Enquiry Form"
                        description="Fill out the form below to get in touch with us. We will get back to you as soon as possible."
                    />

                    <div className="grid md:grid-cols-2 gap-4 mb-8">
                        {contactMethods.map((method) => (
                            <div
                                key={method.title}
                                className="bg-gray-50 rounded-lg p-5 hover:shadow-lg transition-shadow"
                            >
                                <div className="w-16 h-16 bg-energy-green/10 rounded-lg flex items-center justify-center mb-6 text-energy-green">
                                    {method.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-energy-blue mb-2">{method.title}</h3>
                                <p className="text-gray-500 mb-6">{method.description}</p>
                                <div className="space-y-4">
                                    {method.contacts.map((contact, idx) => (
                                        <div key={idx}>
                                            <div className="text-sm text-gray-500 mb-1">{contact.label}</div>
                                            <a
                                                href={contact.href}
                                                className="text-energy-green hover:text-energy-green-dark font-medium transition-colors break-all"
                                            >
                                                {contact.value}
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="py-10 bg-gray-50">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-16">
                        <div>
                            <span className="inline-flex items-center gap-2 px-4 py-2 bg-energy-green/10 rounded-full mb-6">
                                <span className="w-2 h-2 bg-energy-green rounded-full"></span>
                                <span className="text-energy-green font-semibold text-sm">Send a Message</span>
                            </span>

                            <h2 className="text-3xl md:text-4xl font-bold text-energy-blue mb-4">
                                Enquiry Form
                            </h2>

                            <p className="text-gray-600 mb-8">
                                Fill out the form below and we&apos;ll get back to you within 24 hours.
                            </p>

                            <form className="space-y-6">
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            First Name *
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-energy-green focus:border-energy-green transition-colors"
                                            placeholder="Your first name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Last Name *
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-energy-green focus:border-energy-green transition-colors"
                                            placeholder="Your last name"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-energy-green focus:border-energy-green transition-colors"
                                        placeholder="your@email.com"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-energy-green focus:border-energy-green transition-colors"
                                        placeholder="+91 XXXXX XXXXX"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Company Name
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-energy-green focus:border-energy-green transition-colors"
                                        placeholder="Your company name"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Subject *
                                    </label>
                                    <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-energy-green focus:border-energy-green transition-colors bg-white">
                                        <option value="">Select a subject</option>
                                        <option value="product-inquiry">Product Inquiry</option>
                                        <option value="quote">Request a Quote</option>
                                        <option value="support">Technical Support</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        rows={5}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-energy-green focus:border-energy-green transition-colors resize-none"
                                        placeholder="Tell us about your requirements..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full btn-primary py-4 text-lg"
                                >
                                    Send Message
                                </button>

                                <p className="text-sm text-gray-500 text-center">
                                    By submitting this form, you agree to our{' '}
                                    <Link href="/privacy-policy" className="text-energy-green hover:text-energy-green-dark underline">
                                        Privacy Policy
                                    </Link>.
                                </p>
                            </form>
                        </div>

                        <div className="space-y-8">
                            <div className="rounded-lg overflow-hidden shadow-xl">
                                <Image
                                    src="/card1.jpg"
                                    alt="Future Energy Office"
                                    width={600}
                                    height={400}
                                    className="w-full h-auto object-cover"
                                />
                            </div>

                            <div className="bg-energy-blue rounded-lg p-8 text-white">
                                <h3 className="text-xl font-bold mb-6">Direct Contact</h3>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <HiMail className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <div className="font-semibold mb-1">Mr. Ananta Jena</div>
                                            <a href="mailto:Info@futurenergy.co.in" className="text-energy-orange hover:text-energy-orange-light transition-colors">
                                                Info@futurenergy.co.in
                                            </a>
                                            <p className="text-white/60 text-sm mt-1">Director - Production & R&D</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <HiMail className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <div className="font-semibold mb-1">Mr. Vikas Chaudhary</div>
                                            <a href="mailto:Info@futurenergy.co.in" className="text-energy-orange hover:text-energy-orange-light transition-colors">
                                                Info@futurenergy.co.in
                                            </a>
                                            <p className="text-white/60 text-sm mt-1">Director - Operations</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-energy-green/10 rounded-lg p-8">
                                <h3 className="text-xl font-bold text-energy-blue mb-4">Business Hours</h3>
                                <div className="space-y-2 text-gray-600">
                                    <div className="flex justify-between">
                                        <span>Monday - Friday</span>
                                        <span className="font-semibold">9:00 AM - 6:00 PM</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Saturday</span>
                                        <span className="font-semibold">9:00 AM - 2:00 PM</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Sunday</span>
                                        <span className="font-semibold text-red-500">Closed</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section id="location" className="py-10 bg-white">
                <div className="container-custom">
                    <SectionHeader
                        subtitle="Our Location"
                        title="Visit Our Manufacturing Unit"
                        description="Plot No 18-19, Sector 2A, IMT Manesar, Gurugram, Haryana 122052, India"
                    />

                    <div className="bg-gray-100 rounded-lg overflow-hidden shadow-xl">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3510.571287413438!2d76.93101228090082!3d28.371808213431137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d3dcf3b437681%3A0x6191e66e87c7bbf3!2sFuture%20Energy%20Plot%20No%2018-19!5e0!3m2!1sen!2sin!4v1766388753254!5m2!1sen!2sin"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Future Energy Manufacturing Location"
                        ></iframe>
                    </div>

                    <div className="mt-8 bg-energy-blue rounded-lg p-8 text-white">
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <HiLocationMarker className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="font-semibold mb-1">Manufacturing Address</div>
                                    <p className="text-white/80 text-sm">
                                        Plot No 18-19, Sector 2A,<br />
                                        IMT Manesar, Gurugram,<br />
                                        Haryana 122052, India
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <HiMail className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="font-semibold mb-1">Email Us</div>
                                    <a href="mailto:Info@futurenergy.co.in" className="text-energy-orange hover:text-energy-orange-light transition-colors text-sm block">
                                        Info@futurenergy.co.in
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <HiGlobeAlt className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="font-semibold mb-1">Global Presence</div>
                                    <p className="text-white/80 text-sm">
                                        Serving customers in<br />
                                        30+ countries worldwide
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-10 bg-gray-50">
                <div className="container-custom">
                    <SectionHeader
                        subtitle="FAQ"
                        title="Frequently Asked Questions"
                        description="Quick answers to common questions about working with Future Energy."
                    />

                    <div className="max-w-3xl mx-auto space-y-4">
                        {[
                            {
                                question: 'What is the minimum order quantity for exports?',
                                answer: 'Our minimum order quantities vary by product type. Contact us for specific requirements based on your market needs.',
                            },
                            {
                                question: 'Do you offer OEM/private labeling services?',
                                answer: 'Yes, we offer OEM and private labeling options for qualified partners. Discuss your requirements with our team.',
                            },
                            {
                                question: 'What certifications do your products have?',
                                answer: 'Our products are certified to international standards including ISO, BIS, and other regional certifications as required.',
                            },
                            {
                                question: 'How can I become a distribution partner?',
                                answer: 'Fill out the contact form with your business details and interest in partnership. Our team will evaluate and respond within 48 hours.',
                            },
                        ].map((faq, index) => (
                            <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                                <h4 className="font-bold text-energy-blue mb-2">{faq.question}</h4>
                                <p className="text-gray-600">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
