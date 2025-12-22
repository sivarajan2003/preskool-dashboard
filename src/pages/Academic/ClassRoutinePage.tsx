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
import AddRoutineModal from "../../components/AddRoutineModal";

/* ================= DATA ================= */

const ROUTINES = [
  {
    id: "RT167648",
    className: "I",
    section: "A",
    teacher: "Erickson",
    subject: "English",
    day: "Monday",
    start: "09:30 AM",
    end: "10:45 AM",
    room: "101",
    date: "2024-05-15",
  },
  {
    id: "RT167647",
    className: "I",
    section: "B",
    teacher: "Mori",
    subject: "Math",
    day: "Tuesday",
    start: "10:45 AM",
    end: "12:00 PM",
    room: "102",
    date: "2024-05-16",
  },
  {
    id: "RT167646",
    className: "II",
    section: "A",
    teacher: "Joseph",
    subject: "Physics",
    day: "Wednesday",
    start: "12:00 PM",
    end: "01:15 PM",
    room: "103",
    date: "2024-05-17",
  },
  {
    id: "RT167645",
    className: "II",
    section: "B",
    teacher: "James",
    subject: "Chemistry",
    day: "Thursday",
    start: "01:15 PM",
    end: "02:30 PM",
    room: "104",
    date: "2024-05-18",
  },
  {
    id: "RT167644",
    className: "II",
    section: "C",
    teacher: "Biology",
    subject: "Biology",
    day: "Friday",
    start: "02:30 PM",
    end: "03:45 PM",
    room: "105",
    date: "2024-05-19",
  },
  {
    id: "RT167643",
    className: "III",
    section: "A",
    teacher: "Teresa",
    subject: "Higher Math",
    day: "Saturday",
    start: "03:45 PM",
    end: "05:00 PM",
    room: "106",
    date: "2024-05-20",
  },
  {
    id: "RT167642",
    className: "III",
    section: "B",
    teacher: "James",
    subject: "Spanish",
    day: "Monday",
    start: "09:30 AM",
    end: "10:45 AM",
    room: "107",
    date: "2024-05-21",
  },
  {
    id: "RT167641",
    className: "IV",
    section: "A",
    teacher: "Hendrita",
    subject: "Moral Education",
    day: "Tuesday",
    start: "10:45 AM",
    end: "12:00 PM",
    room: "108",
    date: "2024-05-22",
  },
  {
    id: "RT167640",
    className: "IV",
    section: "B",
    teacher: "Morgan",
    subject: "Finance",
    day: "Wednesday",
    start: "12:00 PM",
    end: "01:15 PM",
    room: "109",
    date: "2024-05-23",
  },
  {
    id: "RT167639",
    className: "V",
    section: "A",
    teacher: "Ramsey",
    subject: "Economics",
    day: "Thursday",
    start: "01:15 PM",
    end: "02:30 PM",
    room: "110",
    date: "2024-05-24",
  },
];
   // ✅ FIXED TYPO (room instead of room

/* ================= PAGE ================= */

