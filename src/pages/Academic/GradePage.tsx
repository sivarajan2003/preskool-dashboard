import { useEffect, useState } from "react";
import {
  RefreshCcw,
  Printer,
  ArrowUpDown,
  Eye, Pencil, Trash2,
  Plus,
  CalendarDays,
  Filter,
} from "lucide-react";
//import AddGradeModal from "../../components/AddGradeModal";
import { Calendar } from "lucide-react";
import AddGradeModal from "../../components/AddGradeModal";

/* ================= DATA ================= */

const INITIAL_DATA = [
  {
    id: "G180482",
    grade: "O",
    percentage: "90% - 100%",
    points: 10,
    status: "Active",
  },
  {
    id: "G180481",
    grade: "A+",
    percentage: "80% - 90%",
    points: 8,
    status: "Active",
  },
  {
    id: "G180480",
    grade: "A",
    percentage: "70% - 80%",
    points: 6,
    status: "Active",
  },
  {
    id: "G180479",
    grade: "B+",
    percentage: "60% - 70%",
    points: 4,
    status: "Active",
  },
  {
    id: "G180478",
    grade: "B",
    percentage: "50% - 60%",
    points: 3,
    status: "Active",
  },
  {
    id: "G180477",
    grade: "C+",
    percentage: "40% - 50%",
    points: 2,
    status: "Active",
  },
  {
    id: "G180476",
    grade: "C",
    percentage: "35% - 40%",
    points: 1,
    status: "Active",
  },
  {
    id: "G180475",
    grade: "F",
    percentage: "Below 35%",
    points: 0,
    status: "Active",
  },
];

/* ================= PAGE ================= */

export default function GradePage() {
    const [openAdd, setOpenAdd] = useState(false);

  const [data, setData] = useState(INITIAL_DATA);
  const [search, setSearch] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortAsc, setSortAsc] = useState(true);
  const [openFilter, setOpenFilter] = useState(false);
  const [statusFilter, setStatusFilter] = useState<"Active" | null>(null);
  const [pointsFilter, setPointsFilter] = useState<"High" | "Low" | null>(null);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const [openMenu, setOpenMenu] = useState<string | null>(null);
  
  const [dateFilter, setDateFilter] = useState<
  "Today" | "This Week" | "This Month" | null
>(null);

