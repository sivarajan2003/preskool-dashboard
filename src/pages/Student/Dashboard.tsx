import DashboardLayout from "../../components/DashboardLayout";
import StudentAvatar from "../../assets/s1.png";
import Tc1 from "../../assets/tc1.png";
import Tc2 from "../../assets/tc2.png";
import Tc3 from "../../assets/tc3.png";
import H1 from "../../assets/h1.png";
import H2 from "../../assets/h2.png";
import H3 from "../../assets/h3.png";
import H4 from "../../assets/h4.png";
import C1 from "../../assets/c1.png";
import C2 from "../../assets/c2.png";
import C3 from "../../assets/c3.png";
import C4 from "../../assets/c4.png";
import { X, Asterisk } from "lucide-react";
import {
  Bus,
  Book,
  FileText,
  Utensils,
  Building,
} from "lucide-react";
export default function StudentDashboard() {
  return (
    <DashboardLayout>

      {/* ================= HEADER ================= */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold">Student Dashboard</h2>
          <p className="text-sm text-gray-500">Dashboard / Students Dashboard</p>
        </div>

        <div className="flex gap-3">
          <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg">
            Exam Result
          </button>
          <button className="px-4 py-2 text-sm bg-gray-100 rounded-lg">
            Fees Details
          </button>
        </div>
      </div>

      {/* ================= MAIN GRID ================= */}
      <div className="grid grid-cols-1 xl:grid-cols-3 xl:auto-rows-min gap-6">

        {/* ================= LEFT COLUMN ================= */}
        <div className="space-y-6">

          {/* PROFILE CARD */}
          <div className="rounded-xl p-4 text-white bg-gradient-to-br from-[#0B1028] to-[#1E2358]">
            <div className="flex gap-4">
            <img
  src={StudentAvatar}
  alt="Student"
  className="w-14 h-14 rounded-lg border-2 border-white object-cover"
/>

              <div>
                <span className="text-[10px] bg-blue-600 px-2 py-0.5 rounded">
                  #ST123456
                </span>
                <p className="font-semibold mt-1">Angelo Riana</p>
                <p className="text-xs text-blue-100">
                  Class : III, C | Roll No : #36545
                </p>

                <div className="flex gap-2 mt-2">
                  <span className="text-xs">1st Quarterly</span>
                  <span className="bg-green-500 text-[10px] px-2 rounded">
                    Pass
                  </span>
                </div>
              </div>
            </div>

            <div className="flex justify-end mt-4">
              <button className="bg-blue-600 text-xs px-4 py-1.5 rounded">
                Edit Profile
              </button>
            </div>
          </div>

          {/* TODAY'S CLASS */}
          <div className="bg-white border rounded-xl p-4">
            <div className="flex justify-between mb-3">
              <h4 className="text-sm font-semibold">Today’s Class</h4>
              <span className="text-xs text-gray-400">16 May 2024</span>
            </div>

            {[
  {
    sub: "English",
    time: "09:00 - 09:45 AM",
    img: Tc1,
    status: "Completed",
    c: "green",
  },
  {
    sub: "Chemistry",
    time: "10:45 - 11:30 AM",
    img: Tc2,
    status: "Completed",
    c: "green",
  },
  {
    sub: "Physics",
    time: "11:30 - 12:15 AM",
    img: Tc3,
    status: "Inprogress",
    c: "yellow",
  },
].map((c, i) => (

              <div key={i} className="flex items-center gap-3 border rounded-lg p-3 mb-2">
                <img src={c.img} className="w-10 h-10 rounded-lg object-cover" />
                <div className="flex-1">
                  <p className="text-sm font-medium">{c.sub}</p>
                  <p className="text-xs text-gray-500">{c.time}</p>
                </div>
                <span
                  className={`text-xs px-3 py-0.5 rounded-full ${
                    c.c === "green"
                      ? "bg-green-100 text-green-600"
                      : "bg-yellow-100 text-yellow-600"
                  }`}
                >
                  {c.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ================= CENTER (ATTENDANCE) ================= */}
        {/* ================= ATTENDANCE ================= */}
<div className="bg-white border rounded-xl p-5">



  {/* Header */}
  <div className="flex items-center justify-between mb-3">
    <h4 className="text-sm font-semibold">Attendance</h4>
    <span className="text-xs text-gray-500 flex items-center gap-1">
      📅 This Month
    </span>
  </div>

  {/* Working Days */}
  <p className="text-xs text-gray-500 mb-4 flex items-center gap-1">
    📘 No of total working days <b className="text-gray-700">28 Days</b>
  </p>

  {/* Stats */}
  <div className="grid grid-cols-3 gap-3 text-center text-xs mb-6">
    <div className="border rounded-lg py-3">
      <p className="font-semibold text-sm">25</p>
      <p className="text-gray-500">Present</p>
    </div>
    <div className="border rounded-lg py-3">
      <p className="font-semibold text-sm">2</p>
      <p className="text-gray-500">Absent</p>
    </div>
    <div className="border rounded-lg py-3">
      <p className="font-semibold text-sm">0</p>
      <p className="text-gray-500">Halfday</p>
    </div>
  </div>

  {/* ===== FULL CIRCLE DONUT ===== */}
  <div className="flex justify-center mb-5">
    <div className="relative w-44 h-44">

      <svg viewBox="0 0 200 200" className="w-full h-full">
        {/* Background ring */}
        <circle
          cx="100"
          cy="100"
          r="80"
          stroke="#E5E7EB"
          strokeWidth="14"
          fill="none"
        />

        {/* Present – Green */}
        <circle
          cx="100"
          cy="100"
          r="80"
          stroke="#22C55E"
          strokeWidth="14"
          fill="none"
          strokeDasharray="420 100"
          strokeLinecap="round"
          transform="rotate(-90 100 100)"
        />

        {/* Absent – Red */}
        <circle
          cx="100"
          cy="100"
          r="80"
          stroke="#EF4444"
          strokeWidth="14"
          fill="none"
          strokeDasharray="60 460"
          strokeDashoffset="-420"
          strokeLinecap="round"
          transform="rotate(-90 100 100)"
        />

        {/* Half Day – Grey */}
        <circle
          cx="100"
          cy="100"
          r="80"
          stroke="#CBD5E1"
          strokeWidth="14"
          fill="none"
          strokeDasharray="40 480"
          strokeDashoffset="-480"
          strokeLinecap="round"
          transform="rotate(-90 100 100)"
        />

        {/* Late – Blue dot */}
        <circle cx="155" cy="125" r="6" fill="#3B82F6" />
      </svg>

      {/* Center Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <p className="text-xs text-gray-500">Attendance</p>
        <p className="text-2xl font-bold">95%</p>
      </div>
    </div>
  </div>

  {/* Legend */}
  <div className="flex justify-center gap-4 text-xs text-gray-500 mb-4">
    <span className="flex items-center gap-1">
      <span className="w-2 h-2 bg-green-500 rounded-full" /> Present
    </span>
    <span className="flex items-center gap-1">
      <span className="w-2 h-2 bg-red-500 rounded-full" /> Absent
    </span>
    <span className="flex items-center gap-1">
      <span className="w-2 h-2 bg-blue-500 rounded-full" /> Late
    </span>
    <span className="flex items-center gap-1">
      <span className="w-2 h-2 bg-gray-300 rounded-full" /> Half Day
    </span>
  </div>

  {/* Last 7 Days */}
  <div className="border rounded-lg p-3">
    <div className="flex justify-between text-xs text-gray-500 mb-2">
      <p className="font-medium">Last 7 Days</p>
      <p>14 May 2024 - 21 May 2024</p>
    </div>

    <div className="flex gap-2">
      {["M","T","W","T","F","S","S"].map((d, i) => (
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
</div>


        {/* ================= RIGHT (SCHEDULES) ================= */}
        <div className="bg-white border rounded-xl p-4 xl:row-span-2">

  {/* Header */}
  <div className="flex items-center justify-between mb-4">
    <h4 className="text-sm font-semibold">Schedules</h4>
    <button className="text-xs text-blue-600 flex items-center gap-1">
      ➕ Add New
    </button>
  </div>

  {/* Month + Navigation */}
  <div className="flex items-center justify-between mb-3">
    <p className="text-sm font-medium">July 2024</p>
    <div className="flex gap-2">
      <button className="w-7 h-7 rounded-full border text-gray-400 flex items-center justify-center">
        ‹
      </button>
      <button className="w-7 h-7 rounded-full bg-black text-white flex items-center justify-center">
        ›
      </button>
    </div>
  </div>

  {/* Week Days */}
  <div className="grid grid-cols-7 text-xs text-center text-gray-400 mb-2">
    {["S","M","T","W","T","F","S"].map(d => (
      <span key={d}>{d}</span>
    ))}
  </div>

  {/* Dates */}
  <div className="grid grid-cols-7 gap-2 text-xs text-center mb-5">
    {Array.from({ length: 30 }, (_, i) => i + 1).map(day => (
      <div
        key={day}
        className={`w-8 h-8 flex items-center justify-center rounded-lg
          ${[6,7,12,27].includes(day)
            ? "bg-blue-600 text-white font-medium"
            : "text-gray-600"
          }`}
      >
        {day}
      </div>
    ))}
  </div>

  {/* Exams */}
  <h5 className="text-sm font-semibold mb-3">Exams</h5>

  <div className="space-y-3">

    {/* Exam Card */}
    <div className="border rounded-lg p-3">
      <div className="flex items-center justify-between mb-1">
        <p className="text-sm font-medium">1st Quarterly</p>
        <span className="text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded-full">
          19 Days More
        </span>
      </div>

      <p className="text-xs font-medium">Mathematics</p>
      <p className="text-xs text-gray-500 flex items-center gap-1">
        🕒 01:30 - 02:15 PM
      </p>
      <p className="text-xs text-blue-600 mt-1">
        📍 Room No : 15
      </p>
    </div>

    {/* Exam Card */}
    <div className="border rounded-lg p-3">
      <div className="flex items-center justify-between mb-1">
        <p className="text-sm font-medium">2nd Quarterly</p>
        <span className="text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded-full">
          20 Days More
        </span>
      </div>

      <p className="text-xs font-medium">Physics</p>
      <p className="text-xs text-gray-500 flex items-center gap-1">
        🕒 01:30 - 02:15 PM
      </p>
      <p className="text-xs text-blue-600 mt-1">
        📍 Room No : 15
      </p>
    </div>

  </div>
</div>


        {/* ================= QUICK ACTIONS (HALF WIDTH) ================= */}
        <div className="xl:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-4">

{[
  { title: "Pay Fees", icon: "💳", color: "blue" },
  { title: "Exam Result", icon: "📄", color: "green" },
  { title: "Calendar", icon: "📅", color: "yellow" },
  { title: "Attendance", icon: "📊", color: "slate" },
].map((a, i) => (
  <div
    key={i}
    className={`
      bg-white rounded-xl
      border border-gray-200
      border-b-4
      ${a.color === "blue" && "border-b-blue-600"}
      ${a.color === "green" && "border-b-green-600"}
      ${a.color === "yellow" && "border-b-yellow-500"}
      ${a.color === "slate" && "border-b-slate-800"}
      p-4 flex items-center gap-4
    `}
  >
    {/* ICON */}
    <div
      className={`
        w-11 h-11 rounded-lg flex items-center justify-center
        text-white text-lg
        ${a.color === "blue" && "bg-blue-600"}
        ${a.color === "green" && "bg-green-600"}
        ${a.color === "yellow" && "bg-yellow-500"}
        ${a.color === "slate" && "bg-slate-800"}
      `}
    >
      {a.icon}
    </div>

    {/* TEXT */}
    <p className="text-sm font-medium text-gray-800">
      {a.title}
    </p>
  </div>
))}

</div>

      </div>
{/* ================= PERFORMANCE + HOME WORK ================= */}
<div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-6">
{/* ================= PERFORMANCE (LEFT) ================= */}
<div className="xl:col-span-2 bg-white rounded-xl border p-5">

  {/* Header */}
  <div className="flex items-center justify-between mb-4">
    <h4 className="text-sm font-semibold">Performance</h4>
    <span className="text-xs text-gray-500 flex items-center gap-1">
      📅 2024 - 2025
    </span>
  </div>

  <div className="relative h-60">

    {/* Y Axis */}
    <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-xs text-gray-400">
      {[100, 75, 50, 25, 0].map(v => <span key={v}>{v}</span>)}
    </div>

    <svg viewBox="0 0 500 220" className="ml-10 w-full h-full">

      {/* Grid */}
      {[40, 80, 120, 160, 200].map(y => (
        <line key={y} x1="0" y1={y} x2="500" y2={y} stroke="#EEF2F7" />
      ))}

      {/* Area Fill */}
      <path
        d="M0,60 125,80 250,110 375,90 500,70 L500,220 L0,220 Z"
        fill="#EEF4FF"
      />

      {/* Attendance */}
      <polyline
        points="0,60 125,80 250,110 375,90 500,70"
        fill="none"
        stroke="#60A5FA"
        strokeWidth="2"
      />

      {/* Exam Score */}
      <polyline
        points="0,45 125,65 250,95 375,75 500,55"
        fill="none"
        stroke="#4F46E5"
        strokeWidth="2"
      />

      {/* Focus Line */}
      <line
        x1="250"
        y1="0"
        x2="250"
        y2="220"
        stroke="#CBD5E1"
        strokeDasharray="4"
      />
    </svg>

    {/* Tooltip */}
    <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-white border rounded-lg px-4 py-3 shadow text-xs">
      <p className="font-medium mb-1">Oct 2024</p>
      <p className="text-indigo-600">Exam Score <b>80%</b></p>
      <p className="text-sky-500">Attendance <b>40%</b></p>
    </div>
  </div>

  {/* Legend */}
  <div className="flex gap-6 mt-4 text-xs text-gray-500">
    <span className="flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-indigo-600" />
      Avg Score : 72%
    </span>
    <span className="flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-blue-400" />
      Avg Attendance : 95%
    </span>
  </div>

  {/* X Axis */}
  <div className="grid grid-cols-5 text-xs text-gray-400 mt-3 ml-10">
    <span>Quarter 1</span>
    <span>Quarter 2</span>
    <span>Half yearly</span>
    <span>Model</span>
    <span>Final Exam</span>
  </div>
</div>
{/* ================= HOME WORK (RIGHT) ================= */}
<div className="bg-white rounded-xl border p-5">

  {/* Header */}
  <div className="flex items-center justify-between mb-4">
  <h4 className="text-sm font-semibold">Home Works</h4>
  <span className="text-xs text-gray-500">📚 All Subject</span>
</div>

{[
  {
    sub: "Physics",
    color: "blue",
    title: "Write about Theory of Pendulum",
    teacher: "Aaron",
    due: "16 Jun 2024",
    percent: 90,
    img: H1,
  },
  {
    sub: "Chemistry",
    color: "green",
    title: "Chemistry - Change of Elements",
    teacher: "Hellana",
    due: "18 Jun 2024",
    percent: 65,
    img: H2,
  },
  {
    sub: "Maths",
    color: "yellow",
    title: "Maths - Problems to Solve Page 21",
    teacher: "Morgan",
    due: "21 Jun 2024",
    percent: 30,
    img: H3,
  },
  {
    sub: "English",
    color: "red",
    title: "English - Vocabulary Introduction",
    teacher: "Daniel Josua",
    due: "21 Jun 2024",
    percent: 10,
    img: H4,
  },
].map((h, i) => (
  <div
    key={i}
    className="flex items-center gap-3 p-3 rounded-lg border mb-3"
  >
    {/* ✅ Local Image */}
    <img
      src={h.img}
      alt={h.sub}
      className="w-12 h-12 rounded-lg object-cover"
    />

    {/* Info */}
    <div className="flex-1">
      <p
        className={`text-xs font-medium ${
          h.color === "blue"
            ? "text-blue-600"
            : h.color === "green"
            ? "text-green-600"
            : h.color === "yellow"
            ? "text-yellow-600"
            : "text-red-600"
        }`}
      >
        {h.sub}
      </p>

      <p className="text-sm font-medium leading-snug">
        {h.title}
      </p>

      <p className="text-xs text-gray-500">
        👤 {h.teacher} &nbsp; Due by : {h.due}
      </p>
    </div>

    {/* Circular Progress */}
    <div className="relative w-10 h-10">
      <svg viewBox="0 0 36 36" className="w-full h-full">
        <path
          d="M18 2.0845
             a 15.9155 15.9155 0 0 1 0 31.831
             a 15.9155 15.9155 0 0 1 0 -31.831"
          fill="none"
          stroke="#E5E7EB"
          strokeWidth="3"
        />
        <path
          d="M18 2.0845
             a 15.9155 15.9155 0 0 1 0 31.831"
          fill="none"
          stroke={
            h.color === "blue"
              ? "#3B82F6"
              : h.color === "green"
              ? "#22C55E"
              : h.color === "yellow"
              ? "#EAB308"
              : "#EF4444"
          }
          strokeWidth="3"
          strokeDasharray={`${h.percent}, 100`}
        />
      </svg>

      <span className="absolute inset-0 flex items-center justify-center text-[10px] font-semibold">
        {h.percent}%
      </span>
    </div>
  </div>
))}

</div>
  </div>
{/* ================= LEAVE + EXAM + FEES ================= */}
<div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-6">

{/* ================= LEAVE STATUS ================= */}

<div className="bg-white rounded-xl border">

  {/* Header */}
  <div className="flex justify-between items-center px-5 py-4 border-b">
    <h4 className="text-sm font-semibold">Leave Status</h4>
    <span className="text-xs text-gray-500">📅 This Year</span>
  </div>

  <div className="px-5 py-4">
    {[
      { title: "Emergency Leave", date: "15 Jun 2024", status: "Pending", icon: X, iconBg: "bg-red-100 text-red-500", badge: "bg-blue-500" },
      { title: "Medical Leave", date: "15 Jun 2024", status: "Approved", icon: Asterisk, iconBg: "bg-blue-100 text-blue-500", badge: "bg-green-500" },
      { title: "Medical Leave", date: "15 Jun 2024", status: "Declined", icon: Asterisk, iconBg: "bg-blue-100 text-blue-500", badge: "bg-red-500" },
      { title: "Fever", date: "15 Jun 2024", status: "Approved", icon: X, iconBg: "bg-red-100 text-red-500", badge: "bg-green-500" },
    ].map((l, i) => {
      const Icon = l.icon;
      return (
        <div
          key={i}
          className="flex items-center justify-between px-4 py-3 rounded-lg mb-3 bg-gray-50"
        >
          <div className="flex items-center gap-3">
            {/* ICON BOX */}
            <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${l.iconBg}`}>
              <Icon size={16} />
            </div>

            <div>
              <p className="text-sm font-medium">{l.title}</p>
              <p className="text-xs text-gray-500">
                Leave Date : {l.date}
              </p>
            </div>
          </div>

          <span className={`text-xs px-3 py-1 rounded-full text-white ${l.badge}`}>
            {l.status}
          </span>
        </div>
      );
    })}
  </div>
</div>

{/* ================= EXAM RESULT ================= */}
<div className="bg-white rounded-xl border">

  {/* Header */}
  <div className="flex items-center justify-between px-5 py-4 border-b">
    <h4 className="text-sm font-semibold">Exam Result</h4>
    <span className="text-xs text-gray-500 flex items-center gap-1">
      📅 1st Quarter
    </span>
  </div>

  <div className="px-5 py-4">

    {/* Subject Pills */}
    <div className="flex gap-2 mb-4">
      <span className="text-xs px-3 py-1 rounded bg-blue-100 text-blue-600">
        Mat : 100
      </span>
      <span className="text-xs px-3 py-1 rounded bg-green-100 text-green-600">
        Phy : 92
      </span>
      <span className="text-xs px-3 py-1 rounded bg-yellow-100 text-yellow-600">
        Che : 90
      </span>
      <span className="text-xs px-3 py-1 rounded bg-red-100 text-red-600">
        Eng : 80
      </span>
    </div>

    {/* Chart */}
    <div className="flex items-end justify-between h-48 px-4">

      {/* Y Axis */}
      <div className="flex flex-col justify-between h-full text-xs text-gray-400 mr-3">
        <span>100</span>
        <span>80</span>
        <span>60</span>
        <span>40</span>
        <span>20</span>
        <span>0</span>
      </div>

      {/* Bars */}
      <div className="flex flex-1 items-end justify-between">

        {[
          { label: "Mat", value: 100, active: false },
          { label: "Phy", value: 92, active: true },
          { label: "Che", value: 90, active: false },
          { label: "Eng", value: 80, active: false },
          { label: "Sci", value: 70, active: false },
        ].map((b, i) => (
          <div key={i} className="flex flex-col items-center gap-2">

            {/* Bar */}
            <div
              className={`w-10 rounded-lg ${
                b.active ? "bg-blue-600" : "bg-gray-200"
              }`}
              style={{ height: `${b.value * 1.5}px` }}
            />

            {/* Label */}
            <span className="text-xs text-gray-500">
              {b.label}
            </span>
          </div>
        ))}

      </div>
    </div>

  </div>
</div>
{/* ================= FEES REMINDER ================= */}
<div className="bg-white rounded-xl border">

  {/* Header */}
  <div className="flex items-center justify-between px-5 py-4 border-b">
    <h4 className="text-sm font-semibold">Fees Reminder</h4>
    <span className="text-xs text-gray-500 flex items-center gap-1">
      📅 2024 - 2025
    </span>
  </div>

  <div className="px-5 py-4 space-y-4">

    {[
      {
        title: "Transport Fees",
        amount: "$2500",
        date: "25 May 2024",
        icon: "🚌",
        iconBg: "bg-blue-100 text-blue-600",
      },
      {
        title: "Book Fees",
        amount: "$2500",
        date: "25 May 2024",
        icon: "📘",
        iconBg: "bg-green-100 text-green-600",
      },
      {
        title: "Exam Fees",
        amount: "$2500",
        date: "25 May 2024",
        icon: "📝",
        iconBg: "bg-purple-100 text-purple-600",
      },
      {
        title: "Mess Fees",
        amount: "$2500 + $150",
        due: true,
        icon: "🍽️",
        iconBg: "bg-red-100 text-red-600",
      },
      {
        title: "Hostel",
        amount: "$2500",
        date: "25 May 2024",
        icon: "🏨",
        iconBg: "bg-yellow-100 text-yellow-600",
      },
    ].map((f, i) => (
      <div
        key={i}
        className="flex items-center justify-between border rounded-lg px-4 py-3"
      >
        {/* LEFT ICON + INFO */}
        <div className="flex items-center gap-3">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center text-lg ${f.iconBg}`}
          >
            {f.icon}
          </div>

          <div>
            <p className="text-sm font-medium">{f.title}</p>
            <p
              className={`text-xs ${
                f.due ? "text-red-500" : "text-gray-500"
              }`}
            >
              {f.amount}
              {f.due && (
                <span className="ml-2 text-[10px] bg-red-100 text-red-600 px-2 py-0.5 rounded">
                  Due
                </span>
              )}
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        {f.due ? (
          <button className="bg-blue-600 text-white text-xs px-4 py-1.5 rounded">
            Pay now
          </button>
        ) : (
          <div className="text-xs text-gray-500 text-right">
            <p>Last Date</p>
            <p>{f.date}</p>
          </div>
        )}
      </div>
    ))}

  </div>
</div>
</div>

{/* ================= CLASS FACULTIES ================= */}
{/* ================= CLASS FACULTIES ================= */}
<div className="bg-white rounded-xl border p-5 mt-6">

  {/* Header */}
  <div className="flex items-center justify-between mb-4">
    <h4 className="text-sm font-semibold">Class Faculties</h4>

    <div className="flex gap-2">
      <button className="w-7 h-7 rounded-full border text-gray-400 flex items-center justify-center">
        ‹
      </button>
      <button className="w-7 h-7 rounded-full bg-black text-white flex items-center justify-center">
        ›
      </button>
    </div>
  </div>

  {/* Faculty Cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

    {[
      {
        name: "Aaron",
        subject: "Chemistry",
        img: C1,
      },
      {
        name: "Hellana",
        subject: "English",
        img: C2,
      },
      {
        name: "Morgan",
        subject: "Physics",
        img: C3,
      },
      {
        name: "Daniel Josua",
        subject: "Spanish",
        img: C4,
      },
    ].map((f, i) => (
      <div
        key={i}
        className="border rounded-lg p-4"
      >
        {/* Avatar + Info */}
        <div className="flex items-center gap-3 mb-3">
          <img
            src={f.img}
            alt={f.name}
            className="w-10 h-10 rounded-lg object-cover"
          />

          <div>
            <p className="text-sm font-semibold leading-tight">
              {f.name}
            </p>
            <p className="text-xs text-gray-500">
              {f.subject}
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <button className="flex-1 flex items-center justify-center gap-1 text-xs border rounded-md py-1.5 text-gray-600 hover:bg-gray-50">
            ✉️ Email
          </button>
          <button className="flex-1 flex items-center justify-center gap-1 text-xs border rounded-md py-1.5 text-gray-600 hover:bg-gray-50">
            💬 Chat
          </button>
        </div>
      </div>
    ))}

  </div>
</div>
{/* ================= NOTICE + SYLLABUS + TODO ================= */}
<div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-6">

  {/* ================= NOTICE BOARD ================= */}
  {/* ================= NOTICE BOARD ================= */}
<div className="bg-white rounded-xl border p-5">
  <div className="flex items-center justify-between mb-4">
    <h4 className="text-sm font-semibold">Notice Board</h4>
    <span className="text-xs text-blue-600 cursor-pointer">View All</span>
  </div>

  {[
    {
      title: "New Syllabus Instructions",
      date: "11 Mar 2024",
      icon: "📘",
      bg: "bg-blue-100 text-blue-600",
    },
    {
      title: "World Environment Day",
      date: "21 Apr 2024",
      icon: "🌱",
      bg: "bg-green-100 text-green-600",
    },
    {
      title: "Exam Preparation Notification!",
      date: "13 Mar 2024",
      icon: "🔔",
      bg: "bg-red-100 text-red-600",
    },
    {
      title: "Online Classes Preparation",
      date: "24 May 2024",
      icon: "💻",
      bg: "bg-cyan-100 text-cyan-600",
    },
    {
      title: "Exam Time Table Release",
      date: "24 May 2024",
      icon: "📅",
      bg: "bg-yellow-100 text-yellow-600",
    },
  ].map((n, i) => (
    <div
      key={i}
      className="flex items-start gap-3 py-3 border-b last:border-none"
    >
      <div
        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${n.bg}`}
      >
        {n.icon}
      </div>

      <div className="flex-1">
        <p className="text-sm font-medium">{n.title}</p>
        <p className="text-xs text-gray-500">
          Added on : {n.date}
        </p>
      </div>

      <span className="text-gray-400">›</span>
    </div>
  ))}
</div>
{/* ================= SYLLABUS ================= */}
<div className="bg-white rounded-xl border p-5">
  <h4 className="text-sm font-semibold mb-4">Syllabus</h4>

  {/* Info box */}
  <div className="border border-blue-400 bg-blue-50 text-blue-600 text-xs rounded-lg px-4 py-3 mb-4 flex gap-2">
    ℹ️ These Result are obtained from the syllabus completion on the respective Class
  </div>

  {[
    { sub: "Maths", w: "20%", c: "bg-indigo-500" },
    { sub: "Physics", w: "35%", c: "bg-sky-400" },
    { sub: "Chemistry", w: "55%", c: "bg-blue-600" },
    { sub: "Botany", w: "45%", c: "bg-green-500" },
    { sub: "English", w: "65%", c: "bg-yellow-500" },
    { sub: "Spanish", w: "80%", c: "bg-red-500" },
  ].map((s, i) => (
    <div
      key={i}
      className="flex items-center gap-4 px-3 py-2 rounded-lg hover:bg-gray-50"
    >
      {/* Subject name */}
      <span className="w-24 text-xs font-medium text-gray-700">
        {s.sub}
      </span>

      {/* Progress bar */}
      <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
        <div
          className={`h-full ${s.c} rounded-full`}
          style={{ width: s.w }}
        />
      </div>
    </div>
  ))}
</div>


  {/* ================= TODO ================= */}
  <div className="bg-white rounded-xl border p-5">
    <div className="flex items-center justify-between mb-4">
      <h4 className="text-sm font-semibold">Todo</h4>
      <span className="text-xs text-gray-500">Today</span>
    </div>

    {[
      { t: "Send Reminder to Students", time: "01:00 PM", status: "Completed", color: "bg-green-100 text-green-600", checked: true },
      { t: "Create Routine to new staff", time: "04:50 PM", status: "Inprogress", color: "bg-blue-100 text-blue-600" },
      { t: "Extra Class Info to Students", time: "04:55 PM", status: "Yet to Start", color: "bg-yellow-100 text-yellow-600" },
      { t: "Fees for Upcoming Academics", time: "04:55 PM", status: "Yet to Start", color: "bg-yellow-100 text-yellow-600" },
      { t: "English - Essay on Visit", time: "05:00 PM", status: "Yet to Start", color: "bg-yellow-100 text-yellow-600" },
    ].map((t, i) => (
      <div key={i} className="flex items-start gap-3 py-3 border-b last:border-none">
        <input type="checkbox" defaultChecked={t.checked} className="mt-1" />
        <div className="flex-1">
          <p className="text-sm font-medium">{t.t}</p>
          <p className="text-xs text-gray-500">{t.time}</p>
        </div>
        <span className={`text-[10px] px-2 py-0.5 rounded-full ${t.color}`}>
          {t.status}
        </span>
      </div>
    ))}
  </div>

</div>

    </DashboardLayout>
  );
}
