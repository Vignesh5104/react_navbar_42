import ThemeContext from '../../context/ThemeContext'

import './index.css'
import Navbar from '../Navbar'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const bgColorClassName = isDarkTheme ? 'bg-dark' : 'bg-light'

      const headingColor = isDarkTheme ? 'dark-color' : 'light-color'

      return (
        <div>
          <Navbar />
          <div className={`not-found-container ${bgColorClassName}`}>
            <img
              className="not-found-logo-image"
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
            />
            <h1 className={`not-found-heading ${headingColor}`}>
              Lost Your Way
            </h1>
            <p className={`not-found ${headingColor}`}>
              We cannot seem to find the page
            </p>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
