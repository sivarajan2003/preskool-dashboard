import { useState } from "react";

const applications = [
    {
      id: "ADM-2026-0020",
      name: "Vihaan Rao",
      avatar: "https://i.pravatar.cc/40?img=1",
      class: "Grade 2",
      date: "20 Jan 2026",
      status: "Interview Done",
    },
    {
      id: "ADM-2026-0030",
      name: "Ishaan Desai",
      avatar: "https://i.pravatar.cc/40?img=2",
      class: "Nursery",
      date: "20 Jan 2026",
      status: "Enrolled",
    },
    {
      id: "ADM-2026-0037",
      name: "Pranav Verma",
      avatar: "https://i.pravatar.cc/40?img=3",
      class: "Grade 1",
      date: "20 Jan 2026",
      status: "Interview Done",
    },
    {
      id: "ADM-2026-0046",
      name: "Arnav Patel",
      avatar: "https://i.pravatar.cc/40?img=4",
      class: "Grade 3",
      date: "20 Jan 2026",
      status: "Offer Sent",
    },
    {
      id: "ADM-2026-0013",
      name: "Arjun Kulkarni",
      avatar: "https://i.pravatar.cc/40?img=5",
      class: "Grade 1",
      date: "19 Jan 2026",
      status: "Enrolled",
    },
  
    // ✅ ADDITIONAL 10 RECORDS
    {
      id: "ADM-2026-0041",
      name: "Ishaan Kulkarni",
      avatar: "https://i.pravatar.cc/40?img=6",
      class: "Grade 3",
      date: "19 Jan 2026",
      status: "Registered",
    },
    {
      id: "ADM-2026-0023",
      name: "Pranav Mehta",
      avatar: "https://i.pravatar.cc/40?img=7",
      class: "Grade 2",
      date: "18 Jan 2026",
      status: "Interview Done",
    },
    {
      id: "ADM-2026-0038",
      name: "Vihaan Sharma",
      avatar: "https://i.pravatar.cc/40?img=8",
      class: "Grade 3",
      date: "18 Jan 2026",
      status: "Registered",
    },
    {
      id: "ADM-2026-0049",
      name: "Aarav Singh",
      avatar: "https://i.pravatar.cc/40?img=9",
      class: "Nursery",
      date: "17 Jan 2026",
      status: "Offer Sent",
    },
    {
      id: "ADM-2026-0052",
      name: "Riya Malhotra",
      avatar: "https://i.pravatar.cc/40?img=10",
      class: "Grade 1",
      date: "17 Jan 2026",
      status: "Interview Done",
    },
    {
      id: "ADM-2026-0055",
      name: "Kabir Joshi",
      avatar: "https://i.pravatar.cc/40?img=11",
      class: "Grade 2",
      date: "16 Jan 2026",
      status: "Enrolled",
    },
    {
      id: "ADM-2026-0057",
      name: "Anaya Iyer",
      avatar: "https://i.pravatar.cc/40?img=12",
      class: "Nursery",
      date: "16 Jan 2026",
      status: "Registered",
    },
    {
      id: "ADM-2026-0060",
      name: "Dev Menon",
      avatar: "https://i.pravatar.cc/40?img=13",
      class: "Grade 3",
      date: "15 Jan 2026",
      status: "Interview Done",
    },
    {
      id: "ADM-2026-0063",
      name: "Sara Khan",
      avatar: "https://i.pravatar.cc/40?img=14",
      class: "Grade 1",
      date: "15 Jan 2026",
      status: "Offer Sent",
    },
    {
      id: "ADM-2026-0066",
      name: "Neil Fernandes",
      avatar: "https://i.pravatar.cc/40?img=15",
      class: "Grade 2",
      date: "14 Jan 2026",
      status: "Enrolled",
    },
  ];
  
  
  const statusStyle = (status: string) => {
    switch (status) {
      case "Enrolled":
        return "bg-green-100 text-green-700";
      case "Interview Done":
        return "bg-indigo-100 text-indigo-700";
      case "Offer Sent":
        return "bg-cyan-100 text-cyan-700";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };
  
  export default function RecentApplications() {
    const [showAll, setShowAll] = useState(false);

const visibleApplications = showAll
  ? applications
  : applications.slice(0, 10);

    return (
      <div className="bg-white rounded-2xl border shadow-sm overflow-hidden">
        {/* HEADER */}
        <div className="flex justify-between items-center px-6 py-4 border-b">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Recent Applications
            </h3>
            <p className="text-sm text-gray-500">
              Latest admission requests
            </p>
          </div>
  
          <button
  onClick={() => setShowAll((prev) => !prev)}
  className="text-sm text-blue-600 font-medium hover:underline"
>
  {showAll ? "Show Less ↑" : "View All →"}
</button>

        </div>
  
        {/* TABLE */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-gray-600 uppercase text-xs">
              <tr>
                <th className="px-6 py-3 text-left">Application ID</th>
                <th className="px-6 py-3 text-left">Student Name</th>
                <th className="px-6 py-3 text-left">Class</th>
                <th className="px-6 py-3 text-left">Applied On</th>
                <th className="px-6 py-3 text-left">Status</th>
                <th className="px-6 py-3 text-left">Actions</th>
              </tr>
            </thead>
  
            <tbody className="divide-y">
            {visibleApplications.map((app) => (
                <tr key={app.id} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4 text-blue-600 font-medium">
                    {app.id}
                  </td>
  
                  <td className="px-6 py-4 flex items-center gap-3">
                    <img
                      src={app.avatar}
                      className="w-9 h-9 rounded-full"
                      alt={app.name}
                    />
                    <span className="font-medium text-gray-900">
                      {app.name}
                    </span>
                  </td>
  
                  <td className="px-6 py-4">{app.class}</td>
                  <td className="px-6 py-4">{app.date}</td>
  
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${statusStyle(
                        app.status
                      )}`}
                    >
                      {app.status}
                    </span>
                  </td>
  
                  <td className="px-6 py-4">
                    <button className="text-blue-600 font-medium hover:underline">
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  