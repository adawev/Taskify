import {Route, Routes} from "react-router-dom";
import SolutionsPage from "./pages/SolutionsPage";
import AboutPage from "./pages/AboutPage";
import LandingPage from "./pages/LandingPage";
import TeamsPage from "./pages/TeamsPage";
import MyTasksPage from "./pages/MyTasksPage";
import Navbar from "./components/Navbar/Navbar";
import DashboardLayout from "./components/Layout/DashboardLayout";
import LoginPage from "./pages/LoginPages/LoginPage_folder/LoginPage";
import RegisterPage from "./pages/LoginPages/RegistrationPage/RegisterPage";


function App() {
    return (

        <Routes>
            <Route path="/" element={<Navbar/>}>
                <Route index element={<LandingPage/>}/>
                <Route path="solutions" element={<SolutionsPage/>}/>
                <Route path="about" element={<AboutPage/>}/>
            </Route>
            <Route path="/login"  element={<LoginPage/>}></Route>
            <Route path="/register"  element={<RegisterPage/>}></Route>

            <Route path="/dashboard" element={<DashboardLayout/>}>
                <Route path="teams" element={<TeamsPage/>}/>
                <Route path="my-tasks" element={<MyTasksPage/>}/>
            </Route>
        </Routes>

    );
}

export default App;
