import { useState } from "react";
import {
  LayoutGrid,
  List,
  Phone,
  Mail,
  MessageCircle,
  RefreshCcw,
  Printer,
  Filter,
  CalendarDays,
  ArrowUpDown,
} from "lucide-react";
import AddFeesModal from "../../components/AddFeesModal";
import AddStudentModal from "../../components/AddStudentModal";
import { MoreVertical, Eye, Pencil, Trash2 } from "lucide-react";

/* ================= STUDENT DATA ================= */

const students = [
  {
    id: "AD9982434",
    name: "Janet Daniel",
    class: "VIII, A",
    rollNo: "35013",
    gender: "Female",
    joined: "10 Jan 2015",
    status: "Active",
    image: "https://i.pravatar.cc/150?img=47",
  },
  {
    id: "AD9982433",
    name: "Joann Michael",
    class: "IV, B",
    rollNo: "35012",
    gender: "Male",
    joined: "19 Aug 2014",
    status: "Active",
    image: "https://i.pravatar.cc/150?img=12",
  },
  {
    id: "AD9982432",
    name: "Kathleen Dison",
    class: "III, A",
    rollNo: "35011",
    gender: "Female",
    joined: "5 Dec 2017",
    status: "Active",
    image: "https://i.pravatar.cc/150?img=32",
  },
  {
    id: "AD9982431",
    name: "Gifford Smith",
    class: "I, B",
    rollNo: "35010",
    gender: "Male",
    joined: "22 Mar 2018",
    status: "Active",
    image: "https://i.pravatar.cc/150?img=20",
  },
  {
    id: "AD9982430",
    name: "Lisa Gourley",
    class: "II, B",
    rollNo: "35009",
    gender: "Female",
    joined: "13 May 2017",
    status: "Inactive",
    image: "https://i.pravatar.cc/150?img=44",
  },
  {
    id: "AD9982429",
    name: "Ralph Claudia",
    class: "III, B",
    rollNo: "35008",
    gender: "Male",
    joined: "20 Jun 2015",
    status: "Active",
    image: "https://i.pravatar.cc/150?img=15",
  },
  {
    id: "AD9982428",
    name: "Julie Scott",
    class: "V, A",
    rollNo: "35007",
    gender: "Female",
    joined: "18 Jan 2023",
    status: "Active",
    image: "https://i.pravatar.cc/150?img=36",
  },
  {
    id: "AD9982427",
    name: "Ryan Clement",
    class: "VI, A",
    rollNo: "35006",
    gender: "Male",
    joined: "26 Nov 2012",
    status: "Active",
    image: "https://i.pravatar.cc/150?img=18",
  },
  {
    id: "AD9982426",
    name: "Susan Boswell",
    class: "VIII, B",
    rollNo: "35005",
    gender: "Female",
    joined: "26 May 2020",
    status: "Inactive",
    image: "https://i.pravatar.cc/150?img=25",
  },
  {
    id: "AD9982425",
    name: "Richard Mayes",
    class: "VII, B",
    rollNo: "35004",
    gender: "Male",
    joined: "6 Oct 2022",
    status: "Active",
    image: "https://i.pravatar.cc/150?img=14",
  },
  {
    id: "AD9982424",
    name: "Veronica Randle",
    class: "IX, A",
    rollNo: "35003",
    gender: "Female",
    joined: "27 Dec 2009",
    status: "Active",
    image: "https://i.pravatar.cc/150?img=29",
  },
  {
    id: "AD9982423",
    name: "Thomas Hunt",
    class: "X, A",
    rollNo: "35002",
    gender: "Male",
    joined: "11 Aug 2008",
    status: "Active",
    image: "https://i.pravatar.cc/150?img=11",
  },
];

/* ================= MAIN PAGE ================= */

