import {
  LayoutDashboard,
  Users,
  GraduationCap,
  ChevronDown,
  BookOpen,
  Calendar,
  FileText,
  DollarSign,
  MessageSquare,
  Settings,
  Building2,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const [openDashboard, setOpenDashboard] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="w-64 bg-white border-r border-gray-200 h-screen overflow-y-auto">
      {/* HEADER */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
            <GraduationCap className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">PreSkool</h1>
            <p className="text-xs text-gray-500">Admin Dashboard</p>
          </div>
        </div>
      </div>

      <nav className="p-4 space-y-2">

        {/* ================= DASHBOARD ================= */}
        <button
          onClick={() => setOpenDashboard(!openDashboard)}
          className="w-full flex items-center justify-between px-4 py-3 rounded-lg bg-blue-50 text-blue-600"
        >
          <div className="flex items-center gap-3">
            <LayoutDashboard className="w-5 h-5" />
            <span className="text-sm font-medium">Dashboard</span>
          </div>
          <ChevronDown
            className={`w-4 h-4 transition-transform ${
              openDashboard ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* DASHBOARD SUB MENU */}
        {openDashboard && (
          <div className="ml-11 mt-2 space-y-3">

            <button
              onClick={() => navigate("/student/dashboard")}
              className="flex items-center gap-3 text-sm font-medium text-gray-700 hover:text-blue-600"
            >
              <Users className="w-4 h-4 text-gray-500" />
              Students
            </button>
            

            <button
              onClick={() => navigate("/teacher/dashboard")}
              className="flex items-center gap-3 text-sm font-medium text-gray-700 hover:text-blue-600"
            >
              <GraduationCap className="w-4 h-4 text-gray-500" />
              Teachers
            </button>

            <button
              onClick={() => navigate("/parent/dashboard")}
              className="flex items-center gap-3 text-sm font-medium text-gray-700 hover:text-blue-600"
            >
              <Users className="w-4 h-4 text-gray-500" />
              Parents
            </button>

          </div>
        )}

        {/* ================= OTHER MENUS ================= */}
        {[
          { icon: Building2, label: "Classes" },
          { icon: BookOpen, label: "Subjects" },
          { icon: Calendar, label: "Class Routine" },
          { icon: FileText, label: "Attendance" },
          { icon: FileText, label: "Exam" },
          { icon: DollarSign, label: "Fees Collection" },
          { icon: MessageSquare, label: "Notice" },
          { icon: Settings, label: "Account" },
        ].map((item) => (
          <button
            key={item.label}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-50"
          >
            <item.icon className="w-5 h-5" />
            <span className="text-sm font-medium">{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}
