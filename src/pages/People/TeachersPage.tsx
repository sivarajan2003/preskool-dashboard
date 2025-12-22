import { useState } from "react";
import {
  RefreshCcw,
  Printer,
  LayoutGrid,
  List,
  Filter,
  ArrowUpDown,
  MoreVertical,
  Mail,
  Phone,
  Plus,
  Eye,
  Pencil,
  Trash2,
} from "lucide-react";
import AddTeacherModal from "../../components/AddTeacherModal";

/* ================= TEACHERS DATA ================= */

const teachers = [
  {
    id: "T849127",
    name: "Teresa",
    class: "III A",
    subject: "Physics",
    email: "teresa@example.com",
    phone: "+91 82932 7359",
    status: "Active",
    image: "https://i.pravatar.cc/150?img=47",
  },
  {
    id: "T849126",
    name: "Daniel",
    class: "II A",
    subject: "Computer",
    email: "daniel@example.com",
    phone: "+91 56752 8642",
    status: "Active",
    image: "https://i.pravatar.cc/150?img=12",
  },
  {
    id: "T849125",
    name: "Hellana",
    class: "VI A",
    subject: "English",
    email: "hellana@example.com",
    phone: "+91 23566 52683",
    status: "Active",
    image: "https://i.pravatar.cc/150?img=36",
  },
  {
    id: "T849124",
    name: "Erickson",
    class: "VI B",
    subject: "Spanish",
    email: "erickson@example.com",
    phone: "+91 42598 85573",
    status: "Active",
    image: "https://i.pravatar.cc/150?img=18",
  },
  {
    id: "T849123",
    name: "Morgan",
    class: "VIII",
    subject: "Env Science",
    email: "morgan@example.com",
    phone: "+91 63204 35730",
    status: "Active",
    image: "https://i.pravatar.cc/150?img=15",
  },
  {
    id: "T849122",
    name: "Aaron",
    class: "I A",
    subject: "Chemistry",
    email: "aaron@example.com",
    phone: "+91 26267 80542",
    status: "Inactive",
    image: "https://i.pravatar.cc/150?img=11",
  },
  {
    id: "T849121",
    name: "Jacqueline",
    class: "IV",
    subject: "Maths",
    email: "jacqueline@example.com",
    phone: "+91 77502 54845",
    status: "Active",
    image: "https://i.pravatar.cc/150?img=29",
  },
  {
    id: "T849120",
    name: "Raul",
    class: "IX",
    subject: "Biology",
    email: "raul@example.com",
    phone: "+91 67845 78784",
    status: "Active",
    image: "https://i.pravatar.cc/150?img=21",
  },
  {
    id: "T849119",
    name: "Elizabeth",
    class: "VIII",
    subject: "Finance",
    email: "elizabeth@example.com",
    phone: "+91 23566 52683",
    status: "Active",
    image: "https://i.pravatar.cc/150?img=48",
  },
  {
    id: "T849118",
    name: "Edward",
    class: "IX C",
    subject: "Economics",
    email: "edward@example.com",
    phone: "+91 14259 85573",
    status: "Active",
    image: "https://i.pravatar.cc/150?img=33",
  },
  {
    id: "T849117",
    name: "Maria",
    class: "X",
    subject: "Spanish",
    email: "maria@example.com",
    phone: "+91 97846 84518",
    status: "Active",
    image: "https://i.pravatar.cc/150?img=25",
  },
  {
    id: "T849116",
    name: "Jacky",
    class: "VI A",
    subject: "English",
    email: "jacky@example.com",
    phone: "+91 98392 37378",
    status: "Active",
    image: "https://i.pravatar.cc/150?img=41",
  },
];

/* ================= PAGE ================= */

