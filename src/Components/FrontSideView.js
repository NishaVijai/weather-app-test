import React from 'react'
import FrontSide from '../Components/FrontSide'
import moment from 'moment'

export default function FrontSideView() {
    return (
        <div>
            <FrontSide date={moment} icon='default' temperature={"18°"} apparentTemperature={"14°"} summary={'Sunny'} currentCityName='Copenhagen' />
        </div>
    )
}
