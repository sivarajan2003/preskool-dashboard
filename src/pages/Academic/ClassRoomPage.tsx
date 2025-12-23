import { useState } from "react";
import {
  RefreshCcw,
  Printer,
  Filter,
  ArrowUpDown,
  MoreVertical,

  CalendarDays,
} from "lucide-react";
import AddClassRoomModal from "../../components/AddClassRoomModal";
import { useEffect } from "react";
/* ================= CLASS ROOM DATA ================= */

const initialRooms = [
  { id: "R167648", roomNo: "101", capacity: 50, status: "Active" },
  { id: "R167647", roomNo: "102", capacity: 40, status: "Active" },
  { id: "R167646", roomNo: "103", capacity: 60, status: "Active" },
  { id: "R167645", roomNo: "104", capacity: 50, status: "Active" },
  { id: "R167644", roomNo: "105", capacity: 40, status: "Inactive" },
  { id: "R167643", roomNo: "106", capacity: 50, status: "Active" },
  { id: "R167642", roomNo: "107", capacity: 40, status: "Active" },
  { id: "R167641", roomNo: "108", capacity: 40, status: "Active" },
  { id: "R167640", roomNo: "109", capacity: 40, status: "Inactive" },
  { id: "R167639", roomNo: "110", capacity: 50, status: "Active" },
];

/* ================= PAGE ================= */

