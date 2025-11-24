import { useState, useEffect } from "react";
import SolutionSection from "../components/SolutionsPageComponents/solutionpage/SolutionSection";
import Footer from "../components/FooterSection/Footer";


function SolutionsPage() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const vh = window.innerHeight;
      const index = Math.min(2, Math.floor(scrollY / vh));
      setActive(index);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="SolutionsPage">
      <div className="solutionsContent">
        <div className="stickyWrapper">
          <SolutionSection active={active} />
        </div>
        <div className="scrollSpace"></div>
      </div>
      <Footer/>
    </div>
  );
}

export default SolutionsPage;
