import './style.scss'

// import Dashboard from './images/Dashboard.png'
function Hero() {
    return <div className={"HeroLandingPage"}>
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