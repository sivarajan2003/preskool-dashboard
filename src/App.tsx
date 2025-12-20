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

import AddStudentPage from "./pages/People/AddStudentPage";
//import StudentDashboard from "./pages/Student/Dashboard";
import ExamResults from "./pages/Student/StudentsExamResults";
import FeesDetails from "./pages/Student/StudentFees";
import FeesPage from "./pages/Admin/FeesPage";


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

        <Route index element={<Dashboard />} />
        <Route path="fees" element={<FeesPage />} />
        

        <Route path="/admin/dashboard/people/students/add" element={<AddStudentPage />} />
         
         
        <Route path="people/students" element={<StudentsPage />} />
        <Route path="people/parents" element={<ParentsPage />} />
        <Route path="people/guardians" element={<GuardiansPage />} />
        <Route path="people/teachers" element={<TeachersPage />} />

        <Route path="academic/classes" element={<ClassesPage />} />
        <Route path="academic/class-room" element={<ClassRoomPage />} />
        <Route path="academic/class-routine" element={<ClassRoutinePage />} />
        <Route path="academic/section" element={<SectionPage />} />
        <Route path="academic/subject" element={<SubjectPage />} />
        <Route path="academic/syllabus" element={<SyllabusPage />} />
        <Route path="academic/time-table" element={<TimeTablePage />} />
        <Route path="academic/home-work" element={<HomeWorkPage />} />
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
