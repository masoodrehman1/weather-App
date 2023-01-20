import React, { useEffect, useState } from 'react'
import "./style.css"
const Temp = () => {
  const [searchValue,  setSearchValue] = useState("bannu")
  const [tempInfo, setTempInfo] = useState({})
  const getWeatherInfo=async()=>{
   try {
    let url =`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=ec83dde7bb9c1e9fcc737fecee84b929`
    const res = await fetch(url)
    const data= await res.json()
   const {temp, humidity, pressure} =data.main
   const {main:weathermood}= data.weather[0].main
   const {name} =data
   const {speed} =data.wind
   const {country, sunset} = data.sys
   const myNewWeatherInfo ={
    temp,
    humidity,
    pressure,
    weathermood,
    name,
    speed,
    country,
    sunset,
   }
   setTempInfo(myNewWeatherInfo)
    
   } catch (error) {
    
   }
  }
  useEffect(()=>{
    getWeatherInfo()
  },[])
  const {temp,
    humidity,
    pressure,
    weathermood,
    name,
    speed,
    country,
    sunset} =tempInfo
  
  return (
    <>
    <div className='wrap'>
          <div className='search'>
            <input type="search"
            placeholder='search...'
            autoFocus
            id='search'
            className='searchTerm'
            value={searchValue}
            onChange={(e)=> setSearchValue(e.target.value)}>
             
            </input>
            <button type='search' className='searchButton' onClick={getWeatherInfo}> search</button>
          </div>
    </div>
    <article className='widget'>
      <div className='weatherIcon'>
        <i className={'wi wi-day-sunny'}>
        </i>
      </div>
      <div className='weatherInfo'>
        <div className='temperature'>
          <span>{temp}&deg; </span>

        </div>
        <div className='description'>
          <div className='weatherCondition'> sunny</div>
          <div className='place'>Islamabad, pakistan</div>
        </div>
      </div>
      <div className='date' >{new Date().toLocaleString()}</div>
      <div className='extra-temp'>
        <div className='temp-info-minmax'>
          <div className='two-sided-section'>
            <p> <i className={'wi wi-sunset'}></i></p>
            <p className='extra-info-leftside'>
              19:19 PM <br></br>
              SunSet
            </p>
          </div>
          <div className='two-sided-section'>
            <p> <i className={'wi wi-humidity'}></i></p>
            <p className='extra-info-leftside'>
              19:19 PM <br></br>
              humidity
            </p>
          </div>
         
        </div>
        <div className='weather-extra-info'>
        <div className='two-sided-section'>
            <p> <i className={'wi wi-rain'}></i></p>
            <p className='extra-info-leftside'>
              19:19 PM <br></br>
              pressure
            </p>
          </div>
          <div className='two-sided-section'>
            <p> <i className={'wi wi-strong-wind'}></i></p>
            <p className='extra-info-leftside'>
              19:19 PM <br></br>
              speed
            </p>
          </div>
        </div>
      </div>
    </article>
    </>
  )
}

export default Temp