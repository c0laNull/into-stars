import React from 'react'
import { useState, useEffect } from "react";
import './SunInfo.css'
import sunset from './sunset.png'
import sunrise from './sunrise.png'
import jwstphoto from './jwst-photo.jpg'
import Clock from './Clock.js'
export default function SunInfo({markPosition, setMarkPosition, times, setTimes, location}) {
    const [locationInfo, setLocationInfo] = useState()
    async function getLOC() {
        console.log("XD1")
        const response = await fetch('https://geolocation-db.com/json')
        console.log("XD")
        const responseJSON = await response.json();
        console.log("response:", responseJSON);
        console.log("XD")
        setLocationInfo(responseJSON)
        console.log("XD")
        console.log("locationInfo:", locationInfo)
    }
    useEffect(() => {
        getLOC()
        console.log("X")
    }, [])
  return (
<div className="suninfo" style={{ 
      backgroundImage: `url(${jwstphoto})`,
      backgroundRepeat: 'no-repeat',
      width: '100%'
    }}>
<div className='location-info-div'>
    <p className="coordinates">{Math.round(markPosition.lat *10000)/10000}, {Math.round(markPosition.lng *10000)/10000}, {times ?  "UTC+" +(times.sunrise.getTimezoneOffset()<=0? times.sunrise.getTimezoneOffset()/(-60) : times.sunrise.getTimezoneOffset()/60) : "null"}</p> 
</div>
<hr></hr>
<div className='main-suninfo-div'>    
    <div className='sun-info-div'>
        <img className='sun-img' src={sunrise}></img>
        <p>{times ? times.sunrise.toLocaleString() : "null"}</p>
    </div>
    <div className='sun-info-div'>
        <img className='sun-img' src={sunset}></img>
        <p>{times ? times.sunset.toLocaleString() : "null"}</p>
    </div>
</div>

</div>
  )
}
