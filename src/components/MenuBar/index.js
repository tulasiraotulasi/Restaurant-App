import WebContext from '../../context/WebContext'
import './index.css'

const MenuBar = () => (
  <WebContext.Consumer>
    {value => {
      const {menuList, isActive, changeCategoryId} = value
      return (
        <ul className="menubarList">
          {menuList.map(items => {
            const changecategory = () => {
              changeCategoryId(items.menuCategoryId)
            }
            return (
              <li className="menuBarListLi" key={items.menuCategoryId}>
                <button
                  type="button"
                  onClick={changecategory}
                  className={`menuButton ${
                    isActive === items.menuCategoryId
                      ? 'activeButton'
                      : 'deactiveButton'
                  }`}
                >
                  {items.menuCategory}
                </button>
              </li>
            )
          })}
        </ul>
      )
    }}
  </WebContext.Consumer>
)

export default MenuBar
