import Link from 'next/link';
import Hero from '@/components/Hero';

export const metadata = {
    title: 'Terms of Service',
    description:
        'Terms of Service for Future Energy (India) - Read our terms and conditions governing the use of our website and services. Battery and energy solutions company.',
    keywords: ['Terms of Service', 'Terms and Conditions', 'Future Energy', 'Legal Terms', 'Battery Company India'],
};

export default function TermsOfServicePage() {
    const lastUpdated = 'December 22, 2024';

    const sections = [
        {
            id: 'acceptance',
            title: '1. Acceptance of Terms',
            content: `Welcome to Future Energy (India). These Terms of Service ("Terms") constitute a legally binding agreement between you ("User," "you," or "your") and Future Energy (India) ("Company," "we," "us," or "our"), governing your access to and use of our website, products, and services.

By accessing our website at www.fut-energy.com or using any of our services, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree to these Terms, please do not use our website or services.

**Eligibility:**
• You must be at least 18 years of age to use our services
• You must have the legal capacity to enter into binding contracts
• If accessing on behalf of an organization, you represent that you have authority to bind that organization to these Terms

**Account Responsibility:**
If you create an account or submit inquiries through our website, you are responsible for:
• Maintaining the confidentiality of your account information
• All activities that occur under your account
• Notifying us immediately of any unauthorized use`,
        },
        {
            id: 'use-of-website',
            title: '2. Use of Website',
            content: `Our website is provided for informational purposes and to facilitate business inquiries related to our battery and energy solutions.

**Permitted Use:**
• Browsing product information and specifications
• Submitting business inquiries and quote requests
• Accessing company information and resources
• Downloading publicly available materials

**Prohibited Activities:**
You agree not to:
• Use the website for any unlawful purpose or in violation of any applicable laws
• Attempt to gain unauthorized access to any part of the website or its systems
• Interfere with or disrupt the website's functionality or servers
• Upload or transmit viruses, malware, or other malicious code
• Scrape, crawl, or use automated means to access the website without permission
• Impersonate any person or entity or misrepresent your affiliation
• Collect or harvest personal information of other users
• Use the website for competitive analysis or commercial purposes without authorization

**Website Availability:**
We strive to maintain website availability but do not guarantee uninterrupted access. We reserve the right to:
• Modify, suspend, or discontinue any part of the website
• Restrict access to certain features or areas
• Perform maintenance without prior notice`,
        },
        {
            id: 'product-service',
            title: '3. Product & Service Information',
            content: `**Product Descriptions:**
We make reasonable efforts to accurately describe our products and services on this website. However:
• Product specifications, images, and descriptions are for general reference only
• Actual products may vary slightly from images displayed
• Technical specifications are subject to change without notice
• We recommend contacting us directly for precise specifications before placing orders

**Pricing:**
• All prices displayed are indicative and subject to confirmation
• Prices may vary based on quantity, specifications, and delivery location
• Final pricing will be confirmed in official quotations and purchase agreements
• We reserve the right to modify prices without prior notice

**Orders & Contracts:**
• Information on this website does not constitute an offer to sell
• Orders are subject to acceptance and confirmation by Future Energy
• Binding contracts are formed only upon written confirmation or execution of formal agreements
• All sales are governed by our standard terms of sale or mutually agreed contracts

**Warranties:**
• Product warranties are provided as per specific product documentation
• Warranty terms are communicated at the time of sale
• This website does not modify or extend any product warranties`,
        },
        {
            id: 'intellectual-property',
            title: '4. Intellectual Property',
            content: `**Ownership:**
All content on this website, including but not limited to:
• Text, graphics, logos, and images
• Product designs and specifications
• Software, code, and technical documentation
• Trademarks, trade names, and brand elements
• Audio, video, and multimedia content

is the exclusive property of Future Energy (India) or its licensors and is protected by Indian and international intellectual property laws.

**Limited License:**
We grant you a limited, non-exclusive, non-transferable license to:
• Access and view the website for personal, non-commercial use
• Download and print materials solely for your internal business evaluation
• Share website links for legitimate business purposes

**Restrictions:**
You may not:
• Copy, reproduce, or distribute any content without written permission
• Modify, adapt, or create derivative works from our content
• Use our trademarks, logos, or brand elements without authorization
• Remove or alter any copyright, trademark, or proprietary notices
• Use content for commercial purposes without a license agreement

**IT 700 Patent:**
Our IT 700 technology is protected by patents. Any unauthorized use, reproduction, or infringement of our patented technology will be pursued under applicable intellectual property laws.

**Reporting Infringement:**
If you believe your intellectual property rights have been violated, please contact us at vikas@futurenergy.co.in with detailed information about the alleged infringement.`,
        },
        {
            id: 'limitation-liability',
            title: '5. Limitation of Liability',
            content: `**Disclaimer of Warranties:**
TO THE MAXIMUM EXTENT PERMITTED BY LAW:
• The website and its content are provided "AS IS" and "AS AVAILABLE"
• We disclaim all warranties, express or implied, including merchantability, fitness for a particular purpose, and non-infringement
• We do not warrant that the website will be error-free, secure, or uninterrupted
• We do not guarantee the accuracy, completeness, or reliability of any information

**Limitation of Damages:**
IN NO EVENT SHALL FUTURE ENERGY (INDIA), ITS DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE FOR:
• Any indirect, incidental, special, consequential, or punitive damages
• Loss of profits, revenue, data, or business opportunities
• Damages arising from use or inability to use the website
• Damages resulting from unauthorized access to your data
• Any claims by third parties

**Maximum Liability:**
Our total liability for any claims arising from these Terms or your use of the website shall not exceed the amount paid by you (if any) for accessing our services in the twelve (12) months preceding the claim.

**Exceptions:**
These limitations do not apply to:
• Liability that cannot be excluded under applicable law
• Claims arising from our gross negligence or willful misconduct
• Liability under product warranties as specified in sale agreements

**Indemnification:**
You agree to indemnify and hold harmless Future Energy (India), its officers, directors, employees, and agents from any claims, damages, or expenses arising from:
• Your violation of these Terms
• Your use of the website
• Your infringement of any third-party rights`,
        },
        {
            id: 'termination',
            title: '6. Termination',
            content: `**Termination by Us:**
We reserve the right to:
• Suspend or terminate your access to the website at any time
• Remove or disable any content that violates these Terms
• Take appropriate legal action against violators
• Refuse service to anyone for any reason

Grounds for termination include, but are not limited to:
• Violation of these Terms or any applicable laws
• Fraudulent, abusive, or illegal activity
• Conduct harmful to other users or our business interests
• Extended periods of inactivity (for registered accounts)

**Termination by You:**
You may discontinue use of our website at any time. If you have a registered account, you may request account deletion by contacting us.

**Effect of Termination:**
Upon termination:
• Your right to access and use the website ceases immediately
• Any licenses granted to you under these Terms are revoked
• Provisions that by their nature should survive (including intellectual property, limitation of liability, and governing law) will remain in effect

**No Liability:**
We shall not be liable to you or any third party for any termination of your access to the website.`,
        },
        {
            id: 'governing-law',
            title: '7. Governing Law',
            content: `**Applicable Law:**
These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law principles.

**Jurisdiction:**
• Any disputes arising from these Terms or your use of the website shall be subject to the exclusive jurisdiction of the courts in Gurugram, Haryana, India
• You hereby consent to the personal jurisdiction of such courts
• You waive any objection to venue in such courts

**Dispute Resolution:**
Before initiating any legal proceedings, the parties agree to:
• Attempt to resolve disputes through good-faith negotiations
• Provide written notice of the dispute to the other party
• Allow thirty (30) days for informal resolution

**Arbitration:**
For commercial disputes, the parties may agree to resolve matters through arbitration:
• Arbitration shall be conducted in accordance with the Arbitration and Conciliation Act, 1996
• The seat of arbitration shall be Gurugram, Haryana
• Proceedings shall be conducted in English
• The arbitrator's decision shall be final and binding

**Compliance with Indian Laws:**
Users accessing this website from outside India are responsible for compliance with local laws. We make no representation that the content is appropriate or available for use in all locations.

**Consumer Protection:**
Nothing in these Terms shall affect any rights you may have under the Consumer Protection Act, 2019, or other applicable consumer protection legislation in India.`,
        },
        {
            id: 'changes',
            title: '8. Changes to Terms',
            content: `**Right to Modify:**
We reserve the right to modify, update, or replace these Terms at any time at our sole discretion. Changes may be made to:
• Reflect changes in our services or business practices
• Address legal or regulatory requirements
• Improve clarity or correct errors
• Respond to user feedback

**Notification of Changes:**
• The "Last Updated" date at the top of these Terms will be revised
• For material changes, we may provide notice through:
  - A prominent notice on our website
  - Email notification (if you have provided your email address)
  - Other appropriate means

**Acceptance of Changes:**
• Your continued use of the website after changes constitutes acceptance of the modified Terms
• If you do not agree with the changes, you should discontinue use of the website
• We encourage you to review these Terms periodically

**Previous Versions:**
Previous versions of these Terms may be available upon request. Please contact us if you need access to earlier versions for reference.`,
        },
        {
            id: 'contact',
            title: '9. Contact Information',
            content: `If you have any questions, concerns, or feedback regarding these Terms of Service, please contact us:

**Future Energy (India)**

**Registered Office:**
Plot No 18-19, Sector 2A
IMT Manesar, Gurugram
Haryana 122052, India

**Email:**
vikas@futurenergy.co.in
ananta@futurenergy.co.in
vikas@futurenergy.co.in

**For Legal Inquiries:**
Please write to us at vikas@futurenergy.co.in with the subject line "Legal Inquiry"

**Business Hours:**
Monday to Saturday: 9:00 AM - 6:00 PM (IST)

We are committed to addressing your concerns promptly and will respond to inquiries within a reasonable timeframe.

**Severability:**
If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.

**Entire Agreement:**
These Terms, together with our Privacy Policy and any other legal notices published on this website, constitute the entire agreement between you and Future Energy (India) regarding your use of the website.`,
        },
    ];

    return (
        <>
            <Hero
                title="Terms of Service"
                subtitle="Legal"
                description="Please read these terms carefully before using our website or services. Your use of Future Energy&apos;s website constitutes acceptance of these terms."
                primaryCTA="Contact Us"
                primaryHref="/contact"
            />

            {/* Last Updated Banner */}
            <section className="bg-energy-blue/10 py-4">
                <div className="container-custom">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <p className="text-gray-600 text-sm">
                            <span className="font-semibold">Effective Date:</span> {lastUpdated}
                        </p>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                            <svg className="w-5 h-5 text-energy-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <span>Legal Agreement</span>
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
                                    className="flex items-center gap-2 text-gray-600 hover:text-energy-blue transition-colors text-sm group"
                                >
                                    <span className="w-6 h-6 bg-energy-blue/10 rounded-full flex items-center justify-center text-xs font-semibold text-energy-blue group-hover:bg-energy-blue group-hover:text-white transition-colors">
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

            {/* Terms Content */}
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
                                    <div className="w-10 h-10 bg-energy-blue rounded-lg flex items-center justify-center text-white font-bold flex-shrink-0">
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
                                            } else if (paragraph.toUpperCase() === paragraph && paragraph.length > 20) {
                                                return (
                                                    <p key={pIndex} className="text-gray-700 leading-relaxed mt-4 font-medium bg-gray-100 p-4 rounded-lg text-sm">
                                                        {paragraph}
                                                    </p>
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

            {/* Acknowledgment Box */}
            <section className="py-10 bg-gray-50">
                <div className="container-custom">
                    <div className="max-w-3xl mx-auto bg-white rounded-lg p-8 shadow-lg border-l-4 border-energy-blue">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-energy-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                <svg className="w-6 h-6 text-energy-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-energy-blue mb-2">Acknowledgment</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    By using the Future Energy (India) website, you acknowledge that you have read these
                                    Terms of Service, understood them, and agree to be bound by them. If you do not agree
                                    to these Terms, please refrain from using our website and services.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact CTA */}
            <section className="py-16 bg-energy-blue text-white">
                <div className="container-custom">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                            <svg className="w-8 h-8 text-energy-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h2 className="text-3xl font-bold mb-4">Questions About These Terms?</h2>
                        <p className="text-white/80 mb-8">
                            If you have any questions or need clarification about our Terms of Service,
                            our team is here to help. Don&apos;t hesitate to reach out.
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
                                href="mailto:vikas@futurenergy.co.in"
                                className="border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white/10 transition-colors inline-flex items-center justify-center gap-2"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                vikas@futurenergy.co.in
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Links */}
            <section className="py-10 bg-white">
                <div className="container-custom">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link
                            href="/privacy-policy"
                            className="text-energy-blue hover:text-energy-blue-dark font-medium inline-flex items-center gap-2"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                            Privacy Policy
                        </Link>
                        <span className="hidden sm:block text-gray-300">|</span>
                        <Link
                            href="/about"
                            className="text-energy-blue hover:text-energy-blue-dark font-medium inline-flex items-center gap-2"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            About Us
                        </Link>
                        <span className="hidden sm:block text-gray-300">|</span>
                        <Link
                            href="/contact"
                            className="text-energy-blue hover:text-energy-blue-dark font-medium inline-flex items-center gap-2"
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

