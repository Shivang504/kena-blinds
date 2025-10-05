import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif", // used by our theme as --font-serif
  display: "swap",
})

export const metadata: Metadata = {
  title: "Kena Blinds | Premium Blinds & Curtains in Melbourne",
  description:
    "Kena Blinds provides premium blinds and custom curtains across Melbourne & Victoria. Free quotes, expert advice, and elegant window treatments.",
  generator: "v0.app",
  metadataBase: new URL("https://kenablinds.example.com"),
  openGraph: {
    title: "Kena Blinds",
    description: "Premium blinds and curtains across Melbourne & Victoria. Transform your space.",
    url: "https://kenablinds.example.com",
    siteName: "Kena Blinds",
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${playfair.variable}`}>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 bg-primary text-primary-foreground rounded-md px-3 py-2"
          >
            Skip to content
          </a>
          {children}
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
