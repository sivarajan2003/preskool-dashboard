import DashboardLayout from "../../components/DashboardLayout";
import StudentProfileCard from "../../components/StudentProfileCard";
import {
  Wallet,
  FileCheck,
  CalendarDays,
  ClipboardCheck,
} from "lucide-react";
import StudentActionCard from "../../components/StudentActionCard";
import StudentPerformanceCard from "../../components/StudentPerformanceCard";
import HomeWorksCard from "../../components/HomeWorksCard";
import LeaveStatusCard from "../../components/LeaveStatusCard";
import ExamResultCard from "../../components/ExamResultCard";
import FeesReminderCard from "../../components/FeesReminderCard";
import ClassFacultyCard from "../../components/ClassFacultyCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import NoticeBoardCard from "../../components/NoticeBoardCard";
import SyllabusCard from "../../components/SyllabusCard";
import TodoCard from "../../components/TodoCard";

export default function StudentDashboard() {
  return (
    <DashboardLayout>

      {/* ================= HEADER ROW ================= */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold">Student Dashboard</h2>
          <p className="text-sm text-gray-500">
            Dashboard / Students Dashboard
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700">
            Exam Result
          </button>
          <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200">
            Fees Details
          </button>
        </div>
      </div>

      {/* ================= MAIN GRID ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

        {/* ========== LEFT COLUMN ========= */}
        <div className="lg:col-span-1 space-y-6">

          <StudentProfileCard />

          {/* TODAY'S CLASS */}
          <div className="bg-white rounded-xl border p-4">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-sm font-semibold">Today's Class</h4>
              <p className="text-xs text-gray-500">
                &lt; 16 Dec 2025 &gt;
              </p>
            </div>

            <div className="space-y-3">

              {[
                {
                  name: "English",
                  time: "09:00 - 09:45 AM",
                  status: "Completed",
                  color: "green",
                  img: 12,
                },
                {
                  name: "Chemistry",
                  time: "10:45 - 11:30 AM",
                  status: "Completed",
                  color: "green",
                  img: 32,
                },
                {
                  name: "Physics",
                  time: "11:30 - 12:15 AM",
                  status: "Inprogress",
                  color: "yellow",
                  img: 45,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3 border rounded-lg"
                >
                  <img
                    src={`https://i.pravatar.cc/40?img=${item.img}`}
                    className="w-10 h-10 rounded-lg"
                  />

                  <div className="flex-1">
                    <p className="text-sm font-medium">{item.name}</p>
                    <p className="text-xs text-gray-500">{item.time}</p>
                  </div>

                  <span
                    className={`text-xs px-3 py-1 rounded-full font-medium
                      ${
                        item.color === "green"
                          ? "bg-green-100 text-green-600"
                          : "bg-yellow-100 text-yellow-600"
                      }`}
                  >
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ========== CENTER COLUMN (ATTENDANCE) ========= */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl border p-6">

            <div className="flex justify-between mb-3">
              <h4 className="text-sm font-semibold">Attendance</h4>
              <span className="text-xs text-gray-500">📅 This Month</span>
            </div>

            <p className="text-xs text-gray-500 mb-4">
              No of total working days <b>28 Days</b>
            </p>

            <div className="grid grid-cols-3 text-center mb-6">
              <div>
                <p className="text-xs text-gray-500">Present</p>
                <p className="font-semibold">25</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Absent</p>
                <p className="font-semibold">2</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Halfday</p>
                <p className="font-semibold">0</p>
              </div>
            </div>

            {/* SEMI CIRCLE */}
            <div className="flex justify-center relative my-6">
              <div className="relative w-44 h-24 overflow-hidden">

                <div className="absolute w-44 h-44 border-[12px] border-gray-200 rounded-full bottom-0"></div>
                <div className="absolute w-44 h-44 border-[12px] border-green-500 rounded-full bottom-0 rotate-[210deg]"></div>
                <div className="absolute w-44 h-44 border-[12px] border-red-500 rounded-full bottom-0 rotate-[120deg]"></div>

                <div className="absolute right-6 bottom-2 w-3 h-3 bg-blue-500 rounded-full"></div>

                <div className="absolute inset-0 flex flex-col items-center justify-end pb-2">
                  <p className="text-xs text-gray-500">Attendance</p>
                  <p className="text-xl font-bold">95%</p>
                </div>
              </div>
            </div>

            {/* LEGEND */}
            <div className="flex justify-center gap-4 text-xs text-gray-500 mb-4">
              <span className="flex items-center gap-1"><span className="w-2 h-2 bg-green-500 rounded-full"></span>Present</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 bg-red-500 rounded-full"></span>Absent</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 bg-blue-500 rounded-full"></span>Late</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 bg-gray-400 rounded-full"></span>Half Day</span>
            </div>

            {/* LAST 7 DAYS */}
            <div>
              <div className="flex justify-between text-xs text-gray-500 mb-2">
                <span>Last 7 Days</span>
                <span>14 May 2024 - 21 May 2024</span>
              </div>

              <div className="flex gap-2">
                {["M","T","W","T","F","S","S"].map((d,i)=>(
                  <div key={i}
                    className={`w-8 h-8 flex items-center justify-center rounded text-xs font-medium
                    ${i===4?"bg-red-500 text-white":i<4?"bg-green-500 text-white":"bg-gray-100 text-gray-400"}`}
                  >
                    {d}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
        

        {/* ========== RIGHT COLUMN ========= */}
        {/* ================= SCHEDULES ================= */}
<div className="bg-white rounded-xl border p-4">
  {/* Header */}
  <div className="flex items-center justify-between mb-4">
    <h4 className="text-sm font-semibold">Schedules</h4>
    <button className="text-xs text-blue-600 font-medium flex items-center gap-1">
      + Add New
    </button>
  </div>

  {/* Month Navigation */}
  <div className="flex items-center justify-between mb-3">
    <p className="text-sm font-medium">July 2025</p>
    <div className="flex gap-2">
      <button className="w-7 h-7 rounded-full border text-gray-500">‹</button>
      <button className="w-7 h-7 rounded-full bg-black text-white">›</button>
    </div>
  </div>

  {/* Calendar */}
  <div className="grid grid-cols-7 text-xs text-center text-gray-400 mb-2">
    {["S","M","T","W","T","F","S"].map(d => (
      <span key={d}>{d}</span>
    ))}
  </div>

  <div className="grid grid-cols-7 gap-2 text-xs text-center mb-4">
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
    <div className="border rounded-lg p-3">
      <div className="flex items-center justify-between mb-1">
        <p className="text-sm font-medium">1st Quarterly</p>
        <span className="text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded-full">
          19 Days More
        </span>
      </div>
      <p className="text-xs font-medium">Mathematics</p>
      <p className="text-xs text-gray-500">
        🕒 01:30 - 02:15 PM
      </p>
      <p className="text-xs text-blue-600 mt-1">
        📍 Room No : 15
      </p>
    </div>

    <div className="border rounded-lg p-3">
      <div className="flex items-center justify-between mb-1">
        <p className="text-sm font-medium">2nd Quarterly</p>
        <span className="text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded-full">
          20 Days More
        </span>
      </div>
      <p className="text-xs font-medium">Physics</p>
      <p className="text-xs text-gray-500">
        🕒 01:30 - 02:15 PM
      </p>
      <p className="text-xs text-blue-600 mt-1">
        📍 Room No : 15
      </p>
    </div>
  </div>
</div>

      </div>
      {/* ================= QUICK ACTION CARDS ================= */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
  <StudentActionCard
    icon={Wallet}
    title="Pay Fees"
    bg="bg-blue-100"
    text="text-blue-600"
    border="border-blue-600"
  />

  <StudentActionCard
    icon={FileCheck}
    title="Exam Result"
    bg="bg-green-100"
    text="text-green-600"
    border="border-green-600"
  />

  <StudentActionCard
    icon={CalendarDays}
    title="Calendar"
    bg="bg-yellow-100"
    text="text-yellow-500"
    border="border-yellow-500"
  />

  <StudentActionCard
    icon={ClipboardCheck}
    title="Attendance"
    bg="bg-slate-100"
    text="text-slate-800"
    border="border-slate-800"
  />
</div>
{/* ================= PERFORMANCE + HOMEWORK ================= */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
  <div className="lg:col-span-2">
    <StudentPerformanceCard />
  </div>

  <div className="lg:col-span-1">
    <HomeWorksCard />
  </div>
</div>
{/* ================= LEAVE | EXAM | FEES ================= */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
  <LeaveStatusCard />
  <ExamResultCard />
  <FeesReminderCard />
</div>
{/* ================= CLASS FACULTIES ================= */}
<div className="bg-white border rounded-xl p-5 mt-6">
  {/* HEADER */}
  <div className="flex justify-between items-center mb-4">
    <h3 className="text-sm font-semibold">Class Faculties</h3>

    <div className="flex gap-2">
      <button className="w-7 h-7 border rounded-full flex items-center justify-center">
        <ChevronLeft className="w-4 h-4" />
      </button>
      <button className="w-7 h-7 border rounded-full flex items-center justify-center">
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  </div>

  {/* FACULTY LIST */}
  <div className="flex gap-4 overflow-x-auto scrollbar-hide">
    <ClassFacultyCard
      name="Aaron"
      subject="Chemistry"
      image="https://i.pravatar.cc/100?img=12"
    />
    <ClassFacultyCard
      name="Hellana"
      subject="English"
      image="https://i.pravatar.cc/100?img=32"
    />
    <ClassFacultyCard
      name="Morgan"
      subject="Physics"
      image="https://i.pravatar.cc/100?img=45"
    />
    <ClassFacultyCard
      name="Daniel Josua"
      subject="Spanish"
      image="https://i.pravatar.cc/100?img=56"
    />
    <ClassFacultyCard
      name="Teresa"
      subject="Maths"
      image="https://i.pravatar.cc/100?img=68"
    />
  </div>
</div>
{/* NOTICE + SYLLABUS + TODO */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
  <NoticeBoardCard />
  <SyllabusCard />
  <TodoCard />
</div>


    </DashboardLayout>
  );
}
