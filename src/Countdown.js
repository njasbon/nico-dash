import React from 'react';
import './Countdown.css'



function Countdown(){
    let handle
    let start = 0
    let secondsTimer = () => document.getElementById("timer-sec")
    let minutesTimer = () => document.getElementById("timer-min")
    let hoursTimer =() => document.getElementById("timer-hour")

    const startCountDown = () =>{
        start = secondsTimer().value
        counter()
    }


    const counter = () => {
        let seconds = totalSeconds()
        if(seconds <= 0){
            console.log("stop")
        } else {
            handle = setTimeout(() => {
                updateSeconds(totalSeconds() -1)
                counter()
            }, 1000)
        }
    }

    const totalSeconds = () => {
        return parseInt(secondsTimer().value) + 
        (parseInt(minutesTimer().value) * 60) + 
        (parseInt(hoursTimer().value * 3600))
    }

    const updateSeconds = (newSeconds) => {
        let seconds = newSeconds % 60
        let minutes = Math.floor(newSeconds / 60)
        console.log(totalSeconds())
        secondsTimer().value = seconds
        minutesTimer().value = minutes 
        hoursTimer().value = hours
    }

    const stop = () => clearTimeout(handle)
    const reset = () => secondsTimer().value = start

 
    return(
        <div><h4>Let the countdown begin!</h4>
            <div className="countdown-input">
                <input type="number" id="timer-hour" max="59" min="0" placeholder="hours"/>
                <input type="number" id="timer-min" max="59" min="0" placeholder="minutes"/>
                <input type="number" id="timer-sec" max="59" min="0" placeholder="seconds"/>
            </div>
            <div>
                <button id="start" onClick={startCountDown}>start</button>
                <button id="stop" onClick={stop}>stop</button>
                <button id="reset" onClick={reset}>restart</button>
            </div>
        </div>
    );

}

export default Countdown;
