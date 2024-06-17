
import './Navbar.css'
// import logo from '../../assets/logo.png'
export default function Navbar(){
    return(
        <div className="Navbar_container">
            <div className="navbar_left">
                {/* <img src={logo} alt="logo" /> */}
                <p className='navbar_left_logo'>PRASHANT</p>
            </div>
            <div className="navbar_right">
                <div className="navbar_menu">
                    <a href='#About'>About</a>
                    <a href='#Experience'>Experience</a>
                    <a href='#Projects'>Projects</a>
                    <a href='#Contact'>Contact</a>
                </div>
            </div>
        </div>
    )
}