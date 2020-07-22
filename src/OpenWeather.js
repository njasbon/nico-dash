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
        fetch(`https://api.openweathermap.org/data/2.5/weather?zip=18938,us&appid=${process.env.REACT_APP_WEATHER_KEY}&units=imperial`)
        .then(response => response.json())
        .then(data => {
            setTemp(data.main.temp)
            setDescription(data.weather[0].description)
            setFeelsLike(data.main.feels_like)
            setTempMin(data.main.temp_min)
            setTempMax(data.main.temp_max)
            setHumidity(data.main.humidity)
            setSunrise(new Date (data.sys.sunrise * 1000))
            setSunset(new Date (data.sys.sunset * 1000))
        })
    }, [])

    let rise = sunrise.toLocaleString("en-US", {hour: "2-digit", minute: "2-digit"})
    let set = sunset.toLocaleString("en-US", {hour: "2-digit", minute: "2-digit"})


    return(
        <>
        <div className="api-divs sunrise">
            <ul><h4>Sunrise and Sunset for today:</h4>
                <li>Sunrise at {rise}</li>
                <li>Sunset at {set}</li>
            </ul>
        </div>
        <div className="api-divs climate-data">
            <ul> <h4>Today's Weather:</h4>
                <li>We're going to see {description}.</li>
                <li>Temp: {temp}°F</li>
                <li>Feels Like: {feelsLike}°F</li>
                <li>Min Temp: {tempMin}°F</li>
                <li>Max Temp: {tempMax}°F</li>
                <li>Humidity: {humidity}%</li>
            </ul>
        </div>
        </>
    )
        
};

export default OpenWeather;