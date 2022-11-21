import React from 'react'
import Map from './Map.js'
import SunInfo from './SunInfo.js'
import { useState, useEffect } from "react";
import useGeoLocation from './useGeoLocation.js';
import Navbar from './Navbar.js'
export default function Sun() {

 const location = useGeoLocation()
 const firstLat = location.coordinates.lat
 const firstLng = location.coordinates.lng
 const [markPosition, setMarkPosition] = useState({lat: 0, lng:0,})
 const [times, setTimes] = useState(null)
 useEffect(() => {
    setMarkPosition(location.loaded=true? {lat: firstLat, lng: firstLng} : {lat: 0, lng: 0})
 }, [location])
  return (
    <div>
        
        
        <Map
        markPosition={markPosition}
        setMarkPosition={setMarkPosition}
        times = {times}
        setTimes = {setTimes}
        ></Map>
        <SunInfo
        times = {times}
        markPosition = {markPosition}
        setTimes={setTimes}
        setMarkPosition = {setMarkPosition}
        ></SunInfo>
    </div>
  )
}
