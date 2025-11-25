import Hero from "../components/LandingPageComponents/Hero/Hero";
import Solutions from "../components/LandingPageComponents/Solutions/Solutions";
import Footer from "../components/FooterSection/Footer";
import ReviewsSection from "../components/LandingPageComponents/Reviews/ReviewsSection";

function LandingPage() {
    return <div className="LandingPage">
        <Hero/>
        <Solutions/>
        <ReviewsSection/>
    </div>
}
export default LandingPage;