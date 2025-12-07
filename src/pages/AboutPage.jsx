import AboutMissions from "../components/AboutPageComponents/AboutMissions/AboutMissions";
import AboutSection from "../components/AboutPageComponents/AboutSection/AboutSection";
import AboutTitle from "../components/AboutPageComponents/AboutTitle/AboutTitle";
import Hero from "../components/LandingPageComponents/Hero/Hero";
const data = [
    {
        h1: 'OUR MISSION',
        text: 'To make task management simple, organized, and stress-free for everyone. We aim to help people plan smarter, stay focused, and achieve more by giving them a clean, intuitive, and reliable way to manage their daily workflow.',
    
    },
    {
        h1:'OUR VALUES',
        text:'We value clarity in every step, ensuring your tasks are always easy to understand and manage. We believe in efficiency, helping you save time and stay productive without unnecessary complexity. We focus on accessibility so that anyone can manage their workflow smoothly from any device. We uphold consistency, keeping your tasks accurate, organized, and always up to date. And we embrace continuous improvement, refining our system to deliver a better and smoother user experience every day.',

    }
]
const about_title_data = [
    {
        image:'',
        name:'Diyor Adashev',
        sphere:'Team Leader and Front-End Developer',
    },
        {
        image:'',
        name:'Shohjaxon Pirmamatov',
        sphere:'Front-End Developer',
    },
    {
        image:'',
        name:'Otabek Haydarov',
        sphere:'Front end Developer',
    },
    {
        image:'',
        name:'Suxbatullayev Muhammad Nur',
        sphere:'Back end Developer',
    },
    {
        image:'',
        name:'Mag’rur Ibragimov',
        sphere:'Figma Designer',
    },

]
function AboutPage() {
    return <div className="AboutPage">
        <Hero/>
        <AboutSection/>
        <AboutMissions data={data}/>
        <AboutTitle about_title_data={about_title_data}/>
        
    </div>
}
export default AboutPage;