import { useState } from "react";
import {
  Search,
  Bell,
  Plus,
  Sun,
  Moon,
  BarChart2,
  Maximize2,
  Minimize2,
  ChevronDown,
} from "lucide-react";
import A1 from "../assets/a1.png";
import IN_FLAG from "../assets/in.png";
import US_FLAG from "../assets/us.png";
import { useNavigate } from "react-router-dom";
import { User, LogOut } from "lucide-react";
import { useEffect } from "react";
import { CalendarDays } from "lucide-react";

export default function Header({
  onMenuClick,
}: {
  onMenuClick?: () => void;
}) {

  const [dark, setDark] = useState(false);
  const [yearOpen, setYearOpen] = useState(false);
  const [full, setFull] = useState(false);

  const [country, setCountry] = useState<"IN" | "US">("IN");
  const [profileOpen, setProfileOpen] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const close = () => setProfileOpen(false);
    window.addEventListener("click", close);
    return () => window.removeEventListener("click", close);
  }, []);
    
  const [selectedYear, setSelectedYear] = useState("2024 / 2025");

const academicYears = Array.from({ length: 6 }, (_, i) => {
  const start = 2020 + i;
  return `${start} / ${start + 1}`;
});

  // 🔹 Fullscreen toggle
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setFull(true);
    } else {
      document.exitFullscreen();
      setFull(false);
    }
  };

  return (
    <header className="bg-white border-b border-gray-200 px-4 md:px-6 py-2">
  <div className="flex items-center justify-between">

    {/* LEFT SECTION */}
    <div className="flex items-center gap-3">

      {/* 🍔 Mobile Menu */}
      <button
        onClick={onMenuClick}
        className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
      >
        ☰
      </button>

      {/* SEARCH */}
      <div className="relative w-[240px] hidden md:block">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input
          type="text"
          placeholder="Search"
          className="w-full pl-9 pr-4 py-2 text-sm border rounded-lg"
        />
      </div>
    </div>

    {/* RIGHT ICONS (your existing code stays same) */}

        {/* ACADEMIC YEAR */}
        <div className="relative">
        <button
  onClick={() => setYearOpen(!yearOpen)}
  className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-700 hover:bg-gray-50"
>
  <CalendarDays className="w-4 h-4 text-gray-500" />
  <span>Academic Year : {selectedYear}</span>
  <ChevronDown className="w-4 h-4 text-gray-400" />
</button>


{yearOpen && (
  <div className="absolute top-11 left-0 w-full bg-white border rounded-lg shadow text-sm z-50">
    {academicYears.map((year) => (
      <div
        key={year}
        onClick={() => {
          setSelectedYear(year);
          setYearOpen(false);
        }}
        className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${
          selectedYear === year ? "bg-blue-50 font-medium" : ""
        }`}
      >
        {year}
      </div>
    ))}
  </div>
)}

        </div>

        {/* ICONS */}
        <div className="flex items-center gap-3">

        <button
  onClick={() => setCountry(country === "IN" ? "US" : "IN")}
  className="w-9 h-9 border border-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-100"
  title={country === "IN" ? "India" : "USA"}
>
  <img
    src={country === "IN" ? IN_FLAG : US_FLAG}
    alt={country === "IN" ? "India" : "USA"}
    className="w-5 h-5 object-contain"
  />
</button>



          {/* Add */}
          <IconBtn onClick={() => alert("Add clicked")}>
            <Plus className="w-4 h-4" />
          </IconBtn>

          {/* Theme */}
          <IconBtn onClick={() => setDark(!dark)}>
            {dark ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </IconBtn>

          {/* Notification */}
          <IconBtn onClick={() => alert("Notifications")}>
            <Bell className="w-4 h-4" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
          </IconBtn>

          {/* Quick Search */}
          <IconBtn onClick={() => alert("Quick search")}>
            <Search className="w-4 h-4" />
          </IconBtn>

          {/* Stats */}
          <IconBtn onClick={() => alert("Open statistics")}>
            <BarChart2 className="w-4 h-4" />
          </IconBtn>

          {/* Fullscreen */}
          <IconBtn onClick={toggleFullscreen}>
            {full ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </IconBtn>

          {/* Profile
          <div
            onClick={() => alert("Profile clicked")}
            className="w-6 h-6 rounded-full overflow-hidden border cursor-pointer"
          >
            <img
  src={A1}
  className="w-6 h-6 rounded-full"
  alt="student"
/>
          </div> */}
          <div className="relative">
  {/* PROFILE AVATAR */}
  <button
    onClick={(e) => {
      e.stopPropagation();
      setProfileOpen(!profileOpen);
    }}
    className="w-8 h-8 rounded-full overflow-hidden border"
  >
    <img src={A1} className="w-full h-full object-cover" alt="profile" />
  </button>

  {/* DROPDOWN */}
  {profileOpen && (
    <div className="absolute right-0 mt-2 w-44 bg-white border rounded-xl shadow-lg z-50">
      
      {/* PROFILE */}
      <button
        onClick={() => {
          setProfileOpen(false);
          navigate("/admin/profile"); // change if needed
        }}
        className="flex items-center gap-2 w-full px-4 py-2 text-sm hover:bg-gray-50"
      >
        <User size={16} />
        Profile
      </button>

      <div className="h-px bg-gray-200 my-1" />

      {/* LOGOUT */}
      <button
        onClick={() => {
          localStorage.clear();     // ✅ clear login
          navigate("/login");       // ✅ redirect
        }}
        className="flex items-center gap-2 w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50"
      >
        <LogOut size={16} />
        Logout
      </button>
    </div>
  )}
</div>

        </div>
      </div>
    </header>
  );
}

/* ICON BUTTON */
function IconBtn({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="relative w-9 h-9 border border-gray-200 rounded-lg flex items-center justify-center text-gray-600 hover:bg-gray-100"
    >
      {children}
    </button>
  );
}
