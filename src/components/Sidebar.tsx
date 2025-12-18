import {
  LayoutDashboard,
  GraduationCap,ChevronDown,Building2, BookOpen,Calendar,
  FileText,DollarSign,MessageSquare,Settings,LayoutGrid,Columns,AlignLeft,Box as BoxIcon,
  DoorOpen,CalendarDays,
  Layers,Table,ClipboardList,
  FileCheck,HelpCircle, Wallet,Book, Activity,
  Building,Bus,UserCog,CalendarCheck,Briefcase,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  User,
  UserCheck,
  Users,
} from "lucide-react";

export default function Sidebar() {
  const navigate = useNavigate();

  const role = localStorage.getItem("role");
  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };
  const [openDashboard, setOpenDashboard] = useState(true);
  const [openApplications, setOpenApplications] = useState(false);
  const [openLayout, setOpenLayout] = useState(false);
  const [openPeople, setOpenPeople] = useState(false);
const [openStudents, setOpenStudents] = useState(false);
const [openTeachers, setOpenTeachers] = useState(false);
const [activeItem, setActiveItem] = useState<string | null>(null);
const [openAcademic, setOpenAcademic] = useState(true);
const [openClasses, setOpenClasses] = useState(false);
const [openExams, setOpenExams] = useState(false);
const [openManagement, setOpenManagement] = useState(true);
const [openFees, setOpenFees] = useState(false);
const [openLibrary, setOpenLibrary] = useState(false);
const [openHostel, setOpenHostel] = useState(false);
const [openTransport, setOpenTransport] = useState(false);
const [openHRM, setOpenHRM] = useState(true);
const [openAttendance, setOpenAttendance] = useState(false);
const [openLeaves, setOpenLeaves] = useState(false);


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

    {role === "admin" && (
      <SubItem
        label="Admin Dashboard"
        onClick={() => navigate("/admin")}
      />
    )}

    {role === "teacher" && (
      <SubItem
        label="Teacher Dashboard"
        onClick={() => navigate("/teacher")}
      />
    )}

    {role === "student" && (
      <SubItem
        label="Student Dashboard"
        onClick={() => navigate("/student")}
      />
    )}

    {role === "parent" && (
      <SubItem
        label="Parent Dashboard"
        onClick={() => navigate("/parent")}
      />
    )}

  </div>
)}
        {/* ================= APPLICATIONS ================= */}
        <button
  onClick={() => setOpenApplications(!openApplications)}
  className="w-full flex items-center px-4 py-3 rounded-lg hover:bg-gray-100"
>
  <div className="flex items-center gap-3">
    <LayoutGrid className="w-5 h-5 text-gray-700" />
    <span className="text-sm font-medium">Applications</span>
  </div>
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
  className="w-full flex items-center px-4 py-3 rounded-lg hover:bg-gray-100"
>
  <span className="text-sm font-medium text-gray-700">
    Layout
  </span>
</button>

        {openLayout && (
          <div className="ml-11 mt-2 space-y-2">
            <LayoutItem icon={<Columns />} label="Default" />
            <LayoutItem icon={<AlignLeft />} label="Mini" />
            <LayoutItem icon={<AlignLeft />} label="RTL" />
            <LayoutItem icon={<BoxIcon />} label="Box" />
          </div>
        )}
{/* ================= PEOPLE ================= */}
<button
  onClick={() => setOpenPeople(!openPeople)}
  className="w-full flex items-center px-4 py-3 rounded-lg hover:bg-gray-100"
>
  <span className="text-sm font-medium text-gray-700">
    People
  </span>
</button>

