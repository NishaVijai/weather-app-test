import React from 'react'
import moment from 'moment'

import '../Components/card.css'

import optionsImage from '../Images/options.svg'
import clearDay from '../Images/clearDay.svg'

export default function FrontSide({icon, temperature, apparentTemperature, summary, currentCityName}) {
    return (
        <div className="card is-clear-day">
            <h3>Panel Front</h3>
            <div className="card-row">
                <div className="card-day">{moment().format("dddd")} </div>
                <div className="card-day">{moment().format("MMM Do")} </div>
            </div>
            
            <img src={clearDay} alt=""/>

            <div className="card-row">
                <div className="card-temperature">{`${temperature}`}
                    <span className="small">/{`${apparentTemperature}`}</span>
                </div>
                
                <div className="card-weather">{summary}</div>
            </div>
            
            <div className="card-line"></div>
            <div className="card-row">
                <div className="card-city">{currentCityName}</div>
                <button className="card-options">
                    <img src={optionsImage} alt="" width={32} />
                </button>
            </div>
        </div>
    )
}
