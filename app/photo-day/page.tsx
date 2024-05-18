"use client"

import { JSX, useState, useEffect } from "react"

// Third-party dependencies
import { Image, Button } from "@nextui-org/react"
import { FiCopy } from "react-icons/fi"
import axios from "axios"

// Current project dependencies
import Header from "../components/Header"

const example = {
  copyright: "Jerry Lodriguss",
  date: "2002-05-26",
  explanation:
    "The dark nebula predominant at the lower left of the above photograph is known as the Pipe Nebula.  The dark clouds, suggestively shaped like smoke rising from a pipe, are caused by absorption of background starlight by dust.  These dust clouds can be traced all the way to the Rho Ophiuchi nebular clouds on the right.  The brightest star in the field is Antares. Many types of nebula are highlighted here: the red are emission nebula, the blue are reflection nebula, and the dark are absorption nebula. This picture has been digitally enhanced.",
  hdurl: "https://apod.nasa.gov/apod/image/0003/pipe2_lodriguss_big.jpg",
  media_type: "image",
  service_version: "v1",
  title: "The Pipe Dark Nebula",
  url: "https://apod.nasa.gov/apod/image/0003/pipe2_lodriguss.jpg",
}

/**
 * This page will show a photo day using NASA's api
 *
 * @component
 * @returns {JSX.Element}
 */
const PhotoDay = (): JSX.Element => {
  const [photoDay, setPhotoDay] = useState(example)

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

    axios
      .get(`/api/photo-day?date=${dateParam}`)
      .then((response) => {
        setPhotoDay(response.data.photoOfTheDay)
      })
      .catch((error) => {
        console.error("Error al obtener la foto del día:", error)
      })
  }, [])

  return (
    <>
      <Header />

      <div className="w-full p-5 flex justify-center h-auto my-5 md:my-10">
        <Image
          isBlurred
          src={photoDay.hdurl}
          alt={photoDay.title ? photoDay.title : "Photo of day"}
          className="max-w-[1080px] w-full"
        />
      </div>

      {photoDay.title && (
        <h6 className="text-center text-sm font-light">
          {
            // Convert the date to human date
            new Date(photoDay.date).toLocaleDateString("es-ES", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })
          }
        </h6>
      )}

      {photoDay.title && (
        <h2 className="text-center mt-5 font-bold">{photoDay.title}</h2>
      )}

      {photoDay.explanation && (
        <div className="max-w-6xl mx-auto w-full">
          <p className="text-center text-small mt-5 mx-5 lg-mx-20 font-normal">
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
