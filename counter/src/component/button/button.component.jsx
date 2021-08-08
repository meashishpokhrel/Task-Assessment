import React, { Component } from "react";
import "./button2.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default class Button extends Component {
  render() {
    return (
        <div className="functionButtons">
            
        <div className="outer circle">
        <div className="buttons">
        <button onClick={this.props.function}>
            <FontAwesomeIcon icon={this.props.iconName}  />
            </button>
        </div>
        </div>
        </div>
        
    )
  }
}

