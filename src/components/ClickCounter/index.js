import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}
  onIncrement = () => {
    this.setState(prestate => {
      return {count: prestate.count + 1}
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <p className="count">adding buttons {count}</p>
        <p> click button ..</p>
        <div>
          <button className="button" onClick={this.onIncrement}>
            CLICKME
          </button>
        </div>
      </div>
    )
  }
}
export default ClickCounter
