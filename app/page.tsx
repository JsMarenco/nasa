import { JSX } from "react"

// Third-party dependencies

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
      <Header />
    </>
  )
}

export default Home
