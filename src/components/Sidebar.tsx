import {
  LayoutDashboard,
  GraduationCap,
  ChevronDown,
  Building2,
  BookOpen,
  Calendar,
  FileText,
  DollarSign,
  MessageSquare,
  Settings,
  LayoutGrid,
  Columns,
  AlignLeft,
  Box as BoxIcon,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();

  const [openDashboard, setOpenDashboard] = useState(true);
  const [openApplications, setOpenApplications] = useState(false);
  const [openLayout, setOpenLayout] = useState(false);

  return (
    <div className="w-64 bg-white border-r h-screen overflow-y-auto">

      {/* ================= HEADER ================= */}
      <div className="p-6 border-b">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
            <GraduationCap className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-bold">PreSkool</h1>
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

        {openDashboard && (
          <div className="ml-11 mt-2 space-y-2">
            <SubItem label="Admin Dashboard" onClick={() => navigate("/admin/dashboard")} />
            <SubItem label="Teacher Dashboard" onClick={() => navigate("/teacher/dashboard")} />
            <SubItem label="Student Dashboard" onClick={() => navigate("/student/dashboard")} />
            <SubItem label="Parent Dashboard" onClick={() => navigate("/parent/dashboard")} />
          </div>
        )}

        {/* ================= APPLICATIONS ================= */}
        <button
          onClick={() => setOpenApplications(!openApplications)}
          className="w-full flex items-center justify-between px-4 py-3 rounded-lg hover:bg-gray-100"
        >
          <div className="flex items-center gap-3">
            <LayoutGrid className="w-5 h-5 text-gray-700" />
            <span className="text-sm font-medium">Applications</span>
          </div>
          <ChevronDown
            className={`w-4 h-4 transition-transform ${
              openApplications ? "rotate-180" : ""
            }`}
          />
        </button>

        {openApplications && (
          <div className="ml-11 mt-2 space-y-1">
            {[
              "Chat",
              "Call",
              "Calendar",
              "Email",
              "To Do",
              "Notes",
              "File Manager",
            ].map((item) => (
              <SubItem key={item} label={item} />
            ))}
          </div>
        )}

        {/* ================= LAYOUT (SEPARATE SECTION) ================= */}
        <button
  onClick={() => setOpenLayout(!openLayout)}
  className="w-full flex items-center justify-between px-4 py-3 rounded-lg hover:bg-gray-100"
>
  <span className="text-sm font-medium text-gray-700">
    Layout
  </span>

  <ChevronDown
    className={`w-4 h-4 transition-transform ${
      openLayout ? "rotate-180" : ""
    }`}
  />
</button>


        {openLayout && (
          <div className="ml-11 mt-2 space-y-2">
            <LayoutItem icon={<Columns />} label="Default" />
            <LayoutItem icon={<AlignLeft />} label="Mini" />
            <LayoutItem icon={<AlignLeft />} label="RTL" />
            <LayoutItem icon={<BoxIcon />} label="Box" />
          </div>
        )}

        {/* ================= OTHER MENUS ================= */}
        <div className="pt-3 space-y-1">
          <MenuItem icon={Building2} label="Classes" />
          <MenuItem icon={BookOpen} label="Subjects" />
          <MenuItem icon={Calendar} label="Class Routine" />
          <MenuItem icon={FileText} label="Attendance" />
          <MenuItem icon={DollarSign} label="Fees Collection" />
          <MenuItem icon={MessageSquare} label="Notice Board" />
          <MenuItem icon={Settings} label="Settings" />
        </div>
      </nav>
    </div>
  );
}

/* ================= REUSABLE COMPONENTS ================= */

function SubItem({ label, onClick }: { label: string; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="block text-sm text-gray-600 hover:text-blue-600"
    >
      {label}
    </button>
  );
}

function LayoutItem({ icon, label }: { icon: JSX.Element; label: string }) {
  return (
    <div className="flex items-center gap-3 text-sm text-gray-600 hover:text-blue-600">
      <span className="w-4 h-4">{icon}</span>
      {label}
    </div>
  );
}

function MenuItem({
  icon: Icon,
  label,
}: {
  icon: any;
  label: string;
}) {
  return (
    <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-50">
      <Icon className="w-5 h-5" />
      <span className="text-sm font-medium">{label}</span>
    </button>
  );
}