{openPeople && (
  <div className="ml-6 mt-2 space-y-1">

    {/* ================= STUDENTS ================= */}
    <button
      onClick={() => setOpenStudents(!openStudents)}
      className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-gray-50"
    >
      <div className="flex items-center gap-3">
        {/* ICON */}
        <span className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
          <GraduationCap className="w-4 h-4 text-gray-700" />
        </span>

        <span className="text-sm font-medium text-gray-700">
          Students
        </span>
      </div>

      <ChevronDown
        className={`w-4 h-4 transition-transform ${
          openStudents ? "rotate-180" : ""
        }`}
      />
    </button>

    {openStudents && (
      <div className="ml-11 space-y-1">
        <ChildItem
          label="All Students"
          active={activeItem === "all-students"}
          onClick={() => setActiveItem("all-students")}
        />
        <ChildItem
          label="Student Promotion"
          active={activeItem === "student-promotion"}
          onClick={() => setActiveItem("student-promotion")}
        />
      </div>
    )}

    {/* ================= PARENTS ================= */}
    <button
      onClick={() => setActiveItem("parents")}
      className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg ${
        activeItem === "parents"
          ? "bg-blue-600 text-white"
          : "hover:bg-gray-50 text-gray-700"
      }`}
    >
      <span className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
        <User className="w-4 h-4 text-gray-700" />
      </span>

      <span className="text-sm font-medium">Parents</span>
    </button>

    {/* ================= GUARDIANS ================= */}
    <button
      onClick={() => setActiveItem("guardians")}
      className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg ${
        activeItem === "guardians"
          ? "bg-blue-600 text-white"
          : "hover:bg-gray-50 text-gray-700"
      }`}
    >
      <span className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
        <UserCheck className="w-4 h-4 text-gray-700" />
      </span>

      <span className="text-sm font-medium">Guardians</span>
    </button>

    {/* ================= TEACHERS ================= */}
    <button
      onClick={() => setOpenTeachers(!openTeachers)}
      className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-gray-50"
    >
      <div className="flex items-center gap-3">
        <span className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
          <Users className="w-4 h-4 text-gray-700" />
        </span>

        <span className="text-sm font-medium text-gray-700">
          Teachers
        </span>
      </div>

      <ChevronDown
        className={`w-4 h-4 transition-transform ${
          openTeachers ? "rotate-180" : ""
        }`}
      />
    </button>

    {openTeachers && (
      <div className="ml-11 space-y-1">
        <ChildItem
          label="All Teachers"
          active={activeItem === "all-teachers"}
          onClick={() => setActiveItem("all-teachers")}
        />
        <ChildItem
          label="Routine"
          active={activeItem === "teacher-routine"}
          onClick={() => setActiveItem("teacher-routine")}
        />
      </div>
    )}
  </div>
)}
{/* ================= ACADEMIC ================= */}
<button
  onClick={() => setOpenAcademic(!openAcademic)}
  className="w-full flex items-center px-4 py-3 rounded-lg hover:bg-gray-100"
>
  <span className="text-sm font-semibold text-gray-700">
    Academic
  </span>
</button>

{openAcademic && (
  <div className="ml-4 mt-2 space-y-1">

    {/* ================= CLASSES (HAS CHILD) ================= */}
    <button
      onClick={() => setOpenClasses(!openClasses)}
      className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-gray-50"
    >
      <div className="flex items-center gap-3">
        <span className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
          <GraduationCap className="w-4 h-4" />
        </span>
        <span className="text-sm font-medium">Classes</span>
      </div>

      <ChevronDown
        className={`w-4 h-4 transition-transform ${
          openClasses ? "rotate-180" : ""
        }`}
      />
    </button>

    {openClasses && (
      <div className="ml-11 space-y-1">
        <ChildItem label="All Classes" />
        <ChildItem label="Schedule" />
      </div>
    )}

    {/* ================= SINGLE MENUS ================= */}
    <MainItem label="Class Room" icon={DoorOpen} />
    <MainItem label="Class Routine" icon={CalendarDays} />
    <MainItem label="Section" icon={Layers} />
    <MainItem label="Subject" icon={BookOpen} />
    <MainItem label="Syllabus" icon={FileText} />
    <MainItem label="Time Table" icon={Table} />
    <MainItem label="Home Work" icon={ClipboardList} />

    {/* ================= EXAMINATIONS (HAS CHILD) ================= */}
    <button
      onClick={() => setOpenExams(!openExams)}
      className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-gray-50"
    >
      <div className="flex items-center gap-3">
        <span className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
          <FileCheck className="w-4 h-4" />
        </span>
        <span className="text-sm font-medium">Examinations</span>
      </div>

      <ChevronDown
        className={`w-4 h-4 transition-transform ${
          openExams ? "rotate-180" : ""
        }`}
      />
    </button>

    {openExams && (
      <div className="ml-11 space-y-1">
        <ChildItem label="Exam" />
        <ChildItem label="Exam Schedule" />
        <ChildItem label="Grade" />
        <ChildItem label="Exam Attendance" />
        <ChildItem label="Exam Results" />
      </div>
    )}

    {/* ================= SINGLE MENU ================= */}
    <MainItem label="Reasons" icon={HelpCircle} />

  </div>
)}
{/* ================= MANAGEMENT ================= */}
<button
  onClick={() => setOpenManagement(!openManagement)}
  className="w-full flex items-center justify-between px-4 py-3 rounded-lg hover:bg-gray-100"
