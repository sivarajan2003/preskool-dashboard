import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";

import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import StudentDashboard from "./pages/Student/Dashboard";
import TeacherDashboard from "./pages/Teacher/Dashboard";
import ParentDashboard from "./pages/Parent/Dashboard";

// People
import StudentsPage from "./pages/People/StudentsPage";
import ParentsPage from "./pages/People/ParentsPage";
import GuardiansPage from "./pages/People/GuardiansPage";
import TeachersPage from "./pages/People/TeachersPage";
import PayFees from "./pages/Student/PayFees";

// Academic
import ClassesPage from "./pages/Academic/ClassesPage";
import ClassRoomPage from "./pages/Academic/ClassRoomPage";
import ClassRoutinePage from "./pages/Academic/ClassRoutinePage";
import SectionPage from "./pages/Academic/SectionPage";
import SubjectPage from "./pages/Academic/SubjectPage";
import SyllabusPage from "./pages/Academic/SyllabusPage";
import TimeTablePage from "./pages/Academic/TimeTablePage";
import HomeWorkPage from "./pages/Academic/HomeWorkPage";

import ExamPage from "./pages/Academic/ExamPage";
import ExamSchedulePage from "./pages/Academic/ExamSchedulePage";
import GradePage from "./pages/Academic/GradePage";
import ReasonsPage from "./pages/Academic/ReasonsPage";
import ExamReasons from "./pages/Academic/Reasons/ExamReasons";
import LeaveReasons from "./pages/Academic/Reasons/LeaveReasons";
import DisciplinaryReasons from "./pages/Academic/Reasons/DisciplinaryReasons";

import AddStudentPage from "./pages/People/AddStudentPage";
//import StudentDashboard from "./pages/Student/Dashboard";
import ExamResults from "./pages/Student/StudentsExamResults";
import FeesDetails from "./pages/Student/StudentFees";
import FeesPage from "./pages/Admin/FeesPage";
import StudentFees from "./pages/Student/StudentFees";

// Management
import FeesCollection from "./pages/Management/FeesCollection";
import LibraryMembers from "./pages/Management/LibraryMembers";
import Sports from "./pages/Management/Sports";
import Hostel from "./pages/Management/Hostel";
import Transport from "./pages/Management/Transport";
// HRM
import Staffs from "./pages/HRM/Staffs";
import Departments from "./pages/HRM/Departments";
import Designation from "./pages/HRM/Designation";
import StudentAttendance from "./pages/HRM/Attendance/StudentAttendance";
import TeacherAttendance from "./pages/HRM/Attendance/TeacherAttendance";
import StaffAttendance from "./pages/HRM/Attendance/StaffAttendance";
import LeaveList from "./pages/HRM/Leaves/LeaveList";
import ApproveLeave from "./pages/HRM/Leaves/ApproveLeave";
import Holidays from "./pages/HRM/Holidays";
import Payroll from "./pages/HRM/Payroll";

import AttendanceReport from "./pages/Reports/AttendanceReport";
import ClassReport from "./pages/Reports/ClassReport";
import StudentReport from "./pages/Reports/StudentReport";
import GradeReport from "./pages/Reports/GradeReport";
import LeaveReport from "./pages/Reports/LeaveReport";
//import FeesReport from "./pages/Reports/FeesReport";
import AttendanceMain from "./pages/Reports/AttendanceTabs/AttendanceMain";
import StudentAttendanceType from "./pages/Reports/AttendanceTabs/StudentAttendanceType";
import DailyAttendance from "./pages/Reports/AttendanceTabs/DailyAttendance";
import StudentDayWise from "./pages/Reports/AttendanceTabs/StudentDayWise";
import TeacherDayWise from "./pages/Reports/AttendanceTabs/TeacherDayWise";
import TeacherReport from "./pages/Reports/AttendanceTabs/TeacherReport";
import StaffDayWise from "./pages/Reports/AttendanceTabs/StaffDayWise";
import StaffReport from "./pages/Reports/AttendanceTabs/StaffReport";
import FeesReport from "./pages/Reports/FeesReport";
import ExamResultsReport from "./pages/Reports/ExamResultsReport";
import PayrollReport from "./pages/Reports/PayrollReport";
import CustomReport from "./pages/Reports/CustomReport";

//upevent

// Auth
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import ResetSuccess from "./pages/ResetSuccess";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Unauthorized from "./pages/Unauthorized";
import Settings from "./pages/Admin/Settings";

export default function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/reset-success" element={<ResetSuccess />} />



      {/* ADMIN */}
      <Route
  path="/admin/dashboard"
  element={
    <ProtectedRoute role="admin">
      <DashboardLayout />
    </ProtectedRoute>
  }
