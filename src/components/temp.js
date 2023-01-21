import React, { useEffect, useState } from 'react'
import Weather from './weather'
import "./style.css"
const Temp = () => {
  const [searchValue,  setSearchValue] = useState("")
  const [tempInfo, setTempInfo] = useState({})
  const getWeatherInfo=async()=>{
   try {
    let url =`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=ec83dde7bb9c1e9fcc737fecee84b929`
    let res = await fetch(url)
    let data= await res.json()
   const {temp, humidity, pressure} =data.main
   const {main:weathermood}= data.weather[0]
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
  };
  useEffect(() => {
    getWeatherInfo();
  }, []);
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
   <Weather tempInfo = {tempInfo}/>
    </>
  )
}

export default Temp