import "./style.scss";
import solution1 from "../../../images/solution1.jpg";
import solution2 from "../../../images/solution2.jpg";
import solution3 from "../../../images/solution3.jpg";

function SolutionSection({ active }) {
  const content = [
    {
      title: "Smart Task Organization",
      text: "Organize your tasks efficiently with our intuitive interface. Create, categorize, and prioritize tasks with just a few clicks. Our smart organization system helps you stay focused on what matters most.",
      image: solution1,
    },
    {
      title: "Real-Time Progress Tracking",
      text: "Monitor your productivity with real-time tracking and visual progress indicators. See exactly how much you've accomplished and stay motivated throughout your day with detailed analytics and insights.",
      image: solution2,
    },
    {
      title: "Seamless Collaboration",
      text: "Work together with your team effortlessly. Share tasks, assign responsibilities, and communicate in real-time. Our collaboration tools ensure everyone stays on the same page and projects move forward smoothly.",
      image: solution3,
    },
  ];

  return (
    <div className="SolutionSection">
      <div className="content">
        <div className="imageBox">
          <img src={content[active].image} alt={content[active].title} />
        </div>

        <div className="lineContainer">
          <div className={`dot ${active === 0 ? "activeDot" : ""}`}></div>
          <div className="line"></div>
          <div className={`dot ${active === 1 ? "activeDot" : ""}`}></div>
          <div className="line"></div>
          <div className={`dot ${active === 2 ? "activeDot" : ""}`}></div>
        </div>

        <div className="textBox">
          <h2>{content[active].title}</h2>
          <p>{content[active].text}</p>
        </div>
      </div>
    </div>
  );
}

export default SolutionSection;
