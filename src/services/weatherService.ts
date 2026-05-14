const OPENWEATHER_KEY = import.meta.env.VITE_OPENWEATHER_KEY

export async function getClimaAtual(latitude: number, longitude: number) {
  if (!OPENWEATHER_KEY) {
    throw new Error('Chave da OpenWeather não encontrada no .env')
  }

  const url =
    `https://api.openweathermap.org/data/2.5/weather` +
    `?lat=${latitude}` +
    `&lon=${longitude}` +
    `&appid=${OPENWEATHER_KEY}` +
    `&units=metric` +
    `&lang=pt_br`

  try {
    const response = await fetch(url)

    if (!response.ok) {
      const erroTexto = await response.text()
      throw new Error(`OpenWeather ${response.status}: ${erroTexto}`)
    }

    return response.json()
  } catch (error) {
    console.error('Falha ao conectar com a OpenWeather:', error)

    return {
      main: {
        temp: 24,
        feels_like: 25,
        humidity: 70,
      },
      weather: [
        {
          description: 'clima indisponível no momento',
        },
      ],
      fallback: true,
    }
  }
}