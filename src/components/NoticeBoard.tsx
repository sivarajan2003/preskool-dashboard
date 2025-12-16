import {
  BookOpen,
  Leaf,
  Bell,
  FileText,
  CalendarDays,
  Clock,
} from "lucide-react";

const notices = [
  {
    title: "New Syllabus Instructions",
    date: "11 Mar 2024",
    days: "20 Days",
    icon: BookOpen,
    bg: "bg-blue-50",
    color: "text-blue-600",
  },
  {
    title: "World Environment Day Program.....!!!",
    date: "21 Apr 2024",
    days: "15 Days",
    icon: Leaf,
    bg: "bg-green-50",
    color: "text-green-600",
  },
  {
    title: "Exam Preparation Notification!",
    date: "13 Mar 2024",
    days: "12 Days",
    icon: Bell,
    bg: "bg-red-50",
    color: "text-red-500",
  },
  {
    title: "Online Classes Preparation",
    date: "24 May 2024",
    days: "02 Days",
    icon: FileText,
    bg: "bg-cyan-50",
    color: "text-cyan-600",
  },
  {
    title: "Exam Time Table Release",
    date: "24 May 2024",
    days: "06 Days",
    icon: CalendarDays,
    bg: "bg-yellow-50",
    color: "text-yellow-600",
  },
];

export default function NoticeBoard() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 h-full">

      {/* HEADER */}
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-base font-semibold text-gray-900">
          Notice Board
        </h3>
        <span className="text-sm text-blue-600 cursor-pointer font-medium">
          View All
        </span>
      </div>

      {/* LIST */}
      <div className="relative space-y-6">

        {/* Vertical dotted line */}
        <div className="absolute left-[18px] top-6 bottom-6 border-l-2 border-dotted border-gray-200" />

        {notices.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="flex items-start justify-between gap-4">

              {/* LEFT ICON */}
              <div className="relative z-10">
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center ${item.bg}`}
                >
                  <Icon className={`w-4 h-4 ${item.color}`} />
                </div>
              </div>

              {/* TEXT */}
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-900 leading-snug">
                  {item.title}
                </p>
                <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                  <CalendarDays className="w-3.5 h-3.5" />
                  <span>Added on : {item.date}</span>
                </div>
              </div>

              {/* DAYS BADGE */}
              <div className="flex items-center gap-1 text-xs text-gray-700 bg-gray-100 px-2 py-1 rounded-md whitespace-nowrap">
                <Clock className="w-3.5 h-3.5" />
                {item.days}
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
}
