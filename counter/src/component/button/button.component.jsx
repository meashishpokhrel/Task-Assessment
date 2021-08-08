import React from "react";
import "./button.styles.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
class Button extends React.Component {
  render() {
    return (
        <div className="outer circle">
              <button onClick={this.props.function}>
              <FontAwesomeIcon icon={this.props.iconName}  />
              </button>
          </div>
    )
  }
}

export default Button