export default function ClassRoutinePage() {
  const [data, setData] = useState(ROUTINES);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [sortAsc, setSortAsc] = useState(true);
  const [dayFilter, setDayFilter] = useState<string | null>(null);
  const [openAddRoutine, setOpenAddRoutine] = useState(false);

  const [startDate, setStartDate] = useState("2024-05-15");
  const [endDate, setEndDate] = useState("2024-05-24");
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;
  
  /* 🔄 REFRESH */
  const handleRefresh = () => {
    setData(ROUTINES);
    setSearch("");
    setDayFilter(null);
  };

  /* 🖨 PRINT */
  const handlePrint = () => window.print();

  /* 📤 EXPORT CSV */
  const handleExport = () => {
    const headers = [
      "ID,Class,Section,Teacher,Subject,Day,Start,End,Room",
    ];
    const rows = data.map(
      (r) =>
        `${r.id},${r.className},${r.section},${r.teacher},${r.subject},${r.day},${r.start},${r.end},${r.room}`
    );
    const csv = "data:text/csv;charset=utf-8," + [...headers, ...rows].join("\n");

    const link = document.createElement("a");
    link.href = encodeURI(csv);
    link.download = "class_routine.csv";
    link.click();
  };

  /* 🔃 SORT */
  const handleSort = () => {
    const sorted = [...data].sort((a, b) =>
      sortAsc
        ? a.teacher.localeCompare(b.teacher)
        : b.teacher.localeCompare(a.teacher)
    );
    setData(sorted);
    setSortAsc(!sortAsc);
  };

  /* 🔍 FILTER + SEARCH */
  const filteredData = data
    .filter((r) =>
      dayFilter ? r.day === dayFilter : true
    )
    .filter(
      (r) =>
        r.id.toLowerCase().includes(search.toLowerCase()) ||
        r.teacher.toLowerCase().includes(search.toLowerCase()) ||
        r.subject.toLowerCase().includes(search.toLowerCase())
    )
    .filter(
      (r) => r.date >= startDate && r.date <= endDate
    );
// ================= PAGINATION LOGIC =================
const totalPages = Math.ceil(filteredData.length / rowsPerPage);

const paginatedData = filteredData.slice(
  (currentPage - 1) * rowsPerPage,
  currentPage * rowsPerPage
);

  return (
    <div className="space-y-6">

      {/* ================= HEADER ================= */}
      <div className="bg-white border rounded-xl p-5 space-y-4">
        <div className="flex justify-between">
          <div>
            <h2 className="text-2xl font-semibold">Class Routine</h2>
            <p className="text-sm text-gray-500">
              Dashboard / Academic / Class Routine
            </p>
          </div>

          <div className="flex gap-2">
            <button onClick={handleRefresh} className="p-2 border rounded-lg">
              <RefreshCcw size={16} />
            </button>
            <button onClick={handlePrint} className="p-2 border rounded-lg">
              <Printer size={16} />
            </button>
            <button onClick={handleExport} className="px-4 py-2 border rounded-lg text-sm">
              Export
            </button>
            <button
  onClick={() => setOpenAddRoutine(true)}
  className="px-4 py-2 bg-blue-600 text-white rounded-lg flex gap-1"
>Add Class Routine
</button>

          </div>
        </div>

        {/* FILTER BAR */}
        <div className="flex justify-between flex-wrap gap-3">
          <div className="flex gap-2">
            <div className="flex items-center gap-2 border rounded-lg px-3 py-2 text-sm">
              <CalendarDays size={16} />
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="outline-none"
              />
              <span>-</span>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="outline-none"
              />
            </div>

            <select
              onChange={(e) =>
                setDayFilter(e.target.value || null)
              }
              className="border rounded-lg px-3 py-2 text-sm"
            >
              <option value="">Filter</option>
              <option>Monday</option>
              <option>Tuesday</option>
              <option>Wednesday</option>
              <option>Thursday</option>
              <option>Friday</option>
              <option>Saturday</option>
            </select>
          </div>

          <button
            onClick={handleSort}
            className="flex items-center gap-2 px-3 py-2 border rounded-lg text-sm"
          >
            <ArrowUpDown size={16} /> Sort A-Z
          </button>
        </div>
      </div>

      {/* SEARCH */}
      <div className="flex justify-end px-4">
        <input
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded-lg px-3 py-1.5 text-sm w-52"
        />
      </div>

      {/* ================= TABLE ================= */}
      <div className="bg-white border rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left">ID</th>
              <th className="px-4 py-3">Class</th>
              <th className="px-4 py-3">Section</th>
              <th className="px-4 py-3">Teacher</th>
              <th className="px-4 py-3">Subject</th>
              <th className="px-4 py-3">Day</th>
              <th className="px-4 py-3">Start</th>
              <th className="px-4 py-3">End</th>
              <th className="px-4 py-3">Room</th>
              <th className="px-4 py-3">Action</th>
            </tr>
          </thead>

          <tbody>
          {paginatedData.map((r) => (
              <tr key={r.id} className="border-t hover:bg-gray-50">
                <td className="px-4 py-3 text-blue-600">{r.id}</td>
                <td className="px-4 py-3 text-center">{r.className}</td>
                <td className="px-4 py-3 text-center">{r.section}</td>
                <td className="px-4 py-3 text-center">{r.teacher}</td>
                <td className="px-4 py-3 text-center">{r.subject}</td>
                <td className="px-4 py-3 text-center">{r.day}</td>
                <td className="px-4 py-3 text-center">{r.start}</td>
                <td className="px-4 py-3 text-center">{r.end}</td>
                <td className="px-4 py-3 text-center">{r.room}</td>

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
        {/* ================= PAGINATION ================= */}
<div className="flex items-center justify-end gap-2 px-4 py-3 text-sm border-t">
  {/* PREV */}
  <button
    disabled={currentPage === 1}
    onClick={() => setCurrentPage((p) => p - 1)}
    className={`px-3 py-1.5 rounded border ${
      currentPage === 1
        ? "text-gray-400 cursor-not-allowed"
        : "hover:bg-gray-100"
    }`}
  >
    Prev
  </button>

  {/* PAGE NUMBERS */}
  {Array.from({ length: totalPages }, (_, i) => i + 1)
    .slice(0, 5)
    .map((page) => (
      <button
        key={page}
        onClick={() => setCurrentPage(page)}
        className={`px-3 py-1.5 rounded border ${
          currentPage === page
            ? "bg-blue-600 text-white"
            : "hover:bg-gray-100"
        }`}
      >
        {page}
      </button>
    ))}

  {totalPages > 5 && <span className="px-2">...</span>}

  {/* NEXT */}
  <button
    disabled={currentPage === totalPages}
    onClick={() => setCurrentPage((p) => p + 1)}
    className={`px-3 py-1.5 rounded border ${
      currentPage === totalPages
        ? "text-gray-400 cursor-not-allowed"
        : "hover:bg-gray-100"
    }`}
  >
    Next
  </button>
</div>

      </div>
      {openAddRoutine && (
  <AddRoutineModal
    onClose={() => setOpenAddRoutine(false)}
    onSave={(newRoutine) =>
      setData((prev) => [
        { ...newRoutine, id: newRoutine.id },
        ...prev,
      ])
    }
  />
)}

    </div>
  );
}
