import { Users, GraduationCap, UsersRound, DollarSign } from "lucide-react";
import A1 from "../assets/a1.png";
import A6 from "../assets/a6.png";
import A7 from "../assets/a7.png";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import StatCard from "../components/StatCard";
import FeeCollectionChart from "../components/FeeCollectionChart";
import Calendar from "../components/Calendar";
import UpcomingEvents from "../components/UpcomingEvents";
import QuickStats from "../components/QuickStats";
import LeaveRequests from "../components/LeaveRequests";
import QuickLinks from "../components/QuickLinks";
import ClassRoutine from "../components/ClassRoutine";
import PerformanceCard from "../components/PerformanceCard";
import EarningsExpenses from "../components/EarningsExpenses";
import TopPerformers from "../components/TopPerformers";
import NoticeBoard from "../components/NoticeBoard";
import FeeSummaryCards from "../components/FeeSummaryCards";
import QuickActionCards from "../components/QuickActionCards";
import LastDashboardWidgets from "../components/LastDashboardWidgets";

import D1 from "../assets/D1.png";
import D2 from "../assets/D2.png";
import D3 from "../assets/D3.png";
import D4 from "../assets/D4.png";

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* SIDEBAR */}
      <Sidebar />

      {/* RIGHT CONTENT */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />

        <main className="flex-1 overflow-y-auto p-6">
{/* PAGE TITLE + ACTION BUTTONS */}
<div className="flex items-center justify-between mb-6">

  {/* LEFT — TITLE */}
  <div>
    <h2 className="text-xl font-semibold">Admin Dashboard</h2>
    <p className="text-sm text-gray-500">
      Dashboard / Admin Dashboard
    </p>
  </div>

  {/* RIGHT — ACTION BUTTONS */}
  <div className="flex items-center gap-3">

    {/* ADD NEW STUDENT */}
    <button
      onClick={() => console.log("Add New Student")}
      className="
        px-4 py-2 
        bg-blue-600 text-white 
        text-sm font-medium 
        rounded-lg 
        hover:bg-blue-700 
        transition
      "
    >
      Add New Student
    </button>

    {/* FEES DETAILS */}
    <button
      onClick={() => console.log("Fees Details")}
      className="
        px-4 py-2 
        bg-gray-100 text-gray-700 
        text-sm font-medium 
        rounded-lg 
        hover:bg-gray-200 
        transition
      "
    >
      Fees Details
    </button>

  </div>
</div>

          {/* SUCCESS NOTIFICATION */}
          <div className="flex items-center justify-between bg-green-50 border border-green-300 text-green-700 rounded-lg px-4 py-2 mb-4">
            <div className="flex items-center gap-2 text-sm">
            <img
  src={A1}
  className="w-6 h-6 rounded-full"
  alt="student"
/>

              <span>
                <strong>Fahed III.C</strong> has paid Fees for the{" "}
                <strong>Term1</strong>
              </span>
            </div>
            <button className="text-green-600 hover:text-green-800">
              ✕
            </button>
          </div>

          {/* WELCOME BANNER */}
          <div className="relative bg-gradient-to-r from-[#0F0C29] via-[#302B63] to-[#24243E] text-white rounded-xl p-6 mb-6 overflow-hidden">
            <div className="relative flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold">
                  Welcome Back, Mr. Praga
                </h3>
                <p className="text-sm text-gray-300 mt-1">
                  Have a Good day at work
                </p>
              </div>

              <p className="text-xs text-gray-300">
                ⏱ Updated Recently
              </p>
            </div>
          </div>

          {/* STAT CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <StatCard
              icon={D1}
              title="Total Students"
              value="3654"
              percent="+10%"
              percentBg="bg-red-100"
              percentText="text-red-600"
              active="3643"
              inactive="11"
              iconBg="bg-pink-50"
            />

            <StatCard
              icon={D2}
              title="Total Teachers"
              value="284"
              percent="+5%"
              percentBg="bg-blue-100"
              percentText="text-blue-600"
              active="254"
              inactive="30"
              iconBg="bg-cyan-50"
            />

            <StatCard
              icon={D3}
              title="Total Staff"
              value="162"
              percent="+2%"
              percentBg="bg-yellow-100"
              percentText="text-yellow-600"
              active="161"
              inactive="02"
              iconBg="bg-yellow-50"
            />

            <StatCard
              icon={D4}
              title="Total Subjects"
              value="82"
              percent="+15%"
              percentBg="bg-green-100"
              percentText="text-green-600"
              active="81"
              inactive="01"
              iconBg="bg-green-50"
            />
          </div>

          {/* FEES + LEAVE */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <div className="lg:col-span-2">
              <FeeCollectionChart />
            </div>
            <LeaveRequests />
          </div>

          {/* LOWER GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <div className="flex flex-col gap-6">
              <Calendar />
              <UpcomingEvents />
            </div>

            <div className="flex flex-col gap-6">
              <QuickStats />
              <TopPerformers />
            </div>

            <div className="flex flex-col gap-6">
              <QuickLinks />
              <ClassRoutine />
              <PerformanceCard />
            </div>
          </div>

          {/* EARNINGS + NOTICE + FEES */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
            <div className="lg:col-span-1">
              <EarningsExpenses />
            </div>

            <div className="lg:col-span-2">
              <NoticeBoard />
            </div>

            <div className="lg:col-span-1">
              <FeeSummaryCards />
            </div>
          </div>

          {/* QUICK ACTIONS */}
          <div className="mb-6">
            <QuickActionCards />
          </div>

          {/* LAST WIDGETS */}
          <div className="mb-6">
            <LastDashboardWidgets />
          </div>

        </main>
      </div>
    </div>
  );
}
