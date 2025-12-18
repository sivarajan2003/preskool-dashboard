import DashboardLayout from "../../components/DashboardLayout";
import T1Img from "../../assets/t1.png";
import T2 from "../../assets/t2.png";
import T3 from "../../assets/t3.png";
import T4 from "../../assets/t4.png";
import J1 from "../../assets/j1.png";
import J2 from "../../assets/j2.png";
import J3 from "../../assets/j3.png";
import JA from "../../assets/ja.png";
import JO from "../../assets/jo.png";
import GoodRightImg from "../../assets/good1.png";
import GoodImg from "../../assets/good.png";

import { CalendarDays, FolderOpen, ChevronDown } from "lucide-react";


export default function TeacherDashboard() {
  const studentImages: Record<string, string> = {
    Janet: J1,
    Joann: J2,
    Kathleen: J3,
    Gifford: JA,
    Lisa: JO,
  };
  
  
  return (
    <DashboardLayout>

      {/* ================= PAGE TITLE ================= */}
      <h2 className="text-xl font-semibold mb-1">Teacher Dashboard</h2>
      <p className="text-sm text-gray-500 mb-6">
        Dashboard / Teacher Dashboard
      </p>

      {/* ================= BLUE BANNER ================= */}
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 p-6 mb-8">
  
  {/* dotted overlay */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[size:16px_16px]" />

  {/* CONTENT */}
  <div className="relative flex items-center justify-between">
    
    {/* LEFT TEXT */}
    <div className="text-white max-w-[70%]">
      <h3 className="text-lg font-semibold">
        Good Morning Ms. Teena
      </h3>

      <p className="text-blue-100 text-sm mt-1">
        Have a good day at work
      </p>

      <p className="text-blue-100 text-sm mt-3">
        <b>Notice:</b> There is a staff meeting at <b>9AM</b> today.
      </p>
    </div>

    {/* RIGHT IMAGE 
    <img
      src={GoodRightImg}
      alt="Banner Illustration"
      className="hidden md:block h-[100px] object-contain absolute right-4 bottom-0"
    />*/}
  </div>
</div>


      {/* ================= MAIN GRID ================= */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-x-6 gap-y-6 ">
        {/* ========== PROFILE (LEFT) ========== */}
        <div>
          <div className="relative overflow-hidden rounded-xl p-5 text-white bg-gradient-to-r from-[#0F1025] to-[#1A1C3A]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,200,255,0.15)_0%,transparent_40%)]" />
            <div className="relative flex items-center justify-between">
              <div className="flex items-center gap-4">
              <img
  src={T1Img}
  alt="Profile"
  className="w-16 h-16 rounded-xl border border-white/20 object-cover"
/>

                <div>
                <span className="inline-block text-[11px] bg-[#2D5BFF] px-2 py-0.5 rounded-md mb-1">
        #T594651
      </span>
                  <p className="font-semibold">Henriques Morgan</p>
                  <p className="text-xs text-gray-300">Classes : IV-A, V-B</p>
                  <p className="text-xs text-gray-300">Physics</p>
                </div>
              </div>
              <button className="bg-blue-600 text-xs px-3 py-1 rounded">
                Edit Profile
              </button>
            </div>
          </div>
        </div>

        {/* ========== SYLLABUS (CENTER) ========== */}
        <div>
          <div className="bg-white rounded-xl border p-6 flex items-center gap-6">
            <div className="relative w-20 h-20">
              <svg className="w-full h-full rotate-[-90deg]">
                <circle cx="40" cy="40" r="34" stroke="#E5E7EB" strokeWidth="6" fill="none" />
                <circle
                  cx="40"
                  cy="40"
                  r="34"
                  stroke="#22C55E"
                  strokeWidth="6"
                  fill="none"
                  strokeDasharray="213"
                  strokeDashoffset="11"
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-sm font-semibold">
                95%
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-2">Syllabus</h4>
              <div className="flex items-center gap-2 text-xs mb-1">
                <span className="w-2 h-2 bg-green-500 rounded-full" />
                Completed : 95%
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span className="w-2 h-2 bg-red-400 rounded-full" />
                Pending : 5%
              </div>
            </div>
          </div>
        </div>
        <div className="xl:col-span-2">
  <div className="bg-white rounded-xl border p-4">
    <div className="flex justify-between mb-3">
      <h4 className="text-sm font-semibold">Today's Class</h4>
      <span className="text-xs text-gray-500">16 May 2025</span>
    </div>

    <div className="grid grid-cols-5 gap-3">
      {[
        { t: "09:00 - 09:45", c: "Class V, B", col: "red" },
        { t: "09:45 - 10:30", c: "Class IV, C", col: "red" },
        { t: "11:30 - 12:15", c: "Class V, A", col: "blue" },
        { t: "01:30 - 02:15", c: "Class V, B", col: "blue" },
        { t: "02:15 - 03:00", c: "Class I", col: "blue" },
      ].map((i, idx) => (
        <div key={idx} className="bg-[#F8FAFC] border rounded-lg px-3 py-2.5">
          <span
            className={`text-xs px-2 py-0.5 rounded-md text-white ${
              i.col === "red" ? "bg-red-500" : "bg-blue-600"
            }`}
          >
            ⏱ {i.t}
          </span>
          <p className="text-xs mt-1">{i.c}</p>
        </div>
      ))}
    </div>
  </div>
</div>

      {/* ================= SCHEDULES + UPCOMING EVENTS ================= */}
      <div className="xl:row-span-3 sticky top-6 self-start h-fit">
  <div className="bg-white rounded-xl border px-4 py-4">

    {/* Header */}
    <div className="flex items-center justify-between mb-3">
      <h4 className="text-sm font-semibold">Schedules</h4>
      <span className="text-xs text-blue-600 cursor-pointer">Add New</span>
    </div>

    {/* Month + Arrows */}
    <div className="flex items-center justify-between mb-2">
      <p className="text-sm font-medium">July 2024</p>
      <div className="flex gap-1">
        <button className="w-6 h-6 flex items-center justify-center rounded-full border text-xs">
          ‹
        </button>
        <button className="w-6 h-6 flex items-center justify-center rounded-full bg-black text-white text-xs">
          ›
        </button>
      </div>
    </div>

    {/* Week days */}
    <div className="grid grid-cols-7 text-center text-[11px] text-gray-400 mb-1">
      {["S", "M", "T", "W", "T", "F", "S"].map(d => (
        <span key={d}>{d}</span>
      ))}
    </div>

    {/* Calendar */}
    <div className="grid grid-cols-7 gap-1 text-xs text-center mb-4">
      {Array.from({ length: 30 }, (_, i) => (
        <div
          key={i}
          className={`py-1.5 rounded cursor-pointer ${
            [6, 7, 12, 27].includes(i + 1)
              ? "bg-blue-600 text-white"
              : "text-gray-500 hover:bg-gray-100"
          }`}
        >
          {i + 1}
        </div>
      ))}
    </div>

    {/* Upcoming Events */}
    <h4 className="text-sm font-semibold mb-3">Upcoming Events</h4>

    {[
      {
        title: "Vacation Meeting",
        date: "07 July 2024",
        bar: "bg-red-500",
        iconBg: "bg-red-100",
      },
      {
        title: "Parents, Teacher Meet",
        date: "15 July 2024",
        bar: "bg-cyan-500",
        iconBg: "bg-cyan-100",
      },
      {
        title: "Staff Meeting",
        date: "10 July 2024",
        bar: "bg-blue-500",
        iconBg: "bg-blue-100",
      },
    ].map((e, i) => (
      <div key={i} className="flex gap-3 mb-3">
        
        {/* Vertical color bar */}
        <div className={`w-1 rounded-full ${e.bar}`} />

        {/* Event content */}
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <div
              className={`w-9 h-9 rounded-lg flex items-center justify-center ${e.iconBg}`}
            >
              📅
            </div>

            <div className="flex-1">
              <p className="text-sm font-medium leading-tight">
                {e.title}
              </p>
              <p className="text-xs text-gray-500">
                {e.date}
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between pl-11 mt-1">
            <p className="text-xs text-gray-500">
              ⏰ 09:10 AM - 10:50 PM
            </p>

            {/* Avatars */}
            <div className="flex -space-x-2">
              <img src="https://i.pravatar.cc/24?img=1" className="w-6 h-6 rounded-full border border-white" />
              <img src="https://i.pravatar.cc/24?img=2" className="w-6 h-6 rounded-full border border-white" />
              <img src="https://i.pravatar.cc/24?img=3" className="w-6 h-6 rounded-full border border-white" />
            </div>
          </div>
        </div>
      </div>
    ))}

  </div>
</div>

{/* ================= ATTENDANCE + PERFORMANCE SECTION ================= */}
<div className="xl:col-span-2 xl:row-start-3 grid grid-cols-1 md:grid-cols-2 gap-5">
{/* ================= ATTENDANCE (IMAGE-2 – CORRECT PADDING) ================= */}
<div className="bg-white rounded-xl border p-4">

  {/* Header */}
  <div className="flex items-center justify-between mb-5">
    <h4 className="text-sm font-semibold">Attendance</h4>

    <div className="flex items-center gap-1 text-xs text-gray-500">
      <span>This Month</span>
      <svg width="12" height="12" fill="none" viewBox="0 0 24 24">
        <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2"/>
      </svg>
    </div>
  </div>

  {/* Last 7 Days */}
  <div className="border rounded-lg px-4 py-3 mb-5">
    <div className="flex justify-between items-center mb-3">
      <p className="text-xs font-medium">Last 7 Days</p>
      <p className="text-[11px] text-gray-400">
        14 May 2024 - 21 May 2024
      </p>
    </div>

    <div className="flex gap-2">
      {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
        <span
          key={i}
          className={`w-8 h-8 flex items-center justify-center rounded-md text-xs font-semibold
            ${
              i === 4
                ? "bg-red-500 text-white"
                : i > 4
                ? "bg-gray-100 text-gray-400"
                : "bg-green-500 text-white"
            }`}
        >
          {d}
        </span>
      ))}
    </div>
  </div>

  {/* Total Days */}
  <p className="text-xs text-gray-500 mb-5 px-1">
    No of total working days <b className="text-gray-700">28 Days</b>
  </p>

  {/* Stats */}
  <div className="grid grid-cols-4 text-center mb-6">
    <div>
      <p className="text-sm font-semibold">25</p>
      <p className="text-xs text-gray-500 mt-1">Present</p>
    </div>
    <div>
      <p className="text-sm font-semibold">2</p>
      <p className="text-xs text-gray-500 mt-1">Absent</p>
    </div>
    <div>
      <p className="text-sm font-semibold">0</p>
      <p className="text-xs text-gray-500 mt-1">Halfday</p>
    </div>
    <div>
      <p className="text-sm font-semibold">1</p>
      <p className="text-xs text-gray-500 mt-1">Late</p>
    </div>
  </div>

  {/* Circular Chart */}
  <div className="flex justify-center mb-6">
    <div className="relative w-44 h-44">
      <svg className="w-full h-full rotate-[-90deg]">
        <circle
          cx="88"
          cy="88"
          r="70"
          stroke="#E5E7EB"
          strokeWidth="14"
          fill="none"
        />
        <circle
          cx="88"
          cy="88"
          r="70"
          stroke="#22C55E"
          strokeWidth="14"
          fill="none"
          strokeDasharray="439"
          strokeDashoffset="22"
          strokeLinecap="round"
        />
        <circle
          cx="88"
          cy="88"
          r="70"
          stroke="#EF4444"
          strokeWidth="14"
          fill="none"
          strokeDasharray="439"
          strokeDashoffset="330"
          strokeLinecap="round"
        />
      </svg>

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <p className="text-xs text-gray-500">Attendance</p>
        <p className="text-2xl font-bold mt-1">95%</p>
      </div>
    </div>
  </div>

  {/* Legend */}
  <div className="flex justify-center gap-5 text-xs text-gray-500 pt-2">
    <span className="flex items-center gap-1">
      <span className="w-2 h-2 bg-green-500 rounded-full" />
      Present
    </span>
    <span className="flex items-center gap-1">
      <span className="w-2 h-2 bg-red-500 rounded-full" />
      Absent
    </span>
    <span className="flex items-center gap-1">
      <span className="w-2 h-2 bg-blue-500 rounded-full" />
      Late
    </span>
    <span className="flex items-center gap-1">
      <span className="w-2 h-2 bg-gray-300 rounded-full" />
      Half Day
    </span>
  </div>

</div>

  {/* ========== CENTER COLUMN (STACKED) ========== */}
  <div className="space-y-6">
{/* ================= BEST PERFORMERS (CLASS LEFT, BAR RIGHT) ================= */}
<div className="bg-white rounded-xl border p-5">
  {/* Header */}
  <div className="flex items-center justify-between mb-4">
    <h4 className="text-sm font-semibold">Best Performers</h4>
    <span className="text-xs text-blue-600 cursor-pointer">
      View All
    </span>
  </div>

  {[
    { name: "Class IV, C", value: 80, color: "bg-blue-600" },
    { name: "Class III, B", value: 54, color: "bg-yellow-400" },
    { name: "Class V, A", value: 76, color: "bg-cyan-500" },
  ].map((item, i) => (
    <div key={i} className="flex items-center gap-3 mb-4">
      
      {/* Class Name (LEFT) */}
      <p className="text-xs font-medium w-20 text-gray-700">
        {item.name}
      </p>

      {/* Progress Bar (RIGHT) */}
      <div className="relative w-full bg-gray-200 rounded-full h-4 overflow-hidden">
        <div
          className={`${item.color} h-full rounded-full flex items-center justify-between px-2`}
          style={{ width: `${item.value}%` }}
        >
          {/* Avatars (INSIDE LEFT) */}
          <div className="flex -space-x-2">
            <img
              src="https://i.pravatar.cc/24?img=1"
              className="w-5 h-5 rounded-full border border-white"
            />
            <img
              src="https://i.pravatar.cc/24?img=2"
              className="w-5 h-5 rounded-full border border-white"
            />
            <img
              src="https://i.pravatar.cc/24?img=3"
              className="w-5 h-5 rounded-full border border-white"
            />
          </div>

          {/* Percentage (INSIDE RIGHT) */}
          <span className="text-[11px] font-semibold text-white">
            {item.value}%
          </span>
        </div>
      </div>
    </div>
  ))}
</div>

    {/* STUDENT PROGRESS */}
    
<div className="bg-white rounded-xl border p-5">
  {/* Header */}
  <div className="flex items-center justify-between mb-4">
    <h4 className="text-sm font-semibold">Student Progress</h4>

    <div className="flex items-center gap-1 text-xs text-gray-500">
      <span>This Month</span>
      <svg width="12" height="12" fill="none" viewBox="0 0 24 24">
        <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" />
      </svg>
    </div>
  </div>

  {/* Student rows */}
  {[
    {
      name: "Susan Boswell",
      class: "III, B",
      percent: "98%",
      img: T2,
      color: "bg-green-500",
      badge: "🏅",
    },
    {
      name: "Richard Mayes",
      class: "V, A",
      percent: "98%",
      img: T3,
      color: "bg-green-500",
      badge: "⭐",
    },
    {
      name: "Thomas Hunt",
      class: "X, A",
      percent: "78%",
      img: T4,
      color: "bg-blue-600",
      badge: "🎖️",
    },
    
  ].map((s, i) => (
    <div
      key={i}
      className="flex items-center justify-between border rounded-lg p-3 mb-3"
    >
      {/* Left: avatar + info */}
      <div className="flex items-center gap-3">
        <img
          src={s.img}
          className="w-10 h-10 rounded-full object-cover"
        />

        <div>
          <p className="text-sm font-medium">{s.name}</p>
          <p className="text-xs text-gray-500">{s.class}</p>
        </div>
      </div>

      {/* Right: icon + % */}
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 text-xs">
          {s.badge}
        </div>

        <span
          className={`text-xs font-semibold text-white px-2 py-0.5 rounded ${s.color}`}
        >
          {s.percent}
        </span>
      </div>
    </div>
  ))}
</div>



  </div>
</div>



      </div>
      {/* ================= SYLLABUS / LESSON PLAN ================= */}
      <div className="xl:col-span-3 mt-8">
  <div className="bg-white rounded-xl border p-5">

    {/* Header */}
    <div className="flex items-center justify-between mb-5">
      <h4 className="text-sm font-semibold">Syllabus / Lesson Plan</h4>
      <span className="text-xs text-blue-600 cursor-pointer">
        View All
      </span>
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-6 gap-y-5">

      {[
        {
          cls: "Class V, B",
          title: "Introduction Note to Physics on Today’s Tech",
          pillBg: "bg-green-100 text-green-700",
          bar: "bg-green-500",
        },
        {
          cls: "Class V, A",
          title: "Biometric & their Working Functionality",
          pillBg: "bg-yellow-100 text-yellow-700",
          bar: "bg-yellow-500",
        },
        {
          cls: "Class IV, C",
          title: "Analyze and interpret literary texts",
          pillBg: "bg-blue-100 text-blue-700",
          bar: "bg-blue-600",
        },
        {
          cls: "Class IV, C",
          title: "Enhance vocabulary and grammar skills",
          pillBg: "bg-red-100 text-red-600",
          bar: "bg-red-500",
        },
      ].map((item, i) => (
        <div
          key={i}
          className="border rounded-xl p-4 bg-white flex flex-col justify-between"
        >
          {/* Top */}
          <div>
            {/* Class pill */}
            <span
  className={`text-[11px] h-6 px-4 rounded-md min-w-[100px] flex items-center justify-center ${item.pillBg}`}
>

              {item.cls}
            </span>

            {/* Title */}
            <p className="text-sm font-medium leading-snug mb-4">
              {item.title}
            </p>

            {/* Progress line */}
            <div className="w-full h-1 rounded-full bg-gray-200 mb-4">
              <div className={`h-1 rounded-full ${item.bar}`} style={{ width: "60%" }} />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between pt-2 border-t text-xs text-gray-500">
            <span className="flex items-center gap-1 cursor-pointer hover:text-blue-600">
              ✎ Reschedule
            </span>
            <span className="flex items-center gap-1 cursor-pointer hover:text-blue-600">
              ⤴ Share
            </span>
          </div>
        </div>
      ))}

    </div>
  </div>
</div>
{/* ================= STUDENT MARKS + LEAVE STATUS ================= */}
<div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-8">

  {/* ================= STUDENT MARKS (LEFT – TABLE) ================= */}
  <div className="xl:col-span-2 bg-white rounded-xl border p-5">

    {/* Header */}
    <div className="flex items-center justify-between mb-4">
      <h4 className="text-sm font-semibold">Student Marks</h4>

      <div className="flex items-center gap-4 text-xs text-gray-500">
      <span className="flex items-center gap-1 text-xs text-gray-500 cursor-pointer">
  <CalendarDays className="w-4 h-4" />
  This Month
  <ChevronDown className="w-3 h-3" />
</span>

<span className="flex items-center gap-1 text-xs text-gray-500 cursor-pointer">
  <FolderOpen className="w-4 h-4" />
  All Sections
  <ChevronDown className="w-3 h-3" />
</span>

      </div>
    </div>

    {/* Table */}
    <div className="overflow-x-auto">
      <table className="w-full text-xs">
        <thead>
          <tr className="text-left text-gray-500 border-b">
            <th className="py-2">ID</th>
            <th>Name</th>
            <th>Class</th>
            <th>Section</th>
            <th>Marks %</th>
            <th>CGPA</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {[
{ id: 35013, name: "Janet", cls: "III", sec: "A", marks: "89%", cgpa: "4.2", status: "Pass" },
{ id: 35012, name: "Joann", cls: "IV", sec: "B", marks: "88%", cgpa: "3.2", status: "Pass" },
            { id: 35011, name: "Kathleen", cls: "II", sec: "A", marks: "21%", cgpa: "4.5", status: "Pass" },
            { id: 35010, name: "Gifford", cls: "I", sec: "B", marks: "69%", cgpa: "4.5", status: "Pass" },
            { id: 35009, name: "Lisa", cls: "II", sec: "B", marks: "31%", cgpa: "3.9", status: "Fail" },
          ].map((s, i) => (
            <tr key={i} className="border-b last:border-none">

              <td className="py-3 text-gray-500">{s.id}</td>

              <td className="py-3">
                <div className="flex items-center gap-2">
                <img
  src={studentImages[s.name]}
  alt={s.name}
  className="w-8 h-8 rounded-full object-cover border"
/>

                  <span className="font-medium">{s.name}</span>
                </div>
              </td>

              <td>{s.cls}</td>
              <td>{s.sec}</td>
              <td>{s.marks}</td>
              <td>{s.cgpa}</td>

              <td>
                <span
                  className={`px-2 py-0.5 rounded text-white text-[11px] font-medium
                  ${s.status === "Pass" ? "bg-green-500" : "bg-red-500"}`}
                >
                  {s.status}
                </span>
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* Footer */}
    <div className="flex justify-between items-center mt-4 text-xs text-gray-500">
      <span>Showing 5 Entries</span>

      <div className="flex items-center gap-2">
        <span className="cursor-pointer">Pre</span>
        <span className="w-6 h-6 flex items-center justify-center bg-blue-600 text-white rounded">
          1
        </span>
        <span className="cursor-pointer">2</span>
        <span>…</span>
        <span className="cursor-pointer">20</span>
        <span className="text-blue-600 cursor-pointer">Next</span>
      </div>
    </div>
  </div>

  {/* ================= LEAVE STATUS (RIGHT – CARDS) ================= */}
  <div className="bg-white rounded-xl border p-5">

    {/* Header */}
    <div className="flex items-center justify-between mb-4">
      <h4 className="text-sm font-semibold">Leave Status</h4>
      <span className="flex items-center gap-1 text-xs text-gray-500 cursor-pointer">
  <CalendarDays className="w-4 h-4" />
  This Year
  <ChevronDown className="w-3 h-3" />
</span>    </div>

    {[
      {
        title: "Emergency Leave",
        date: "15 Jun 2024",
        status: "Pending",
        statusColor: "bg-blue-500",
        icon: "⛔",
        iconBg: "bg-red-100",
      },
      {
        title: "Medical Leave",
        date: "15 Jun 2024",
        status: "Approved",
        statusColor: "bg-green-500",
        icon: "❄️",
        iconBg: "bg-blue-100",
      },
      {
        title: "Medical Leave",
        date: "15 Jun 2024",
        status: "Declined",
        statusColor: "bg-red-500",
        icon: "❄️",
        iconBg: "bg-blue-100",
      },
      {
        title: "Fever",
        date: "15 Jun 2024",
        status: "Approved",
        statusColor: "bg-green-500",
        icon: "🌡️",
        iconBg: "bg-red-100",
      },
    ].map((l, i) => (
      <div
        key={i}
        className="flex items-center justify-between border rounded-lg p-4 mb-3"
      >
        {/* Left */}
        <div className="flex items-center gap-3">
          <div
            className={`w-10 h-10 rounded-lg flex items-center justify-center ${l.iconBg}`}
          >
            {l.icon}
          </div>

          <div>
            <p className="text-sm font-medium">{l.title}</p>
            <p className="text-xs text-gray-500">
              Leave Date : {l.date}
            </p>
          </div>
        </div>

        {/* Status */}
        <span
          className={`text-[11px] px-2 py-0.5 rounded text-white ${l.statusColor}`}
        >
          {l.status}
        </span>
      </div>
    ))}
  </div>

</div>

    </DashboardLayout>
  );
}
