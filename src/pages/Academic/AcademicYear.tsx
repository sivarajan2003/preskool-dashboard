import { useState, useEffect } from "react";
import {
  RefreshCcw,
  Printer,
  ArrowUpDown,
  Plus,
  Pencil,
  Trash2,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import api from "../../lib/api";


/* ================= DATA ================= */
interface AcademicYearType {
  id: number;
  year: string;
  start: string;
  end: string;
  current: "Yes" | "No";
  status: "Active" | "Inactive";
}


/* ================= PAGE ================= */
export default function AcademicYear() {
  const token = localStorage.getItem("token");
if (!token) {
  alert("Login expired. Please login again.");
  return;
}

  const navigate = useNavigate();
  const [data, setData] = useState<AcademicYearType[]>([]);

  const [deleteId, setDeleteId] = useState<number | null>(null);
    const [openAddModal, setOpenAddModal] = useState(false);
    const [openEditModal, setOpenEditModal] = useState(false);
    const [editingYear, setEditingYear] = useState<AcademicYearType | null>(null);    
    const [form, setForm] = useState<{
      year: string;
      start: string;
      end: string;
      current: "Yes" | "No";
      status: "Active" | "Inactive";
    }>({
    
    year: "",
    start: "",
    end: "",
    current: "No",
    status: "Active",
  });
  const [yearSortAsc, setYearSortAsc] = useState(true);
  const [selectedYear, setSelectedYear] = useState<string | "ALL">("ALL");
  const [openYearDropdown, setOpenYearDropdown] = useState(false);

  /* ACTIONS */
  const handleRefresh = () => {
    fetchAcademicYears();
  };
  useEffect(() => {
    fetchAcademicYears();
  }, []);
  
    const handlePrint = () => window.print();
  
  const sortByAcademicYear = () => {
    setData(prev =>
      [...prev].sort((a, b) =>
        yearSortAsc
          ? a.year.localeCompare(b.year)
          : b.year.localeCompare(a.year)
      )
    );
    setYearSortAsc(!yearSortAsc);
  };
  const filteredData =
  selectedYear === "ALL"
    ? data
    : data.filter((item) => item.year === selectedYear);
    const fetchAcademicYears = async () => {
      try {
        const res = await api.get("/school/academicyear");
    
        setData(
          res.data.data.map((y: any) => ({
            id: y.id,
            year: y.yearsbyname,
            start: y.startdate,
            end: y.enddate,
            current: y.is_current ? "Yes" : "No",
            status: y.is_active ? "Active" : "Inactive",
          }))
        );
      } catch (error) {
        console.error("Failed to load academic years", error);
      }
    };
    const handleUpdateAcademicYear = async () => {
      if (!editingYear) return;
    
      try {
        await api.put(`/school/academicyear/${editingYear.id}`, {
          yearsbyname: form.year,
          startdate: form.start,
          enddate: form.end,
          is_active: form.status === "Active",
        });
    
        setOpenEditModal(false);
        fetchAcademicYears(); // reload from backend
      } catch (error) {
        console.error("Update failed", error);
      }
    };
    const handleDeleteAcademicYear = async () => {
      if (!deleteId) return;
    
      try {
        await api.delete(`/school/academicyear/${deleteId}`);
        setDeleteId(null);
        fetchAcademicYears(); // reload
      } catch (error) {
        console.error("Delete failed", error);
      }
    };
    const handleAddAcademicYear = async () => {
      try {
        const payload = {
          yearsbyname: form.year,
          startdate: new Date(form.start).toISOString().split("T")[0],
          enddate: new Date(form.end).toISOString().split("T")[0],
          is_current: form.current === "Yes",
          is_active: form.status === "Active",
        };
    
        console.log("Submitting payload:", payload); // 👈 IMPORTANT
    
        const res = await api.post("/school/academicyear", payload);

        if (!res.data?.success) {
          throw new Error(res.data?.message || "Backend rejected request");
        }
        if (!form.year || !form.start || !form.end) {
          alert("All fields are required");
          return;
        }
        
        if (new Date(form.start) > new Date(form.end)) {
          alert("Start date cannot be after End date");
          return;
        }
                
        setOpenAddModal(false);
        fetchAcademicYears();
    
        setForm({
          year: "",
          start: "",
          end: "",
          current: "No",
          status: "Active",
        });
      }catch (error: any) {
        console.error("Save failed FULL ERROR", {
          status: error?.response?.status,
          data: error?.response?.data,
        });
      
        alert(
          error?.response?.data?.message ||
          error?.response?.data?.error ||
          `Save failed (HTTP ${error?.response?.status})`
        );
      }
      
    };
    
  return (
    <div className="space-y-6">

      {/* ================= HEADER ================= */}
      <div className="bg-white border border-gray-200 rounded-2xl px-6 py-6">
        <div className="flex items-center justify-between">

          {/* LEFT */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">
              Academic Year
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Dashboard / Academic / Academic Year
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
              onClick={handlePrint}
              className="p-2.5 border rounded-lg hover:bg-gray-50"
            >
              <Printer size={16} />
            </button>
            <button
  onClick={() => setOpenAddModal(true)}
  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium flex items-center gap-1"
>
  <Plus size={14} />
  Add Academic Year
</button>
{/* Academic Year Filter */}
<div className="relative">
  <button
    onClick={() => setOpenYearDropdown(!openYearDropdown)}
    className="px-4 py-2 border rounded-lg text-sm flex items-center gap-2 hover:bg-gray-50"
  >
    Academic Year :
    <span className="font-medium">
      {selectedYear === "ALL" ? "All" : selectedYear}
    </span>
  </button>

  {openYearDropdown && (
    <div className="absolute right-0 mt-2 w-44 bg-white border rounded-lg shadow z-50">
      <button
        onClick={() => {
          setSelectedYear("ALL");
          setOpenYearDropdown(false);
        }}
        className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
      >
        All Years
      </button>

      {Array.from(new Set(data.map(d => d.year))).map((year) => (
        <button
          key={year}
          onClick={() => {
            setSelectedYear(year);
            setOpenYearDropdown(false);
          }}
          className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
        >
          {year}
        </button>
      ))}
    </div>
  )}
</div>

          </div>
        </div>
      </div>

      {/* ================= SUB HEADER ================= */}
      <div className="bg-white border border-gray-200 rounded-2xl px-6 py-5">
        <div className="flex items-center justify-between">

          <h3 className="text-lg font-semibold text-gray-900">
            Academic Year List
          </h3>
          <button
  onClick={sortByAcademicYear}
  className="flex items-center gap-2 px-4 py-2 border rounded-lg text-sm hover:bg-gray-50"
>
  <ArrowUpDown size={16} />
  Sort {yearSortAsc ? "↑" : "↓"}
</button>
 </div>
      </div>

      {/* ================= TABLE ================= */}
      <div className="bg-white border rounded-xl overflow-x-auto">
        <table className="w-full text-sm">
        <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left">ID</th>
              <th className="px-4 py-3 text-left">Academic Year</th>
              <th className="px-4 py-3 text-left">Start Date</th>
              <th className="px-4 py-3 text-left">End Date</th>
              <th className="px-4 py-3 text-center">Current Year</th>
              <th className="px-4 py-3 text-center">Status</th>
              <th className="px-4 py-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
          {filteredData.map((y) => (
            <tr
  key={y.id}
  className="border-t hover:bg-blue-50 cursor-pointer"
  onClick={() =>
    navigate(`/admin/dashboard/academic/academic-year/${y.id}`)
  }
  
>                <td className="px-4 py-3">{y.id}</td>
                <td className="px-4 py-3">{y.year}</td>
                <td className="px-4 py-3">{y.start}</td>
                <td className="px-4 py-3">{y.end}</td>

                <td className="px-4 py-3 text-center">
                  <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-600">
                    {y.current}
                  </span>
                </td>

                <td className="px-4 py-3 text-center">
                  <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-600">
                    {y.status}
                  </span>
                </td>

                <td className="px-4 py-3 text-center">
                  <div className="flex justify-center gap-3">
                  <button
  onClick={() => {
    setEditingYear(y);
    setForm({
      year: y.year,
      start: y.start,
      end: y.end,
      current: y.current,
      status: y.status,
    });
    setOpenEditModal(true);
    
  }}
  className="text-gray-600 hover:text-blue-600"
>
  <Pencil size={18} />
</button>
<button
  onClick={() => {
    if (y.current === "No") {
      setDeleteId(y.id);
    }
  }}
  disabled={y.current === "Yes"}
  title={y.current === "Yes" ? "Current Academic Year cannot be deleted" : "Delete"}
  className={`${
    y.current === "Yes"
      ? "text-gray-400 cursor-not-allowed"
      : "text-red-500 hover:text-red-700"
  }`}
>
  <Trash2 size={18} />
</button>

                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {openAddModal && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
    <div className="bg-white rounded-xl w-full max-w-md p-6">

      {/* HEADER */}
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-lg font-semibold">Add Academic Year</h3>
        <button
          onClick={() => setOpenAddModal(false)}
          className="text-gray-500 hover:text-red-500"
        >
          ✕
        </button>
      </div>

      {/* FORM */}
      <div className="space-y-4 text-sm">

  <div>
    <label className="text-gray-500">Academic Year</label>
    <input
      value={form.year}
      onChange={(e) => setForm({ ...form, year: e.target.value })}
      className="w-full border rounded-lg px-3 py-2"
    />
  </div>

  <div>
    <label className="text-gray-500">Start Date</label>
    <input
      type="date"
      value={form.start}
      onChange={(e) => setForm({ ...form, start: e.target.value })}
      className="w-full border rounded-lg px-3 py-2"
    />
  </div>

  <div>
    <label className="text-gray-500">End Date</label>
    <input
      type="date"
      value={form.end}
      onChange={(e) => setForm({ ...form, end: e.target.value })}
      className="w-full border rounded-lg px-3 py-2"
    />
  </div>

  <div>
    <label className="text-gray-500">Current Year</label>
    <select
      value={form.current}
      onChange={(e) =>
        setForm({ ...form, current: e.target.value as "Yes" | "No" })
      }
      className="w-full border rounded-lg px-3 py-2"
    >
      <option value="Yes">Yes</option>
      <option value="No">No</option>
    </select>
  </div>

  <div>
    <label className="text-gray-500">Status</label>
    <select
      value={form.status}
      onChange={(e) =>
        setForm({ ...form, status: e.target.value as "Active" | "Inactive" })
      }
      className="w-full border rounded-lg px-3 py-2"
    >
      <option value="Active">Active</option>
      <option value="Inactive">Inactive</option>
    </select>
  </div>

</div>

      {/* FOOTER */}
      <div className="flex justify-end gap-3 mt-6">
      <button
  onClick={handleAddAcademicYear}
  className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm"
>
  Save
</button>


        <button
          onClick={() => setOpenAddModal(false)}
          className="px-4 py-2 border rounded-lg text-sm"
        >
          Cancel
        </button>

      </div>

    </div>
  </div>
)}
{deleteId !== null && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
    <div className="bg-white rounded-xl w-full max-w-sm p-6">

      <h3 className="text-lg font-semibold mb-2">
        Confirm Delete
      </h3>

      <p className="text-sm text-gray-600 mb-6">
        Are you sure you want to delete this Academic Year?
      </p>

      <div className="flex justify-end gap-3">
        <button
          onClick={() => setDeleteId(null)}
          className="px-4 py-2 border rounded-lg text-sm"
        >
          Cancel
        </button>

        <button
  onClick={handleDeleteAcademicYear}
  className="px-4 py-2 bg-red-600 text-white rounded-lg text-sm"
>
  Delete
</button>

      </div>
    </div>
  </div>
)}
{openEditModal && editingYear && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
    <div className="bg-white rounded-xl w-full max-w-md p-6">

      <h3 className="text-lg font-semibold mb-5">
        Edit Academic Year
      </h3>

      {/* ✅ STEP-2: PASTE FORM HERE */}
      <div className="space-y-4 text-sm">

        <div>
          <label className="text-gray-500">Academic Year</label>
          <input
            value={form.year}
            onChange={(e) => setForm({ ...form, year: e.target.value })}
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>

        <div>
          <label className="text-gray-500">Start Date</label>
          <input
            type="date"
            value={form.start}
            onChange={(e) => setForm({ ...form, start: e.target.value })}
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>

        <div>
          <label className="text-gray-500">End Date</label>
          <input
            type="date"
            value={form.end}
            onChange={(e) => setForm({ ...form, end: e.target.value })}
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>

        <div>
          <label className="text-gray-500">Current Year</label>
          <select
            value={form.current}
            onChange={(e) =>
              setForm({ ...form, current: e.target.value as "Yes" | "No" })
            }
            className="w-full border rounded-lg px-3 py-2"
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <div>
          <label className="text-gray-500">Status</label>
          <select
            value={form.status}
            onChange={(e) =>
              setForm({ ...form, status: e.target.value as "Active" | "Inactive" })
            }
            className="w-full border rounded-lg px-3 py-2"
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>

      </div>

      {/* FOOTER */}
      <div className="flex justify-end gap-3 mt-6">
        <button
          onClick={() => setOpenEditModal(false)}
          className="px-4 py-2 border rounded-lg text-sm"
        >
          Cancel
        </button>
        <button
  onClick={handleUpdateAcademicYear}
  className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm"
>
  Update
</button>
      </div>

    </div>
  </div>
)}

    </div>
  );
}
