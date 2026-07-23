import type { Metadata, Viewport } from "next";
import "./globals.css";
import Preloader from "@/components/Preloader";
import ScrollRevealInit from "@/components/ScrollRevealInit";

export const viewport: Viewport = {
  themeColor: "#0A6ABF",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://drxhomecare.com"),
  title: "DRx Home Care | Best Caretaker & Home Care Services in Jaipur",
  description:
    "DRx Home Care is the leading home healthcare provider in Jaipur, offering the best caretaker, nursing care, elder care, home ICU setup, and physiotherapy services 24/7.",
  keywords: [
    "caretaker",
    "caretaker jaipur",
    "best caretaker in jaipur",
    "jaipur caretaker",
    "bestcaretaker",
    "jaipur homecare best",
    "homecare jaipur",
    "patient caretaker services jaipur",
    "home caretaker jaipur",
    "ICU care at home jaipur",
    "nursing care jaipur",
    "elder care caretaker jaipur",
  ],
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  alternates: {
    canonical: "https://drxhomecare.com",
  },
  verification: {
    google: "your-google-verification-code-here",
  },
  openGraph: {
    title: "DRx Home Care | Best Caretaker & Home Care Services in Jaipur",
    description:
      "DRx Home Care provides the best caretaker and home care services in Jaipur. 24/7 professional patient care, elder care, home ICU setup, nursing, and physiotherapy.",
    url: "https://drxhomecare.com",
    type: "website",
    siteName: "DRx Home Care",
    images: [
      {
        url: "/images/Drx_logo-removebg-preview.png",
        width: 1200,
        height: 630,
        alt: "DRx Home Care Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DRx Home Care | Best Caretaker & Home Care Services in Jaipur",
    description:
      "DRx Home Care provides the best caretaker and home care services in Jaipur. 24/7 professional patient care, elder care, home ICU setup, nursing, and physiotherapy.",
    images: ["/images/Drx_logo-removebg-preview.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Load Font Awesome Icon Sets */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          precedence="default"
        />
        {/* Organization Schema for Google Logo & Knowledge Graph */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "DRx Home Care",
              "url": "https://drxhomecare.com",
              "logo": "https://drxhomecare.com/images/Drx_logo-removebg-preview.png",
              "sameAs": [],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-7568858357",
                "contactType": "customer service",
                "areaServed": "IN",
                "availableLanguage": ["en", "hi"]
              }
            }),
          }}
        />
      </head>
      <body>
        <ScrollRevealInit />
        <Preloader />
        {children}

        {/* Global Floating Action Buttons for quick conversions */}
        <div className="floating-actions">
          <a
            href="https://api.whatsapp.com/send?phone=918690661559&text=Hello%20DRx%20Home%20Care%2C%20I%20need%20healthcare%20services."
            className="floating-btn floating-btn--whatsapp"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <i className="fab fa-whatsapp"></i>
          </a>
          <a href="tel:7568858357" className="floating-btn floating-btn--call" aria-label="Call Us">
            <i className="fas fa-phone-alt"></i>
          </a>
        </div>
      </body>
    </html>
  );
}
