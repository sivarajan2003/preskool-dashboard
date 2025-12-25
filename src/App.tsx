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

import AddStudentPage from "./pages/People/AddStudentPage";
//import StudentDashboard from "./pages/Student/Dashboard";
import ExamResults from "./pages/Student/StudentsExamResults";
import FeesDetails from "./pages/Student/StudentFees";
import FeesPage from "./pages/Admin/FeesPage";

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
import FeesReport from "./pages/Reports/FeesReport";
//import AttendanceReport from "./pages/Reports/AttendanceReport";
import StudentAttendanceType from "./pages/Reports/StudentAttendanceType";
//import DailyAttendance from "./pages/Reports/DailyAttendance";

// Auth
import Login from "./pages/Login";
import Signup from "./pages/Signup";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* ADMIN */}
      <Route
  path="/admin/dashboard"
  element={
    <ProtectedRoute>
      <DashboardLayout />
    </ProtectedRoute>
  }
>
  {/* DASHBOARD */}
  <Route index element={<Dashboard />} />
  <Route path="fees" element={<FeesPage />} />

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
<Route path="reports/attendance" element={<AttendanceReport />} />
  <Route path="reports/attendance/student-type" element={<StudentAttendanceType />} />
  <Route path="reports/class" element={<ClassReport />} />
  <Route path="reports/student" element={<StudentReport />} />
  <Route path="reports/grade" element={<GradeReport />} />
  <Route path="reports/leave" element={<LeaveReport />} />
  <Route path="reports/fees" element={<FeesReport />} />





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
  path="/student"
  element={
    <ProtectedRoute>
      <StudentDashboard />
    </ProtectedRoute>
  }
>
  <Route path="dashboard" element={<StudentDashboard />} />
  <Route path="exam-results" element={<ExamResults />} />
  <Route path="fees" element={<FeesDetails />} />
</Route>


      {/* TEACHER */}
      <Route
        path="/teacher/dashboard"
        element={
          <ProtectedRoute>
            <TeacherDashboard />
          </ProtectedRoute>
        }
      />

      {/* PARENT */}
      <Route
        path="/parent/dashboard"
        element={
          <ProtectedRoute>
            <ParentDashboard />
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}
