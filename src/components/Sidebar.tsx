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
import {  useLocation } from "react-router-dom";

export default function Sidebar() {
  

  const navigate = useNavigate();
  const location = useLocation();
  
  const isActive = (path: string) =>
    location.pathname === path;
    
    
    const isPeopleActive = location.pathname.startsWith(
      "/admin/dashboard/people"
      
    );
    
  
  const role = localStorage.getItem("role");
  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };
  const [openDashboard, setOpenDashboard] = useState(true);
  const [openApplications, setOpenApplications] = useState(false);
 
  const [openPeople, setOpenPeople] = useState(
    location.pathname.startsWith("/admin/dashboard/people")
  );
  
const [openStudents, setOpenStudents] = useState(false);
const [openTeachers, setOpenTeachers] = useState(false);
const [activeItem, setActiveItem] = useState<string | null>(null);
const [openAcademic, setOpenAcademic] = useState(
  location.pathname.startsWith("/admin/dashboard/academic")
);

const [openClasses, setOpenClasses] = useState(false);
const [openExams, setOpenExams] = useState(
  location.pathname.startsWith("/admin/dashboard/academic/examinations")
);

const [openManagement, setOpenManagement] = useState(true);
const [openFees, setOpenFees] = useState(false);
const [openLibrary, setOpenLibrary] = useState(false);
const [openHostel, setOpenHostel] = useState(false);
const [openTransport, setOpenTransport] = useState(false);
const [openHRM, setOpenHRM] = useState(true);
const [openAttendance, setOpenAttendance] = useState(false);
const [openLeaves, setOpenLeaves] = useState(false);
/* MANAGEMENT ACTIVE CHECK */
const isManagementActive = location.pathname.startsWith(
  "/admin/dashboard/management"
);

