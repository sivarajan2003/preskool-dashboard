import { useState } from "react";
import {
  RefreshCcw,
  Printer,
  ArrowUpDown,
  Eye, Pencil, Trash2,
  Plus,
  CalendarDays,
} from "lucide-react";
import AddSubjectModal from "../../components/AddSubjectModal";
import { useEffect } from "react";

/* ================= DATA ================= */

const INITIAL_DATA = [
  { id: "SU128394", name: "English", code: "101", type: "Theory", status: "Active" },
  { id: "SU128393", name: "Math", code: "102", type: "Theory", status: "Active" },
  { id: "SU128392", name: "Physics", code: "103", type: "Practical", status: "Active" },
  { id: "SU128391", name: "Chemistry", code: "104", type: "Practical", status: "Active" },
  { id: "SU128390", name: "Biology", code: "105", type: "Practical", status: "Inactive" },
  { id: "SU128389", name: "Spanish", code: "106", type: "Theory", status: "Active" },
  { id: "SU128388", name: "Higher Math", code: "107", type: "Theory", status: "Active" },
  { id: "SU128387", name: "Moral Education", code: "108", type: "Practical", status: "Inactive" },
  { id: "SU128386", name: "Economics", code: "110", type: "Theory", status: "Active" },
];

/* ================= PAGE ================= */

export default function SubjectPage() {
  const [data, setData] = useState(INITIAL_DATA);
  const [search, setSearch] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortAsc, setSortAsc] = useState(true);
  //const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null);

  const [openAdd, setOpenAdd] = useState(false);
const [openDate, setOpenDate] = useState(false);
const [startDate, setStartDate] = useState("2020-05-15");
const [endDate, setEndDate] = useState("2024-05-24");

