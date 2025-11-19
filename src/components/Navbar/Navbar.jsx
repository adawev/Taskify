import logo from "../../images/taskify_logo.png";
import './style.scss'
import {Outlet, Link} from "react-router-dom";

function Navbar() {
    return <div className="wrapperNavbar">
        <div className='navbar_header'>
            <Link to="/">
                <img src={logo} alt="logo" className='logo'/>
            </Link>
            <div className='navbar'>
                <Link to="/" className='nav'>Home</Link>
                <Link to="/solutions" className='nav'>Solutions</Link>
                <Link to="/about" className='nav'>About</Link>
            </div>
            <button className='Start'>Start now</button>
        </div>
        <Outlet/>
    </div>

}

export default Navbar;