const isManagementItemActive = (path: string) =>
  location.pathname === path;


  return (
<div className="w-64 bg-white border-r h-full overflow-y-auto">

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

    <SubItem
      label="Admin Dashboard"
      onClick={() => navigate("/admin/dashboard")}
      active={location.pathname.startsWith("/admin")}
    />

    <SubItem
      label="Student Dashboard"
      onClick={() => navigate("/student/dashboard")}
      active={location.pathname.startsWith("/student")}
    />

    <SubItem
      label="Teacher Dashboard"
      onClick={() => navigate("/teacher/dashboard")}
      active={location.pathname.startsWith("/teacher")}
    />

    <SubItem
      label="Parent Dashboard"
      onClick={() => navigate("/parent/dashboard")}
      active={location.pathname.startsWith("/parent")}
    />

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


         {/*  {openApplications && (
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

      ================= LAYOUT (SEPARATE SECTION) ================= 
         const [openLayout, setOpenLayout] = useState(false);
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
        )} */}
{/* ================= PEOPLE ================= */}
<button
  onClick={() => setOpenPeople(!openPeople)}
  className={`w-full flex items-center px-4 py-3 rounded-lg
    ${
      isPeopleActive
        ? "bg-blue-50 text-blue-600"
        : "hover:bg-gray-100 text-gray-700"
    }`}
>
  <span className="text-sm font-medium">People</span>
</button>

{openPeople && (
  <div className="ml-6 mt-2 space-y-1">

    {/* ================= STUDENTS ================= */}
    <button
  onClick={() => navigate("/admin/dashboard/people/students")}
  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg
    ${
      isActive("/admin/dashboard/people/students")
        ? "bg-blue-600 text-white"
        : "hover:bg-gray-50 text-gray-700"
    }`}
>
  <div className="flex items-center gap-3">
    <span
      className={`w-8 h-8 rounded-lg flex items-center justify-center
        ${
          isActive("/admin/dashboard/people/students")
            ? "bg-white/20"
            : "bg-gray-100"
        }`}
    >
      <GraduationCap className="w-4 h-4" />
    </span>

    <span className="text-sm font-medium">Students</span>
  </div>
</button>


       {/*{openStudents && (
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
    )}*/}

    {/* ================= PARENTS ================= */}
    <button
      onClick={() => {
        navigate("/admin/dashboard/people/parents");
        setActiveItem("parents");
      }}
      
      className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg
  ${
    isActive("/admin/dashboard/people/parents")
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
  onClick={() => {
    navigate("/admin/dashboard/people/guardians");
    setActiveItem("guardians");
  }}
  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg
    ${
      isActive("/admin/dashboard/people/guardians")
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
  onClick={() => {
    navigate("/admin/dashboard/people/teachers");
    setActiveItem("teachers");
  }}
  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg
    ${
      isActive("/admin/dashboard/people/teachers")
        ? "bg-blue-600 text-white"
        : "hover:bg-gray-50 text-gray-700"
    }`}
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

   {/*{openTeachers && (
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
    )}  */}
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
  onClick={() => navigate("/admin/dashboard/academic/classes")}
  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg
    ${
      location.pathname === "/admin/dashboard/academic/classes"
        ? "bg-blue-600 text-white"
        : "hover:bg-gray-50 text-gray-700"
    }`}
>
  <span
    className={`w-8 h-8 rounded-lg flex items-center justify-center
      ${
        location.pathname === "/admin/dashboard/academic/classes"
          ? "bg-white/20"
          : "bg-gray-100"
      }`}
  >
    <GraduationCap className="w-4 h-4" />
  </span>
  <span className="text-sm font-medium">Classes</span>
</button>


      {/*{openClasses && (
      <div className="ml-11 space-y-1">
        <ChildItem label="All Classes" />
        <ChildItem label="Schedule" />
      </div>
    )}*/}

    {/* ================= SINGLE MENUS ================= */}
    <AcademicItem
  label="Class Room"
  icon={DoorOpen}
  path="/admin/dashboard/academic/class-room"
/>
<AcademicItem
  label="Class Routine"
  icon={CalendarDays}
  path="/admin/dashboard/academic/class-routine"
/>

 {/*<AcademicItem
  label="Section"
  icon={Layers}
  path="/admin/dashboard/academic/section"
/>*/}

<AcademicItem
  label="Subject"
  icon={BookOpen}
  path="/admin/dashboard/academic/subject"
/>
<AcademicItem
  label="Syllabus"
  icon={FileText}
  path="/admin/dashboard/academic/syllabus"
/>
<AcademicItem
  label="Time Table"
  icon={Table}
  path="/admin/dashboard/academic/time-table"
/>
 {/* <AcademicItem
  label="Home Work"
  icon={ClipboardList}
  path="/admin/dashboard/academic/home-work"
/> 
*/}

    {/* ================= EXAMINATIONS (HAS CHILD) ================= */}
    <button
      onClick={() => setOpenExams(!openExams)}
      className="w-full flex items-center gap-3 px-3 py-2 rounded-lg"
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

    <ChildItem
      label="Exam"
      active={location.pathname === "/admin/dashboard/academic/examinations/exam"}
      onClick={() =>
        navigate("/admin/dashboard/academic/examinations/exam")
      }
    />

    <ChildItem
      label="Exam Schedule"
      active={location.pathname === "/admin/dashboard/academic/examinations/schedule"}
      onClick={() =>
        navigate("/admin/dashboard/academic/examinations/schedule")
      }
    />

    <ChildItem
      label="Grade"
      active={location.pathname === "/admin/dashboard/academic/examinations/grade"}
      onClick={() =>
        navigate("/admin/dashboard/academic/examinations/grade")
      }
    />

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
  onClick={() =>
    navigate("/admin/dashboard/management/fees-collection")
  }
  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg
    ${
      isManagementItemActive(
        "/admin/dashboard/management/fees-collection"
      )
        ? "bg-blue-600 text-white"
        : "hover:bg-gray-50 text-gray-700"
    }`}
>
  <span className={`w-9 h-9 rounded-xl flex items-center justify-center
    ${
      isManagementItemActive(
        "/admin/dashboard/management/fees-collection"
      )
        ? "bg-white/20"
        : "bg-gray-100"
    }`}
  >
    <Wallet className="w-4 h-4" />
  </span>

  <span className="text-sm">Fees Collection</span>
</button>


   {/* {openFees && (
      <div className="ml-11 space-y-1">
        <ChildItem label="Fees Group" />
        <ChildItem label="Fees Type" />
        <ChildItem label="Fees Master" />
        <ChildItem label="Fees Assign" />
        <ChildItem label="Collect Fees" />
      </div>
    )}*/}

    {/* ================= LIBRARY ================= */}
    <button
  onClick={() =>
    navigate("/admin/dashboard/management/library")
  }
  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg
    ${
      isManagementItemActive(
        "/admin/dashboard/management/library"
      )
        ? "bg-blue-600 text-white"
        : "hover:bg-gray-50 text-gray-700"
    }`}
>
  <span className={`w-9 h-9 rounded-xl flex items-center justify-center
    ${
      isManagementItemActive(
        "/admin/dashboard/management/library"
      )
        ? "bg-white/20"
        : "bg-gray-100"
    }`}
  >
    <Book className="w-4 h-4" />
  </span>

  <span className="text-sm">Library Members</span>
</button>

    {/*{openLibrary && (
      <div className="ml-11 space-y-1">
        <ChildItem label="Library Members" />
        <ChildItem label="Books" />
        <ChildItem label="Issue Book" />
        <ChildItem label="Return" />
      </div>
    )}*/}

    {/* ================= SPORTS (NO CHILD) ================= */}
    <button
  onClick={() =>
    navigate("/admin/dashboard/management/sports")
  }
  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg
    ${
      isManagementItemActive(
        "/admin/dashboard/management/sports"
      )
        ? "bg-blue-600 text-white"
        : "hover:bg-gray-50 text-gray-700"
    }`}