useEffect(() => {
  const closeMenu = () => {
    setOpenDate(false); // keep this if you still use date dropdown
  };

  window.addEventListener("click", closeMenu);
  return () => window.removeEventListener("click", closeMenu);
}, []);
  /* 🔄 REFRESH */
  const handleRefresh = () => {
    setData(INITIAL_DATA);
    setSearch("");
    setCurrentPage(1);
  };

  /* 📤 EXPORT */
  const handleExport = () => {
    const csv =
      "data:text/csv;charset=utf-8," +
      ["ID,Name,Code,Type,Status"]
        .concat(
          data.map((s) =>
            `${s.id},${s.name},${s.code},${s.type},${s.status}`
          )
        )
        .join("\n");

    const link = document.createElement("a");
    link.href = encodeURI(csv);
    link.download = "subjects.csv";
    link.click();
  };

  /* 🔃 SORT */
  const handleSort = () => {
    setData((prev) =>
      [...prev].sort((a, b) =>
        sortAsc
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name)
      )
    );
    setSortAsc(!sortAsc);
  };

  /* 🔍 FILTER */
  const filtered = data.filter(
    (s) =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.id.toLowerCase().includes(search.toLowerCase())
  );

  /* 📄 PAGINATION */
  const totalPages = Math.ceil(filtered.length / rowsPerPage);
  const paginated = filtered.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  return (
    <div className="space-y-6">

      {/* ================= HEADER ================= */}
<div className="bg-white border border-gray-200 rounded-2xl px-6 py-5 space-y-5">

{/* TOP ROW */}
<div className="flex items-center justify-between">
  <div>
    <h2 className="text-2xl font-semibold">Subject</h2>
    <p className="text-sm text-gray-500 mt-1">
      Dashboard / Academic / Subject
    </p>
  </div>

  <div className="flex items-center gap-3">
    {/* REFRESH */}
    <button
      onClick={handleRefresh}
      className="p-2.5 border rounded-lg hover:bg-gray-50"
    >
      <RefreshCcw size={16} />
    </button>

    {/* PRINT */}
    <button
      onClick={() => window.print()}
      className="p-2.5 border rounded-lg hover:bg-gray-50"
    >
      <Printer size={16} />
    </button>

    {/* EXPORT */}
    <button
      onClick={handleExport}
      className="px-4 py-2 border rounded-lg text-sm hover:bg-gray-50"
    >
      Export
    </button>

    {/* ADD SUBJECT */}
    <button
      onClick={() => setOpenAdd(true)}
      className="px-4 py-2 bg-blue-600 text-white rounded-lg flex items-center gap-1"
    >
      <Plus size={14} />
      Add Subject
    </button>
  </div>
</div>
</div>
{/* ================= SUB HEADER ================= */}
<div className="bg-white border border-gray-200 rounded-xl px-6 py-4 space-y-4">

  {/* TOP ROW */}
  <div className="flex items-center justify-between">
    <h3 className="text-base font-semibold text-gray-900">
      Subject List
    </h3>

    <div className="flex items-center gap-3">
      {/* DATE */}
      <div className="relative">
  <button
    onClick={(e) => {
      e.stopPropagation();
      setOpenDate(!openDate);
    }}
    className="flex items-center gap-2 px-3 py-2 border rounded-lg text-sm hover:bg-gray-50"
  >
    <CalendarDays size={14} />
    {startDate} - {endDate}
  </button>

  {openDate && (
    <div className="absolute right-0 mt-2 bg-white border rounded-lg shadow-lg p-4 z-30 w-64">
      <div className="space-y-3">
        <div>
          <label className="text-xs text-gray-500">Start Date</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="w-full border rounded px-2 py-1 text-sm"
          />
        </div>

        <div>
          <label className="text-xs text-gray-500">End Date</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="w-full border rounded px-2 py-1 text-sm"
          />
        </div>

        <button
          onClick={() => setOpenDate(false)}
          className="w-full bg-blue-600 text-white text-sm py-1.5 rounded mt-2"
        >
          Apply
        </button>
      </div>
    </div>
  )}
</div>


      {/* SORT */}
      <button
        onClick={handleSort}
        className="flex items-center gap-2 px-3 py-2 border rounded-lg text-sm hover:bg-gray-50"
      >
        <ArrowUpDown size={14} />
        Sort By A-Z
      </button>
    </div>
  </div>

  {/* BOTTOM ROW */}
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-2 text-sm text-gray-600">
      Row Per Page
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
      Entries
    </div>

    <input
      placeholder="Search"
      value={search}
      onChange={(e) => {
        setSearch(e.target.value);
        setCurrentPage(1);
      }}
      className="border rounded-lg px-3 py-2 text-sm w-52"
    />
  </div>
</div>

      {/* ================= TABLE ================= */}
      <div className="bg-white border rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left">ID</th>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Code</th>
              <th className="px-4 py-3">Type</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {paginated.map((s) => (
              <tr key={s.id} className="border-t hover:bg-gray-50">
                <td className="px-4 py-3 text-blue-600">{s.id}</td>
                <td className="px-4 py-3 text-center">{s.name}</td>
                <td className="px-4 py-3 text-center">{s.code}</td>
                <td className="px-4 py-3 text-center">{s.type}</td>
                <td className="px-4 py-3 text-center">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      s.status === "Active"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    ● {s.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-center">
  <div className="flex items-center justify-center gap-4">

    {/* VIEW */}
    <button
      title="View"
      onClick={() => alert(`View ${s.id}`)}
      className="text-gray-600 hover:text-blue-600"
    >
      <Eye size={18} />
    </button>

    {/* EDIT */}
    <button
      title="Edit"
      onClick={() => alert(`Edit ${s.id}`)}
      className="text-gray-600 hover:text-green-600"
    >
      <Pencil size={18} />
    </button>

    {/* DELETE */}
    <button
      title="Delete"
      onClick={() => setConfirmDeleteId(s.id)}
      className="text-red-600 hover:text-red-700"
    >
      <Trash2 size={18} />
    </button>

  </div>
</td>
 </tr>
            ))}
          </tbody>
        </table>

        {/* PAGINATION */}
        <div className="flex justify-end gap-2 px-4 py-3 border-t text-sm">
          <button disabled={currentPage === 1} onClick={() => setCurrentPage(p => p - 1)} className="page-btn">
            Prev
          </button>

          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`page-btn ${currentPage === i + 1 ? "bg-blue-600 text-white" : ""}`}
            >
              {i + 1}
            </button>
          ))}

          <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(p => p + 1)} className="page-btn">
            Next
          </button>
        </div>
      </div>
      {openAdd && (
  <AddSubjectModal
    onClose={() => setOpenAdd(false)}
    onAdd={(subject) =>
      setData((prev) => [subject, ...prev])
    }
  />
)}

      {/* ADD MODAL 
      {openAdd && (
        <AddSubjectModal
          onClose={() => setOpenAdd(false)}
          onAdd={(subject) => setData((prev) => [subject, ...prev])}
        />
      )}*/}
      {confirmDeleteId && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
    <div className="bg-white rounded-xl w-full max-w-sm p-6">

      <h3 className="text-lg font-semibold mb-2">
        Confirm Delete
      </h3>

      <p className="text-sm text-gray-600 mb-6">
        Are you sure you want to delete this subject?
        <br />
        This action cannot be undone.
      </p>

      <div className="flex justify-end gap-3">
        <button
          onClick={() => setConfirmDeleteId(null)}
          className="px-4 py-2 border rounded-lg text-sm"
        >
          Cancel
        </button>

        <button
          onClick={() => {
            setData((prev) =>
              prev.filter((item) => item.id !== confirmDeleteId)
            );
            setConfirmDeleteId(null);
          }}
          className="px-4 py-2 bg-red-600 text-white rounded-lg text-sm"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
)}

    </div>
  );
}
