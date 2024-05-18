// Third-party dependencies
import { NextResponse } from "next/server"
import axios from "axios"

// Current project dependencies

export const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url)
  const date = searchParams.get("date")

  // Obtener la foto del día desde la API de APOD
  try {
    const apiKey = process.env.NASA_API_KEY || "DEMO_KEY"
    const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`

    const response = await axios.get(apiUrl)

    const photoOfTheDay = response.data

    // Verificar los headers de la respuesta para obtener información sobre los límites de uso
    const rateLimitRemaining = response.headers["x-ratelimit-remaining"]
    const rateLimitLimit = response.headers["x-ratelimit-limit"]

    // Calcular los intentos restantes
    const remainingAttempts = parseInt(rateLimitRemaining)

    return NextResponse.json({
      status: "Active",
      date: date,
      photoOfTheDay: photoOfTheDay,
      rateLimitLimit: rateLimitLimit,
      remainingAttempts: remainingAttempts,
    })
  } catch (error) {
    console.error(
      "Error al obtener la foto del día desde la API de APOD:",
      error,
    )

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

    return NextResponse.json({
      status: "Active",
      date: date,
      photoOfTheDay: example,
      rateLimitLimit: 0,
      remainingAttempts: 0,
    })
  }
}
