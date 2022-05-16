import "./navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navbarContainer">
            <span className="logo">HotelFinder.com</span>
            <div className="navmenu">
                <button className="navBtn">Register</button>
                <button className="navBtn">SignIn</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar