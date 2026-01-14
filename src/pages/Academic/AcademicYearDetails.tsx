import { useParams, useNavigate } from "react-router-dom";

interface ClassData {
    year: string;
    className: string;
    students: number;
    sections: number;
  }
  
  const academicYears = ["2025-2026", "2024-2025", "2023-2024", "2021-2022"];
  
  const classData: ClassData[] = academicYears.flatMap((year) =>
    Array.from({ length: 12 }, (_, i) => ({
      year,
      className: `Class ${i + 1}`,
      students:
        year === "2025-2026"
          ? i < 4 ? 90 : i < 8 ? 85 : 80
          : year === "2024-2025"
          ? i < 6 ? 75 : 70
          : year === "2023-2024"
          ? 60
          : 50,
      sections:
        year === "2025-2026"
          ? i < 6 ? 4 : 3
          : year === "2024-2025"
          ? 3
          : 2,
    }))
  );
  
export default function AcademicYearDetails() {
  const { year } = useParams();
  const navigate = useNavigate();

  const filtered =
    year === "ALL"
      ? classData
      : classData.filter((c) => c.year === year);

      const totalClasses = filtered.length;
      const totalStudents = filtered.reduce((sum, c) => sum + c.students, 0);
      const totalSections = filtered.reduce((sum, c) => sum + c.sections, 0);
      
  return (
    <div className="p-6 space-y-6">
      <button
  onClick={() => navigate("/admin/dashboard/academic/academic-year")}
  className="text-blue-600 hover:underline mb-4"
>
  ← Back
</button>

      <h2 className="text-2xl font-semibold">
        Academic Year Details : {year}
      </h2>

      {/* STATS */}
      <div className="grid grid-cols-3 gap-4">
  <div className="bg-white border rounded-xl p-4">
    <p className="text-gray-500 text-sm">Total Classes</p>
    <p className="text-2xl font-semibold">{totalClasses}</p>
  </div>

  <div className="bg-white border rounded-xl p-4">
    <p className="text-gray-500 text-sm">Total Students</p>
    <p className="text-2xl font-semibold">{totalStudents}</p>
  </div>

  <div className="bg-white border rounded-xl p-4">
    <p className="text-gray-500 text-sm">Total Sections</p>
    <p className="text-2xl font-semibold">{totalSections}</p>
  </div>
</div>

      {/* TABLE */}
      <div className="bg-white border rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-3">Class</th>
              <th className="p-3">Students</th>
              <th className="p-3">Sections</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((c, i) => (
              <tr key={i} className="border-t">
                <td className="p-3">{c.className}</td>
                <td className="p-3">{c.students}</td>
                <td className="p-3">{c.sections}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
