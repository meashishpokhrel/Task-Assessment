import React, { Component } from 'react'
import Button from "../button/button.component"
import { faCoffee, faSync, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import "./card.styles.scss"
class Card extends React.Component {
    constructor() {
        super()
        this.state = {
          count: 0
        }
      }
      
      addCount = () => {
        this.setState({
          count: this.state.count + 1
        })
      }
    
      decreaseCount = () => {
        this.setState({
          count: this.state.count - 1
        })
      }

      resetCount = () => {
        this.setState({
          count: 0
        })
      }
    render() {
        const { count } = this.state;
        return (
            <div className="card">
                <div className="count">Count</div>
                  <div className="count-number">{count}</div>
                    <div className="buttons">
                        <Button function={this.addCount} iconName={faPlus}></Button>
                        <Button function={this.resetCount} iconName={faSync}></Button>
                        <Button function={this.decreaseCount} iconName={faMinus}></Button>
                    </div>
            </div>
        )
    }
}

export default Card