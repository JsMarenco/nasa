import { JSX } from "react"

// Third-party dependencies

// Current project dependencies

/**
 * Home component representing the home page.
 *
 * @component
 * @returns {JSX.Element} The rendered Home component.
 */
const Home = (): JSX.Element => {
  return (
    <div className="flex justify-center items-center h-screen bg-black text-white">
      <section className="text-center">
        <h1 className="text-5xl font-bold">Welcome</h1>
        <p className="text-xl font-light mt-4">This is just a template page</p>
      </section>
    </div>
  )
}

export default Home
