import React, { Component } from 'react'
import '../styles/timeDisplay.css'

class TimeDisplay extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className='display-container'>
                <h1>{this.props.childState.text} Length</h1>
                <h2>{this.props.timeFormat(this.props.childState.currVal)}</h2>
            </div>
        )
    }
}

export default TimeDisplay
