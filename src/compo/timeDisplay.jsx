import React, { Component } from 'react'
import '../styles/timeDisplay.css'

class TimeDisplay extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className='display-container'>
                <h1>{this.props.text} Length</h1>
                <h2>{this.props.timer}:00</h2>
            </div>
        )
    }
}

export default TimeDisplay
