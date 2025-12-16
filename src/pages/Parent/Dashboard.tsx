import DashboardLayout from "../../components/DashboardLayout";

export default function ParentDashboard() {
  return (
    <DashboardLayout>
      <h2 className="text-xl font-semibold mb-1">Parent Dashboard</h2>
      <p className="text-sm text-gray-500 mb-6">
        Dashboard / Parent Dashboard
      </p>

      <div className="bg-white rounded-xl border p-6">
        Parent dashboard content here
      </div>
    </DashboardLayout>
  );
}
