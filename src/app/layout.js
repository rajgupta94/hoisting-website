import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "HOSTER Web Hosting | Managed High-Performance Servers",
  description: "Experience lightning-fast hosting with HOSTER Web Hosting. Enterprise-grade NVMe SSD storage, 99.9% uptime guarantee, and free migrations. India's most reliable hosting provider.",
  keywords: "web hosting, managed hosting, NVMe SSD, fast web hosting, hosting India, free migration, domain registration, HOSTER, dedicated servers",
  authors: [{ name: "HOSTER Team" }],
  creator: "HOSTER",
  publisher: "HOSTER",
  robots: "index, follow",
  alternates: {
    canonical: "https://host.co.in",
  },
  openGraph: {
    title: "HOSTER | Managed High-Performance Web Hosting",
    description: "Launch your website in minutes with lightning-fast performance and enterprise-level security.",
    url: "https://host.co.in",
    siteName: "HOSTER",
    images: [
      {
        url: "/images/og-image.png", // Assuming this will be created/added
        width: 1200,
        height: 630,
        alt: "HOSTER Web Hosting Platform",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HOSTER | Managed High-Performance Web Hosting",
    description: "Experience enterprise-level hosting speed and security with HOSTER.",
    images: ["/images/og-image.png"],
  },
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
};

export const viewport = {
  themeColor: "#0C0F38",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
