import React from "react"

// Third-party dependencies
import type { Metadata } from "next"
import { Roboto } from "next/font/google"

// Current project dependencies
import "./styles/globals.css"
import Providers from "./providers"

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
})

export const metadata: Metadata = {
  title: "Nextjs scrapper template",
  description: "Made by @JsMarenco",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
