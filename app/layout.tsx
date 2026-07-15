import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://platinomstariptv.com"),

  verification: {
    google: "FgdDO_FH0D1nNMNEG2ec7K6zlE0MwzTqyhFHE_eH6VU",
  },

  title: {
    default: "IPTV",
    template: "%s | IPTV",
  },

  description:
    "IPTV setup and support service for Smart TV, Android TV, Fire TV Stick, mobile devices and desktop users.",

  keywords: [
    "IPTV Setup",
    "Premium IPTV",
    "Smart TV IPTV",
    "Android TV IPTV",
    "Fire TV IPTV",
    "IPTV Türkiye",
    "Streaming Service",
    "4K IPTV",
    "Live TV",
    "IPTV Support",
    "IPTV Reseller",
    "IPTV Subscription",
  ],

  authors: [{ name: "IPTV" }],
  creator: "IPTV",
  publisher: "IPTV",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "https://platinomstariptv.com",
  },

  openGraph: {
    title: "IPTV",
    description:
      "Premium IPTV service with support for Smart TV, Android TV, Fire TV Stick, mobile and desktop devices.",
    url: "https://platinomstariptv.com",
    siteName: "IPTV",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "IPTV",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "IPTV",
    description: "IPTV service and setup support for popular devices.",
    images: ["/og-image.jpg"],
  },

  category: "Entertainment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18281179589"
          strategy="afterInteractive"
        />

        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-18281179589');
          `}
        </Script>

        <Script id="google-ads-click-conversion" strategy="afterInteractive">
          {`
            function gtag_report_conversion(url) {
              var callback = function () {
                if (typeof(url) != 'undefined') {
                  window.location = url;
                }
              };

              gtag('event', 'conversion', {
                'send_to': 'AW-18281179589/Bc1CCNSVmcccEMXTko1E',
                'value': 1.0,
                'currency': 'TRY',
                'event_callback': callback
              });

              return false;
            }

            window.gtag_report_conversion = gtag_report_conversion;
          `}
        </Script>

        {children}
      </body>
    </html>
  );
} 
