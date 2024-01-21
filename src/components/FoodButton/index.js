import {Component} from 'react'
import WebContext from '../../context/WebContext'
import './index.css'

class FoodButton extends Component {
  state = {quantity: 0}

  render() {
    return (
      <WebContext.Consumer>
        {value => {
          const {addItem, removeItem} = value
          const {quantity} = this.state
          // const {id} = this.props

          const incrementbutton = () => {
            this.setState(prevState => ({quantity: prevState.quantity + 1}))
            addItem()
          }

          const decrementbutton = () => {
            if (quantity > 0) {
              this.setState(prevState => ({quantity: prevState.quantity - 1}))
              removeItem()
            }
          }

          return (
            <div className="greenBtn">
              <button
                type="button"
                className="foodbtn"
                onClick={decrementbutton}
              >
                -
              </button>
              <p>{quantity}</p>
              <button
                type="button"
                className="foodbtn"
                onClick={incrementbutton}
              >
                +
              </button>
            </div>
          )
        }}
      </WebContext.Consumer>
    )
  }
}
export default FoodButton
