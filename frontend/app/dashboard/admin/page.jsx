"use client";
import useRoleGuard from "@/hooks/useRoleGuard";

const AdminDashboard = () => {
  useRoleGuard(["admin"]);

  return <div>Admin Dashboard</div>;
};

export default AdminDashboard;
