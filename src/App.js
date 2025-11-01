import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home";
import LessonSchedule from "./pages/lessonSchedule/LessonSchedule";
import Test from "./pages/test/Test";
import Payment from "./pages/payment/Payment";
import Attendance from "./pages/attendance/Attendance";
import PersonalInformation from "./pages/personal-Information/PersonalInformation";
import SignIn from './pages/LoggingPages/SignIn/SignIn';
import Student from "./rolePages/student/Student";
import Teacher from "./rolePages/teacher/Teacher";
import Sales from "./rolePages/sales/Sales";
import Leadership from "./rolePages/leadership/Leadership";
import GeneralList from "./pages/sales/generalList/GeneralList";
import HomeLeadership from "./pages/leadership/Home/Home";
import Teachers from "./pages/leadership/Teachers/Teachers";
import Students from "./pages/leadership/Students/Students";
import Exams from "./pages/leadership/Exams/Exams";
import Finance from "./pages/leadership/Finance/Finance";
import Reports from "./pages/leadership/Reports/Reports";
import Messages from "./pages/leadership/Messages/Messages";
import Settings from "./pages/leadership/Settings/Settings";
import SalesLeadership from "./pages/leadership/Sales/Sales";
import HomeTeacher from "./pages/teacher/Home/Home";
import ManageLessons from "./pages/teacher/ManageLessons/ManageLessons";
import ManageStudents from "./pages/teacher/ManageStudents/ManageStudents";
import StudentTeacher from "./pages/teacher/ExaminationAssessment/Student";
import SchedulePlan from "./pages/teacher/SchedulePlan/SchedulePlan";
import Chat from "./pages/teacher/Chat/Chat";
import ReportsTeacher from "./pages/teacher/Reports/Reports";
import InformationGeneral from "./components/InformationTeacher/InformationGeneral/InformationGeneral";
import ExaminationAssessment from "./pages/teacher/ExaminationAssessment/ExaminationAssessment";
import Admin from "./rolePages/admin/Admin";
import HomeAdmin from "./pages/admin/Home/HomeAdmin";
import TeachersAdmin from "./pages/admin/Teachers/Teacher";
import StudentsAdmin from "./pages/admin/Students/Students";
import NewsAdmin from "./pages/admin/News/News";
import CalendarAdmin from "./pages/admin/Calendar/CalendarAdmin";
import LeadershipAdmin from "./pages/admin/Leadership/Leadership";
import MessageAdmin from "./pages/admin/Message/MessageAdmin";
import ProfileAdmin from "./pages/admin/Profile/ProfileAdmin";
import Profile from "./pages/teacher/Profile/Profile";
import ProfileSales from "./pages/sales/profile/ProfileSales";
import FormToAddTeacher from "./components/Form/FormToAddTeacher";
import ProtectedRoute from './features/auth/ProtectedRoute';
import AssessmentStudents from "./pages/teacher/ManageStudents/AssessmentStudents";
import AttendanceStudents from "./pages/teacher/ManageStudents/AttendanceStudents";
import useTokenExpiryCheck from "./features/auth/useTokenExpiryCheck";
import Unauthorized from "./features/auth/UnauthorizedPage";
import PublicRoute from "./features/auth/PublicRoute";
import FormToAddLeadership from "./components/Form/FormToAddLeadership";
import FormToAddStudent from "./components/Form/FormToAddStudent";
import FormToAddSales from "./components/Form/FormToAddSales";
import LandingPage from "./pages/LandingPage/LandingPage";
import Subjects from "./pages/subjects/Subjects";
import ClassSubject from "./pages/leadership/ClassesSubjects/ClassesSubjects";
import FormToAddClass from "./components/Form/FormToAddClass";
import FormToAddSubject from "./components/Form/FormToAddSubject";
import SettingsAdmin from "./pages/admin/Settings/SettingsAdmin";
import FormToAddNews from "./components/Form/FormToAddNews";
import FinanceAdmin from "./pages/admin/Finance/FinanceAdmin";
import ClassesSubjectsAdmin from "./pages/admin/ClassessSubjects/ClassesSubjectsAdmin";

