import './style.scss'
import Logo from './images/logo.png'

function Footer() {
    return <div className="FooterSection">
        <footer className="footer-section" id="footer">
            <div className="container">
                <div className="row">
                    <div className="col-12 d-flex justify-content-center align-items-center">
                        <img src={Logo} alt="Our logo" className="footer-logo img-fluid img-sm " />
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
                                <a href="#" className="footer-link text-dark">Home</a>
                            </li>
                            <li className="footer-item">
                                <a href="#" className="footer-link text-dark">Solutions</a>
                            </li>
                            <li className="footer-item">
                                <a href="#" className="footer-link text-dark">About</a>
                            </li>
                            <li className="footer-item">
                                <a href="#" className="footer-link text-dark">Contacts</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col ">
                        <div className="footer-bt__text  d-flex flex-row">
                            <h2 className="bt-text">
                                Terms & Conditions
                            </h2>
                            <h2 className="bt-text">
                                |
                            </h2>
                            <h2 className="bt-text">
                                Privacy Policy
                            </h2>
                            <h2 className="bt-text">
                                |
                            </h2>
                            <h2 className="bt-text">
                                Disclosures
                            </h2>
                        </div>
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