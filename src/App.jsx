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
        defaultVal: 5,
        currVal: 300,
      },
      session: {
        text: "Session",
        defaultVal: 25,
        currVal: 1500
      },
      timerState: false,
      timerHead: "Session"
    }

    this.handleBreakIncrement = this.handleBreakIncrement.bind(this)
    this.handleBreakDecrement = this.handleBreakDecrement.bind(this)
    this.handleSessionIncrement = this.handleSessionIncrement.bind(this)
    this.handleSessionDecrement = this.handleSessionDecrement.bind(this)

    this.startTimer = this.startTimer.bind(this)
    this.pauseTimer = this.pauseTimer.bind(this)
    this.handleResetClick = this.handleResetClick.bind(this)

  }

  formatTime(time) { //function that converts the seconds to the form mm:ss
    let minutes = Math.floor(time / 60);
    let sec = time % 60
    return (
      (minutes < 10 ? "0" + minutes : minutes) + ":" + (sec < 10 ? "0" + sec : sec)
    )
  }
  handleBreakIncrement() {
    if (!this.state.timerState) {
      if (this.state.break.currVal / 60 < 60) {
        this.setState({
          break: {
            text: this.state.break.text,
            defaultVal: this.state.break.currVal / 60 + 1,
            currVal: this.state.break.currVal + 60
          }
        })
      }
    }
  }
  handleBreakDecrement() {
    if (!this.state.timerState) {
      if (this.state.break.currVal / 60 > 1) {
        this.setState({
          break: {
            text: this.state.break.text,
            defaultVal: this.state.break.currVal / 60 - 1,
            currVal: this.state.break.currVal - 60
          }
        })
      }
    }
  }
  handleSessionIncrement() {
    if (!this.state.timerState) {
      if (this.state.session.currVal / 60 < 60) {
        this.setState({
          session: {
            text: this.state.session.text,
            defaultVal: this.state.session.currVal / 60 + 1,
            currVal: this.state.session.currVal + 60
          }
        })
      }
    }
  }
  handleSessionDecrement() {
    if (!this.state.timerState) {
      if (this.state.session.currVal / 60 > 1) {
        this.setState({
          session: {
            text: this.state.session.text,
            defaultVal: this.state.session.currVal / 60 - 1,
            currVal: this.state.session.currVal - 60
          }
        })
      }
    }
  }

  handleResetClick() {  //function that reset the timer section
    this.setState({
      session: {
        text: this.state.session.text,
        defaultVal: 25,
        currVal: 1500,
      },
      break: {
        text: this.state.break.text,
        defaultVal: 5,
        currVal: 1500
      },
      timerState: false
    })
  }

  startTimer() { //function for timer functionality
    this.setState({
      timerState: true
    })
    this.timerInterval = setInterval(() => {
      if (this.state.timerState) {
        if (this.state.session.currVal <= 0) {
          this.setState({ timerHead: "Break" })
          this.setState({
            break: {
              text: "Break",
              defaultVal: this.state.break.defaultVal,
              currVal: this.state.break.currVal - 1
            }
          })
        } else {
          if (this.state.timerHead === "Session") {
            this.setState({
              session: {
                text: "Session",
                defaultVal: this.state.session.defaultVal,
                currVal: this.state.session.currVal - 1
              }
            })
          }
        }
      }
    }, 1000);
  }
  pauseTimer() {
    this.setState({
      timerState: false
    })
    clearInterval(this.timerInterval)
  }
  render() {
    return (
      <div className='app-wrapper'>
        <div className="app-container">
          <h1>Timer Clock</h1>
          <div className="length-wrapper">
            <Length
              text={this.state.break.text}
              default={this.state.break.defaultVal}
              handleIncrement={this.handleBreakIncrement}
              handleDecrement={this.handleBreakDecrement}
            />
            <Length
              text={this.state.session.text}
              default={this.state.session.defaultVal}
              handleIncrement={this.handleSessionIncrement}
              handleDecrement={this.handleSessionDecrement}
            />
          </div>
          <TimeDisplay
            childState={this.state.timerHead === "Session" ? this.state.session : this.state.break}
            timeFormat={this.formatTime}
          />
          <div className="icon-container">
            <span className='play-icon' onClick={this.startTimer}><Play /></span>
            <span onClick={this.pauseTimer}><Pause /></span>
            <span onClick={this.handleResetClick}><Reset /></span>
          </div>
        </div>
        <p>By Naveen Chinnadurai</p>
      </div>
    )
  }
}

export default App
