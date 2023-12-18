import React from 'react'
import '../styles/length.css'
import { FaArrowUp as UP,FaArrowDown as Down } from "react-icons/fa";

class Length extends React.Component {
    constructor(props){
        super(props)
    }
  render() {
    return (
      <div className='length-container'>
        <h2>{this.props.text} Length</h2>
        <div className="updater-container">
            <span onClick={this.props.handleDecrement}><Down/></span>
            <h2>{this.props.default}</h2>
            <span onClick={this.props.handleIncrement}><UP/></span>
        </div>
      </div>
    )
  }
}

export default Length;
