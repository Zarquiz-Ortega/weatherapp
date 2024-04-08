import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import axios from 'axios'
import WeatherCard from './components/WeatherCard'
import Loading from './components/Loading'

function App() {
  const [coords, setCoords] = useState()
  const [weather, setWeather] = useState()
  const [temp, setTemp] = useState()
  const [isLoading, setIsLoading] = useState(true)

  const sucees = (pos) => {
    const obj = {
      lat: pos.coords.latitude,
      lon: pos.coords.longitude,
    }
    setCoords(obj)
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(sucees)
  }, [])

  useEffect(() => {
    if (coords) {
      const apiKey = '8c8b7da185880102df16c292fc975d27'
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords?.lat}&lon=${coords?.lon}&appid=${apiKey}`

      axios.get(url)
        .then(res => {
          const cel = (res.data.main.temp - 273.15).toFixed(2)
          const fah = (cel * 9 / 5 + 32).toFixed(2)
          setTemp({ cel, fah })
          setWeather(res.data)
        })
        .catch(err => console.log(err))
        .finally(() => setIsLoading(false))
    }
  }, [coords])


  return (
    <div>
      {isLoading ?
        <Loading />
        :       
          <WeatherCard
            weather={weather}
            temp={temp}
          />
      }
    </div>

  )
}

export default App
