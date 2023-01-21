import React, { useEffect, useState } from 'react'

function Weather({tempInfo}) {
    const [weatherInfo1, setWeatherInfo1]= useState("")
    const {
    temp,
    humidity,
    pressure,
    weathermood,
    name,
    speed,
    country,
    sunset,}=tempInfo;
    useEffect(()=>{
     if(weathermood){
        switch(weathermood){
            case "Clouds":
                setWeatherInfo1("wi-day-cloudy");
                break;
                case "Haze":
                    setWeatherInfo1("wi-fog")
                break;
                case "Clear":
                    setWeatherInfo1("wi-day-sunny")
                break;
                case "Mist":
                    setWeatherInfo1("wi-dust")
                break;
                default:
                    setWeatherInfo1("wi-day-sunny")
                    break;
        }
     }
    }, [weathermood])
    // converting time  
    let seconds = sunset
    let date = new Date(seconds*1000)
    let timeStr= `${date.getHours()}:${date.getMinutes()}`
  return (
    <>
     <article className='widget'>
      <div className='weatherIcon'>
        <i className={`wi ${weatherInfo1}`}>
        </i>
      </div>
      <div className='weatherInfo'>
        <div className='temperature'>
          <span>{temp}&deg; </span>

        </div>
        <div className='description'>
          <div className='weatherCondition'> {weathermood}</div>
          <div className='place'>{name} {country}</div>
        </div>
      </div>
      <div className='date' >{new Date().toLocaleString()}</div>
      <div className='extra-temp'>
        <div className='temp-info-minmax'>
          <div className='two-sided-section'>
            <p> <i className={'wi wi-sunset'}></i></p>
            <p className='extra-info-leftside'>
              {timeStr} <br></br>
              SunSet
            </p>
          </div>
          <div className='two-sided-section'>
            <p> <i className={'wi wi-humidity'}></i></p>
            <p className='extra-info-leftside'>
              {humidity} <br></br>
              humidity
            </p>
          </div>
         
        </div>
        <div className='weather-extra-info'>
        <div className='two-sided-section'>
            <p> <i className={'wi wi-rain'}></i></p>
            <p className='extra-info-leftside'>
              {pressure} <br></br>
              pressure
            </p>
          </div>
          <div className='two-sided-section'>
            <p> <i className={'wi wi-strong-wind'}></i></p>
            <p className='extra-info-leftside'>
              {speed} <br></br>
              speed
            </p>
          </div>
        </div>
      </div>
    </article>
    </>
  )
}

export default Weather