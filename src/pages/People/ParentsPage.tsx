import { useState } from "react";
import {
  RefreshCcw,
  Printer,
  LayoutGrid,
  List,
  Filter,
  CalendarDays,
  ArrowUpDown,
  MoreVertical,
} from "lucide-react";
import AddStudentModal from "../../components/AddStudentModal";

/* ================= PARENTS DATA ================= */

const parents = [
    {
      id: "P124556",
      name: "Ravi Kumar",
      added: "25 Mar 2024",
      email: "ravi@example.com",
      phone: "+1 65738 58937",
      image: "https://i.pravatar.cc/150?img=12",
      student: {
        name: "Ananya Sharma",
        image: "https://i.pravatar.cc/150?img=8",
      },
    },
    {
      id: "P124555",
      name: "Shabana",
      added: "18 Mar 2024",
      email: "shabana@example.com",
      phone: "+1 65738 58937",
      image: "https://i.pravatar.cc/150?img=47",
      student: {
        name: "Mohammed Arif",
        image: "https://i.pravatar.cc/150?img=8",
      },
    },
    {
      id: "P124554",
      name: "Ravi kumar",
      added: "14 Mar 2024",
      email: "john@example.com",
      phone: "+1 65738 58937",
      image: "https://i.pravatar.cc/150?img=33",
      student: {
        name: "kavya",
        image: "https://i.pravatar.cc/150?img=8",
      },
    },
    {
      id: "P124552",
      name: "Arthur",
      added: "11 Feb 2024",
      email: "arth@example.com",
      phone: "+1 65738 58937",
      image: "https://i.pravatar.cc/150?img=18",
      student: {
        name: "Joann",
        image: "https://i.pravatar.cc/150?img=8",
      },
    },
    {
      id: "P124551",
      name: "Colleen",
      added: "24 Jan 2024",
      email: "coll@example.com",
      phone: "+1 65738 58937",
      image: "https://i.pravatar.cc/150?img=32",
      student: {
        name: "Joann",
        image: "https://i.pravatar.cc/150?img=8",
      },
    },
    {
      id: "P124550",
      name: "Robert",
      added: "19 Jan 2024",
      email: "rob@example.com",
      phone: "+1 65738 58937",
      image: "https://i.pravatar.cc/150?img=14",
      student: {
        name: "Joann",
        image: "https://i.pravatar.cc/150?img=8",
      },
    },
    {
      id: "P124548",
      name: "Michael",
      added: "22 Dec 2023",
      email: "mic@example.com",
      phone: "+1 65738 58937",
      image: "https://i.pravatar.cc/150?img=25",
      student: {
        name: "Joann",
        image: "https://i.pravatar.cc/150?img=8",
      },
    },
    {
      id: "P124547",
      name: "Mary",
      added: "15 Dec 2023",
      email: "mary@example.com",
      phone: "+1 65738 58937",
      image: "https://i.pravatar.cc/150?img=48",
      student: {
        name: "Joann",
        image: "https://i.pravatar.cc/150?img=8",
      },
    },
    {
      id: "P124546",
      name: "Edwin",
      added: "10 Dec 2023",
      email: "edw@example.com",
      phone: "+1 65738 58937",
      image: "https://i.pravatar.cc/150?img=41",
      student: {
        name: "Joann",
        image: "https://i.pravatar.cc/150?img=8",
      },
    },
    {
      id: "P124553",
      name: "Claudia",
      added: "27 Feb 2024",
      email: "cla@example.com",
      phone: "+1 65738 58937",
      image: "https://i.pravatar.cc/150?img=29",
      student: {
        name: "Joann",
        image: "https://i.pravatar.cc/150?img=8",
      },
    },
    {
      id: "P124549",
      name: "Jessie",
      added: "08 Jan 2024",
      email: "jes@example.com",
      phone: "+1 65738 58937",
      image: "https://i.pravatar.cc/150?img=21",
      student: {
        name: "Joann",
        image: "https://i.pravatar.cc/150?img=8",
      },
    },
    {
      id: "P124545",
      name: "Avila",
      added: "01 Dec 2023",
      email: "avi@example.com",
      phone: "+1 65738 58937",
      image: "https://i.pravatar.cc/150?img=36",
      student: {
        name: "Joann",
        image: "https://i.pravatar.cc/150?img=8",
      },
    },
  ];
  
/* ================= PAGE ================= */

