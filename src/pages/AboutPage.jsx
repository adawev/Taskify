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
        image:'https://avatars.githubusercontent.com/u/71268887?v=4',
        name:'Diyor Adashev',
        sphere:'Team Leader and Front-End Developer',
        phoneNum:'+998885185189',
        telegram:'https://t.me/adawev',
        github_link:'https://github.com/adawev '
    },
        {
        image:'https://avatars.githubusercontent.com/u/161346740?v=4',
        name:'Shohjaxon Pirmamatov',
        sphere:'Front-End Developer',
        phoneNum:'+998885185189',
        telegram:'https://t.me/pirmamatovSh',
        github_link:'https://github.com/Darenyonok'
    },
    {
        image:'https://avatars.githubusercontent.com/u/71268887?v=4',
        name:'Otabek Haydarov',
        sphere:'Front end Developer',
        phoneNum:'+998885185189',
        telegram:'https://t.me/iotabek11',
        github_link:'https://github.com/otabek11haydarov'
    },
    {
        image:'https://avatars.githubusercontent.com/u/131769670?v=4',
        name:'Suxbatullayev Muhammad Nur',
        sphere:'Back end Developer',
        phoneNum:'+998885185189',
        telegram:'https://t.me/TheMuhammadNur',
        github_link:'https://github.com/muhammadnuruz'
    },
    {
        image:'https://avatars.githubusercontent.com/u/71268887?v=4',
        name:'Mag’rur Ibragimov',
        sphere:'Figma Designer',
        phoneNum:'+998885185189',
        telegram:'https://t.me/ibrg1mv_M',
        github_link:'https://github.com/magruribragimovvich-oss'
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