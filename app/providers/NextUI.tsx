"use client"

import { ReactNode, JSX } from "react"

// Third-party dependencies
import { NextUIProvider } from "@nextui-org/react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

// Current project dependencies

/**
 * Wrapper component that provides Next.js UI and themes context to its children components.
 *
 * @component
 * @example
 * // Usage within a Next.js component
 * // ...
 * <NextUIProviderWrapper>
 *   <YourComponent />
 * </NextUIProviderWrapper>
 * // ...
 *
 * @param {Object} props - The properties passed to the component.
 * @param {ReactNode} props.children - The child elements to be wrapped by the provider.
 * @returns {JSX.Element} The JSX representation of the wrapped components with context providers.
 */
const NextUIProviderWrapper = ({
  children,
}: {
  children: ReactNode
}): JSX.Element => {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="light">
        {children}
      </NextThemesProvider>
    </NextUIProvider>
  )
}

export default NextUIProviderWrapper