const [openCalendar, setOpenCalendar] = useState(false);
const [startDate, setStartDate] = useState("");
const [endDate, setEndDate] = useState("");
useEffect(() => {
    const close = () => setOpenCalendar(false);
    window.addEventListener("click", close);
    return () => window.removeEventListener("click", close);
  }, []);

  /* 🔄 REFRESH */
  const handleRefresh = () => {
    setData(INITIAL_DATA);
    setSearch("");
    setRowsPerPage(10);
    setCurrentPage(1);
  };

  /* 📤 EXPORT */
  const handleExport = () => {
    const csv =
      "data:text/csv;charset=utf-8," +
      ["ID,Grade,Percentage,Points,Status"]
        .concat(
          data.map(
            (d) =>
              `${d.id},${d.grade},${d.percentage},${d.points},${d.status}`
          )
        )
        .join("\n");

    const link = document.createElement("a");
    link.href = encodeURI(csv);
    link.download = "grade_list.csv";
    link.click();
  };

  /* 🔃 SORT */
  const handleSort = () => {
    setData((prev) =>
      [...prev].sort((a, b) =>
        sortAsc
          ? a.grade.localeCompare(b.grade)
          : b.grade.localeCompare(a.grade)
      )
    );
    setSortAsc(!sortAsc);
  };

  /* 🔍 SEARCH */
  const filtered = data.filter((d) => {
    const matchSearch =
      d.grade.toLowerCase().includes(search.toLowerCase()) ||
      d.id.toLowerCase().includes(search.toLowerCase());
  
    const matchStatus = statusFilter ? d.status === statusFilter : true;
  
    const matchPoints =
      pointsFilter === "High"
        ? d.points >= 5
        : pointsFilter === "Low"
        ? d.points < 5
        : true;
  
    return matchSearch && matchStatus && matchPoints;
  });
  

  /* 📄 PAGINATION */
  const totalPages = Math.ceil(filtered.length / rowsPerPage);
  const paginated = filtered.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  return (
    <div className="space-y-6">

      {/* ================= HEADER ================= */}
<div className="bg-white border rounded-2xl px-6 py-5">
  <div className="flex items-center justify-between">
    {/* LEFT */}
    <div>
      <h2 className="text-2xl font-semibold">
        Grade
      </h2>
      <p className="text-sm text-gray-500 mt-1">
        Dashboard / Academic / Grade
      </p>
    </div>

    {/* RIGHT ACTIONS */}
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

      {/* ADD GRADE (BLUE) */}
      <button
        onClick={() => setOpenAdd(true)}
        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center gap-1"
      >
        <Plus size={14} />
        Add Grade
      </button>
    </div>
  </div>
</div>

     {/* ================= SUB HEADER ================= */}
<div className="bg-white border rounded-xl px-6 py-4 space-y-4">
  {/* TOP ROW */}
  <div className="flex items-center justify-between">
    <h3 className="text-base font-semibold text-gray-900">
      Grade List
    </h3>

    <div className="flex items-center gap-3">
   

    <button
  onClick={(e) => {
    e.stopPropagation();
    setOpenCalendar(!openCalendar);
  }}
  className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50"
>
  <Calendar size={16} />
  {startDate && endDate
    ? `${startDate} - ${endDate}`
    : "Select Date Range"}
</button>
{openCalendar && (
  <div
    onClick={(e) => e.stopPropagation()}
    className="absolute z-40 mt-2 w-64 bg-white border rounded-xl shadow-lg p-4 space-y-3"
  >
    {/* QUICK RANGES */}
    <button
      className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100"
      onClick={() => {
        const today = new Date().toISOString().split("T")[0];
        setStartDate(today);
        setEndDate(today);
        setOpenCalendar(false);
      }}
    >
      Today
    </button>

    <button
      className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100"
      onClick={() => {
        const today = new Date();
        const last7 = new Date(today.setDate(today.getDate() - 7));
        setStartDate(last7.toISOString().split("T")[0]);
        setEndDate(new Date().toISOString().split("T")[0]);
        setOpenCalendar(false);
      }}
    >
      Last 7 Days
    </button>

    <button
      className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100"
      onClick={() => {
        const today = new Date();
        const last30 = new Date(today.setDate(today.getDate() - 30));
        setStartDate(last30.toISOString().split("T")[0]);
        setEndDate(new Date().toISOString().split("T")[0]);
        setOpenCalendar(false);
      }}
    >
      Last 30 Days
    </button>

    {/* CUSTOM RANGE */}
    <div className="pt-2 border-t space-y-2">
      <input
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        className="w-full border rounded-lg px-3 py-2 text-sm"
      />
      <input
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        className="w-full border rounded-lg px-3 py-2 text-sm"
      />

      <button
        onClick={() => setOpenCalendar(false)}
        className="w-full bg-blue-600 text-white py-2 rounded-lg text-sm"
      >
        Apply
      </button>
    </div>
  </div>
)}

      {/* FILTER */}
      <button
  onClick={(e) => {
    e.stopPropagation();
    setOpenFilter(!openFilter);
  }}
  className="flex items-center gap-2 px-3 py-2 border rounded-lg text-sm hover:bg-gray-50"
>
  <Filter size={14} />
  Filter
</button>
{openFilter && (
  <div
    onClick={(e) => e.stopPropagation()}
    className="absolute right-0 mt-2 w-56 bg-white border rounded-xl shadow-lg z-40 p-4 space-y-4"
  >
    {/* STATUS FILTER */}
    <div>
      <p className="text-xs font-semibold text-gray-500 mb-2">Status</p>

      {["Active"].map((s) => (
        <button
          key={s}
          onClick={() => setStatusFilter(s as any)}
          className={`w-full text-left px-3 py-2 rounded-lg text-sm
            ${
              statusFilter === s
                ? "bg-blue-600 text-white"
                : "hover:bg-gray-100"
            }`}
        >
          {s}
        </button>
      ))}
    </div>

    {/* GRADE POINTS FILTER */}
    <div>
      <p className="text-xs font-semibold text-gray-500 mb-2">
        Grade Points
      </p>

      <button
        onClick={() => setPointsFilter("High")}
        className={`w-full text-left px-3 py-2 rounded-lg text-sm
          ${
            pointsFilter === "High"
              ? "bg-blue-600 text-white"
              : "hover:bg-gray-100"
          }`}
      >
        High (≥ 5)
      </button>

      <button
        onClick={() => setPointsFilter("Low")}
        className={`w-full text-left px-3 py-2 rounded-lg text-sm
          ${
            pointsFilter === "Low"
              ? "bg-blue-600 text-white"
              : "hover:bg-gray-100"
          }`}
      >
        Low (&lt; 5)
      </button>
    </div>

    {/* CLEAR */}
    <button
      onClick={() => {
        setStatusFilter(null);
        setPointsFilter(null);
        setOpenFilter(false);
      }}
      className="w-full text-center text-sm text-red-600 pt-2 hover:underline"
    >
      Clear Filters
    </button>
  </div>
)}


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
        className="border rounded px-2 py-1 text-sm"
      >
        <option value={10}>10</option>
        <option value={25}>25</option>
      </select>
      Entries
    </div>

    <input
      type="text"
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
      <div className="bg-white border rounded-xl overflow-x-auto">
      <div className="min-w-[900px]">

  <table className="min-w-[900px] w-full text-sm">

        <thead className="bg-gray-50">
  <tr>
    <th className="px-4 py-3 text-center">ID</th>
    <th className="px-4 py-3 text-center">Grade</th>
    <th className="px-4 py-3 text-center">Percentage</th>
    <th className="px-4 py-3 text-center">Grade Points</th>
    <th className="px-4 py-3 text-center">Status</th>
    <th className="px-4 py-3 text-center">Action</th>
  </tr>
</thead>


<tbody>
  {paginated.map((d) => (
    <tr key={d.id} className="border-t hover:bg-gray-50">

      {/* ID */}
      <td className="px-4 py-3 text-center">
        <span className="text-blue-600 cursor-pointer">
          {d.id}
        </span>
      </td>

      {/* Grade */}
      <td className="px-4 py-3 text-center">
        {d.grade}
      </td>

      {/* Percentage */}
      <td className="px-4 py-3 text-center">
        {d.percentage}
      </td>

      {/* Grade Points */}
      <td className="px-4 py-3 text-center">
        {d.points}
      </td>

      {/* Status */}
      <td className="px-4 py-3 text-center">
        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs bg-green-100 text-green-600">
          ● Active
        </span>
      </td>

      {/* Action */}
      <td className="px-4 py-3 text-center">
  <div className="flex justify-center gap-3">

    {/* VIEW */}
    <button
      title="View"
      className="p-2 rounded hover:bg-gray-100 text-gray-600"
      onClick={() => console.log("View", d.id)}
    >
      <Eye size={16} />
    </button>

    {/* EDIT */}
    <button
      title="Edit"
      className="p-2 rounded hover:bg-gray-100 text-gray-600"
      onClick={() => console.log("Edit", d.id)}
    >
      <Pencil size={16} />
    </button>

    {/* DELETE */}
    <button
      title="Delete"
      className="p-2 rounded hover:bg-red-100 text-red-600"
      onClick={() => setDeleteId(d.id)}
    >
      <Trash2 size={16} />
    </button>

  </div>
</td>

    </tr>
  ))}
</tbody>
        </table>

        {/* ================= PAGINATION ================= */}
        <div className="flex justify-end gap-2 px-4 py-3 border-t text-sm">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
            className="page-btn"
          >
            Prev
          </button>

          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`page-btn ${
                currentPage === i + 1 ? "bg-blue-600 text-white" : ""
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
            className="page-btn"
          >
            Next
          </button>
        </div>
      </div>
</div>
      {openAdd && (
  <AddGradeModal
    onClose={() => setOpenAdd(false)}
    onAdd={(newGrade) =>
      setData((prev) => [newGrade, ...prev])
    }
  />
)}
{deleteId && (
  <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
    <div className="bg-white rounded-xl w-[380px] p-6">

      <h3 className="text-lg font-semibold mb-2">
        Confirm Delete
      </h3>

      <p className="text-sm text-gray-600 mb-6">
        Are you sure you want to delete this record?
        <br />
        This action cannot be undone.
      </p>

      <div className="flex justify-end gap-3">
        <button
          onClick={() => setDeleteId(null)}
          className="px-4 py-2 border rounded-lg text-sm"
        >
          Cancel
        </button>

        <button
          onClick={() => {
            setData(prev => prev.filter(item => item.id !== deleteId));
            setDeleteId(null);
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
