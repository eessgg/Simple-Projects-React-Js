import React from 'react';
import './CardWeather.css';

const CardWeather = () => {
  return (
    <div className="card">
      <header>
        <h1>London | GB</h1>
        <span> TUESDAY </span>
      </header>
      <div className="weather">
        <div className="media">
          <img src="http://cdn.onlinewebfonts.com/svg/img_198014.png" alt=""/>
        </div>
        <p className="temp">22°</p>
        <div>
          <p>h: 76%</p>
          <p>w: 6km/h</p>
        </div>
      </div>
      <div className="description">
        <p>- Clouds: overcast clouds - </p>
      </div>
    </div>
  );
}

export default CardWeather;
