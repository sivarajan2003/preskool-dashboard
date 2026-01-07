import { Outlet } from "react-router-dom";
import { FileText, AlertTriangle, ShieldAlert } from "lucide-react";
import { useNavigate } from "react-router-dom";

const reasons = [
  {
    title: "Exam Reason",
    description: "Reasons related to exams (absence, re-test, malpractice)",
    icon: FileText,
    path: "exam",
  },
  {
    title: "Leave Reason",
    description: "Reasons for leave (medical, personal, emergency)",
    icon: AlertTriangle,
    path: "leave",
  },
  {
    title: "Disciplinary Reason",
    description: "Student disciplinary issues and actions",
    icon: ShieldAlert,
    path: "disciplinary",
  },
];

export default function ReasonsPage() {
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-1">Reasons</h2>
      <p className="text-sm text-gray-500 mb-6">
        Academic / Reasons
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {reasons.map((item) => (
          <div
            key={item.title}
            onClick={() => navigate(item.path)}
            className="bg-white border rounded-xl p-5 hover:shadow-md transition cursor-pointer"
          >
            <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
              <item.icon className="w-6 h-6 text-blue-600" />
            </div>

            <h3 className="font-semibold text-gray-800">
              {item.title}
            </h3>

            <p className="text-sm text-gray-500 mt-1">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      {/* 🔴 THIS IS REQUIRED */}
      <Outlet />
    </div>
  );
}
