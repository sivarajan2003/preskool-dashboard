import { useState } from "react";
import {
  RefreshCcw,
  Printer,
  Filter,
  ArrowUpDown,
  MoreVertical,
  Plus,
  CalendarDays,
} from "lucide-react";
import AddClassModal from "../../components/AddClassModal";

/* ================= CLASSES DATA ================= */

const initialClasses = [
  { id: "C138038", className: "I", section: "A", students: 30, subjects: 3, status: "Active" },
  { id: "C138037", className: "I", section: "B", students: 25, subjects: 3, status: "Active" },
  { id: "C138036", className: "II", section: "A", students: 40, subjects: 3, status: "Active" },
  { id: "C138035", className: "II", section: "B", students: 35, subjects: 3, status: "Active" },
  { id: "C138034", className: "II", section: "C", students: 25, subjects: 3, status: "Inactive" },
  { id: "C138033", className: "III", section: "A", students: 30, subjects: 3, status: "Active" },
  { id: "C138032", className: "III", section: "B", students: 25, subjects: 5, status: "Active" },
  { id: "C138031", className: "IV", section: "A", students: 20, subjects: 5, status: "Active" },
  { id: "C138030", className: "IV", section: "B", students: 30, subjects: 5, status: "Inactive" },
  { id: "C138029", className: "V", section: "A", students: 35, subjects: 5, status: "Active" },
];

/* ================= PAGE ================= */

