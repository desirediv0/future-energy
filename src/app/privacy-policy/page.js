import Link from 'next/link';
import Hero from '@/components/Hero';

export const metadata = {
    title: 'Privacy Policy',
    description:
        'Privacy Policy for Future Energy (India) - Learn how we collect, use, and protect your personal information. Your privacy and data security are our priority.',
    keywords: ['Privacy Policy', 'Future Energy', 'Data Protection', 'Personal Information', 'Battery Company India'],
};

export default function PrivacyPolicyPage() {
    const lastUpdated = 'December 22, 2024';

    const sections = [
        {
            id: 'introduction',
            title: '1. Introduction',
            content: `Welcome to Future Energy (India). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us in any capacity.

Future Energy (India), located at Plot No 18-19, Sector 2A, IMT Manesar, Gurugram, Haryana 122052, India, operates as a manufacturer and supplier of battery and energy solutions. By accessing our website or using our services, you consent to the practices described in this Privacy Policy.

We encourage you to read this policy carefully to understand our practices regarding your personal data and how we will treat it.`,
        },
        {
            id: 'information-collected',
            title: '2. Information We Collect',
            content: `We may collect and process the following categories of information:

**Personal Information:**
• Full name and contact details (email address, phone number, postal address)
• Company name and designation
• Business inquiry details and requirements
• Communication records and correspondence

**Technical Information:**
• IP address and browser type
• Device information and operating system
• Pages visited and time spent on our website
• Referral source and navigation patterns

**Business Information:**
• Order history and transaction details
• Product preferences and requirements
• Feedback and survey responses
• Partnership and distribution inquiries

We collect this information directly from you when you fill out contact forms, request quotes, subscribe to newsletters, or communicate with us via email or phone.`,
        },
        {
            id: 'how-we-use',
            title: '3. How We Use Your Information',
            content: `We use the collected information for the following purposes:

**Business Operations:**
• Processing inquiries and providing requested information about our products
• Managing business relationships and communications
• Fulfilling orders and delivering products
• Providing customer support and after-sales service

**Communication:**
• Responding to your queries and requests
• Sending product updates and promotional materials (with your consent)
• Notifying you about changes to our services or policies

**Website Improvement:**
• Analyzing website usage patterns to improve user experience
• Customizing content based on user preferences
• Maintaining website security and preventing fraud

**Legal Compliance:**
• Complying with applicable laws and regulations
• Protecting our legal rights and interests
• Fulfilling contractual obligations`,
        },
        {
            id: 'cookies',
            title: '4. Cookies & Tracking Technologies',
            content: `Our website uses cookies and similar tracking technologies to enhance your browsing experience:

**Essential Cookies:**
These are necessary for the website to function properly and cannot be disabled. They enable core functionalities such as page navigation and access to secure areas.

**Analytics Cookies:**
We use analytics tools to understand how visitors interact with our website. This helps us improve our content and services. These cookies collect anonymous information about your visit.

**Marketing Cookies:**
With your consent, we may use marketing cookies to deliver relevant advertisements and track the effectiveness of our marketing campaigns.

**Managing Cookies:**
You can control and manage cookies through your browser settings. Please note that disabling certain cookies may affect your experience on our website.

Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set and how to manage and delete them, visit www.allaboutcookies.org.`,
        },
        {
            id: 'data-security',
            title: '5. Data Security',
            content: `We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction:

**Security Measures:**
• Secure Socket Layer (SSL) encryption for data transmission
• Regular security assessments and vulnerability testing
• Access controls and authentication mechanisms
• Employee training on data protection practices

**Data Storage:**
• Personal data is stored on secure servers with restricted access
• Regular backups are maintained to prevent data loss
• Data retention periods are defined based on legal requirements and business needs

**Incident Response:**
In the unlikely event of a data breach, we have procedures in place to:
• Identify and contain the breach promptly
• Assess the risk to affected individuals
• Notify relevant authorities and affected parties as required by law
• Take corrective measures to prevent future incidents

While we strive to protect your personal information, no method of transmission over the Internet or electronic storage is 100% secure. We cannot guarantee absolute security but are committed to implementing best practices.`,
        },
        {
            id: 'third-party',
            title: '6. Third-Party Services',
            content: `We may share your information with trusted third parties in the following circumstances:

**Service Providers:**
• Logistics and shipping partners for product delivery
• Payment processors for secure transactions
• IT service providers for website maintenance and hosting
• Marketing agencies for promotional activities (with your consent)

**Business Partners:**
• Authorized distributors and dealers in your region
• Joint venture partners for specific projects

**Legal Requirements:**
We may disclose your information if required by law, court order, or government regulation, or if we believe such disclosure is necessary to:
• Protect our rights, property, or safety
• Prevent fraud or illegal activities
• Comply with legal proceedings

**Business Transfers:**
In the event of a merger, acquisition, or sale of assets, your personal information may be transferred to the acquiring entity.

We ensure that all third parties who handle your data are bound by confidentiality agreements and comply with applicable data protection laws.`,
        },
        {
            id: 'user-rights',
            title: '7. Your Rights',
            content: `You have the following rights regarding your personal information:

**Right to Access:**
You may request a copy of the personal data we hold about you.

**Right to Rectification:**
You can ask us to correct any inaccurate or incomplete information.

**Right to Erasure:**
You may request the deletion of your personal data, subject to legal retention requirements.

**Right to Restrict Processing:**
You can ask us to limit how we use your data in certain circumstances.

**Right to Object:**
You have the right to object to certain types of processing, including direct marketing.

**Right to Data Portability:**
You may request your data in a structured, commonly used format.

**Right to Withdraw Consent:**
Where processing is based on consent, you can withdraw it at any time without affecting the lawfulness of prior processing.

To exercise any of these rights, please contact us using the details provided in Section 9. We will respond to your request within a reasonable timeframe and in accordance with applicable laws.`,
        },
        {
            id: 'policy-changes',
            title: '8. Changes to This Policy',
            content: `We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. When we make changes:

• The "Last Updated" date at the top of this policy will be revised
• For significant changes, we may provide notice through our website or via email
• Continued use of our website or services after changes constitutes acceptance of the updated policy

We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.

Previous versions of this policy may be available upon request.`,
        },
        {
            id: 'contact',
            title: '9. Contact Information',
            content: `If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:

**Future Energy (India)**

**Registered Office:**
Plot No 18-19, Sector 2A
IMT Manesar, Gurugram
Haryana 122052, India

**Email:**
info@fut-energy.com
ananta@fut-energy.com
vikas@fut-energy.com

**For Data Protection Inquiries:**
Please write to us at info@fut-energy.com with the subject line "Privacy Inquiry"

We are committed to resolving any concerns you may have about our data practices and will respond to your inquiries within a reasonable timeframe.`,
        },
    ];

    return (
        <>
            <Hero
                title="Privacy Policy"
                subtitle="Legal"
                description="Your privacy is important to us. This policy explains how Future Energy (India) collects, uses, and protects your personal information."
                primaryCTA="Contact Us"
                primaryHref="/contact"
            />

            {/* Last Updated Banner */}
            <section className="bg-energy-green/10 py-4">
                <div className="container-custom">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <p className="text-gray-600 text-sm">
                            <span className="font-semibold">Last Updated:</span> {lastUpdated}
                        </p>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                            <svg className="w-5 h-5 text-energy-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                            <span>Your data is protected</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Table of Contents */}
            <section className="py-10 bg-white">
                <div className="container-custom">
                    <div className="bg-gray-50 rounded-lg p-8">
                        <h2 className="text-xl font-bold text-energy-blue mb-6">Table of Contents</h2>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                            {sections.map((section, index) => (
                                <a
                                    key={section.id}
                                    href={`#${section.id}`}
                                    className="flex items-center gap-2 text-gray-600 hover:text-energy-green transition-colors text-sm group"
                                >
                                    <span className="w-6 h-6 bg-energy-green/10 rounded-full flex items-center justify-center text-xs font-semibold text-energy-green group-hover:bg-energy-green group-hover:text-white transition-colors">
                                        {index + 1}
                                    </span>
                                    <span className="group-hover:translate-x-1 transition-transform">
                                        {section.title.replace(/^\d+\.\s*/, '')}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Policy Content */}
            <section className="py-10 bg-white">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        {sections.map((section, index) => (
                            <div
                                key={section.id}
                                id={section.id}
                                className="mb-12 scroll-mt-24"
                            >
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="w-10 h-10 bg-energy-green rounded-lg flex items-center justify-center text-white font-bold flex-shrink-0">
                                        {index + 1}
                                    </div>
                                    <h2 className="text-2xl font-bold text-energy-blue pt-1">
                                        {section.title.replace(/^\d+\.\s*/, '')}
                                    </h2>
                                </div>
                                <div className="pl-14">
                                    <div className="prose prose-gray max-w-none">
                                        {section.content.split('\n\n').map((paragraph, pIndex) => {
                                            if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                                                return (
                                                    <h3 key={pIndex} className="text-lg font-semibold text-energy-blue mt-6 mb-3">
                                                        {paragraph.replace(/\*\*/g, '')}
                                                    </h3>
                                                );
                                            } else if (paragraph.startsWith('**')) {
                                                const [title, ...rest] = paragraph.split(':**');
                                                return (
                                                    <div key={pIndex} className="mt-4">
                                                        <h4 className="font-semibold text-energy-blue mb-2">
                                                            {title.replace(/\*\*/g, '')}:
                                                        </h4>
                                                        <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                                                            {rest.join(':**')}
                                                        </p>
                                                    </div>
                                                );
                                            } else if (paragraph.includes('•')) {
                                                const lines = paragraph.split('\n');
                                                return (
                                                    <ul key={pIndex} className="space-y-2 mt-3">
                                                        {lines.map((line, lIndex) => (
                                                            <li key={lIndex} className="flex items-start gap-2 text-gray-600">
                                                                {line.startsWith('•') ? (
                                                                    <>
                                                                        <svg className="w-5 h-5 text-energy-orange flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                                                                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                                                        </svg>
                                                                        <span>{line.replace('• ', '')}</span>
                                                                    </>
                                                                ) : (
                                                                    <span className="font-semibold text-energy-blue">{line}</span>
                                                                )}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                );
                                            } else {
                                                return (
                                                    <p key={pIndex} className="text-gray-600 leading-relaxed mt-4 whitespace-pre-line">
                                                        {paragraph}
                                                    </p>
                                                );
                                            }
                                        })}
                                    </div>
                                </div>
                                {index < sections.length - 1 && (
                                    <hr className="mt-10 border-gray-200" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quick Contact CTA */}
            <section className="py-16 bg-energy-gradient text-white">
                <div className="container-custom">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                            <svg className="w-8 h-8 text-energy-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <h2 className="text-3xl font-bold mb-4">Have Questions About Your Privacy?</h2>
                        <p className="text-white/80 mb-8">
                            We&apos;re committed to transparency and protecting your data. If you have any questions
                            or concerns about this Privacy Policy, please don&apos;t hesitate to reach out.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/contact"
                                className="bg-white text-energy-blue font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2"
                            >
                                Contact Us
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                            <a
                                href="mailto:info@fut-energy.com"
                                className="border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white/10 transition-colors inline-flex items-center justify-center gap-2"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                info@fut-energy.com
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Links */}
            <section className="py-10 bg-gray-50">
                <div className="container-custom">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link
                            href="/terms-of-service"
                            className="text-energy-green hover:text-energy-green-dark font-medium inline-flex items-center gap-2"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            Terms of Service
                        </Link>
                        <span className="hidden sm:block text-gray-300">|</span>
                        <Link
                            href="/about"
                            className="text-energy-green hover:text-energy-green-dark font-medium inline-flex items-center gap-2"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            About Us
                        </Link>
                        <span className="hidden sm:block text-gray-300">|</span>
                        <Link
                            href="/contact"
                            className="text-energy-green hover:text-energy-green-dark font-medium inline-flex items-center gap-2"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}

