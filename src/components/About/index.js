import ThemeContext from '../../context/ThemeContext'

import './index.css'
import Navbar from '../Navbar'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const isDark = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'

      const bgColorClassName = isDarkTheme ? 'bg-dark' : 'bg-light'

      const headingColor = isDarkTheme ? 'dark-color' : 'light-color'

      const bgCardClassName = isDarkTheme ? 'dark-card' : 'light-card'

      return (
        <div className="main-about-container">
          <Navbar />
          <div className={`about-container ${bgColorClassName}`}>
            <div className={`about-card-container ${bgCardClassName}`}>
              <img className="about-logo-image" alt="about-logo" src={isDark} />
              <h1 className={`about-heading ${headingColor}`}>About</h1>
            </div>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
