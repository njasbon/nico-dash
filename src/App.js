import React, {useState, useEffect} from 'react';
import './App.css';
import OpenWeather from './OpenWeather.js';
import TodoList from './TodoList.js';
import Countdown from './Countdown.js'


function App() {
    return (
    <div className="App">
      <div className="top-navbar">
        <div><img className="logo" src={require('./logo.png')}/></div>
        <div><h1>pedo de bruja</h1></div>
      </div>
      
      <div className="left-sidebar">
        <ul className="left-unordered-list">
          <li className="left-list">
            <a><h2>Dashboard</h2></a>
          </li>
          <li className="left-list">
            <a href="https://bogota-bootcamp-students.herokuapp.com/"><h2>Bogota Bootcamp Management</h2></a>
          </li>
          <li className="left-list">
            <a href="https://github.com/njasbon"><h2>Github</h2></a>
          </li>
          <li className="left-list">
            <a href="https://twitter.com/explore"><h2>Twitter</h2></a>
          </li>
          <li className="left-list">
            <a href="https://www.google.com/search?rlz=1C5CHFA_enUS894US894&biw=1299&bih=713&tbm=nws&sxsrf=ALeKk01_y7wnFEkCwqdUPHRHEohmvkwtZQ%3A1595429237814&ei=dVEYX72ZMeWc_QbGprKwCA&q=new+hope+pa&oq=new+hope&gs_l=psy-ab.3.0.0l10.21927.29194.0.31455.11.10.0.1.1.0.139.730.4j3.9.0....0...1c.1.64.psy-ab..1.8.734.0..0i433k1.392.kykuXGGmm10"><h2>News</h2></a>
          </li>
        </ul>
      </div>
            
      <div className="app-greeting">
        <h2>Buenas noches Nico, que haces despierta a esta hora?</h2>
      </div>
      <OpenWeather/>
      <div className="api-divs countdown-timer">
        <Countdown/>
      </div>
      <div className="api-divs todo-list"><h4>Todo List</h4>
        <TodoList/>
      </div>
      <div className="api-divs gmail-calendar"><h4>The Agenda:</h4>
        <iframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ebf5f8&amp;ctz=America%2FNew_York&amp;src=bmphc2JvbkBnbWFpbC5jb20&amp;src=Y2xhc3Nyb29tMTA5MjEzMDA4ODU5NzMxNjQwMzkwQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&amp;src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;src=ZW4uY28jaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&amp;src=ZW4uZWMjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&amp;src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;src=bmljb0Bib2dvdGFkZXYuY29t&amp;color=%2333ae06&amp;color=%23a52714&amp;color=%2333B679&amp;color=%23009688&amp;color=%230B8043&amp;color=%230B8043&amp;color=%23E67C73&amp;showTz=0&amp;showTabs=0&amp;showPrint=0&amp;showNav=1&amp;showTitle=0"></iframe>
      </div>
    </div>
  );
}

export default App;