export default function ClassesPage() {
  const [data, setData] = useState(initialClasses);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [openFilter, setOpenFilter] = useState(false);
  const [statusFilter, setStatusFilter] = useState<"All" | "Active" | "Inactive">("All");
  const [search, setSearch] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [openAddClass, setOpenAddClass] = useState(false);

  
  const today = "15 May 2020 - 24 May 2024";

  /* 🔁 REFRESH */
  const handleRefresh = () => {
    setData(initialClasses);
    setStatusFilter("All");
  };

  /* 🖨 PRINT */
  const handlePrint = () => window.print();

  /* 📤 EXPORT */
  const handleExport = () => {
    const headers = ["ID", "Class", "Section", "Students", "Subjects", "Status"];
    const rows = data.map((c) =>
      [c.id, c.className, c.section, c.students, c.subjects, c.status].join(",")
    );

    const csv =
      "data:text/csv;charset=utf-8," +
      [headers.join(","), ...rows].join("\n");

    const link = document.createElement("a");
    link.href = encodeURI(csv);
    link.download = "classes.csv";
    link.click();
  };

  /* 🔀 SORT */
  const handleSort = () => {
    const sorted = [...data].sort((a, b) =>
      sortOrder === "asc"
        ? a.className.localeCompare(b.className)
        : b.className.localeCompare(a.className)
    );
    setData(sorted);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  /* 🔍 FILTER */
  const filteredData = data
  .filter((c) =>
    statusFilter === "All" ? true : c.status === statusFilter
  )
  .filter((c) =>
    c.className.toLowerCase().includes(search.toLowerCase()) ||
    c.section.toLowerCase().includes(search.toLowerCase()) ||
    c.id.toLowerCase().includes(search.toLowerCase())
  );
  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  const paginatedData = filteredData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );
  
  
  return (
    <div className="space-y-6">

      {/* ================= HEADER ================= */}
      <div className="bg-white border rounded-xl p-5 space-y-4">

        {/* TOP */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold">Classes</h2>
            <p className="text-sm text-gray-500">
              Dashboard / Academic / Classes
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button onClick={handleRefresh} className="p-2 border rounded-lg">
              <RefreshCcw size={16} />
            </button>
            <button onClick={handlePrint} className="p-2 border rounded-lg">
              <Printer size={16} />
            </button>
            <button
              onClick={handleExport}
              className="px-4 py-2 text-sm border rounded-lg"
            >
              Export
            </button>
            <button
  onClick={() => setOpenAddClass(true)}
  className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg flex items-center gap-1"
>
  <Plus size={14} /> Add Class
</button>

          </div>
        </div>

        {/* FILTER ROW */}
        <div className="flex items-center justify-between gap-3 flex-wrap">

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 px-3 py-2 border rounded-lg text-sm text-gray-600">
              <CalendarDays size={16} />
              {today}
            </div>

            <div className="relative">
              <button
                onClick={() => setOpenFilter(!openFilter)}
                className="flex items-center gap-2 px-3 py-2 border rounded-lg text-sm"
              >
                <Filter size={16} /> Filter
              </button>

              {openFilter && (
                <div className="absolute mt-2 w-36 bg-white border rounded-lg shadow p-2 z-20">
                  {["All", "Active", "Inactive"].map((s) => (
                    <button
                      key={s}
                      onClick={() => {
                        setStatusFilter(s as any);
                        setOpenFilter(false);
                      }}
                      className="block w-full text-left px-3 py-1.5 text-sm hover:bg-gray-100 rounded"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <button
            onClick={handleSort}
            className="flex items-center gap-2 px-3 py-2 border rounded-lg text-sm"
          >
            <ArrowUpDown size={16} />
            Sort {sortOrder === "asc" ? "A-Z" : "Z-A"}
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between px-4 py-3 border-b">

{/* LEFT — ROW PER PAGE */}
<div className="flex items-center gap-2 text-sm text-gray-600">
  <span>Row Per Page</span>
  <select
    value={rowsPerPage}
    onChange={(e) => {
      setRowsPerPage(Number(e.target.value));
      setCurrentPage(1);
    }}
    className="border rounded px-2 py-1"
  >
    <option value={10}>10</option>
    <option value={25}>25</option>
    <option value={50}>50</option>
  </select>
  <span>Entries</span>
</div>

{/* RIGHT — SEARCH */}
<input
  type="text"
  placeholder="Search"
  value={search}
  onChange={(e) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  }}
  className="border rounded-lg px-3 py-1.5 text-sm w-52"
/>
</div>

      {/* ================= TABLE ================= */}
      <div className="bg-white border rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-600">
            <tr>
              <th className="px-4 py-3 text-left">ID</th>
              <th className="px-4 py-3">Class</th>
              <th className="px-4 py-3">Section</th>
              <th className="px-4 py-3">No of Students</th>
              <th className="px-4 py-3">No of Subjects</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Action</th>
            </tr>
          </thead>

          <tbody>
          {paginatedData.map((c) => (
              <tr key={c.id} className="border-t hover:bg-gray-50">
                <td className="px-4 py-3 text-blue-600">{c.id}</td>
                <td className="px-4 py-3 text-center">{c.className}</td>
                <td className="px-4 py-3 text-center">{c.section}</td>
                <td className="px-4 py-3 text-center">{c.students}</td>
                <td className="px-4 py-3 text-center">{c.subjects}</td>
                <td className="px-4 py-3 text-center">
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      c.status === "Active"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {c.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-center relative">
                  <button onClick={() => setOpenMenu(openMenu === c.id ? null : c.id)}>
                    <MoreVertical size={16} />
                  </button>

                  {openMenu === c.id && (
                    <div className="absolute right-6 top-8 bg-white border rounded-lg shadow text-sm z-20">
                      <button className="block px-4 py-2 hover:bg-gray-50 w-full text-left">
                        View
                      </button>
                      <button className="block px-4 py-2 hover:bg-gray-50 w-full text-left">
                        Edit
                      </button>
                      <button className="block px-4 py-2 hover:bg-red-50 text-red-600 w-full text-left">
                        Delete
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex items-center justify-end gap-2 px-4 py-3 border-t text-sm">

  {/* PREV */}
  <button
    disabled={currentPage === 1}
    onClick={() => setCurrentPage(currentPage - 1)}
    className="px-3 py-1 border rounded disabled:opacity-40"
  >
    Prev
  </button>

  {/* PAGE NUMBERS */}
  {Array.from({ length: totalPages }).map((_, i) => {
    const page = i + 1;
    return (
      <button
        key={page}
        onClick={() => setCurrentPage(page)}
        className={`px-3 py-1 border rounded ${
          currentPage === page
            ? "bg-blue-600 text-white"
            : "hover:bg-gray-100"
        }`}
      >
        {page}
      </button>
    );
  })}

  {/* NEXT */}
  <button
    disabled={currentPage === totalPages}
    onClick={() => setCurrentPage(currentPage + 1)}
    className="px-3 py-1 border rounded disabled:opacity-40"
  >
    Next
  </button>

</div>

      </div>
      {openAddClass && (
  <AddClassModal
    onClose={() => setOpenAddClass(false)}
    onAdd={(newClass) => setData((prev) => [newClass, ...prev])}
  />
)}

    </div>
  );
}
