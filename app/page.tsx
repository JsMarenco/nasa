"use client"

import { JSX } from "react"

// Third-party dependencies
import { Button } from "@nextui-org/react"
import Link from "next/link"

// Current project dependencies
import Header from "./components/Header"

/**
 * Home component representing the home page.
 *
 * @component
 * @returns {JSX.Element} The rendered Home component.
 */
const Home = (): JSX.Element => {
  return (
    <>
      <div className="h-screen absolute w-full z-50 bg-transparent top-0 bottom-0 left-0 right-0 mx-auto">
        <Header />

        <div className="flex flex-col items-center justify-center h-full text-white px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
            Discover the Wonders of the Universe
          </h1>

          <p className="text-lg md:text-2xl mb-8 text-center">
            {
              "Explore NASA's Image of the Day and unveil the mysteries of space."
            }
          </p>

          <Link href="/photo-day/">
            <Button
              size="lg"
              color="primary"
              className="bg-blue-600 px-3 py-2 hover:bg-blue-800"
            >
              Explore More
            </Button>
          </Link>
        </div>
      </div>

      <div className="app_bg bg-black"></div>

      <div className="star-field z-1">
        <div className="layer"></div>
        <div className="layer"></div>
        <div className="layer"></div>
        <div className="layer"></div>
      </div>
    </>
  )
}

export default Home
