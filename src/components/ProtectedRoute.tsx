import { Navigate } from "react-router-dom";

export default function ProtectedRoute({
  children,
  role,
}: {
  children: JSX.Element;
  role: string | string[];
}) {
  const userRole = localStorage.getItem("role");

  // ❌ Not logged in
  if (!userRole) {
    return <Navigate to="/login" replace />;
  }

  // Normalize roles
  const allowedRoles = Array.isArray(role) ? role : [role];

  // ❌ Logged in but NOT authorized
  if (!allowedRoles.includes(userRole)) {
    return <Navigate to="/unauthorized" replace />;
  }

  // ✅ Authorized
  return children;
}
