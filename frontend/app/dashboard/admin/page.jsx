"use client";

import useRoleGuard from "@/hooks/useRoleGuard";
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { useRouter } from "next/navigation";

const AdminDashboard = () => {
  const router = useRouter();
  const [stats, setStats] = useState(null);

  useEffect(() => {
    // Fetch admin stats from backend
    const fetchStats = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/admin/stats", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const data = await res.json();
        setStats(data);
      } catch (err) {
        console.error("Failed to load stats", err);
      }
    };

    fetchStats();
  }, []);

  const chartData = [
    { name: "Landlords", value: stats?.userRoles?.landlord || 0 },
    { name: "Seekers", value: stats?.userRoles?.seeker || 0 },
    { name: "Admins", value: stats?.userRoles?.admin || 0 },
  ];

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-blue-800">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-gray-600">Total Users</p>
            <h3 className="text-xl font-bold">{stats?.totalUsers ?? "..."}</h3>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-gray-600">Total Rooms</p>
            <h3 className="text-xl font-bold">{stats?.totalRooms ?? "..."}</h3>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-gray-600">Total Roommates</p>
            <h3 className="text-xl font-bold">{stats?.totalRoommates ?? "..."}</h3>
          </CardContent>
        </Card>
      </div>

      <div className="bg-white p-4 rounded-xl shadow">
        <h2 className="text-lg font-semibold mb-4">Users by Role</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <XAxis dataKey="name" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Bar dataKey="value" fill="#2563eb" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AdminDashboard;
