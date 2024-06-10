import ThemeContext from '../../context/ThemeContext'

import './index.css'
import Navbar from '../Navbar'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const isDark = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'

      const bgColorClassName = isDarkTheme ? 'bg-dark' : 'bg-light'

      const headingColor = isDarkTheme ? 'dark-color' : 'light-color'

      const bgCardClassName = isDarkTheme ? 'dark-card' : 'light-card'

      return (
        <div className="home-main-container">
          <Navbar />
          <div className={`home-container ${bgColorClassName}`}>
            <div className={`home-card-container ${bgCardClassName}`}>
              <img className="home-logo-image" alt="home-logo" src={isDark} />
              <h1 className={`home-heading ${headingColor}`}>Home</h1>
            </div>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
