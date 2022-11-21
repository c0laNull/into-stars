import React from 'react'
import {useState, useEffect} from 'react';
import './Clock.css'
export default function Clock() {
    const [clock, setClock] = useState()
    useEffect(() =>{
        setInterval(() =>{
            const date=new Date();
            setClock(date);

        }, 1000)
    }, []);
  return (
    <div className='main-time-div'>
                <div className='time-div'>
            <p className='time-p'>{clock.getHours()}_</p>
        </div>
        <div className='time-div'>
            <p className='time-p'>{clock.getMinutes()}_</p>
        </div>
        <div className='time-div'>
            <p className='time-p'>{clock.getSeconds()}_</p>
        </div>

    </div>
  )
}
