import {Route, Routes} from "react-router-dom";
import SolutionsPage from "./pages/SolutionsPage";
import AboutPage from "./pages/AboutPage";
import LandingPage from "./pages/LandingPage";
import Navbar from "./components/Navbar/Navbar";

function App() {

    return (<div className={'container-fluid'}>

            <Routes>
                <Route path={'/'} element={<Navbar/>}>
                    <Route path="/" element={<LandingPage/>}/>
                    <Route path="/solutions" element={<SolutionsPage/>}/>
                    <Route path="/about" element={<AboutPage/>}/>
                </Route> 
            </Routes>
        </div>
    )
        ;
}


export default App;
