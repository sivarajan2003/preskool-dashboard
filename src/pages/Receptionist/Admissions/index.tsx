import { Outlet } from "react-router-dom";

export default function ReceptionistAdmissions() {
  return (
    <div className="p-6">
      {/* Optional header */}
      <h1 className="text-xl font-semibold mb-4">Admissions</h1>

      {/* 👇 THIS IS REQUIRED */}
      <Outlet />
    </div>
  );
}
