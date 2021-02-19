import React from 'react';
import Loader from "react-loader-spinner";
import { useState, useEffect } from 'react';
import { useCurrentPosition } from 'react-use-geolocation'
import './CardWeather.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import LocationOnIcon from '@material-ui/icons/LocationOn';

const url = `http://api.openweathermap.org/data/2.5/weather?q=alabama&&units=metric&appid=${process.env.REACT_APP_API_KEY}`;


const CardWeather = () => {
  const [data, setData] = useState([]);
  const [position, error] = useCurrentPosition();

  const getFetchData = () => fetch(url).then(res => res.json()).then(items => {saveToState(items)});

  let dataWeather;
  const saveToState = (items) => {
    dataWeather = {
      name: items.name,
      id: items.id,
      country: items.sys.country,
      main: items.weather[0].main,
      description: items.weather[0].description,
      icon: items.weather[0].icon,
      temp: parseFloat(items.main.temp).toFixed(1),
      humidity: items.main.humidity,
      wind:items.wind.speed,
    }
    console.log(dataWeather)
    setData([dataWeather])
  }

  useEffect(() => {
    setTimeout(() => {
      getFetchData()
    }, 3000)
  }, [])
  
  const getPosition = () => {
      let lat = position.coords.latitude;
      let long = position.coords.longitude;
      console.log(lat, long)
      fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
        .then(response => response.json())
        .then(items => saveToState(items))
  }

  if (!position && !error) {
    return (
      <Loader
        type="Bars"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
      );
  }
  if (error) {
    return <p>{error.message}</p>;
  }

  let cardWeather;
  if(data) {
    cardWeather = data.map(city => {
      return (
        <div className="card" key={city.id}>
          <header>
            <h1> {city.name} | {city.country}</h1>
            <span> TUESDAY </span>
          </header>
          <div className="weather">
          <div className="media">
            <img src={`http://openweathermap.org/img/wn/${city.icon}@2x.png`} alt=""/>
          </div>
          <p className="temp">{city.temp}°</p>
          <div>
            <p>h: {city.humidity}%</p>
            <p>w: {city.wind}km/h</p>
          </div>
          </div>
          <div className="description">
          <p>- {city.main}: {city.description} - </p>
          </div> 
        </div>
      )
    })
  } else {
    return (
    <Loader
      type="Bars"
      color="#00BFFF"
      height={100}
      width={100}
      timeout={3000} //3 secs
    />
    )
  }
 
  return (
    <div className="inner">    
      <button type="button" className="btn" onClick={getPosition}>
        Find My place <LocationOnIcon className="icon" />
      </button> 
      {cardWeather}
    </div>
  );
}

export default CardWeather;