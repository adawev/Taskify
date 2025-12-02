import { Route, Routes } from "react-router-dom";
import SolutionsPage from "./pages/SolutionsPage";
import AboutPage from "./pages/AboutPage";
import LandingPage from "./pages/LandingPage";
import TeamsPage from "./pages/TeamsPage";
import TeamPage from "./pages/TeamPage";
import Navbar from "./components/Navbar/Navbar";
import DashboardLayout from "./components/Layout/DashboardLayout";

function App() {
    return (
        <div className={'container-fluid'}>
            <Routes>
                {/* Public routes with Navbar */}
                <Route path="/" element={<Navbar />}>
                    <Route index element={<LandingPage />} />
                    <Route path="solutions" element={<SolutionsPage />} />
                    <Route path="about" element={<AboutPage />} />
                </Route>

                {/* Dashboard routes with Sidebar */}
                <Route path="/dashboard" element={<DashboardLayout />}>
                    <Route path="teams" element={<TeamsPage />} />
                    <Route path="team/:teamId" element={<TeamPage />} />
                    <Route path="my-tasks" element={<TeamsPage />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