>
  <span className="text-sm font-semibold text-gray-700">
    Management
  </span>
</button>


{openManagement && (
  <div className="ml-4 mt-2 space-y-1">

    {/* ================= FEES COLLECTION ================= */}
    <button
      onClick={() => setOpenFees(!openFees)}
      className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-gray-50"
    >
      <div className="flex items-center gap-3">
      <span className="w-9 h-9 rounded-xl bg-gray-100 flex items-center justify-center">
  <Wallet className="w-4 h-4 text-gray-600" />
</span>

        <span className="text-sm text-gray-700">Fees Collection</span>
      </div>
      <ChevronDown
        className={`w-4 h-4 transition-transform ${
          openFees ? "rotate-180" : ""
        }`}
      />
    </button>

    {openFees && (
      <div className="ml-11 space-y-1">
        <ChildItem label="Fees Group" />
        <ChildItem label="Fees Type" />
        <ChildItem label="Fees Master" />
        <ChildItem label="Fees Assign" />
        <ChildItem label="Collect Fees" />
      </div>
    )}

    {/* ================= LIBRARY ================= */}
    <button
      onClick={() => setOpenLibrary(!openLibrary)}
      className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-gray-50"
    >
      <div className="flex items-center gap-3">
      <span className="w-9 h-9 rounded-xl bg-gray-100 flex items-center justify-center">
  <Book className="w-4 h-4 text-gray-600" />
</span>

        <span className="text-sm text-gray-700">Library</span>
      </div>
      <ChevronDown
        className={`w-4 h-4 transition-transform ${
          openLibrary ? "rotate-180" : ""
        }`}
      />
    </button>

    {openLibrary && (
      <div className="ml-11 space-y-1">
        <ChildItem label="Library Members" />
        <ChildItem label="Books" />
        <ChildItem label="Issue Book" />
        <ChildItem label="Return" />
      </div>
    )}

    {/* ================= SPORTS (NO CHILD) ================= */}
    <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-50">
    <span className="w-9 h-9 rounded-xl bg-gray-100 flex items-center justify-center">
  <Activity className="w-4 h-4 text-gray-600" />
</span>

      <span className="text-sm text-gray-700">Sports</span>
    </button>

    {/* ================= HOSTEL ================= */}
    <button
      onClick={() => setOpenHostel(!openHostel)}
      className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-gray-50"
    >
      <div className="flex items-center gap-3">
      <span className="w-9 h-9 rounded-xl bg-gray-100 flex items-center justify-center">
  <Building className="w-4 h-4 text-gray-600" />
</span>

        <span className="text-sm text-gray-700">Hostel</span>
      </div>
      <ChevronDown
        className={`w-4 h-4 transition-transform ${
          openHostel ? "rotate-180" : ""
        }`}
      />
    </button>

    {openHostel && (
      <div className="ml-11 space-y-1">
        <ChildItem label="Hostel List" />
        <ChildItem label="Hostel Rooms" />
        <ChildItem label="Room Type" />
      </div>
    )}

    {/* ================= TRANSPORT ================= */}
    <button
      onClick={() => setOpenTransport(!openTransport)}
      className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-gray-50"
    >
      <div className="flex items-center gap-3">
      <span className="w-9 h-9 rounded-xl bg-gray-100 flex items-center justify-center">
  <Bus className="w-4 h-4 text-gray-600" />
</span>

        <span className="text-sm text-gray-700">Transport</span>
      </div>
      <ChevronDown
        className={`w-4 h-4 transition-transform ${
          openTransport ? "rotate-180" : ""
        }`}
      />
    </button>

    {openTransport && (
      <div className="ml-11 space-y-1">
        <ChildItem label="Routes" />
        <ChildItem label="Pickup Points" />
        <ChildItem label="Vehicle Drivers" />
        <ChildItem label="Vehicles" />
        <ChildItem label="Assign Vehicle" />
      </div>
    )}

  </div>
)}
{/* ================= HRM ================= */}
<button
  onClick={() => setOpenHRM(!openHRM)}
  className="w-full flex items-center justify-between px-4 py-3 rounded-lg hover:bg-gray-100"
