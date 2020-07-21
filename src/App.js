import React, {useState} from 'react';
import './App.css';
import OpenWeather from './OpenWeather.js';

function App() {
  return (
    <div className="App">
      <div className="top-navbar">
        <div><a href="https://placeholder.com"> <img src="https://via.placeholder.com/40"></img></a></div>
        <div>Top Navbar</div>
      </div>
      
      <div className="left-sidebar">
        <ul className="left-unordered-list">
          <li className="left-list">
            <a>Dashboard</a>
          </li>
          <li className="left-list">
            <a href="https://bogota-bootcamp-students.herokuapp.com/">Bogota Bootcamp Management</a>
          </li>
          <li className="left-list">
            <a href="https://github.com/njasbon">Github</a>
          </li>
        </ul>
      </div>
            
      <div className="app-greeting">
        <h1>Welcome Nico!</h1>
      </div>
      <div className="api-divs sunrise">Sunrise</div>
      <div className="api-divs climate-data">Climate Data <OpenWeather/></div>
      <div className="api-divs countdown-timer">Countdown Timer</div>
      <div className="api-divs chuck-norris">Chuck Norris Jokes</div>
      <div className="api-divs gmail-calendar">Gmail Calendar iFrame</div>
    </div>
  );
}

export default App;