function App() {
    useTokenExpiryCheck();

    return (<div className={'container-fluid'}>
            <Routes>
                <Route path="/" element={<LandingPage/>}/>

                {/*UNATHORIZED ROUTE 404*/}
                <Route path="/unauthorized" element={<Unauthorized/>}/>
                <Route path="*" element={<Unauthorized/>}/>

                {/*SIGN IN PUBLIC ROUTE*/}
                <Route element={<PublicRoute/>}>
                    <Route path="/signin" element={<SignIn/>}/>
                </Route>

                {/*ROLE_STUDENT ROUTE*/}
                <Route element={<ProtectedRoute allowedRoles={['ROLE_STUDENT']}/>}>
                    <Route path={'/student'} element={<Student/>}>
                        <Route index element={<Home/>}/>
                        <Route exact path="home" element={<Home/>}/>
                        <Route exact path="lesson-schedule" element={<LessonSchedule/>}/>
                        <Route exact path="test" element={<Test/>}/>
                        <Route exact path="payment" element={<Payment/>}/>
                        <Route exact path="attendance" element={<Attendance/>}/>
                        <Route exact path="profile" element={<PersonalInformation/>}/>
                        <Route exact path="subjects/:subjectName" element={<Subjects/>}/>
                    </Route>
                </Route>

                {/*ROLE_TEACHER ROUTE*/}
                <Route element={<ProtectedRoute allowedRoles={['ROLE_TEACHER']}/>}>
                    <Route path={'/teacher'} element={<Teacher/>}>
                        <Route index element={<HomeTeacher/>}/>
                        <Route exact path="home" element={<HomeTeacher/>}/>
                        <Route exact path="manage-lessons" element={<ManageLessons/>}/>
                        <Route exact path="manage-students" element={<ManageStudents/>}/>
                        <Route path="manage-students/assessment" element={<AssessmentStudents/>}/>
                        <Route path="manage-students/attendance" element={<AttendanceStudents/>}/>
                        <Route exact path="manage-students/student-info"
                               element={<StudentTeacher teacherStudent={true}/>}>
                            <Route index element={<InformationGeneral/>}/>
                            <Route path={'general'} element={<InformationGeneral/>}/>
                            <Route path={'quiz'} element={<InformationGeneral/>}/>
                            <Route path={'exams'} element={<InformationGeneral/>}/>
                            <Route path={'assignment'} element={<InformationGeneral/>}/>
                            <Route path={'classes'} element={<InformationGeneral/>}/>
                            <Route path={'fees'} element={<InformationGeneral/>}/>
                        </Route>
                        <Route exact path="examination-assessment" element={<ExaminationAssessment/>}/>
                        <Route exact path="examination-assessment/student"
                               element={<StudentTeacher teacherExaminationAssessment={true}/>}>
                            <Route index element={<InformationGeneral/>}/>
                            <Route path={'general'} element={<InformationGeneral/>}/>
                            <Route path={'quiz'} element={<InformationGeneral/>}/>
                            <Route path={'exams'} element={<InformationGeneral/>}/>
                            <Route path={'assignment'} element={<InformationGeneral/>}/>
                            <Route path={'classes'} element={<InformationGeneral/>}/>
                            <Route path={'fees'} element={<InformationGeneral/>}/>
                        </Route>
                        <Route exact path="schedule-plan" element={<SchedulePlan/>}/>
                        <Route exact path="chat" element={<Chat/>}/>
                        <Route exact path="reports" element={<ReportsTeacher/>}/>
                        <Route exact path="profile" element={<Profile/>}/>
                    </Route>
                </Route>

                {/*ROLE_SALES ROUTE*/}
                <Route element={<ProtectedRoute allowedRoles={['ROLE_SALES']}/>}>
                    <Route path={'/sales'} element={<Sales/>}>
                        <Route index element={<FormToAddStudent mainURL={'sales'}/>}/>
                        <Route exact path="add-student" element={<FormToAddStudent mainURL={'sales'}/>}/>
                        <Route exact path="students/add" element={<FormToAddStudent mainURL={'sales'}/>}/>
                        <Route exact path="students" element={<GeneralList/>}/>
                        <Route exact path="profile" element={<ProfileSales/>}/>
                    </Route>
                </Route>

                {/*ROLE_ADMIN ROUTE*/}
                <Route element={<ProtectedRoute allowedRoles={['ROLE_ADMIN']}/>}>
                    <Route path={'/admin'} element={<Admin/>}>
                        <Route index element={<HomeAdmin/>}/>
                        <Route exact path="dashboard" element={<HomeAdmin/>}/>
                        <Route exact path="teachers" element={<TeachersAdmin/>}/>
                        <Route exact path="teachers/add" element={<FormToAddTeacher mainURL={'admin'}/>}/>
                        <Route exact path="leadership" element={<LeadershipAdmin/>}/>
                        <Route exact path="leadership/add" element={<FormToAddLeadership mainURL={'admin'}/>}/>
                        <Route exact path="students" element={<StudentsAdmin/>}/>
                        <Route exact path="students/add" element={<FormToAddStudent mainURL={'admin'}/>}/>
                        <Route exact path="classes-subjects" element={<ClassesSubjectsAdmin/>}/>
                        <Route exact path="classes-subjects/addClass" element={<FormToAddClass mainURL={'admin/classes-subjects'}/>}/>
                        <Route exact path="classes-subjects/addSubject" element={<FormToAddSubject mainURL={'admin/classes-subjects'}/>}/>
                        <Route exact path="news" element={<NewsAdmin/>}/>
                        <Route exact path="news/add" element={<FormToAddNews mainURL={'admin'}/>}/>
                        <Route exact path="finance" element={<FinanceAdmin/>}/>
                        <Route exact path="calendar" element={<CalendarAdmin/>}/>
                        <Route exact path="message" element={<MessageAdmin/>}/>
                        <Route exact path="profile" element={<ProfileAdmin/>}/>
                        <Route exact path="settings" element={<SettingsAdmin/>}/>
                    </Route>
                </Route>

                {/*ROLE_LEADERSHIP ROUTE*/}
                <Route element={<ProtectedRoute allowedRoles={['ROLE_LEADERSHIP']}/>}>
                    <Route path={'/leadership'} element={<Leadership/>}>
                        <Route index element={<HomeLeadership/>}/>
                        <Route exact path="home" element={<HomeLeadership/>}/>
                        <Route exact path="teachers" element={<Teachers/>}/>
                        <Route exact path="teachers/add" element={<FormToAddTeacher mainURL={'leadership'}/>}/>
                        <Route exact path="students/add" element={<FormToAddStudent mainURL={'leadership'}/>}/>
                        <Route exact path="sales/add" element={<FormToAddSales mainURL={'leadership'}/>}/>
                        <Route exact path="classes-subjects/addClass" element={<FormToAddClass mainURL={'leadership/classes-subjects'}/>}/>
                        <Route exact path="classes-subjects/addSubject" element={<FormToAddSubject mainURL={'leadership/classes-subjects'}/>}/>
                        <Route exact path="students" element={<Students/>}/>
                        <Route exact path="sales" element={<SalesLeadership/>}/>
                        <Route exact path="classes-subjects" element={<ClassSubject/>}/>
                        {/*<Route exact path="students/student-info" element={<StudentTeacher leadershipStudent={true}/>}>*/}
                        {/*    <Route index element={<InformationGeneral/>}/>*/}
                        {/*    <Route path={'general'} element={<InformationGeneral/>}/>*/}
                        {/*    <Route path={'quiz'} element={<InformationGeneral/>}/>*/}
                        {/*    <Route path={'exams'} element={<InformationGeneral/>}/>*/}
                        {/*    <Route path={'assignment'} element={<InformationGeneral/>}/>*/}
                        {/*    <Route path={'classes'} element={<InformationGeneral/>}/>*/}
                        {/*    <Route path={'fees'} element={<InformationGeneral/>}/>*/}
                        {/*</Route>*/}
                        <Route exact path="exams" element={<Exams/>}/>
                        <Route exact path="finance" element={<Finance/>}/>
                        <Route exact path="reports" element={<Reports/>}/>
                        <Route exact path="messages" element={<Messages/>}/>
                        <Route exact path="profile" element={<Settings/>}/>
                    </Route>
                </Route>

            </Routes>
        </div>
    )
        ;
}


export default App;
