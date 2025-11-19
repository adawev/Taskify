import Hero from "../components/LandingPageComponents/Hero/Hero";
import Solutions from "../components/LandingPageComponents/Solutions/Solutions";
import Reviews from "../components/LandingPageComponents/Reviews/Reviews";
import Footer from "../components/FooterSection/Footer";
import Navbar from "../components/Navbar/Navbar";

function LandingPage() {
    return <div className="LandingPage">
        <Hero/>
        <Solutions/>
        <Reviews/>
        <Footer/>
    </div>
}
export default LandingPage;