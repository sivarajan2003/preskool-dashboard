import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute({
  children,
  role,
}: {
  children?: JSX.Element; // ✅ MUST be optional
  role?: string;
}) {
  const isAuth = localStorage.getItem("isAuth");
  const userRole = localStorage.getItem("role");

  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }

  if (role && userRole !== role) {
    return <Navigate to="/login" replace />;
  }

  // ✅ THIS allows nested routes (Exam / Schedule / Grade)
  return children ?? <Outlet />;
}
