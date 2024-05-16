"use client"

import { JSX } from "react"

// Third-party dependencies
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Switch } from "@nextui-org/react"
import { FiSun } from "react-icons/fi"
import { FiMoon } from "react-icons/fi"

// Current project dependencies

/**
 * A component that switches between light and dark mode
 *
 * @returns {JSX.Element}
 */
const ThemeSwitcher = (): JSX.Element => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return <></>

  return (
    <Switch
      size="md"
      color="success"
      startContent={<FiSun />}
      endContent={<FiMoon />}
      isSelected={theme == "light" ? false : true}
      onValueChange={() => setTheme(theme == "light" ? "dark" : "light")}
    />
  )
}

export default ThemeSwitcher
