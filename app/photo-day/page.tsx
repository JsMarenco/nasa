"use client"

import { JSX, useState, useEffect } from "react"

// Third-party dependencies
import { Image, Button } from "@nextui-org/react"
import { FiCopy } from "react-icons/fi"

// Current project dependencies
import Header from "../components/Header"

const example = {
  copyright: "Sebastian Voltmer",
  date: "2024-05-15",
  explanation:
    "What did the monster active region that created the recent auroras look like when at the Sun's edge? There, AR 3664 better showed its 3D structure. Pictured, a large multi-pronged solar prominence was captured extending from chaotic sunspot region AR 3664 out into space, just one example of the particle clouds ejected from this violent solar region. The Earth could easily fit under this long-extended prominence.  The featured image was captured two days ago from this constantly changing region. Yesterday, the strongest solar flare in years was expelled (not shown), a blast classified in the upper X-class. Ultraviolet light from that flare quickly hit the Earth's atmosphere and caused shortwave radio blackouts across both North and South America. Although now rotated to be facing slightly away from the Earth, particles from AR 3664 and subsequent coronal mass ejections (CMEs) might still follow curved magnetic field lines across the inner Solar System and create more Earthly auroras.    Gallery: Earth Aurora from Solar Active Region 6443",
  hdurl: "https://apod.nasa.gov/apod/image/2405/AR3664Prom_Voltmer_1728.jpg",
  media_type: "image",
  service_version: "v1",
  title: "AR 3664 at the Sun's Edge",
  url: "https://apod.nasa.gov/apod/image/2405/AR3664Prom_Voltmer_960.jpg",
}

/**
 * This page will show a photo day using NASA's api
 *
 * @component
 * @returns {JSX.Element}
 */
const PhotoDay = (): JSX.Element => {
  const [photoDay] = useState(example)
  const [, setDateParam] = useState<string>("")

  const copyUrlWithDate = () => {
    const urlWithDate = `${window.location.href}?date=${photoDay.date}`
    navigator.clipboard
      .writeText(urlWithDate)
      .then(() => alert("URL copiada con éxito"))
      .catch((error) => console.error("Error al copiar la URL:", error))
  }

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const dateParam = params.get("date") || ""
    setDateParam(dateParam)
  }, [])

  return (
    <>
      <Header />

      <div className="w-full p-5 flex justify-center h-auto my-10">
        <Image
          isBlurred
          src={photoDay.hdurl}
          alt={photoDay.title ? photoDay.title : "Photo of day"}
          className="max-w-[700px] w-full"
        />
      </div>

      {photoDay.title && (
        <h2 className="text-center mt-5 font-bold">{photoDay.title}</h2>
      )}

      {photoDay.explanation && (
        <div className="max-w-6xl mx-auto w-full">
          <p className="text-center text-small mt-5 mx-20 font-normal">
            {photoDay.explanation}
          </p>
        </div>
      )}

      <div className="w-full text-center my-5 block">
        <Button
          color="success"
          endContent={<FiCopy />}
          onClick={copyUrlWithDate}
          size="lg"
          className="mx-auto py-2 p-3 gap-2"
        >
          Compartir foto
        </Button>
      </div>
    </>
  )
}

export default PhotoDay
