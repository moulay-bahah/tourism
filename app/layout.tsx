import type { Metadata, Viewport } from "next"
import { Lato, Playfair_Display } from "next/font/google"
import { GoogleAnalytics } from "@next/third-parties/google"
import "./globals.css"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
})

const lato = Lato({
  variable: "--font-lato",
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://mauritania-tour.com"),
  title: {
    default: "Mauritania Tours | Afro Service Tourism",
    template: "%s | Afro Service Tourism",
  },
  description:
    "Plan private Mauritania tours, Nouakchott airport transfers, 4x4 travel, and locally guided desert experiences.",
  applicationName: "Afro Service Tourism",
  keywords: [
    "Mauritania tours",
    "Nouakchott tours",
    "Sahara desert tour",
    "Mauritania travel guide",
    "Nouakchott airport transfer",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Afro Service Tourism",
    title: "Mauritania Tours | Afro Service Tourism",
    description:
      "Private tours, trusted local guidance, and travel support across Mauritania.",
    images: [
      {
        url: "/images/hero.jpg",
        width: 600,
        height: 412,
        alt: "A Mauritanian desert settlement surrounded by golden dunes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mauritania Tours | Afro Service Tourism",
    description:
      "Private tours, trusted local guidance, and travel support across Mauritania.",
    images: ["/images/hero.jpg"],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/images/logo.png", apple: "/images/logo.png" },
}

export const viewport: Viewport = {
  themeColor: "#153f50",
  colorScheme: "light",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${lato.variable}`}>
        <a
          href="#main-content"
          className="fixed left-4 top-3 z-[100] -translate-y-20 rounded-md bg-accent px-4 py-2 font-bold text-accent-foreground transition-transform focus:translate-y-0"
        >
          Skip to Main Content
        </a>
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          {children}
          <SiteFooter />
        </div>
        <GoogleAnalytics gaId="G-NCK4FDRE1K" />
      </body>
    </html>
  )
}