>
  <span className={`w-9 h-9 rounded-xl flex items-center justify-center
    ${
      isManagementItemActive(
        "/admin/dashboard/management/sports"
      )
        ? "bg-white/20"
        : "bg-gray-100"
    }`}
  >
    <Activity className="w-4 h-4" />
  </span>

  <span className="text-sm">Sports</span>
</button>


    {/* ================= HOSTEL ================= */}
    <button
  onClick={() =>
    navigate("/admin/dashboard/management/hostel")
  }
  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg
    ${
      isManagementItemActive(
        "/admin/dashboard/management/hostel"
      )
        ? "bg-blue-600 text-white"
        : "hover:bg-gray-50 text-gray-700"
    }`}
>
  <span className={`w-9 h-9 rounded-xl flex items-center justify-center
    ${
      isManagementItemActive(
        "/admin/dashboard/management/hostel"
      )
        ? "bg-white/20"
        : "bg-gray-100"
    }`}
  >
    <Building className="w-4 h-4" />
  </span>

  <span className="text-sm">Hostel</span>
</button>


     {/*{openHostel && (
      <div className="ml-11 space-y-1">
        <ChildItem label="Hostel List" />
        <ChildItem label="Hostel Rooms" />
        <ChildItem label="Room Type" />
      </div>
    )}*/}

    {/* ================= TRANSPORT ================= */}
    <button
  onClick={() =>
    navigate("/admin/dashboard/management/transport")
  }
  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg
    ${
      isManagementItemActive(
        "/admin/dashboard/management/transport"
      )
        ? "bg-blue-600 text-white"
        : "hover:bg-gray-50 text-gray-700"
    }`}
>
  <span className={`w-9 h-9 rounded-xl flex items-center justify-center
    ${
      isManagementItemActive(
        "/admin/dashboard/management/transport"
      )
        ? "bg-white/20"
        : "bg-gray-100"
    }`}
  >
    <Bus className="w-4 h-4" />
  </span>

  <span className="text-sm">Transport</span>
</button>

    {/*{openTransport && (
      <div className="ml-11 space-y-1">
        <ChildItem label="Routes" />
        <ChildItem label="Pickup Points" />
        <ChildItem label="Vehicle Drivers" />
        <ChildItem label="Vehicles" />
        <ChildItem label="Assign Vehicle" />
      </div>
    )}*/}

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

