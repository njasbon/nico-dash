import React, {useState, useEffect} from 'react';

function OpenWeather(props){
    const[temp, setTemp] = useState("")
    const[description, setDescription] = useState("")
    const[feelsLike, setFeelsLike] = useState("")
    const[tempMin, setTempMin] = useState("")
    const[tempMax, setTempMax] = useState("")
    const[humidity, setHumidity] =useState("")
    const[sunrise, setSunrise] = useState("")
    const[sunset, setSunset] = useState("")

    useEffect(() => {
        fetch("https://api.openweathermap.org/data/2.5/weather?zip=18938,us&appid=0c43223202e6ef7792b8415c2c1271fb&units=imperial")
        .then(response => response.json())
        .then(data => {
            setTemp(data.main.temp)
            setDescription(data.weather[0].description)
            setFeelsLike(data.main.feels_like)
            setTempMin(data.main.temp_min)
            setTempMax(data.main.temp_max)
            setHumidity(data.main.humidity)
            setSunrise(Date (data.sys.sunrise).toString())
            setSunset(Date (data.sys.sunset).toString())
        })
    }, [])

    return(
        <>
        <div className="open-weather-api">
            <ul> Here's the weather for today:
                <li>Temp: {temp}</li>
                <li>Description: {description}</li>
                <li>Feels Like: {feelsLike}</li>
                <li>Min Temp: {tempMin}</li>
                <li>Max Temp: {tempMax}</li>
                <li>Humidity: {humidity}</li>
            </ul>
        </div>

        <div className="sunrise-sunset">
            <ul>Sunrise and Sunset for today:
                <li>Sunrise time for today: {sunrise}</li>
                <li>Sunset time for today: {sunset}</li>
            </ul>
        </div>
        </>
    )
        
};

export default OpenWeather;