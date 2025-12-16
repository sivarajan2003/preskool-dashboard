import {
  ChevronUp,
  ChevronDown,
  ChevronRight,
} from "lucide-react";

export default function PerformanceCard() {
  return (
    <div className="bg-white rounded-xl border p-5">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-base font-semibold text-gray-900">
          Performance
        </h3>

        <select className="border rounded-lg px-3 py-1.5 text-sm text-gray-600">
          <option>Class II</option>
        </select>
      </div>

      <div className="flex items-center justify-between">
        {/* LEFT STATS */}
        <div className="space-y-4">
          {/* TOP */}
          <div className="flex items-center gap-3 border border-dashed rounded-lg px-4 py-2">
            <ChevronUp className="w-4 h-4 text-blue-600" />
            <span className="text-sm text-gray-600 flex-1">Top</span>
            <span className="text-sm font-semibold">45</span>
          </div>

          {/* AVERAGE */}
          <div className="flex items-center gap-3 border border-dashed rounded-lg px-4 py-2">
            <ChevronRight className="w-4 h-4 text-yellow-500" />
            <span className="text-sm text-gray-600 flex-1">Average</span>
            <span className="text-sm font-semibold">11</span>
          </div>

          {/* BELOW AVG */}
          <div className="flex items-center gap-3 border border-dashed rounded-lg px-4 py-2">
            <ChevronDown className="w-4 h-4 text-red-500" />
            <span className="text-sm text-gray-600 flex-1">Below Avg</span>
            <span className="text-sm font-semibold">02</span>
          </div>
        </div>

        {/* RIGHT DONUT */}
        <div className="relative w-28 h-28">
          <svg viewBox="0 0 36 36" className="w-full h-full">
            {/* BLUE */}
            <path
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="#2563EB"
              strokeWidth="3.5"
              strokeDasharray="60, 100"
            />

            {/* YELLOW */}
            <path
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="#FACC15"
              strokeWidth="3.5"
              strokeDasharray="25, 100"
              strokeDashoffset="-60"
            />

            {/* RED */}
            <path
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="#EF4444"
              strokeWidth="3.5"
              strokeDasharray="10, 100"
              strokeDashoffset="-85"
            />
          </svg>

          {/* CENTER TEXT */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-lg font-semibold">95%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
