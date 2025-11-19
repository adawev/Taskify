import './style.scss'
import logo from '../../../images/taskify_logo.png'

// import Dashboard from './images/Dashboard.png'
function Hero() {
    return <div className={"HeroLandingPage"}>
        <header className='navbar_header'>
            <img src={logo} alt="logo" className='logo'/>
            <div className='navbar'>
                <a href="/" className='nav'>Home</a>
                <a href="/" className='nav'>Solutions</a>
                <a href="/" className='nav'>Contact</a>
            </div>
            <button className='Start'>Start now</button>
        </header>
        <div className="HeroLandingPage">


            <section className='Hero_start'>
                <div className='reviews'></div>
                <h1 className='main_title'>Every big goal starts with a small task.</h1>
                <p className='stay_focused'>Stay focused, stay organized, and make every day count with your new task
                    manager.</p>
                <button className='Hero_button'>Get started</button>
            </section>


        </div>
    </div>
}

export default Hero;