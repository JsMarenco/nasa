import { ReactNode, JSX } from "react"

// Third-party dependencies

// Current project dependencies
import NextUIProviderWrapper from "./NextUI"

/**
 * Component that provides context providers for the application.
 * It wraps the children components with Next.js UI and themes context.
 *
 * @component
 * @example
 * // Usage within a React component
 * // ...
 * import Providers from "./Providers";
 * // ...
 *
 * const App = () => {
 *   return (
 *     <Providers>
 *       <YourComponent />
 *     </Providers>
 *   );
 * };
 * // ...
 *
 * @param {Object} props - The properties passed to the component.
 * @param {ReactNode} props.children - The child elements to be wrapped by the providers.
 * @returns {JSX.Element} The JSX representation of the wrapped components with context providers.
 */
const Providers = ({ children }: { children: ReactNode }): JSX.Element => {
  return <NextUIProviderWrapper>{children}</NextUIProviderWrapper>
}

export default Providers
