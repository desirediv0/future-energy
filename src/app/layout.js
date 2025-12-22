import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Custom fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

/**
 * Root Layout with SEO Meta Tags
 * Includes Navbar and Footer components
 */
export const metadata = {
  title: {
    default: "Future Energy - Powering the Future with Smart Energy Solutions",
    template: "%s | Future Energy",
  },
  description:
    "Future Energy is a leading battery and energy solutions company in India with presence in 30+ countries. We manufacture automotive batteries, inverter batteries, solar solutions, and more.",
  keywords: [
    "Future Energy",
    "Battery Manufacturer India",
    "Automotive Batteries",
    "Inverter Batteries",
    "Solar Solutions",
    "Lead Acid Batteries",
    "Energy Solutions",
    "Gurugram Battery Company",
    "Industrial Batteries",
    "Clean Energy India",
  ],
  authors: [{ name: "Future Energy" }],
  creator: "Future Energy",
  publisher: "Future Energy",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://fut-energy.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Future Energy - Powering the Future with Smart Energy Solutions",
    description:
      "Leading battery and energy solutions company in India with global presence in 30+ countries.",
    url: "https://fut-energy.com",
    siteName: "Future Energy",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Future Energy - Battery & Energy Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Future Energy - Powering the Future with Smart Energy Solutions",
    description:
      "Leading battery and energy solutions company in India with global presence in 30+ countries.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#1E8E3E" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Sticky Navigation */}
        <Navbar />

        {/* Main Content */}
        <main className="min-h-screen">{children}</main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
