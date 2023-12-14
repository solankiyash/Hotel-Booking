import { Link } from "react-router-dom"
import "./navbar.css"
import { useContext } from "react"
import { AuthContext } from "../../Context/AuthContext"

const Navbar = () => {
  const {user} = useContext(AuthContext)
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{color:"inherit" ,textDecoration:"none" }}>
        <span className="logo">Solankibooking</span>
        </Link> 
       {user ? user.username: <div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>
        </div>}
      </div>
    </div>
  )
}

export default Navbar