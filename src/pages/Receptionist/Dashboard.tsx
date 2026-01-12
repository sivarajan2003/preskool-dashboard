import r1 from "../../assets/gif/r1.gif";
import r2 from "../../assets/gif/r2.gif";
import r3 from "../../assets/gif/r3.gif";
import r4 from "../../assets/gif/r4.gif";

  import AdmissionFunnel from "./Admissions/AdmissionFunnel";
import ClassCapacity from "./Admissions/ClassCapacity";
import RecentApplications from "./Admissions/RecentApplications";

  export default function ReceptionistDashboard() {
    return (
      <div className="space-y-6">
  
        {/* Header */}
        <div className="mb-4">
          <h1 className="text-2xl font-semibold text-gray-900">
            Receptionist Dashboard
          </h1>
          <p className="text-sm text-gray-500">
            Dashboard / Receptionist Dashboard
          </p>
        </div>
  
        {/* ================= NOTIFICATION ================= */}
        <div className="flex items-center justify-between bg-green-50 border border-green-200 rounded-lg px-4 py-3">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-bold">
              ✓
            </span>
            <p className="text-sm text-green-700">
              New admission application received today
            </p>
          </div>
          <button className="text-green-700 text-xl">&times;</button>
        </div>
  
        {/* ================= WELCOME BANNER ================= */}
        <div className="bg-gradient-to-r from-[#0F0C29] via-[#302B63] to-[#24243E]
          rounded-xl px-6 py-6 text-white flex justify-between items-center">
  
          <div>
            <h2 className="text-lg font-semibold">
              Welcome Back, Receptionist
            </h2>
            <p className="text-sm text-gray-300 mt-1">
              Have a productive day at work
            </p>
          </div>
  
          <p className="text-xs text-gray-300">
            {new Date().toLocaleString()}
          </p>
        </div>
  
        {/* ================= STAT CARDS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
  <ReceptionistCard
    title="Total Applications"
    value="50"
    change="+12%"
    gif={r1}
    
  />

  <ReceptionistCard
    title="Pending Documents"
    value="11"
    change="-5%"
    gif={r2}
    
  />

  <ReceptionistCard
    title="Interviews Scheduled"
    value="5"
    change="+3%"
    gif={r3}
    
  />

  <ReceptionistCard
    title="Enrolled Students"
    value="6"
    change="+8%"
    gif={r4}
    
  />
</div>
{/* 🔥 ADMISSION FUNNEL SECTION */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <AdmissionFunnel />
        </div>
        <ClassCapacity />
      </div>
      {/* ✅ RECENT APPLICATIONS */}
      <RecentApplications />
      </div>
    );
  }
  
  /* ================= STAT CARD ================= */
  function ReceptionistCard({
    title,
    value,
    change,
    gif,
  }: any) {
    const isPositive = change.startsWith("+");
  
    return (
      <div
        className="
          bg-white
          border border-gray-200
          rounded-xl
          p-6
          shadow-sm
          hover:shadow-md
          transition
        "
      >
        {/* TOP ROW */}
        <div className="flex items-start gap-4">
          {/* GIF ICON */}
          <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center">
            <img
              src={gif}
              alt={title}
              className="w-8 h-8 object-contain"
            />
          </div>
  
          {/* TEXT */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900">
              {value}
            </h3>
            <p className="text-sm text-gray-500 mt-0.5">
              {title}
            </p>
          </div>
        </div>
  
        {/* FOOTER */}
        <p className="text-sm text-gray-500 mt-4">
          <span
            className={`font-medium ${
              isPositive ? "text-green-600" : "text-red-500"
            }`}
          >
            {change}
          </span>{" "}
          from last month
        </p>
      </div>
    );
  }
  