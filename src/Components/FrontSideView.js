import React, {Component} from 'react'
import FrontSide from '../Components/FrontSide'
import moment from 'moment'
import {getWeatherForLocation} from '../api'
import cities from '../cities.json'

export default class FrontSideView extends Component {
    componentDidMount() {
        getWeatherForLocation(cities[0]).then(console.log());
    }
    render() {
        return (
            <div>
            <FrontSide date={moment} icon='default' temperature={"18°"} apparentTemperature={"14°"} summary={'Sunny'} currentCityName='Copenhagen' />
            </div>
        )
    }
}
