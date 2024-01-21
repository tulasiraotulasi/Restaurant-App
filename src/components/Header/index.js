import {AiOutlineShoppingCart} from 'react-icons/ai'
import WebContext from '../../context/WebContext'
import './index.css'

const Header = () => (
  <WebContext.Consumer>
    {value => {
      const {cartList, inCart} = value
      const name = cartList.restaurant_name

      return (
        <div className="header">
          <h1>{name}</h1>
          <div className="headerInner">
            <p>My Orders</p>
            <AiOutlineShoppingCart className="icons" />
            <p className="redCount">{inCart}</p>
          </div>
        </div>
      )
    }}
  </WebContext.Consumer>
)

export default Header
