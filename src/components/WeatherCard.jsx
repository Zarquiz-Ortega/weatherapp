import React, { useState } from 'react'
import './styles/WeatherCard.css'

const WeatherCard = ({ weather, temp }) => {

    const [isCel, setIsCel] = useState(true)

    const handeltemp = () => {
        if (isCel) {
            setIsCel(false)
        } else {
            setIsCel(true)
        }
    }

    return (
        <div className='card' >
            <h1>Weather app</h1>
            <h2 className='card__titel' >{weather?.name} {weather?.sys.country}</h2>
            <div className='card__body' >
            <figure>
                <img src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt="" />
            </figure>
                <ul className='card__description' >
                    <li>
                        <h3 className='card__city' >{weather?.weather[0].description}</h3>
                    </li>
                    <li className='flex'>
                        <span>Wind speed</span>
                        <span className='bold' >{weather?.wind.speed}m/s</span>
                    </li>
                    <li className='flex'>
                        <span>Clouds</span>
                        <span className='bold'>{weather?.clouds.all}%</span>
                    </li>
                    <li className='flex'>
                        <span>Pressure</span>
                        <span className='bold'>{weather?.main.pressure}hPa</span>
                    </li>
                </ul>
            </div>
            <h3 className='temp'>{isCel ? `${temp?.cel} °C` : `${temp?.fah} °F`}</h3>
            <button className='btn' onClick={handeltemp} >
                {isCel ? `Change tu °F` : `Change tu °C`}
            </button>
        </div>
    )
}

export default WeatherCard