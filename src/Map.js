import React from 'react'
import './Map.css'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import { useState, useEffect, useRef, useMemo } from "react";
import L from "leaflet"
import ReactDOM from "react-dom/client";
import SunCalc from 'suncalc';
import markerIcon from './marker-icon.png';
import useGeoLocation from './useGeoLocation';
export default function Map({markPosition, setMarkPosition, times, setTimes}) {

    const L = require('leaflet');

    const myIcon = L.icon({
        iconUrl: require('./marker-icon.png'),
        iconSize: [23,35],
        iconAnchor: [23, 35],
        popupAnchor: null,
        shadowUrl: null,
        shadowSize: null,
        shadowAnchor: null
    });
  const markerRef = useRef(null)
  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current
        if (marker != null) {
          setMarkPosition(marker.getLatLng())
        }
      },
    }),
    [],
  )


useEffect(() => {
    setTimes(SunCalc.getTimes(new Date(), markPosition.lat, markPosition.lng));
  }, [markPosition])
  return (

    <div>
    <MapContainer className='map' center={markPosition} zoom={3} scrollWheelZoom={false}>
  <TileLayer
    
    url='https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png'
  />
  <Marker icon={myIcon} ref={markerRef} eventHandlers={eventHandlers} position={markPosition} draggable={true}>
    
  </Marker>
</MapContainer>

</div>



  )
}
