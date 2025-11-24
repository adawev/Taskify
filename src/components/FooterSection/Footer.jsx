import './style.scss'
import Logo from '../../images/taskify_logo.png'

function Footer() {
    return <div className="FooterSection">

        <footer className="footer-section" id="footer">
            <div className="container">
                <div className="row">
                    <div className="logoWrapper">
                        <img src={Logo} alt="Our logo" className="footer-logo" />
                    </div>
                    <div className="col">
                        <h3 className="footer-text ">
                            Taskify — a simple and intuitive task management tool designed to help you
                            organize your daily work, track progress, and stay productive.
                        </h3>
                    </div>
                    <div className="col-12">
                        <ul className="footer-items d-flex flex-row">
                            <li className="footer-item">
                                <a href="/home" className="footer-link text-dark">Home</a>
                            </li>
                            <li className="footer-item">
                                <a href="/solutions" className="footer-link text-dark">Solutions</a>
                            </li>
                            <li className="footer-item">
                                <a href="/about" className="footer-link text-dark">About</a>
                            </li>
                            <li className="footer-item">
                                <a href="/register" className="footer-link text-dark">Register</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col ">
                        <hr className='line' />

                        <div className="col">
                            <h2 className="resreved">
                                ©️2025 Taskify All Right Reserved
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
}

export default Footer;