>
  <span className="text-sm font-semibold text-gray-500">HRM</span>
</button>

{openHRM && (
  <div className="ml-4 mt-2 space-y-1">

    {/* ===== Staffs ===== */}
    <HRMItem icon={Users} label="Staffs" />

    {/* ===== Departments ===== */}
    <HRMItem icon={Layers} label="Departments" />

    {/* ===== Designation ===== */}
    <HRMItem icon={UserCog} label="Designation" />

    {/* ===== Attendance (HAS CHILD) ===== */}
    <button
      onClick={() => setOpenAttendance(!openAttendance)}
      className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-gray-50"
    >
      <div className="flex items-center gap-3">
        <IconBox Icon={CalendarCheck} />
        <span className="text-sm text-gray-700">Attendance</span>
      </div>
      <ChevronDown
        className={`w-4 h-4 text-gray-400 transition-transform ${
          openAttendance ? "rotate-180" : ""
        }`}
      />
    </button>

    {openAttendance && (
      <div className="ml-11 space-y-1">
        <ChildItem label="Student Attendance" />
        <ChildItem label="Teacher Attendance" />
        <ChildItem label="Staff Attendance" />
      </div>
    )}

    {/* ===== Leaves (HAS CHILD) ===== */}
    <button
      onClick={() => setOpenLeaves(!openLeaves)}
      className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-gray-50"
    >
      <div className="flex items-center gap-3">
        <IconBox Icon={CalendarDays} />
        <span className="text-sm text-gray-700">Leaves</span>
      </div>
      <ChevronDown
        className={`w-4 h-4 text-gray-400 transition-transform ${
          openLeaves ? "rotate-180" : ""
        }`}
      />
    </button>

    {openLeaves && (
      <div className="ml-11 space-y-1">
        <ChildItem label="List of Leaves" />
        <ChildItem label="Approve Request" />
      </div>
    )}

    {/* ===== Holidays ===== */}
    <HRMItem icon={Briefcase} label="Holidays" />

    {/* ===== Payroll ===== */}
    <HRMItem icon={Wallet} label="Payroll" />

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
function MainItem({
  label,
  icon: Icon,
  active,
  onClick,
}: {
  label: string;
  icon: any;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm
        ${
          active
            ? "bg-blue-50 text-blue-600"
            : "text-gray-700 hover:bg-gray-50"
        }`}
    >
      <span className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
        <Icon className="w-4 h-4" />
      </span>
      {label}
    </button>
  );
}
function ChildItem({
  label,
  active,
  onClick,
}: {
  label: string;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left px-3 py-1.5 text-xs rounded-lg ${
        active
          ? "bg-blue-600 text-white"
          : "text-gray-500 hover:text-blue-600"
      }`}
    >
      {label}
    </button>
  );
}
function IconBox({ Icon }: { Icon: any }) {
  return (
    <span className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
      <Icon className="w-4 h-4 text-gray-500" />
    </span>
  );
}

function HRMItem({
  icon: Icon,
  label,
}: {
  icon: any;
  label: string;
}) {
  return (
    <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-50">
      <IconBox Icon={Icon} />
      <span className="text-sm text-gray-700">{label}</span>
    </button>
  );
}



