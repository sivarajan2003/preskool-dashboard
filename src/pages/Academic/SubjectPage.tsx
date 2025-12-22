import { useState } from "react";
import {
  RefreshCcw,
  Printer,
  ArrowUpDown,
  MoreVertical,
  Plus,
  CalendarDays,
} from "lucide-react";
import AddSubjectModal from "../../components/AddSubjectModal";

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
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [openAdd, setOpenAdd] = useState(false);
 

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
      {/* ================= HEADER ================= */}
<div className="bg-white border border-gray-200 rounded-2xl px-6 py-5 space-y-5">

{/* TOP ROW */}
<div className="flex items-center justify-between">
  <div>
    <h2 className="text-2xl font-semibold
">
      Subject
    </h2>
    <p className="text-sm text-gray-500 mt-1">
      Dashboard / Academic / Subject
    </p>
  </div>

  {/* ACTION BUTTONS */}
  <div className="flex items-center gap-3">
    <button className="p-2.5 border border-gray-200 rounded-lg hover:bg-gray-50">
      <RefreshCcw size={16} />
    </button>

    <button className="p-2.5 border border-gray-200 rounded-lg hover:bg-gray-50">
      <Printer size={16} />
    </button>

    <button
      onClick={handleExport}
      className="px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50"
    >
      Export
    </button>

    <button
  onClick={() => setOpenAdd(true)}
  className="px-4 py-2 bg-blue-600 text-white rounded-lg flex items-center gap-1"
>
  <Plus size={14} />
  Add Subject
</button>

  </div>
</div>

{/* SECOND ROW */}
<div className="flex items-center justify-between">

  {/* DATE FILTER */}
  <div className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-700">
    <CalendarDays size={16} />
    15 May 2020 - 24 May 2024
  </div>

  {/* SORT */}
  <button
    onClick={handleSort}
    className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50"
  >
    <ArrowUpDown size={16} />
    Sort By A-Z
  </button>
</div>
</div>

      {/* ROW PER PAGE + SEARCH */}
      <div className="flex justify-between px-4">
        <div className="flex items-center gap-2 text-sm">
          Row Per Page
          <select
            value={rowsPerPage}
            onChange={(e) => {
              setRowsPerPage(Number(e.target.value));
              setCurrentPage(1);
            }}
            className="border rounded px-2 py-1"
          >
            <option>10</option>
            <option>25</option>
            <option>50</option>
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
          className="border rounded-lg px-3 py-1.5 text-sm w-52"
        />
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
                <td className="px-4 py-3 text-center relative">
                  <button onClick={() => setOpenMenu(openMenu === s.id ? null : s.id)}>
                    <MoreVertical size={16} />
                  </button>

                  {openMenu === s.id && (
                    <div className="absolute right-6 top-8 bg-white border rounded-lg shadow z-20 min-w-[120px] flex flex-col">
                      <button className="px-4 py-2 text-sm text-left hover:bg-gray-100">
  View
</button>

<button className="px-4 py-2 text-sm text-left hover:bg-gray-100">
  Edit
</button>

<button className="px-4 py-2 text-sm text-left hover:bg-red-50 text-red-600">
  Delete
</button>

                    </div>
                  )}
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
    </div>
  );
}
