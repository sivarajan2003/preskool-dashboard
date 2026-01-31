import { useState } from "react";
import {
  RefreshCcw,
  Printer,
  Plus,
  ArrowUpDown,
  X, Edit, Trash2 ,
} from "lucide-react";

/* ================= TYPES ================= */
type AcademicYear = {
  id: number;
  year: string;
  startDate: string;
  endDate: string;
  currentYear: string;
  status: string;
};

export default function AcademicCalendar() {
  /* ================= STATE ================= */
  const [showModal, setShowModal] = useState(false);

  const [academicYears, setAcademicYears] = useState<AcademicYear[]>([]);

  const [formData, setFormData] = useState<AcademicYear>({
    id: Date.now(),
    year: "",
    startDate: "",
    endDate: "",
    currentYear: "No",
    status: "Active",
  });

  /* ================= HANDLERS ================= */
  const handleRefresh = () => {
    window.location.reload();
  };

  const handlePrint = () => {
    window.print();
  };

  const handleAddYear = () => {
    setIsEdit(false);
    setFormData({
      id: Date.now(),
      year: "",
      startDate: "",
      endDate: "",
      currentYear: "No",
      status: "Active",
    });
    setShowModal(true);
  };
  

  const handleSave = () => {
    if (!formData.year || !formData.startDate || !formData.endDate) {
      alert("Please fill all required fields");
      return;
    }
  
    setAcademicYears((prev) => {
      let updated = [...prev];
  
      // ✅ If Current Year = Yes → reset others
      if (formData.currentYear === "Yes") {
        updated = updated.map((y) => ({
          ...y,
          currentYear: "No",
        }));
      }
  
      if (isEdit) {
        return updated.map((y) =>
          y.id === formData.id ? formData : y
        );
      } else {
        return [...updated, formData];
      }
    });
  
    setShowModal(false);
  };
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const [isEdit, setIsEdit] = useState(false);
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const handleDelete = (item: AcademicYear) => {
    // 🚫 Prevent deleting current year
    if (item.currentYear === "Yes") {
      alert("You cannot delete the current academic year.");
      return;
    }
  
    setDeleteId(item.id);
    setShowDeleteConfirm(true);
  };
  const confirmDelete = () => {
    setAcademicYears((prev) =>
      prev.filter((item) => item.id !== deleteId)
    );
    setDeleteId(null);
    setShowDeleteConfirm(false);
  };
  
  
  const handleEdit = (item: AcademicYear) => {
    setIsEdit(true);
    setFormData(item);
    setShowModal(true);
  };
  
  /* ================= UI ================= */
  return (
    <div className="p-6 space-y-6">
      {/* ================= HEADER ================= */}
      <div className="bg-white rounded-xl border p-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Academic Year
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Dashboard / Academic / Academic Year
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleRefresh}
            className="p-2 border rounded-lg hover:bg-gray-50"
          >
            <RefreshCcw className="w-4 h-4 text-gray-600" />
          </button>

          <button
            onClick={handlePrint}
            className="p-2 border rounded-lg hover:bg-gray-50"
          >
            <Printer className="w-4 h-4 text-gray-600" />
          </button>

          <button
            onClick={handleAddYear}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            <Plus className="w-4 h-4" />
            Add Academic Year
          </button>

          <button className="px-4 py-2 border rounded-lg text-sm hover:bg-gray-50">
            Academic Year : <span className="font-medium">All</span>
          </button>
        </div>
      </div>

      {/* ================= LIST HEADER ================= */}
      <div className="bg-white rounded-xl border p-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-800">
          Academic Year List
        </h2>

        <button className="flex items-center gap-2 px-3 py-2 border rounded-lg text-sm hover:bg-gray-50">
          <ArrowUpDown className="w-4 h-4" />
          Sort
        </button>
      </div>

      {/* ================= TABLE ================= */}
      <div className="bg-white rounded-xl border overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b">
            <tr className="text-left text-gray-600">
              <th className="px-6 py-3">ID</th>
              <th className="px-6 py-3">Academic Year</th>
              <th className="px-6 py-3">Start Date</th>
              <th className="px-6 py-3">End Date</th>
              <th className="px-6 py-3">Current Year</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">Actions</th>

            </tr>
          </thead>

          <tbody>
            {academicYears.length === 0 ? (
              <tr>
                <td
                  colSpan={7}
                  className="px-6 py-12 text-center text-gray-400"
                >
                  No academic years found
                </td>
              </tr>
            ) : (
              academicYears.map((item) => (
                <tr key={item.id} className="border-t">
                  <td className="px-6 py-3">{item.id}</td>
                  <td className="px-6 py-3">{item.year}</td>
                  <td className="px-6 py-3">{item.startDate}</td>
                  <td className="px-6 py-3">{item.endDate}</td>
                  <td className="px-6 py-3">{item.currentYear}</td>
                  <td className="px-6 py-3">{item.status}</td>
                  <td className="px-6 py-3 flex gap-2">
  {/* EDIT */}
  <button
    onClick={() => handleEdit(item)}
    className="p-1 text-blue-600 hover:bg-blue-50 rounded"
    title="Edit"
  >
    <Edit className="w-4 h-4" />
  </button>

  {/* DELETE */}
  <button
onClick={() => handleDelete(item)}
className="p-1 text-red-600 hover:bg-red-50 rounded"
    title="Delete"
  >
    <Trash2 className="w-4 h-4" />
  </button>
</td>

                </tr>
              ))
            )}
            
          </tbody>
        </table>
      </div>

      {/* ================= MODAL ================= */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl w-full max-w-md p-6 space-y-4">
            {/* Modal Header */}
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">
                Add Academic Year
              </h3>
              <button onClick={() => setShowModal(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Academic Year */}
            <div>
              <label className="text-sm text-gray-600">
                Academic Year
              </label>
              <input
                type="text"
                className="w-full mt-1 p-2 border rounded-lg"
                value={formData.year}
                onChange={(e) =>
                  setFormData({ ...formData, year: e.target.value })
                }
              />
            </div>

            {/* Start Date */}
            <div>
              <label className="text-sm text-gray-600">
                Start Date
              </label>
              <input
                type="date"
                className="w-full mt-1 p-2 border rounded-lg"
                value={formData.startDate}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    startDate: e.target.value,
                  })
                }
              />
            </div>

            {/* End Date */}
            <div>
              <label className="text-sm text-gray-600">
                End Date
              </label>
              <input
                type="date"
                className="w-full mt-1 p-2 border rounded-lg"
                value={formData.endDate}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    endDate: e.target.value,
                  })
                }
              />
            </div>

            {/* Current Year */}
            <div>
              <label className="text-sm text-gray-600">
                Current Year
              </label>
              <select
                className="w-full mt-1 p-2 border rounded-lg"
                value={formData.currentYear}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    currentYear: e.target.value,
                  })
                }
              >
                <option>No</option>
                <option>Yes</option>
              </select>
            </div>

            {/* Status */}
            <div>
              <label className="text-sm text-gray-600">
                Status
              </label>
              <select
                className="w-full mt-1 p-2 border rounded-lg"
                value={formData.status}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    status: e.target.value,
                  })
                }
              >
                <option>Active</option>
                <option>Inactive</option>
              </select>
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-3 pt-4">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 border rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
      {showDeleteConfirm && (
  <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
    <div className="bg-white rounded-xl p-6 w-full max-w-sm">
      <h3 className="text-lg font-semibold mb-2">
        Confirm Delete
      </h3>
      <p className="text-sm text-gray-600 mb-4">
        Are you sure you want to delete this academic year?
      </p>

      <div className="flex justify-end gap-3">
        <button
          onClick={() => {
            setShowDeleteConfirm(false);
            setDeleteId(null);
          }}
          className="px-4 py-2 border rounded-lg"
        >
          Cancel
        </button>
        <button
          onClick={confirmDelete}
          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
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
