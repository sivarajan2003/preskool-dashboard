import { Eye, FileText, RefreshCcw,
  Printer,
  ArrowUpDown,
  CalendarDays,} from "lucide-react";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

/* ================= MOCK / STORED DATA ================= */

const STORAGE_KEY = "admission_applications";

const fallbackApplications = [
  {
    id: "ADM-2026-0004",
    name: "Ayaan Joshi",
    dob: "22 Sept 2019",
    phone: "+91 6347401947",
    email: "ayaan.father@email.com",
    class: "Grade 3",
    status: "Verifying Documents",
    documents: "2/2",
    avatar: "https://i.pravatar.cc/40?img=21",
  },
];

/* ================= STATUS STYLE ================= */

const statusStyle = (status: string) => {
  switch (status) {
    case "Verifying Documents":
      return "bg-yellow-100 text-yellow-700";
    case "Interview Done":
      return "bg-blue-100 text-blue-700";
    case "Enrolled":
      return "bg-green-100 text-green-700";
    default:
      return "bg-gray-100 text-gray-600";
  }
};

/* ================= COMPONENT ================= */

export default function Verification() {
  const navigate = useNavigate();

  const [data, setData] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [selectedApp, setSelectedApp] = useState<any | null>(null);

  /* ================= LOAD FROM LOCAL STORAGE ================= */

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    setData(saved ? JSON.parse(saved) : fallbackApplications);
  }, []);

  /* ================= HANDLERS ================= */

  const handleRefresh = () => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) setData(JSON.parse(saved));
  };

  const handlePrint = () => window.print();

  const handleSort = () => {
    const sorted = [...data].sort((a, b) =>
      sortOrder === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    );
    setData(sorted);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  /* ================= FILTER + PAGINATION ================= */

  const filteredData = data.filter(
    (a) =>
      a.name.toLowerCase().includes(search.toLowerCase()) ||
      a.id.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  const paginatedData = filteredData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );
  const [verificationRows, setVerificationRows] = useState<any[]>([]);

  const updateStatus = (id: string, status: "verified" | "query") => {
    setVerificationRows(prev =>
      prev.map(row =>
        row.id === id ? { ...row, status } : row
      )
    );
  };
    
  /* ================= UI ================= */

  return (
    <div className="space-y-6">

      {/* ================= HEADER ================= */}
      <div className="bg-white border rounded-2xl px-6 py-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-semibold">Verification</h2>
            <p className="text-sm text-gray-500">
              Dashboard / Receptionist / Admissions / Verification
            </p>
          </div>

          <div className="flex gap-2">
            <button onClick={handleRefresh} className="p-2 border rounded-lg">
              <RefreshCcw size={16} />
            </button>
            <button onClick={handlePrint} className="p-2 border rounded-lg">
              <Printer size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* ================= FILTER BAR ================= */}
      <div className="bg-white border rounded-2xl px-6 py-5">
        <div className="flex justify-between items-center flex-wrap gap-4">
          <h3 className="text-lg font-semibold"> Verification</h3>

          <div className="flex gap-3 items-center">
            <button
              onClick={handleSort}
              className="flex items-center gap-2 px-4 py-2 border rounded-lg text-sm"
            >
              <ArrowUpDown size={16} />
              Sort {sortOrder === "asc" ? "A-Z" : "Z-A"}
            </button>

            <input
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border rounded-lg px-4 py-2 text-sm w-60"
            />
          </div>
        </div>
      </div>

      {/* ================= TABLE ================= */}
      <div className="bg-white border rounded-xl overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left">APPLICATION</th>
              <th className="px-6 py-3 text-left">STUDENT</th>
              <th className="px-6 py-3 text-left hidden md:table-cell">CONTACT</th>
              <th className="px-6 py-3 text-left hidden md:table-cell">CLASS</th>
              <th className="px-6 py-3 text-left">STATUS</th>
              <th className="px-6 py-3 text-left hidden md:table-cell">DOCS</th>
              <th className="px-6 py-3 text-center">ACTION</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {paginatedData.map((app) => (
              <tr key={app.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-blue-600 font-medium">
                  {app.id}
                </td>

                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={app.avatar}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <p className="font-medium">{app.name}</p>
                      <p className="text-xs text-gray-500">
                        DOB: {app.dob}
                      </p>
                    </div>
                  </div>
                </td>

                <td className="px-6 py-4 hidden md:table-cell">
                  <p>{app.phone}</p>
                  <p className="text-xs text-gray-500">{app.email}</p>
                </td>

                <td className="px-6 py-4 hidden md:table-cell">
                  {app.class}
                </td>

                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs ${statusStyle(
                      app.status
                    )}`}
                  >
                    {app.status}
                  </span>
                </td>

                <td className="px-6 py-4 hidden md:table-cell flex items-center gap-2">
                  <FileText size={14} />
                  {app.documents}
                </td>

                <td className="px-6 py-4 text-center">
                <button
 onClick={() => {
  setSelectedApp(app);
  setVerificationRows([
    {
      id: "studentName",
      section: "Personal Details",
      field: "Student Name",
      value: app.name,
      status: "pending",
    },
    {
      id: "dob",
      section: "Personal Details",
      field: "Date of Birth",
      value: app.dob,
      status: "pending",
    },
    {
      id: "gender",
      section: "Personal Details",
      field: "Gender",
      value: "—",
      status: "pending",
    },
    {
      id: "class",
      section: "Academic Details",
      field: "Applying For",
      value: app.class,
      status: "pending",
    },
    {
      id: "stream",
      section: "Academic Details",
      field: "Stream",
      value: "Science",
      status: "pending",
    },
    {
      id: "birthCert",
      section: "Documents",
      field: "Birth Certificate",
      value: "Uploaded",
      status: "pending",
    },
    {
      id: "address",
      section: "Documents",
      field: "Address Proof",
      value: "Uploaded",
      status: "pending",
    },
  ]);
}}

  className="text-blue-600 hover:text-blue-800"
>
<Eye
  size={16}
  className="cursor-pointer text-blue-600 hover:text-blue-800"
  onClick={() =>
    navigate(
      `/admin/dashboard/receptionist/admissions/verification/${app.id}`
    )
  }
/>
</button>

                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* ================= PAGINATION ================= */}
        <div className="flex justify-end gap-2 px-6 py-4 border-t text-sm">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
            className="px-3 py-1 border rounded disabled:opacity-40"
          >
            Prev
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
            className="px-3 py-1 border rounded disabled:opacity-40"
          >
            Next
          </button>
        </div>
      </div>
     
    </div>
  );
}
function Row({
  section,
  field,
  value,
}: {
  section: string;
  field: string;
  value: string;
}) {
  return (
    <tr>
      <td className="px-4 py-3 font-medium">{section}</td>
      <td className="px-4 py-3">{field}</td>
      <td className="px-4 py-3">{value}</td>
      <td className="px-4 py-3">
        <span className="px-3 py-1 rounded-full text-xs bg-green-100 text-green-700">
          Verified
        </span>
      </td>
      <td className="px-4 py-3 flex gap-2">
        <button className="px-3 py-1 text-xs bg-green-600 text-white rounded">
          Verify
        </button>
        <button className="px-3 py-1 text-xs bg-red-500 text-white rounded">
          Query
        </button>
      </td>
    </tr>
  );
}