export default function TeachersPage() {
  const [openAddTeacher, setOpenAddTeacher] = useState(false);

  const [selectedTeacher, setSelectedTeacher] = useState<any>(null);
const [openDetails, setOpenDetails] = useState(false);
const [openFilter, setOpenFilter] = useState(false);
const [statusFilter, setStatusFilter] = useState<"All" | "Active" | "Inactive">("All");

  const [view, setView] = useState<"grid" | "table">("grid");
  const [data, setData] = useState(teachers);
  const [visibleCount, setVisibleCount] = useState(12);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  /* SORT */
  const handleSort = () => {
    const sorted = [...data].sort((a, b) =>
      sortOrder === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    );
    setData(sorted);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  /* EXPORT */
  const handleExport = () => {
    const headers = ["ID", "Name", "Class", "Subject", "Email", "Phone", "Status"];
    const rows = data.map((t) =>
      [t.id, t.name, t.class, t.subject, t.email, t.phone, t.status].join(",")
    );
    const csv =
      "data:text/csv;charset=utf-8," +
      [headers.join(","), ...rows].join("\n");
    const link = document.createElement("a");
    link.href = encodeURI(csv);
    link.download = "teachers.csv";
    link.click();
  };
  const filteredData =
  statusFilter === "All"
    ? data
    : data.filter((t) => t.status === statusFilter);

  return (
    <div className="space-y-6">

      {/* ================= HEADER ================= */}
      <div className="bg-white border rounded-xl p-4 space-y-4">
        <div className="flex justify-between">
          <div>
            <h2 className="text-2xl font-semibold">Teachers</h2>
            <p className="text-sm text-gray-500">
              Dashboard / People / Teachers
            </p>
          </div>

          <div className="flex gap-2">
            <button onClick={() => setData(teachers)} className="p-2 border rounded-lg">
              <RefreshCcw size={16} />
            </button>
            <button onClick={() => window.print()} className="p-2 border rounded-lg">
              <Printer size={16} />
            </button>
            <button onClick={handleExport} className="px-4 py-2 border rounded-lg text-sm">
              Export
            </button>
            <button
  onClick={() => setOpenAddTeacher(true)}
  className="px-4 py-2 bg-blue-600 text-white rounded-lg flex items-center gap-1"
>
  <Plus size={14} />
  Add Teacher
</button>

          </div>
        </div>

        <div className="flex justify-between">
        <div className="relative">
  <button
    onClick={() => setOpenFilter((prev) => !prev)}
    className="flex items-center gap-2 px-3 py-2 border rounded-lg text-sm hover:bg-gray-50"
  >
    <Filter size={16} />
    Filter
  </button>

  {openFilter && (
    <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg p-3 z-20">
      <p className="text-xs text-gray-500 mb-2">Status</p>

      <button
        onClick={() => {
          setStatusFilter("All");
          setOpenFilter(false);
        }}
        className="w-full text-left text-sm px-2 py-1 hover:bg-gray-100 rounded"
      >
        All
      </button>

      <button
        onClick={() => {
          setStatusFilter("Active");
          setOpenFilter(false);
        }}
        className="w-full text-left text-sm px-2 py-1 hover:bg-gray-100 rounded"
      >
        Active
      </button>

      <button
        onClick={() => {
          setStatusFilter("Inactive");
          setOpenFilter(false);
        }}
        className="w-full text-left text-sm px-2 py-1 hover:bg-gray-100 rounded"
      >
        Inactive
      </button>
    </div>
  )}
</div>

          <div className="flex gap-2">
            <button onClick={() => setView("grid")} className={`p-2 border rounded-lg ${view === "grid" && "bg-blue-600 text-white"}`}>
              <LayoutGrid size={16} />
            </button>
            <button onClick={() => setView("table")} className={`p-2 border rounded-lg ${view === "table" && "bg-blue-600 text-white"}`}>
              <List size={16} />
            </button>
            <button onClick={handleSort} className="flex gap-2 px-3 py-2 border rounded-lg text-sm">
              <ArrowUpDown size={16} /> Sort {sortOrder === "asc" ? "A-Z" : "Z-A"}
            </button>
          </div>
        </div>
      </div>

      {/* ================= GRID ================= */}
      
      {view === "grid" && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredData.slice(0, visibleCount).map((t) => (
              <div key={t.id} className="bg-white border rounded-xl p-4">

                {/* TOP BAR */}
                <div className="flex justify-between items-center border-b pb-2 mb-3">
                  <span className="text-xs text-blue-600">{t.id}</span>

                  <span className={`text-xs px-2 py-0.5 rounded-full ${t.status === "Active" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}`}>
                    {t.status}
                  </span>

                  <div className="relative">
                    <button onClick={() => setOpenMenu(openMenu === t.id ? null : t.id)}>
                      <MoreVertical size={16} />
                    </button>

                    {openMenu === t.id && (
                      <div className="absolute right-0 mt-2 w-32 bg-white border rounded-lg shadow z-20">
                        <button className="flex gap-2 px-3 py-2 text-sm hover:bg-gray-50 w-full">
                          <Eye size={14} /> View
                        </button>
                        <button className="flex gap-2 px-3 py-2 text-sm hover:bg-gray-50 w-full">
                          <Pencil size={14} /> Edit
                        </button>
                        <button className="flex gap-2 px-3 py-2 text-sm text-red-600 hover:bg-red-50 w-full">
                          <Trash2 size={14} /> Delete
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* PROFILE */}
                <div className="flex items-center gap-3 mb-3 px-1">
                  <img src={t.image} className="w-10 h-10 rounded-full" />
                  <div>
                    <p className="font-semibold text-sm">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.class}</p>
                  </div>
                </div>

                {/* CONTACT */}
                <div className="border-t border-b py-2 text-xs text-gray-600 space-y-1 mb-3">
                  <p className="flex gap-1 items-center">
                    <Mail size={12} /> {t.email}
                  </p>
                  <p className="flex gap-1 items-center">
                    <Phone size={12} /> {t.phone}
                  </p>
                </div>

                {/* SUBJECT + VIEW */}
                <div className="flex justify-between items-center bg-gray-50 rounded-lg px-3 py-2">
                  <span className="text-xs px-2 py-0.5 rounded bg-red-100 text-red-600">
                    {t.subject}
                  </span>
                  <button
  onClick={() => {
    setSelectedTeacher(t);
    setOpenDetails(true);
  }}
  className="text-xs bg-gray-200 px-3 py-1 rounded"
>
  View Details
</button>

                </div>
              </div>
            ))}
          </div>

          {/* LOAD MORE */}
          {visibleCount < filteredData.length && (
  <div className="flex justify-center mt-6">
    <button
      onClick={() => setVisibleCount((v) => v + 4)}
      className="px-6 py-2 bg-blue-600 text-white rounded-lg"
    >
      Load More
    </button>
  </div>
)}

        </>
      )}
      
      {openDetails && selectedTeacher && (
  <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
    <div className="bg-white rounded-xl w-[400px] p-6">

      <div className="flex items-center gap-4 mb-4">
        <img
          src={selectedTeacher.image}
          className="w-14 h-14 rounded-full"
        />
        <div>
          <h3 className="font-semibold">{selectedTeacher.name}</h3>
          <p className="text-sm text-gray-500">
            {selectedTeacher.class} • {selectedTeacher.subject}
          </p>
        </div>
      </div>

      <div className="text-sm space-y-2 text-gray-600">
        <p><b>Email:</b> {selectedTeacher.email}</p>
        <p><b>Phone:</b> {selectedTeacher.phone}</p>
        <p><b>Status:</b> {selectedTeacher.status}</p>
      </div>

      <div className="flex justify-end mt-6">
        <button
          onClick={() => setOpenDetails(false)}
          className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg"
        >
          Close
        </button>
      </div>

    </div>
  </div>
)}
<AddTeacherModal
  open={openAddTeacher}
  onClose={() => setOpenAddTeacher(false)}
  onAdd={(newTeacher) =>
    setData((prev) => [newTeacher, ...prev])
  }
/>

    </div>
  );
}
