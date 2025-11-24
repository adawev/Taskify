import "./style.scss";

function SolutionSection({ active }) {
  const content = [
    {
      title: "Feature 1",
      text: "Описание первого блока...",
    },
    {
      title: "Feature 2",
      text: "Описание второго блока...",
    },
    {
      title: "Feature 3",
      text: "Описание третьего блока...",
    },
  ];

  return (
    <div className="SolutionSection">
      <div className="content">
        <div className="imageBox"></div>

        <div className="textBox">
          <h2>{content[active].title}</h2>
          <p>{content[active].text}</p>
        </div>
      </div>

      <div className="lineContainer">
        <div className={`dot ${active === 0 ? "activeDot" : ""}`}></div>
        <div className="line"></div>
        <div className={`dot ${active === 1 ? "activeDot" : ""}`}></div>
        <div className="line"></div>
        <div className={`dot ${active === 2 ? "activeDot" : ""}`}></div>
      </div>
    </div>
  );
}

export default SolutionSection;
