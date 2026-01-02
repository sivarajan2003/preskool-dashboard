import { Navigate, Outlet } from "react-router-dom";

const ROLE_MATRIX: Record<string, string[]> = {
  admin: ["admin", "teacher", "parent", "student"],
  teacher: ["teacher", "parent", "student"],
  parent: ["parent", "student"],
  student: ["student"],
};

export default function ProtectedRoute({
  children,
  role,
}: {
  children?: JSX.Element;
  role?: "admin" | "teacher" | "parent" | "student";
}) {
  const isAuth = localStorage.getItem("isAuth");
  const userRole = localStorage.getItem("role");

  // ❌ Not logged in
  if (!isAuth || !userRole) {
    return <Navigate to="/login" replace />;
  }

  // ❌ Role not allowed → FORCE re-login
  if (role && !ROLE_MATRIX[userRole]?.includes(role)) {
    localStorage.clear(); // 🔥 IMPORTANT
    return <Navigate to="/login" replace />;
  }

  // ✅ Allow nested routes
  return children ?? <Outlet />;
}