export default function ClassRoomPage() {
  const [data, setData] = useState(initialRooms);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [openFilter, setOpenFilter] = useState(false);
  const [statusFilter, setStatusFilter] =
    useState<"All" | "Active" | "Inactive">("All");
    const [openDate, setOpenDate] = useState(false);
    const [startDate, setStartDate] = useState("2020-05-15");
    const [endDate, setEndDate] = useState("2024-05-24");
    useEffect(() => {
      const handleClickOutside = () => setOpenDate(false);
    
      if (openDate) {
        document.addEventListener("click", handleClickOutside);
      }
    
      return () => {
        document.removeEventListener("click", handleClickOutside);
      };
    }, [openDate]);
    
    
  const [search, setSearch] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [openAddRoom, setOpenAddRoom] = useState(false);

  const today = "15 May 2020 - 24 May 2024";

  /* REFRESH */
  const handleRefresh = () => {
    setData(initialRooms);
    setStatusFilter("All");
    setSearch("");
  };

  /* EXPORT */
  const handleExport = () => {
    const headers = ["ID", "Room No", "Capacity", "Status"];
    const rows = data.map((r) =>
      [r.id, r.roomNo, r.capacity, r.status].join(",")
    );

    const csv =
      "data:text/csv;charset=utf-8," +
      [headers.join(","), ...rows].join("\n");

    const link = document.createElement("a");
    link.href = encodeURI(csv);
    link.download = "class_rooms.csv";
    link.click();
  };

  /* SORT */
  const handleSort = () => {
    const sorted = [...data].sort((a, b) =>
      sortOrder === "asc"
        ? a.roomNo.localeCompare(b.roomNo)
        : b.roomNo.localeCompare(a.roomNo)
    );
    setData(sorted);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  /* FILTER + SEARCH */
  const filteredData = data
    .filter((r) =>
      statusFilter === "All" ? true : r.status === statusFilter
    )
    .filter(
      (r) =>
        r.roomNo.includes(search) ||
        r.id.toLowerCase().includes(search.toLowerCase())
    );

  /* PAGINATION */
  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  return (
    <div className="space-y-6">

      {/* ================= MAIN HEADER ================= */}
<div className="bg-white border border-gray-200 rounded-2xl px-6 py-6">
  <div className="flex items-center justify-between">

    {/* LEFT */}
    <div>
      <h2 className="text-2xl font-semibold text-gray-900">
        Class Room
      </h2>
      <p className="text-sm text-gray-500 mt-1">
        Dashboard / Academic / Class Room
      </p>
    </div>

    {/* RIGHT ACTIONS */}
    <div className="flex items-center gap-3">
      <button
        onClick={handleRefresh}
        className="p-2.5 border rounded-lg hover:bg-gray-50"
      >
        <RefreshCcw size={16} />
      </button>

      <button
        onClick={() => window.print()}
        className="p-2.5 border rounded-lg hover:bg-gray-50"
      >
        <Printer size={16} />
      </button>

      <button
        onClick={handleExport}
        className="px-4 py-2 border rounded-lg text-sm hover:bg-gray-50"
      >
        Export
      </button>

      <button
        onClick={() => setOpenAddRoom(true)}
        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium"
      >
        + Add Class Room
      </button>
    </div>

  </div>
  </div>
  {/* ================= SUB HEADER ================= */}
<div className="bg-white border border-gray-200 rounded-2xl px-6 py-5 mt-6 space-y-4">

  {/* TOP ROW */}
  <div className="flex items-center justify-between">
    <h3 className="text-lg font-semibold text-gray-900">
      Class Room List
    </h3>

    <div className="flex items-center gap-3">
    <div className="relative">
  <button
    onClick={(e) => {
      e.stopPropagation();   // 🔥 REQUIRED
      setOpenDate(!openDate);
    }}
    className="flex items-center gap-2 px-4 py-2 border rounded-lg text-sm hover:bg-gray-50"
  >
    <CalendarDays size={16} />
    {startDate} - {endDate}
  </button>
  {openDate && (
    <div
      onClick={(e) => e.stopPropagation()}
      className="absolute left-0 top-full mt-2 w-72 bg-white border rounded-xl shadow-lg z-30 p-4"
    >
      <label className="text-sm text-gray-600 block mb-1">
        Start Date
      </label>
      <input
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        className="w-full border rounded-lg px-3 py-2 text-sm mb-4"
      />

      <label className="text-sm text-gray-600 block mb-1">
        End Date
      </label>
      <input
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        className="w-full border rounded-lg px-3 py-2 text-sm mb-4"
      />

      <button
        onClick={() => setOpenDate(false)}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-sm font-medium"
      >
        Apply
      </button>
    </div>
  )}
</div>

<div className="relative">
  <button
    onClick={() => setOpenFilter(!openFilter)}
    className="flex items-center gap-2 px-4 py-2 border rounded-lg text-sm hover:bg-gray-50"
  >
    <Filter size={16} />
    Filter
  </button>

  {/* DROPDOWN GOES HERE */}
  {openFilter && (
  <div className="absolute left-0 top-full mt-2 w-40 bg-white border rounded-lg shadow-lg z-30">
    
    <button
      onClick={() => {
        setStatusFilter("All");
        setOpenFilter(false);
        setCurrentPage(1);
      }}
      className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
        statusFilter === "All" ? "font-medium text-blue-600" : ""
      }`}
    >
      All
    </button>

    <button
      onClick={() => {
        setStatusFilter("Active");
        setOpenFilter(false);
        setCurrentPage(1);
      }}
      className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
        statusFilter === "Active" ? "font-medium text-blue-600" : ""
      }`}
    >
      Active
    </button>

    <button
      onClick={() => {
        setStatusFilter("Inactive");
        setOpenFilter(false);
        setCurrentPage(1);
      }}
      className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
        statusFilter === "Inactive" ? "font-medium text-blue-600" : ""
      }`}
    >
      Inactive
    </button>

    <div className="border-t my-1"></div>

    <button
      onClick={() => {
        setStatusFilter("All");
        setOpenFilter(false);
        setCurrentPage(1);
      }}
      className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
    >
      Clear Filter
    </button>
  </div>
)}

</div>
      <button
        onClick={handleSort}
        className="flex items-center gap-2 px-4 py-2 border rounded-lg text-sm hover:bg-gray-50"
      >
        <ArrowUpDown size={16} />
        Sort {sortOrder === "asc" ? "A-Z" : "Z-A"}
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
      className="border rounded-lg px-4 py-2 text-sm w-60"
    />
  </div>
</div>
      {/* ================= TABLE ================= */}
      <div className="bg-white border rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left">ID</th>
              <th className="px-4 py-3">Room No</th>
              <th className="px-4 py-3">Capacity</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {paginatedData.map((r) => (
              <tr key={r.id} className="border-t hover:bg-gray-50">
                <td className="px-4 py-3 text-blue-600">{r.id}</td>
                <td className="px-4 py-3 text-center">{r.roomNo}</td>
                <td className="px-4 py-3 text-center">{r.capacity}</td>
                <td className="px-4 py-3 text-center">
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      r.status === "Active"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {r.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-center relative">
                  <button onClick={() => setOpenMenu(openMenu === r.id ? null : r.id)}>
                    <MoreVertical size={16} />
                  </button>

                  {openMenu === r.id && (
                    <div className="absolute right-6 top-8 bg-white border rounded-lg shadow z-20 text-sm">
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

        {/* PAGINATION */}
        <div className="flex justify-end gap-2 px-4 py-3 border-t text-sm">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
            className="px-3 py-1 border rounded disabled:opacity-40"
          >
            Prev
          </button>

          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 border rounded ${
                currentPage === i + 1 ? "bg-blue-600 text-white" : ""
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
            className="px-3 py-1 border rounded disabled:opacity-40"
          >
            Next
          </button>
        </div>
      </div>
      {openAddRoom && (
  <AddClassRoomModal
    onClose={() => setOpenAddRoom(false)}
    onAdd={(newRoom) =>
      setData((prev) => [newRoom, ...prev])
    }
  />
)}

    </div>
  );
}
