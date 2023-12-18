import React from 'react'
import './App.css'
import Length from './compo/length'
import TimeDisplay from './compo/timeDisplay'
import { FaPause as Pause, FaPlay as Play } from "react-icons/fa";
import { GrPowerReset as Reset } from "react-icons/gr";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      break: {
        text: "Break",
        currVal: 5,
      },
      session: {
        text: "Session",
        currVal: 25
      },
      title:"SESSION",
      timerState: false,
    }
    this.handleBreakIncrement = this.handleBreakIncrement.bind(this)
    this.handleBreakDecrement = this.handleBreakDecrement.bind(this)
    this.handleSessionIncrement = this.handleSessionIncrement.bind(this)
    this.handleSessionDecrement = this.handleSessionDecrement.bind(this)
    this.handleResetClick = this.handleResetClick.bind(this)
  }
  handleBreakIncrement() {
    if (this.state.break.currVal < 60) {
      this.setState({
        break: {
          text: this.state.break.text,
          currVal: this.state.break.currVal + 1
        }
      })
    }
  }
  handleBreakDecrement() {
    if (this.state.break.currVal > 0) {
      this.setState({
        break: {
          text: this.state.break.text,
          currVal: this.state.break.currVal - 1
        }
      })
    }
  }
  handleSessionIncrement() {
    if (this.state.session.currVal < 60) {
      this.setState({
        session: {
          text: this.state.session.text,
          currVal: this.state.session.currVal + 1
        }
      })
    }
  }
  handleSessionDecrement() {
    if (this.state.session.currVal > 0) {
      this.setState({
        session: {
          text: this.state.session.text,
          currVal: this.state.session.currVal - 1
        }
      })
    }
  }
  handleResetClick() {
    this.setState({
      session: {
        text: this.state.session.text,
        currVal: 25,
      },
      break: {
        text: this.state.break.text,
        currVal: 5
      }
    })
  }
  render() {
    return (
      <div className='app-wrapper'>
        <div className="app-container">
          <h1>25 + 5 Clock</h1>
          <div className="length-wrapper">
            <Length
              text={this.state.break.text}
              default={this.state.break.currVal}
              handleIncrement={this.handleBreakIncrement}
              handleDecrement={this.handleBreakDecrement}
            />
            <Length
              text={this.state.session.text}
              default={this.state.session.currVal}
              handleIncrement={this.handleSessionIncrement}
              handleDecrement={this.handleSessionDecrement}
            />
          </div>
          <TimeDisplay
            text={this.state.session.text}
            timer={this.state.session.currVal}
          />
          <div className="icon-container">
            <span className='play-icon'>
              <span><Play /></span>
              <span><Pause /></span>
            </span>
            <span onClick={this.handleResetClick}><Reset /></span>
          </div>
        </div>
        <p>By Naveen Chinnadurai</p>
      </div>
    )
  }
}

export default App
