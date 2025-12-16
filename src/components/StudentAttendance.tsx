import { CalendarDays } from "lucide-react";

export default function StudentAttendance() {
  const attendancePercent = 95;

  return (
    <div className="bg-white rounded-xl border p-5">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-3">
        <h4 className="font-semibold text-sm">Attendance</h4>
        <div className="flex items-center gap-1 text-xs text-gray-500">
          <CalendarDays className="w-4 h-4" />
          This Month
        </div>
      </div>

      <p className="text-xs text-gray-500 mb-4">
        No of total working days <span className="font-semibold">28 Days</span>
      </p>

      {/* COUNTS */}
      <div className="grid grid-cols-3 text-center mb-4">
        <div>
          <p className="text-xs text-gray-500">Present</p>
          <p className="font-semibold text-sm">25</p>
        </div>
        <div>
          <p className="text-xs text-gray-500">Absent</p>
          <p className="font-semibold text-sm">2</p>
        </div>
        <div>
          <p className="text-xs text-gray-500">Halfday</p>
          <p className="font-semibold text-sm">0</p>
        </div>
      </div>

      {/* SEMI CIRCLE */}
      <div className="relative flex justify-center items-center my-4">
        <svg width="180" height="100" viewBox="0 0 180 100">
          {/* background */}
          <path
            d="M10 90 A80 80 0 0 1 170 90"
            fill="none"
            stroke="#E5E7EB"
            strokeWidth="14"
          />

          {/* present (green) */}
          <path
            d="M10 90 A80 80 0 0 1 170 90"
            fill="none"
            stroke="#22C55E"
            strokeWidth="14"
            strokeDasharray={`${attendancePercent * 2.5} 400`}
            strokeLinecap="round"
          />
        </svg>

        {/* CENTER TEXT */}
        <div className="absolute text-center">
          <p className="text-xs text-gray-500">Attendance</p>
          <p className="text-xl font-bold">{attendancePercent}%</p>
        </div>

        {/* BLUE DOT (LATE) */}
        <div className="absolute right-10 bottom-2 w-3 h-3 bg-blue-500 rounded-full" />
      </div>

      {/* LEGEND */}
      <div className="flex justify-center gap-4 text-xs mb-4">
        <div className="flex items-center gap-1">
          <span className="w-2 h-2 bg-green-500 rounded-full" />
          Present
        </div>
        <div className="flex items-center gap-1">
          <span className="w-2 h-2 bg-red-500 rounded-full" />
          Absent
        </div>
        <div className="flex items-center gap-1">
          <span className="w-2 h-2 bg-blue-500 rounded-full" />
          Late
        </div>
        <div className="flex items-center gap-1">
          <span className="w-2 h-2 bg-gray-400 rounded-full" />
          Half Day
        </div>
      </div>

      {/* LAST 7 DAYS */}
      <div className="border-t pt-3">
        <div className="flex justify-between text-xs text-gray-500 mb-2">
          <span>Last 7 Days</span>
          <span>14 May 2024 - 21 May 2024</span>
        </div>

        <div className="flex gap-2">
          {["M", "T", "W", "T", "F", "S", "S"].map((day, i) => (
            <div
              key={i}
              className={`w-8 h-8 flex items-center justify-center rounded-md text-xs font-semibold
                ${
                  day === "F"
                    ? "bg-red-500 text-white"
                    : i < 4
                    ? "bg-green-500 text-white"
                    : "bg-gray-100 text-gray-400"
                }`}
            >
              {day}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
