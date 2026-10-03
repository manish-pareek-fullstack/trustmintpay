import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { siteContent } from "@/data/siteContent";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "TrustMint Pay | Secure Digital Payments",
  description:
    "TrustMint Pay brings secure and simplified digital payment services, wallet tools, and service support for modern businesses.",
  keywords: [
    "TrustMint Pay",
    "digital payments",
    "AEPS",
    "BBPS",
    "fintech",
    "wallet",
  ],
  openGraph: {
    title: "TrustMint Pay",
    description: "Secure • Smart • Simplified digital payment services.",
    url: "https://example.com",
    siteName: "TrustMint Pay",
    type: "website",
  },
  icons: {
    icon: "/logo/trustmint-logo.png",
    shortcut: "/logo/trustmint-logo.png",
    apple: "/logo/trustmint-logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} bg-white text-slate-900 antialiased`}
      >
        <div className="site-shell">
          <Navbar navLinks={siteContent.navLinks} />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
