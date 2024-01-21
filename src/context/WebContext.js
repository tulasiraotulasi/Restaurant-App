import React from 'react'

const WebContext = React.createContext({
  cartList: [],
  isActive: 0,
  menuList: [],
  changeCategoryId: () => {},
  inCart: 0,
  addItem: () => {},
  removeItem: () => {},
})

export default WebContext
