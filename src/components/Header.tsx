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

export default function Header() {
  const [dark, setDark] = useState(false);
  const [yearOpen, setYearOpen] = useState(false);
  const [full, setFull] = useState(false);

  const [country, setCountry] = useState<"IN" | "US">("IN");

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
    <header className="bg-white border-b border-gray-200 px-6 py-2">
      <div className="flex items-center justify-between">

        {/* SEARCH */}
        <div className="relative w-[300px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => console.log("Search:", e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-lg focus:ring-1 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* ACADEMIC YEAR */}
        <div className="relative">
          <button
            onClick={() => setYearOpen(!yearOpen)}
            className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-700 hover:bg-gray-50"
          >
            📅 Academic Year : 2024 / 2025
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </button>

          {yearOpen && (
            <div className="absolute top-11 left-0 w-full bg-white border rounded-lg shadow text-sm z-50">
              <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">2023 / 2024</div>
              <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">2024 / 2025</div>
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

          {/* Profile */}
          <div
            onClick={() => alert("Profile clicked")}
            className="w-6 h-6 rounded-full overflow-hidden border cursor-pointer"
          >
            <img
  src={A1}
  className="w-6 h-6 rounded-full"
  alt="student"
/>
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
