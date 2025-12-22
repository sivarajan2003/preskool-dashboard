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
    const [startDate, setStartDate] = useState("2020-05-15");
    const [endDate, setEndDate] = useState("2024-05-24");
    
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

      {/* ================= HEADER ================= */}
      <div className="bg-white border rounded-xl p-5 space-y-4">

        {/* TOP */}
        <div className="flex justify-between">
          <div>
            <h2 className="ttext-2xl font-semibold
">Class Room</h2>
            <p className="text-sm text-gray-500">
              Dashboard / Academic / Class Room
            </p>
          </div>

          <div className="flex gap-2">
            <button onClick={handleRefresh} className="p-2 border rounded-lg">
              <RefreshCcw size={16} />
            </button>
            <button onClick={() => window.print()} className="p-2 border rounded-lg">
              <Printer size={16} />
            </button>
            <button onClick={handleExport} className="px-4 py-2 border rounded-lg text-sm">
              Export
            </button>
            <button
  onClick={() => setOpenAddRoom(true)}
  className="px-4 py-2 bg-blue-600 text-white rounded-lg"
>
  Add Class Room
</button>


          </div>
        </div>

        {/* FILTER ROW */}
        <div className="flex justify-between flex-wrap gap-3">
          <div className="flex gap-2">
          <div className="flex items-center gap-2 border rounded-lg px-3 py-2 text-sm">
  <CalendarDays size={16} />

  <input
    type="date"
    value={startDate}
    onChange={(e) => setStartDate(e.target.value)}
    className="outline-none text-sm"
  />

  <span>-</span>

  <input
    type="date"
    value={endDate}
    onChange={(e) => setEndDate(e.target.value)}
    className="outline-none text-sm"
  />
</div>


            <div className="relative">
              <button
                onClick={() => setOpenFilter(!openFilter)}
                className="flex items-center gap-2 px-3 py-2 border rounded-lg text-sm"
              >
                <Filter size={16} /> Filter
              </button>

              {openFilter && (
                <div className="absolute mt-2 bg-white border rounded-lg shadow p-2 z-20">
                  {["All", "Active", "Inactive"].map((s) => (
                    <button
                      key={s}
                      onClick={() => {
                        setStatusFilter(s as any);
                        setOpenFilter(false);
                        setCurrentPage(1);
                      }}
                      className="block px-3 py-1.5 text-sm hover:bg-gray-100 rounded w-full text-left"
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

      {/* ROW PER PAGE + SEARCH */}
      <div className="flex justify-between px-4 py-3 border-b">
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
          className="border rounded-lg px-3 py-1.5 text-sm w-52"
        />
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
