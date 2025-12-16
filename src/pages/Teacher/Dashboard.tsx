import DashboardLayout from "../../components/DashboardLayout";

export default function TeacherDashboard() {
  return (
    <DashboardLayout>
      {/* PAGE TITLE */}
      <h2 className="text-xl font-semibold mb-1">Teacher Dashboard</h2>
      <p className="text-sm text-gray-500 mb-6">
        Dashboard / Teacher Dashboard
      </p>

      {/* BLUE WELCOME BANNER */}
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 p-6 mb-8">
        {/* Pattern overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[size:16px_16px]" />

        <div className="relative flex items-center justify-between">
          {/* LEFT CONTENT */}
          <div>
            <h3 className="text-white text-lg font-semibold">
              Good Morning Ms. Teena
            </h3>
            <p className="text-blue-100 text-sm mt-1">
              Have a Good day at work
            </p>

            <p className="text-blue-100 text-sm mt-3">
              <span className="font-medium">Notice :</span> There is a staff
              meeting at <b>9AM</b> today, Don&apos;t forget to attend!!!
            </p>
          </div>

          {/* RIGHT ILLUSTRATION */}
          <img
            src="/teacher-banner.png"   // put image in public folder
            alt="Teacher"
            className="hidden md:block h-28"
          />
        </div>
      </div>

      
    </DashboardLayout>
  );
}