export default function ParentsPage() {
  const [openFilter, setOpenFilter] = useState(false);

  const today = "15 May 2020 - 24 May 2024";
  const [view, setView] = useState<"grid" | "list">("grid");
  const [showCalendar, setShowCalendar] = useState(false);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [openAddStudent, setOpenAddStudent] = useState(false);
  const [parentsData, setParentsData] = useState(parents);
  const handleExport = () => {
    const headers = ["ID", "Name", "Email", "Phone", "Added"];
    const rows = parentsData.map((p) =>
      [p.id, p.name, p.email, p.phone, p.added].join(",")
    );
  
    const csv =
      "data:text/csv;charset=utf-8," +
      [headers.join(","), ...rows].join("\n");
  
    const link = document.createElement("a");
    link.href = encodeURI(csv);
    link.download = "parents.csv";
    link.click();
  };
  const handleSort = () => {
    const sorted = [...parentsData].sort((a, b) =>
      sortOrder === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    );
  
    setParentsData(sorted);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };
  
  return (
    <div className="space-y-6">

      {/* ================= HEADER ================= */}
      <div className="bg-white border rounded-xl p-4 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold">Parents</h2>
            <p className="text-sm text-gray-500">
              Dashboard / People / Parents
            </p>
          </div>

          <div className="flex items-center gap-2">
          <button
  onClick={() => setParentsData(parents)}
  className="p-2 border rounded-lg hover:bg-gray-50"
>
  <RefreshCcw size={16} />
</button>

<button
  onClick={() => window.print()}
  className="p-2 border rounded-lg hover:bg-gray-50"
>
  <Printer size={16} />
</button>

<button
  onClick={handleExport}
  className="px-4 py-2 text-sm border rounded-lg hover:bg-gray-50"
>
  Export
</button>

            <button
  onClick={() => setOpenAddStudent(true)}
  className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg"
>
  Add Student
</button>

          </div>
        </div>

        <div className="flex items-center justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 px-3 py-2 border rounded-lg text-sm text-gray-600">
              <CalendarDays size={16} />
              {today}
            </div>
            <button
  onClick={() => setOpenFilter(!openFilter)}
  className="flex items-center gap-2 px-3 py-2 border rounded-lg text-sm hover:bg-gray-50"
>
  <Filter size={16} />
  Filter
</button>
{openFilter && (
  <div className="absolute mt-2 w-40 bg-white border rounded-lg shadow p-3 z-20">
    <p className="text-xs text-gray-500 mb-2">Filter coming soon</p>
    <button
      onClick={() => setOpenFilter(false)}
      className="text-xs text-blue-600"
    >
      Close
    </button>
  </div>
)}


          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setView("grid")}
              className={`p-2 border rounded-lg ${
                view === "grid" ? "bg-blue-600 text-white" : ""
              }`}
            >
              <LayoutGrid size={16} />
            </button>
            <button
              onClick={() => setView("list")}
              className={`p-2 border rounded-lg ${
                view === "list" ? "bg-blue-600 text-white" : ""
              }`}
            >
              <List size={16} />
            </button>
            <button
  onClick={handleSort}
  className="flex items-center gap-2 px-3 py-2 border rounded-lg text-sm hover:bg-gray-50"
>
  <ArrowUpDown size={16} />
  Sort {sortOrder === "asc" ? "A-Z" : "Z-A"}
</button>

          </div>
        </div>
      </div>

      {/* ================= GRID ================= */}
      {view === "grid" && (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {parents.map((p) => (
          <div key={p.id} className="bg-white border rounded-2xl p-5">

            {/* ID + MENU */}
            <div className="flex items-center justify-between text-xs text-blue-600 mb-4">
              <span>{p.id}</span>
              <MoreVertical size={16} className="text-gray-400" />
            </div>

            {/* PROFILE */}
            <div className="flex items-center gap-4 mb-5">
              <img
                src={p.image}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="text-sm font-semibold text-gray-900">
                  {p.name}
                </h4>
                <p className="text-xs text-gray-500">
                  Added on {p.added}
                </p>
              </div>
            </div>

            {/* CONTACT */}
            <div className="grid grid-cols-2 gap-4 text-xs text-gray-600 pb-4 border-b">
              <div>
                <p className="text-gray-500 mb-1">Email</p>
                <p className="font-medium text-gray-800">{p.email}</p>
              </div>
              <div>
                <p className="text-gray-500 mb-1">Phone</p>
                <p className="font-medium text-gray-800">{p.phone}</p>
              </div>
            </div>

            {/* STUDENT + VIEW DETAILS */}
<div className="flex items-center justify-between mt-4">
  {/* STUDENT (LEFT) */}
  <div className="flex items-center gap-2">
    <img
      src={p.student.image}
      alt={p.student.name}
      className="w-7 h-7 rounded-full object-cover"
    />
    <span className="text-xs font-medium text-gray-700">
      {p.student.name}
    </span>
  </div>

  {/* VIEW DETAILS (RIGHT) */}
  <button
  className="
    px-4 py-1.5
    text-xs font-medium
    text-gray-600
    bg-gray-100
    rounded-lg
    hover:bg-gray-200
    transition
  "
>
  View Details
</button>

</div>

          </div>
        ))}
      </div>

)}
{view === "list" && (
  <div className="bg-white border rounded-xl overflow-hidden">
    <table className="w-full text-sm">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-4 py-3 text-left">ID</th>
          <th className="px-4 py-3">Name</th>
          <th className="px-4 py-3">Email</th>
          <th className="px-4 py-3">Phone</th>
          <th className="px-4 py-3">Added</th>
        </tr>
      </thead>
      <tbody>
        {parentsData.map((p) => (
          <tr key={p.id} className="border-t">
            <td className="px-4 py-3">{p.id}</td>
            <td className="px-4 py-3">{p.name}</td>
            <td className="px-4 py-3">{p.email}</td>
            <td className="px-4 py-3">{p.phone}</td>
            <td className="px-4 py-3">{p.added}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)}

      {/* LOAD MORE */}
      <div className="flex justify-center">
        <button className="px-6 py-2 text-sm bg-blue-600 text-white rounded-lg">
          Load More
        </button>
      </div>
      
    </div>
    
  );
}
