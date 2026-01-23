import { Navigate } from "react-router-dom";

export default function ProtectedRoute({
  children,
  role,
}: {
  children: JSX.Element;
  role: string | string[];
}) {
  const userRole = localStorage.getItem("role");
  const isAuth = localStorage.getItem("isAuth");

  if (!isAuth || !userRole) {
    return <Navigate to="/login" replace />;
  }

  const allowedRoles = Array.isArray(role) ? role : [role];

  if (!allowedRoles.includes(userRole)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
}
