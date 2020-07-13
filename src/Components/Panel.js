import React, { Component } from 'react'
import BackSide from '../Components/BackSide'
import FrontSideView from './FrontSideView';

import '../Components/panel.css';

export default class Panel extends Component {
    render() {
        return (
            <div className="panel glb">
                <div className="panel-front">
                    <FrontSideView />
                </div>

                {/* <div className="panel back">
                    <BackSide />
                </div> */}
            </div>
        )
    }
}
