import './style.scss'
import Logo from '../../images/taskify_logo.png'
import {Link} from "react-router-dom";

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
                                <Link to="/" className="footer-link text-dark">Home</Link>
                            </li>
                            <li className="footer-item">
                                <Link to="/solutions" className="footer-link text-dark">Solutions</Link>
                            </li>
                            <li className="footer-item">
                                <Link to="/about" className="footer-link text-dark">About</Link>
                            </li>
                            <li className="footer-item">
                                <Link to="/register" className="footer-link text-dark">Register</Link>
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