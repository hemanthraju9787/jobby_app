import { Link } from 'react-router'
import './index.css'
import Cookies from 'js-cookie'
import {useNavigate} from 'react-router'

const Header = () => {
    const navigate = useNavigate()
    const onClickLogout = () => {
    Cookies.remove('jwt_token')
    navigate('/login', {replace: true})
  }
  return (
    <nav className="nav-header">
      <div className="nav-content">
        <div className="nav-bar-large-container">
          <Link to="/">
            <img
              className="website-logo"
              src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
              alt="website logo"
            />
          </Link>
          <ul className="nav-menu">
            <li className="nav-menu-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-menu-item">
              <Link to="/jobs" className="nav-link">Jobs</Link>
            </li>
          </ul>
          <button type="button" className="logout-desktop-btn" onClick={onClickLogout}>Logout</button>
        </div>
      </div>
    </nav>
  )
}

export default Header