export default function StudentsPage() {
    const [view, setView] = useState<"grid" | "table">("grid");
    const [openFees, setOpenFees] = useState(false);
    const [selectedStudent, setSelectedStudent] = useState("");
    const [visibleCount, setVisibleCount] = useState(8);
    const [openMenuId, setOpenMenuId] = useState<string | null>(null);
    const [studentList, setStudentList] = useState(students);
    const [openAddStudent, setOpenAddStudent] = useState(false);
  
    /* ✅ REAL TIME DATE */
    const today = new Date().toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  
    /* EXPORT */
    const handleExport = () => {
      const headers = [
        "ID",
        "Name",
        "Class",
        "Roll No",
        "Gender",
        "Joined",
        "Status",
      ];
  
      const rows = studentList.map((s) => [
        s.id,
        s.name,
        s.class,
        s.rollNo,
        s.gender,
        s.joined,
        s.status,
      ]);
  
      const csv =
        "data:text/csv;charset=utf-8," +
        [headers, ...rows].map((r) => r.join(",")).join("\n");
  
      const link = document.createElement("a");
      link.href = encodeURI(csv);
      link.download = "students_list.csv";
      link.click();
    };
  return (
    <div className="space-y-6">

      {/* ================= HEADER (IMG-1 MATCH) ================= */}
      <div className="bg-white border rounded-xl p-4 space-y-4">

        {/* TOP ROW */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold">Students</h2>
            <p className="text-sm text-gray-500">
              Dashboard / People / Students
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button className="p-2 border rounded-lg hover:bg-gray-50">
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

        {/* SECOND ROW */}
        <div className="flex flex-wrap items-center justify-between gap-3">

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 px-3 py-2 border rounded-lg text-sm text-gray-600">
              <CalendarDays size={16} />
              {today} - {today}
            </div>

            <button className="flex items-center gap-2 px-3 py-2 border rounded-lg text-sm hover:bg-gray-50">
              <Filter size={16} />
              Filter
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setView("grid")}
              className={`p-2 rounded-lg border ${
                view === "grid"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-600"
              }`}
            >
              <LayoutGrid size={16} />
            </button>

            <button
              onClick={() => setView("table")}
              className={`p-2 rounded-lg border ${
                view === "table"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-600"
              }`}
            >
              <List size={16} />
            </button>

            <button className="flex items-center gap-2 px-3 py-2 border rounded-lg text-sm hover:bg-gray-50">
              <ArrowUpDown size={16} />
              Sort By A-Z
            </button>
          </div>
        </div>
      </div>
      {/* ================= GRID VIEW ================= */}
     
{view === "grid" && (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
{studentList.slice(0, visibleCount).map((s) => (
      <div
        key={s.id}
        className="bg-white border rounded-xl p-4 hover:shadow-md transition"
      >
        {/* TOP BAR */}
        <div className="flex items-center justify-between pb-3 border-b">
          <span className="text-xs font-medium text-blue-600">
            {s.id}
          </span>

          <div className="flex items-center gap-2">
            <span
              className={`text-xs px-2 py-0.5 rounded-full flex items-center gap-1 ${
                s.status === "Active"
                  ? "bg-green-100 text-green-600"
                  : "bg-red-100 text-red-600"
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-current" />
              {s.status}
            </span>

            <div className="relative">
  <button
    onClick={() =>
      setOpenMenuId(openMenuId === s.id ? null : s.id)
    }
    className="p-1 rounded hover:bg-gray-100"
  >
    <MoreVertical size={16} className="text-gray-500" />
  </button>

  {/* DROPDOWN */}
  {openMenuId === s.id && (
    <div className="absolute right-0 mt-2 w-36 bg-white border rounded-lg shadow-lg z-20">
      
      <button
        onClick={() => {
          setOpenMenuId(null);
          console.log("View", s.name);
        }}
        className="w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-gray-50"
      >
        <Eye size={14} /> View
      </button>

      <button
        onClick={() => {
          setOpenMenuId(null);
          console.log("Edit", s.name);
        }}
        className="w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-gray-50"
      >
        <Pencil size={14} /> Edit
      </button>

      <button
        onClick={() => {
          setOpenMenuId(null);
          alert(`Delete ${s.name}`);
        }}
        className="w-full flex items-center gap-2 px-3 py-2 text-sm text-red-600 hover:bg-red-50"
      >
        <Trash2 size={14} /> Delete
      </button>

    </div>
  )}
</div>
          </div>
        </div>

        {/* PROFILE BOX */}
        <div className="bg-gray-50 rounded-lg p-3 flex items-center gap-3 my-4">
          <img
            src={s.image}
            alt={s.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h4 className="text-sm font-semibold text-gray-800">
              {s.name}
            </h4>
            <p className="text-xs text-gray-500">{s.class}</p>
          </div>
        </div>

       {/* INFO */}
<div className="grid grid-cols-3 gap-y-3 text-xs text-gray-600 pb-4 border-b">
  <div>
    <p className="text-gray-500">Roll No</p>
    <p className="font-medium text-gray-800">
      {s.rollNo}
    </p>
  </div>
  <div>
    <p className="text-gray-500">Gender</p>
    <p className="font-medium text-gray-800">
      {s.gender}
    </p>
  </div>
  <div>
    <p className="text-gray-500">Joined On</p>
    <p className="font-medium text-gray-800">
      {s.joined}
    </p>
  </div>
</div>


        {/* ACTIONS */}
        <div className="flex items-center justify-between pt-2">
          <div className="flex gap-2">
            <button className="p-2 border rounded-lg hover:bg-gray-50">
              <MessageCircle size={14} />
            </button>
            {/* PHONE */}
  <a
    href={`tel:+919876543210`}
    className="p-2 border rounded-lg hover:bg-gray-50"
    title="Call"
  >
    <Phone size={14} />
  </a>

  {/* EMAIL */}
  <a
    href={`mailto:${s.name.replace(" ", ".").toLowerCase()}@school.com`}
    className="p-2 border rounded-lg hover:bg-gray-50"
    title="Email"
  >
    <Mail size={14} />
  </a>
          </div>

          <button
  onClick={() => {
    setSelectedStudent(s.name);
    setOpenFees(true);
  }}
  className="px-3 py-1.5 text-xs bg-gray-100 rounded-lg hover:bg-gray-200"
>
  Add Fees
</button>

        </div>
      </div>
    ))}
  </div>
)}

      {/* ================= TABLE VIEW ================= */}
      {view === "table" && (
        <div className="bg-white border rounded-xl overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-gray-600">
              <tr>
                <th className="px-4 py-3 text-left">ID</th>
                <th className="px-4 py-3 text-left">Student</th>
                <th className="px-4 py-3">Class</th>
                <th className="px-4 py-3">Roll</th>
                <th className="px-4 py-3">Gender</th>
                <th className="px-4 py-3">Joined</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map((s) => (
                <tr
                  key={s.id}
                  className="border-t hover:bg-gray-50"
                >
                  <td className="px-4 py-3 text-blue-600">
                    {s.id}
                  </td>
                  <td className="px-4 py-3 flex items-center gap-2">
                    <img
                      src={s.image}
                      className="w-8 h-8 rounded-full"
                    />
                    {s.name}
                  </td>
                  <td className="px-4 py-3 text-center">
                    {s.class}
                  </td>
                  <td className="px-4 py-3 text-center">
                    {s.rollNo}
                  </td>
                  <td className="px-4 py-3 text-center">
                    {s.gender}
                  </td>
                  <td className="px-4 py-3 text-center">
                    {s.joined}
                  </td>
                  <td className="px-4 py-3 text-center">
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${
                        s.status === "Active"
                          ? "bg-green-100 text-green-600"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {s.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <MoreVertical size={16} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {view === "grid" && visibleCount < students.length && (
  <div className="flex justify-center mt-8">
    <button
      onClick={() => setVisibleCount((prev) => prev + 4)}
      className="
        flex items-center gap-2
        px-5 py-2
        text-sm font-medium
        bg-blue-600 text-white
        rounded-lg
        hover:bg-blue-700
        transition
      "
    >
      Load More
    </button>
  </div>
)}
      <AddFeesModal
  open={openFees}
  onClose={() => setOpenFees(false)}
  studentName={selectedStudent}
/>
<AddStudentModal
  open={openAddStudent}
  onClose={() => setOpenAddStudent(false)}
  onAdd={(newStudent) =>
    setStudentList((prev) => [newStudent, ...prev])
  }
/>

    </div>
  );
}
