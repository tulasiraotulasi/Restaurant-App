import {Component} from 'react'
import WebContext from '../../context/WebContext'
import Header from '../Header'
import MenuBar from '../MenuBar'
import FoodList from '../FoodList'

class WebPage extends Component {
  state = {
    cartList: [],
    isActive: 0,
    menuList: [],
    dataFeteched: false,
    inCart: 0,
  }

  componentDidMount() {
    this.getDataFromServer()
  }

  addItem = () => {
    // const cart = this.state.inCart
    this.setState(prevState => ({inCart: prevState.inCart + 1}))
  }

  removeItem = () => {
    const {inCart} = this.state
    // cart = cart.filter(items => items !== id)
    if (inCart > 0) {
      this.setState(prevState => ({inCart: prevState.inCart - 1}))
    }
  }

  changeCategoryId = id => {
    this.setState({isActive: id})
  }

  getDataFromServer = async () => {
    const apiUrl =
      'https://run.mocky.io/v3/77a7e71b-804a-4fbd-822c-3e365d3482cc'

    const response = await fetch(apiUrl)
    const data = await response.json()
    const updatedMenuList = data[0].table_menu_list.map(list => ({
      menuCategory: list.menu_category,
      menuCategoryId: list.menu_category_id,
    }))
    this.setState({
      cartList: data[0],
      menuList: updatedMenuList,
      isActive: updatedMenuList[0].menuCategoryId,
      dataFeteched: true,
    })
  }

  render() {
    const {cartList, isActive, menuList, dataFeteched, inCart} = this.state
    // console.log(isActive)
    return (
      <WebContext.Provider
        value={{
          cartList,
          isActive,
          menuList,
          changeCategoryId: this.changeCategoryId,
          inCart,
          addItem: this.addItem,
          removeItem: this.removeItem,
        }}
      >
        {dataFeteched === true ? (
          <div>
            <Header />
            <MenuBar />
            <FoodList />
          </div>
        ) : (
          ' '
        )}
      </WebContext.Provider>
    )
  }
}

export default WebPage
