import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const siteName = "GolpumaTV";
const siteUrl = "https://goldpumatv.com";

const siteDescription =
  "Smart TV, Android TV, Fire TV Stick, telefon, tablet ve bilgisayar için premium IPTV kurulum ve destek hizmeti.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  applicationName: siteName,

  title: {
    default: `${siteName} | Premium IPTV`,
    template: `%s | ${siteName}`,
  },

  description: siteDescription,

  keywords: [
    "GolpumaTV",
    "Goldpuma TV",
    "Premium IPTV",
    "IPTV",
    "Smart TV IPTV",
    "Android TV IPTV",
    "Fire TV IPTV",
    "4K IPTV",
    "Live TV",
    "IPTV Support",
    "IPTV Subscription",
    "IPTV Reseller",
  ],

  authors: [
    {
      name: siteName,
      url: siteUrl,
    },
  ],

  creator: siteName,
  publisher: siteName,

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
    canonical: siteUrl,
  },

  openGraph: {
    title: `${siteName} | Premium IPTV`,
    description: siteDescription,
    url: siteUrl,
    siteName,
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "/movie.jpg",
        alt: `${siteName} Premium IPTV`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `${siteName} | Premium IPTV`,
    description: siteDescription,
    images: ["/movie.jpg"],
  },

  category: "Entertainment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18281179589"
          strategy="afterInteractive"
        />

        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];

            function gtag() {
              window.dataLayer.push(arguments);
            }

            gtag("js", new Date());
            gtag("config", "AW-18281179589");
          `}
        </Script>

        <Script
          id="google-ads-click-conversion"
          strategy="afterInteractive"
        >
          {`
            function gtag_report_conversion(url) {
              var callback = function () {
                if (typeof url !== "undefined") {
                  window.location = url;
                }
              };

              gtag("event", "conversion", {
                send_to: "AW-18281179589/Bc1CCNSVmcccEMXTko1E",
                value: 1.0,
                currency: "TRY",
                event_callback: callback
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