>
<Route path="academic/reasons" element={<ReasonsPage />}>
    <Route path="exam" element={<ExamReasons />} />
    <Route path="leave" element={<LeaveReasons />} />
    <Route path="disciplinary" element={<DisciplinaryReasons />} />
  </Route>
  {/* DASHBOARD */}
  <Route index element={<Dashboard />} />
  <Route path="fees" element={<FeesPage />} />
  <Route path="settings" element={<Settings />} />


  {/* PEOPLE */}
  <Route path="people/students/add" element={<AddStudentPage />} />
  <Route path="people/students" element={<StudentsPage />} />
  <Route path="people/parents" element={<ParentsPage />} />
  <Route path="people/guardians" element={<GuardiansPage />} />
  <Route path="people/teachers" element={<TeachersPage />} />

  {/* ACADEMIC */}
  <Route path="academic/classes" element={<ClassesPage />} />
  <Route path="academic/class-room" element={<ClassRoomPage />} />
  <Route path="academic/class-routine" element={<ClassRoutinePage />} />
  <Route path="academic/section" element={<SectionPage />} />
  <Route path="academic/subject" element={<SubjectPage />} />
  <Route path="academic/syllabus" element={<SyllabusPage />} />
  <Route path="academic/time-table" element={<TimeTablePage />} />
  <Route path="academic/home-work" element={<HomeWorkPage />} />

  {/* EXAMINATIONS */}
  <Route path="academic/examinations/exam" element={<ExamPage />} />
  <Route path="academic/examinations/schedule" element={<ExamSchedulePage />} />
  <Route path="academic/examinations/grade" element={<GradePage />} />
{/* HRM */}
<Route path="hrm/staffs" element={<Staffs />} />
<Route path="hrm/departments" element={<Departments />} />
<Route path="hrm/designation" element={<Designation />} />

<Route path="hrm/attendance/student" element={<StudentAttendance />} />
<Route path="hrm/attendance/teacher" element={<TeacherAttendance />} />
<Route path="hrm/attendance/staff" element={<StaffAttendance />} />



<Route path="hrm/leaves/list" element={<LeaveList />} />
<Route path="hrm/leaves/approve" element={<ApproveLeave />} />

<Route path="hrm/holidays" element={<Holidays />} />
<Route path="hrm/payroll" element={<Payroll />} />
<Route path="reports/attendance" element={<AttendanceReport />}>
  <Route index element={<AttendanceMain />} />
  <Route path="student-type" element={<StudentAttendanceType />} />
  <Route path="daily" element={<DailyAttendance />} />
  <Route path="student-day-wise" element={<StudentDayWise />} />
  <Route path="teacher-day-wise" element={<TeacherDayWise />} />
  <Route path="teacher-report" element={<TeacherReport />} />
  <Route path="staff-day-wise" element={<StaffDayWise />} />
  <Route path="staff-report" element={<StaffReport />} />
 
</Route>
<Route path="reports/fees" element={<FeesReport />} />
<Route path="reports/exam-results" element={<ExamResultsReport />} />
<Route path="reports/payroll" element={<PayrollReport />} />
<Route path="reports/custom" element={<CustomReport />} />
  {/* MANAGEMENT ✅ THIS IS WHERE IT GOES */}
  <Route
    path="management/fees-collection"
    element={<FeesCollection />}
  />
  <Route path="management/library" element={<LibraryMembers />} />
  <Route path="management/sports" element={<Sports />} />
  <Route path="management/hostel" element={<Hostel />} />
  <Route path="management/transport" element={<Transport />} />
</Route>


      {/* STUDENT */}
      <Route
  path="/student/dashboard"
  element={
<ProtectedRoute role={["student", "teacher", "admin"]}>
      <DashboardLayout />
    </ProtectedRoute>
  }
>
<Route index element={<StudentDashboard />} />
<Route path="fees/pay" element={<PayFees />} />

  {/* PEOPLE */}
  <Route path="people/students" element={<StudentsPage />} />

  {/* ACADEMIC */}
  <Route path="academic/classes" element={<ClassesPage />} />
  <Route path="academic/class-room" element={<ClassRoomPage />} />
  <Route path="academic/class-routine" element={<ClassRoutinePage />} />
  <Route path="academic/subject" element={<SubjectPage />} />
  <Route path="academic/syllabus" element={<SyllabusPage />} />
  <Route path="academic/time-table" element={<TimeTablePage />} />

  {/* EXAMINATIONS */}
  <Route path="academic/examinations/exam" element={<ExamPage />} />
  <Route path="academic/examinations/schedule" element={<ExamSchedulePage />} />
  <Route path="academic/examinations/grade" element={<GradePage />} />
 