<HRMItem
  icon={Users}
  label="Staffs"
  path="/admin/dashboard/hrm/staffs"
/>

<HRMItem
  icon={Layers}
  label="Departments"
  path="/admin/dashboard/hrm/departments"
/>

<HRMItem
  icon={UserCog}
  label="Designation"
  path="/admin/dashboard/hrm/designation"
/>


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
       <ChildItem
  label="Student Attendance"
  active={location.pathname === "/admin/dashboard/hrm/attendance/student"}
  onClick={() =>
    navigate("/admin/dashboard/hrm/attendance/student")
  }
/>

<ChildItem
  label="Teacher Attendance"
  active={location.pathname === "/admin/dashboard/hrm/attendance/teacher"}
  onClick={() =>
    navigate("/admin/dashboard/hrm/attendance/teacher")
  }
/>

<ChildItem
  label="Staff Attendance"
  active={location.pathname === "/admin/dashboard/hrm/attendance/staff"}
  onClick={() =>
    navigate("/admin/dashboard/hrm/attendance/staff")
  }
/>

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
        <ChildItem
  label="List of Leaves"
  active={location.pathname === "/admin/dashboard/hrm/leaves/list"}
  onClick={() =>
    navigate("/admin/dashboard/hrm/leaves/list")
  }
/>

<ChildItem
  label="Approve Request"
  active={location.pathname === "/admin/dashboard/hrm/leaves/approve"}
  onClick={() =>
    navigate("/admin/dashboard/hrm/leaves/approve")
  }
/>

      </div>
    )}

    {/* ===== Holidays ===== */}
    <HRMItem
  icon={Briefcase}
  label="Holidays"
  path="/admin/dashboard/hrm/holidays"
/>

<HRMItem
  icon={Wallet}
  label="Payroll"
  path="/admin/dashboard/hrm/payroll"
/>


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
        {/* ================= LOGOUT ================= */}
<div className="pt-4 mt-4 border-t">
  <button
    onClick={logout}
    className="w-full flex items-center gap-3 px-4 py-3 rounded-lg
      text-red-600 hover:bg-red-50 transition"
  >
    <DoorOpen className="w-5 h-5" />
    <span className="text-sm font-medium">Logout</span>
  </button>
</div>

      </nav>
    </div>
  );
}

/* ================= REUSABLE COMPONENTS ================= */

function SubItem({
  label,
  onClick,
  active,
}: {
  label: string;
  onClick?: () => void;
  active?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={`block text-sm w-full text-left px-2 py-1 rounded
        ${
          active
            ? "text-blue-600 font-medium"
            : "text-gray-600 hover:text-blue-600"
        }`}
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
function AcademicItem({
  label,
  icon: Icon,
  path,
}: {
  label: string;
  icon: any;
  path: string;
}) {
  const navigate = useNavigate();
  const location = useLocation();
  const active = location.pathname === path;

  return (
    <button
      onClick={() => navigate(path)}
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition
        ${
          active
            ? "bg-blue-600 text-white"
            : "text-gray-700 hover:bg-gray-50"
        }`}
    >
      <span
        className={`w-9 h-9 rounded-xl flex items-center justify-center
          ${
            active
              ? "bg-blue-500"
              : "bg-gray-100"
          }`}
      >
        <Icon
          className={`w-4 h-4 ${
            active ? "text-white" : "text-gray-600"
          }`}
        />
      </span>

      <span className="font-medium">{label}</span>
    </button>
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
  path,
}: {
  icon: any;
  label: string;
  path: string;
}) {
  const navigate = useNavigate();
  const location = useLocation();
  const active = location.pathname === path;

  return (
    <button
      onClick={() => navigate(path)}
      className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg
        ${
          active
            ? "bg-blue-600 text-white"
            : "hover:bg-gray-50 text-gray-700"
        }`}
    >
      <IconBox Icon={Icon} />
      <span className="text-sm">{label}</span>
    </button>
  );
}



