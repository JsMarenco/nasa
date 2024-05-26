import React from "react"

// Third-party dependencies
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"

// Current project dependencies
import "./styles/globals.css"
import "./styles/background.css"
import Providers from "./providers"
import ScrollTop from "./components/Buttons/ScrollTop"

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Home | NASA Image of the Day",
  description: "Discover NASA's daily image and stay tuned for more features.",
  applicationName: "NASA Image of the Day",
  authors: {
    name: "Angel Marenco",
    url: "https://www.linkedin.com/in/jsmarenco/",
  },
  generator: "nasa, image of the day, space, astronomy, daily image,",
  classification: "Astronomy",
  category: "Science",
  openGraph: {
    type: "website",
    siteName: "NASA Image of the Day",
    url: "",
    images: ["/assets/screens/home.png"],
  },
  manifest: "/static/manifest.json",
  icons: {
    icon: "/static/icons/icon-192x192.png",
    apple: "/static/icons/icon-192x192.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Providers>
          {children} <ScrollTop />
        </Providers>
      </body>
    </html>
  )
}
