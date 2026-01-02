import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function DashboardLayout() {
  const [openSidebar, setOpenSidebar] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpenSidebar(false);
  }, [location.pathname]);
  
  return (
    <div className="flex h-screen bg-gray-50">

      {/* ===== Desktop Sidebar ===== */}
      <aside className="hidden lg:block h-screen">
  <Sidebar />
</aside>


      {/* ===== Mobile Sidebar Drawer ===== */}
      {openSidebar && (
  <div className="fixed inset-0 z-50 lg:hidden">
    {/* Overlay */}
    <div
      className="absolute inset-0 bg-black/40"
      onClick={() => setOpenSidebar(false)}
    />

    {/* 🔥 Mobile Sidebar (HIDDEN on desktop) */}
    <div className="absolute left-0 top-0 h-screen w-64 bg-white shadow-xl overflow-y-auto lg:hidden">
      <Sidebar />
    </div>
  </div>
)}


      {/* ===== Right Content ===== */}
      <div className="flex-1 flex flex-col overflow-hidden">

        {/* Header */}
        <Header onMenuClick={() => setOpenSidebar(true)} />

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-3 md:p-6">
          <Outlet />
        </main>

      </div>
    </div>
  );
}
