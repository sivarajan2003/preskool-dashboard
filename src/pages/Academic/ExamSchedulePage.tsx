import { useEffect, useState } from "react";
import {
  RefreshCcw,
  Printer,
  ArrowUpDown,
  MoreVertical,
  Plus,
  CalendarDays,
  Filter,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import AddExamScheduleModal from "../../components/AddExamScheduleModal";

/* ================= DATA ================= */

const INITIAL_DATA = [
  {
    id: "1",
    subject: "English",
    date: "13 May 2024",
    start: "09:30 AM",
    end: "10:45 AM",
    duration: "3 hrs",
    room: "101",
    max: 100,
    min: 35,
  },
  {
    id: "2",
    subject: "Spanish",
    date: "14 May 2024",
    start: "09:30 AM",
    end: "10:45 AM",
    duration: "3 hrs",
    room: "104",
    max: 100,
    min: 35,
  },
  {
    id: "3",
    subject: "Physics",
    date: "15 May 2024",
    start: "09:30 AM",
    end: "10:45 AM",
    duration: "3 hrs",
    room: "103",
    max: 100,
    min: 35,
  },
  {
    id: "4",
    subject: "Chemistry",
    date: "16 May 2024",
    start: "09:30 AM",
    end: "10:45 AM",
    duration: "3 hrs",
    room: "105",
    max: 100,
    min: 35,
  },
  {
    id: "5",
    subject: "Maths",
    date: "17 May 2024",
    start: "09:30 AM",
    end: "10:45 AM",
    duration: "3 hrs",
    room: "106",
    max: 100,
    min: 35,
  },
  {
    id: "6",
    subject: "Computer",
    date: "18 May 2024",
    start: "09:30 AM",
    end: "10:45 AM",
    duration: "3 hrs",
    room: "102",
    max: 100,
    min: 35,
  },
  {
    id: "7",
    subject: "Env Science",
    date: "19 May 2024",
    start: "09:30 AM",
    end: "10:45 AM",
    duration: "3 hrs",
    room: "107",
    max: 100,
    min: 35,
  },
];

/* ================= PAGE ================= */

export default function ExamSchedulePage() {
  const navigate = useNavigate();
  const [openAdd, setOpenAdd] = useState(false);

  const [data, setData] = useState(INITIAL_DATA);
  const [search, setSearch] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortAsc, setSortAsc] = useState(true);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [openFilter, setOpenFilter] = useState(false);
  const [openCalendar, setOpenCalendar] = useState(false);
  
  const [filterSubject, setFilterSubject] = useState<string | null>(null);
  const [filterRoom, setFilterRoom] = useState<string | null>(null);
  const [filterResult, setFilterResult] = useState<"Pass" | "Fail" | null>(null);
  
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  
  useEffect(() => {
    const close = () => setOpenMenu(null);
    window.addEventListener("click", close);
    return () => window.removeEventListener("click", close);
  }, []);

  /* 🔄 REFRESH */
  const handleRefresh = () => {
    setData(INITIAL_DATA);     // restore original data
    setSearch("");            // clear search
    setRowsPerPage(10);       // reset rows
    setCurrentPage(1);        // reset page
  
    setFilterSubject(null);   // clear filters
    setFilterRoom(null);
    setFilterResult(null);
  
    setFromDate("");          // clear date range
    setToDate("");
  
    setOpenFilter(false);     // close dropdowns
    setOpenCalendar(false);
  };
  

  /* 📤 EXPORT */
  const handleExport = () => {
    const csv =
      "data:text/csv;charset=utf-8," +
      ["Subject,Exam Date,Start Time,End Time,Duration,Room,Max,Min"]
        .concat(
          data.map(
            (d) =>
              `${d.subject},${d.date},${d.start},${d.end},${d.duration},${d.room},${d.max},${d.min}`
          )
        )
        .join("\n");

    const link = document.createElement("a");
    link.href = encodeURI(csv);
    link.download = "exam_schedule.csv";
    link.click();
  };

  /* 🔃 SORT */
  const handleSort = () => {
    setData((prev) =>
      [...prev].sort((a, b) =>
        sortAsc
          ? a.subject.localeCompare(b.subject)
          : b.subject.localeCompare(a.subject)
      )
    );
    setSortAsc(!sortAsc);
  };

  /* 🔍 SEARCH */
  const filtered = data.filter((d) => {
    const matchSearch =
      d.subject.toLowerCase().includes(search.toLowerCase());
  
    const matchSubject = filterSubject
      ? d.subject === filterSubject
      : true;
  
    const matchRoom = filterRoom
      ? d.room === filterRoom
      : true;
  
    const matchResult = filterResult
      ? filterResult === "Pass"
        ? d.min >= 35
        : d.min < 35
      : true;
  
    const examDate = new Date(d.date);
    const from = fromDate ? new Date(fromDate) : null;
    const to = toDate ? new Date(toDate) : null;
  
    const matchDate =
      (!from || examDate >= from) &&
      (!to || examDate <= to);
  
    return (
      matchSearch &&
      matchSubject &&
      matchRoom &&
      matchResult &&
      matchDate
    );
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
          <div>
            <h2 className="text-2xl font-semibold">Exam Schedule</h2>
            <p className="text-sm text-gray-500 mt-1">
              Dashboard / Academic / Exam Schedule
            </p>
          </div>

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
  onClick={() => setOpenAdd(true)}
  className="px-4 py-2 bg-blue-600 text-white rounded-lg flex items-center gap-1"
>
  + Add Exam Schedule
</button>

          </div>
        </div>
      </div>

      {/* ================= SUB HEADER ================= */}
      <div className="bg-white border rounded-xl px-6 py-4 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-semibold">Exam Schedule List</h3>

          <div className="flex items-center gap-3">
          <div className="relative">
  <button
    onClick={(e) => {
      e.stopPropagation();
      setOpenCalendar(!openCalendar);
    }}
    className="flex items-center gap-2 px-3 py-2 border rounded-lg text-sm"
  >
    <CalendarDays size={14} />
    {fromDate && toDate
      ? `${fromDate} - ${toDate}`
      : "Select Date Range"}
  </button>

  {openCalendar && (
    <div
      onClick={(e) => e.stopPropagation()}
      className="absolute right-0 mt-2 bg-white border rounded-xl shadow-lg p-4 z-30 w-64 space-y-3"
    >
      <div>
        <label className="text-xs text-gray-500">From</label>
        <input
          type="date"
          value={fromDate}
          onChange={(e) => setFromDate(e.target.value)}
          className="w-full border rounded-lg px-3 py-2 text-sm"
        />
      </div>

      <div>
        <label className="text-xs text-gray-500">To</label>
        <input
          type="date"
          value={toDate}
          onChange={(e) => setToDate(e.target.value)}
          className="w-full border rounded-lg px-3 py-2 text-sm"
        />
      </div>

      <div className="flex justify-end gap-2 pt-2">
        <button
          onClick={() => {
            setFromDate("");
            setToDate("");
            setOpenCalendar(false);
          }}
          className="px-3 py-1 border rounded-lg text-sm"
        >
          Clear
        </button>

        <button
          onClick={() => setOpenCalendar(false)}
          className="px-3 py-1 bg-blue-600 text-white rounded-lg text-sm"
        >
          Apply
        </button>
      </div>
    </div>
  )}
</div>


            <div className="relative">
  <button
    onClick={(e) => {
      e.stopPropagation();
      setOpenFilter(!openFilter);
    }}
    className="flex items-center gap-2 px-3 py-2 border rounded-lg text-sm"
  >
    <Filter size={14} />
    Filter
  </button>

  {openFilter && (
    <div
      onClick={(e) => e.stopPropagation()}
      className="absolute right-0 mt-2 w-64 bg-white border rounded-xl shadow-lg z-30 p-4 space-y-4"
    >
      {/* SUBJECT */}
      <div>
        <p className="text-xs font-semibold text-gray-500 mb-1">
          Subject
        </p>
        {["English", "Spanish", "Physics", "Chemistry", "Maths"].map(
          (s) => (
            <button
              key={s}
              onClick={() => setFilterSubject(s)}
              className={`w-full text-left px-3 py-2 rounded-lg text-sm
                ${
                  filterSubject === s
                    ? "bg-blue-600 text-white"
                    : "hover:bg-gray-100"
                }`}
            >
              {s}
            </button>
          )
        )}
      </div>

      {/* ROOM */}
      <div>
        <p className="text-xs font-semibold text-gray-500 mb-1">
          Room No
        </p>
        {["101", "102", "103", "104", "105"].map((r) => (
          <button
            key={r}
            onClick={() => setFilterRoom(r)}
            className={`w-full text-left px-3 py-2 rounded-lg text-sm
              ${
                filterRoom === r
                  ? "bg-blue-600 text-white"
                  : "hover:bg-gray-100"
              }`}
          >
            {r}
          </button>
        ))}
      </div>

      {/* RESULT */}
      <div>
        <p className="text-xs font-semibold text-gray-500 mb-1">
          Result
        </p>
        {["Pass", "Fail"].map((r) => (
          <button
            key={r}
            onClick={() => setFilterResult(r as any)}
            className={`w-full text-left px-3 py-2 rounded-lg text-sm
              ${
                filterResult === r
                  ? "bg-blue-600 text-white"
                  : "hover:bg-gray-100"
              }`}
          >
            {r}
          </button>
        ))}
      </div>

      {/* CLEAR */}
      <button
        onClick={() => {
          setFilterSubject(null);
          setFilterRoom(null);
          setFilterResult(null);
          setOpenFilter(false);
        }}
        className="w-full text-center text-sm text-red-600 pt-2 hover:underline"
      >
        Clear Filters
      </button>
    </div>
  )}
</div>


            <button
              onClick={handleSort}
              className="flex items-center gap-2 px-3 py-2 border rounded-lg text-sm"
            >
              <ArrowUpDown size={14} />
              Sort By A-Z
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-600">
            Row Per Page
            <select
              className="border ml-2 px-2 py-1 rounded"
              value={rowsPerPage}
              onChange={(e) => {
                setRowsPerPage(Number(e.target.value));
                setCurrentPage(1);
              }}
            >
              <option value={10}>10</option>
              <option value={25}>25</option>
            </select>
            Entries
          </div>

          <input
            placeholder="Search"
            className="border rounded-lg px-3 py-2 text-sm w-52"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* ================= TABLE ================= */}
      <div className="bg-white border rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left">Subject</th>
              <th className="px-4 py-3 text-center">Exam Date</th>
              <th className="px-4 py-3 text-center">Start Time</th>
              <th className="px-4 py-3 text-center">End Time</th>
              <th className="px-4 py-3 text-center">Duration</th>
              <th className="px-4 py-3 text-center">Room No</th>
              <th className="px-4 py-3 text-center">Max Marks</th>
              <th className="px-4 py-3 text-center">Min Marks</th>
              <th className="px-4 py-3 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {paginated.map((d) => (
              <tr key={d.id} className="border-t hover:bg-gray-50">
                <td className="px-4 py-3">{d.subject}</td>
                <td className="px-4 py-3 text-center">{d.date}</td>
                <td className="px-4 py-3 text-center">{d.start}</td>
                <td className="px-4 py-3 text-center">{d.end}</td>
                <td className="px-4 py-3 text-center">{d.duration}</td>
                <td className="px-4 py-3 text-center">{d.room}</td>
                <td className="px-4 py-3 text-center">{d.max}</td>
                <td className="px-4 py-3 text-center">{d.min}</td>

                <td className="px-4 py-3 text-center relative">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setOpenMenu(openMenu === d.id ? null : d.id);
                    }}
                  >
                    <MoreVertical size={16} />
                  </button>

                  {openMenu === d.id && (
                    <div className="absolute right-6 top-8 bg-white border rounded-lg shadow-lg z-30 w-32">
                      <button className="w-full px-4 py-2 text-left hover:bg-gray-100">
                        View
                      </button>
                      <button className="w-full px-4 py-2 text-left hover:bg-gray-100">
                        Edit
                      </button>
                      <button
                        onClick={() =>
                          setData((prev) =>
                            prev.filter((x) => x.id !== d.id)
                          )
                        }
                        className="w-full px-4 py-2 text-left text-red-600 hover:bg-red-50"
                      >
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
        <div className="flex items-center justify-end gap-2 px-4 py-3 border-t text-sm">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
            className="px-3 py-1 border rounded disabled:text-gray-400"
          >
            Prev
          </button>

          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`w-8 h-8 border rounded ${
                currentPage === i + 1
                  ? "bg-blue-600 text-white border-blue-600"
                  : ""
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
            className="px-3 py-1 border rounded disabled:text-gray-400"
          >
            Next
          </button>
        </div>
      </div>
      {openAdd && (
  <AddExamScheduleModal
    onClose={() => setOpenAdd(false)}
    onAdd={(newItem) =>
      setData((prev) => [newItem, ...prev])
    }
  />
)}

    </div>
  );
}
