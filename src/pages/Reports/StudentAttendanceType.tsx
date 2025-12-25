import { useNavigate, useLocation } from "react-router-dom";
import {
  RefreshCcw,
  Printer,
  Download,
  CalendarDays,
  Filter,
  ArrowUpDown,
} from "lucide-react";

/* ================= REPORT TABS ================= */

const REPORT_TABS = [
  { label: "Attendance Report", path: "/report/attendance" },
  { label: "Students Attendance Type", path: "/report/student-attendance-type" },
  { label: "Daily Attendance", path: "/report/daily-attendance" },
  { label: "Student Day Wise", path: "/report/student-day-wise" },
  { label: "Teacher Day Wise", path: "/report/teacher-day-wise" },
  { label: "Teacher Report", path: "/report/teacher-report" },
  { label: "Staff Day Wise", path: "/report/staff-day-wise" },
  { label: "Staff Report", path: "/report/staff-report" },
];

export default function StudentAttendanceType() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleExport = () => {
    const csv =
      "data:text/csv;charset=utf-8,Student Attendance Type\nNo data available";
    const link = document.createElement("a");
    link.href = encodeURI(csv);
    link.download = "student_attendance_type.csv";
    link.click();
  };

  return (
    <div className="space-y-6">

      {/* ================= HEADER ================= */}
      <div className="bg-white border rounded-2xl px-6 py-5">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold">
              Student Attendance Type
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Dashboard / Report / Student Attendance Type
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button className="p-2.5 border rounded-lg">
              <RefreshCcw size={16} />
            </button>
            <button
              onClick={() => window.print()}
              className="p-2.5 border rounded-lg"
            >
              <Printer size={16} />
            </button>
            <button
              onClick={handleExport}
              className="flex items-center gap-2 px-4 py-2 border rounded-lg text-sm"
            >
              <Download size={14} /> Export
            </button>
          </div>
        </div>

        {/* ================= TABS ================= */}
        <div className="mt-6 border-b flex gap-6 overflow-x-auto">
          {REPORT_TABS.map((tab) => {
            const active = location.pathname === tab.path;

            return (
              <button
                key={tab.path}
                onClick={() => navigate(tab.path)}
                className={`pb-3 text-sm font-medium whitespace-nowrap
                  ${
                    active
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-500 hover:text-blue-600"
                  }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* ================= SUB HEADER ================= */}
      <div className="bg-white border rounded-xl px-6 py-4 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-semibold">
            Students Attendance Type List
          </h3>

          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 border rounded-lg text-sm">
              <CalendarDays size={14} /> 15 May 2020 - 24 May 2024
            </button>
            <button className="flex items-center gap-2 px-3 py-2 border rounded-lg text-sm">
              <Filter size={14} /> Filter
            </button>
            <button className="flex items-center gap-2 px-3 py-2 border rounded-lg text-sm">
              <ArrowUpDown size={14} /> Sort By A-Z
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-sm">
            Row Per Page <b>10</b> Entries
          </div>
          <input
            placeholder="Search"
            className="border rounded-lg px-3 py-2 text-sm w-52"
          />
        </div>
      </div>

      {/* ================= EMPTY STATE ================= */}
      <div className="bg-white border rounded-xl p-10 flex flex-col items-center justify-center text-center space-y-3">
        <p className="text-red-500 text-sm font-medium">
          No data available in table
        </p>

        <img
          src="https://cdn-icons-png.flaticon.com/512/7486/7486747.png"
          alt="No Data"
          className="w-28 opacity-80"
        />

        <p className="text-sm text-gray-500">
          Add New Record or Search with Different Criteria
        </p>
      </div>
    </div>
  );
}