{/* MANAGEMENT (STUDENT ACCESS) */}
<Route path="management/library" element={<LibraryMembers />} />
<Route path="management/sports" element={<Sports />} />
<Route path="management/hostel" element={<Hostel />} />
<Route path="management/transport" element={<Transport />} />

{/* HRM (STUDENT ONLY) */}
<Route path="hrm/holidays" element={<Holidays />} />
{/* ✅ REPORTS (STUDENT ACCESS) */}
<Route path="reports/attendance" element={<AttendanceReport />}>
  <Route index element={<AttendanceMain />} />
  <Route path="student-type" element={<StudentAttendanceType />} />
  <Route path="daily" element={<DailyAttendance />} />
  <Route path="student-day-wise" element={<StudentDayWise />} />
</Route>



</Route>

<Route
  path="/teacher/dashboard"
  element={
    <ProtectedRoute role={["teacher", "admin"]}>
      <DashboardLayout />
    </ProtectedRoute>
  }
>
  <Route index element={<TeacherDashboard />} />
  <Route
    path="reports/exam-results"
    element={<ExamResultsReport />}
  />
  {/* PEOPLE */}
  <Route path="people/students" element={<StudentsPage />} />
  <Route path="people/teachers" element={<TeachersPage />} />
  <Route path="people/parents" element={<ParentsPage />} />
  <Route path="people/guardians" element={<GuardiansPage />} />

  {/* ACADEMIC */}
  <Route path="academic/classes" element={<ClassesPage />} />
  <Route path="academic/class-room" element={<ClassRoomPage />} />
  <Route path="academic/class-routine" element={<ClassRoutinePage />} />
  <Route path="academic/subject" element={<SubjectPage />} />
  <Route path="academic/syllabus" element={<SyllabusPage />} />
  <Route path="academic/time-table" element={<TimeTablePage />} />

  {/* EXAMINATIONS */}
  <Route path="academic/examinations/exam" element={<ExamPage />} />
  <Route path="academic/examinations/schedule" element={<ExamSchedulePage />} />
  <Route path="academic/examinations/grade" element={<GradePage />} />
  <Route path="management/library" element={<LibraryMembers />} />
<Route path="management/sports" element={<Sports />} />
<Route path="management/hostel" element={<Hostel />} />
<Route path="management/transport" element={<Transport />} />

{/* HRM  */}
<Route
  path="hrm/attendance/student"
  element={<StudentAttendance />}
/>

<Route
  path="hrm/attendance/teacher"
  element={<TeacherAttendance />}
/>
<Route path="hrm/holidays" element={<Holidays />} />
  {/* REPORTS */}
  <Route path="reports/attendance" element={<AttendanceReport />}>
    <Route index element={<AttendanceMain />} />
    <Route path="student-type" element={<StudentAttendanceType />} />
    <Route path="daily" element={<DailyAttendance />} />
    <Route path="student-day-wise" element={<StudentDayWise />} />
    <Route path="teacher-day-wise" element={<TeacherDayWise />} />
    <Route path="teacher-report" element={<TeacherReport />} />
    <Route path="staff-day-wise" element={<StaffDayWise />} />
    <Route path="staff-report" element={<StaffReport />} />
  </Route>
</Route>



      {/* PARENT */}
      <Route
  path="/parent/dashboard"
  element={
<ProtectedRoute role={["parent", "teacher", "admin"]}>
      <DashboardLayout />
    </ProtectedRoute>
  }
>
<Route index element={<ParentDashboard />} />
<Route path="hrm/payroll" element={<Payroll />} />

<Route
    path="reports/exam-results"
    element={<ExamResultsReport />}
  />
{/* PEOPLE */}
<Route path="people/teachers" element={<TeachersPage />} />
<Route path="people/guardians" element={<GuardiansPage />} />
{/* ACADEMIC  */}
<Route path="academic/class-room" element={<ClassRoomPage />} />
  <Route path="academic/class-routine" element={<ClassRoutinePage />} />
  <Route path="academic/subject" element={<SubjectPage />} />
  <Route path="academic/syllabus" element={<SyllabusPage />} />
  <Route path="academic/time-table" element={<TimeTablePage />} />
  <Route path="fees/pay" element={<PayFees />} />
{/* HRM  */}
<Route path="hrm/holidays" element={<Holidays />} />

{/* ATTENDANCE */}
<Route path="attendance" element={<StudentAttendance />} />

{/* REPORTS */}
<Route path="reports/attendance" element={<AttendanceReport />}>
    <Route index element={<AttendanceMain />} />
    <Route path="student-type" element={<StudentAttendanceType />} />
    <Route path="daily" element={<DailyAttendance />} />
  </Route>
</Route>

<Route path="/unauthorized" element={<Unauthorized />} />

      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
    {/* ✅ Toast container (ONLY ONCE) */}
    <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

