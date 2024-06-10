import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const onClickThemeIcon = () => {
        toggleTheme()
      }

      const bgColorClassName = isDarkTheme ? 'bg-dark' : 'bg-light'

      return (
        <div className={`navbar-main-container ${bgColorClassName}`}>
          <div className="navbar-container">
            <Link className="link" to="/">
              {isDarkTheme ? (
                <img
                  src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
                  alt="website logo"
                  className="logo-image"
                />
              ) : (
                <img
                  src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
                  alt="website logo"
                  className="logo-image"
                />
              )}
            </Link>
            <ul className="nav-items">
              <Link className="link" to="/">
                <li
                  className={`item ${isDarkTheme ? 'dark-item' : 'light-item'}`}
                >
                  Home
                </li>
              </Link>
              <Link className="link" to="/about">
                <li
                  className={`item ${isDarkTheme ? 'dark-item' : 'light-item'}`}
                >
                  About
                </li>
              </Link>
            </ul>
            <button
              className="theme-button"
              type="button"
              onClick={onClickThemeIcon}
              data-testid="theme"
            >
              {isDarkTheme ? (
                <img
                  src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
                  className="theme-icon-image"
                  alt="theme-icon"
                />
              ) : (
                <img
                  src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                  className="theme-icon-image"
                  alt="theme-icon"
                />
              )}
            </button>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
