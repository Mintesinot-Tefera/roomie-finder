// "use client";

// import useRoleGuard from "@/hooks/useRoleGuard";
// import { useEffect, useState } from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
// import { useRouter } from "next/navigation";

// const AdminDashboard = () => {
//   const router = useRouter();
//   const [stats, setStats] = useState(null);

//   useEffect(() => {
//     // Fetch admin stats from backend
//     const fetchStats = async () => {
//       try {
//         const res = await fetch("http://localhost:5000/api/admin/stats", {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         });
//         const data = await res.json();
//         setStats(data);
//       } catch (err) {
//         console.error("Failed to load stats", err);
//       }
//     };

//     fetchStats();
//   }, []);

//   const chartData = [
//     { name: "Landlords", value: stats?.userRoles?.landlord || 0 },
//     { name: "Seekers", value: stats?.userRoles?.seeker || 0 },
//     { name: "Admins", value: stats?.userRoles?.admin || 0 },
//   ];

//   return (
//     <div className="p-6 space-y-6">
//       <h1 className="text-2xl font-bold text-blue-800">Admin Dashboard</h1>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         <Card>
//           <CardContent className="p-4">
//             <p className="text-sm text-gray-600">Total Users</p>
//             <h3 className="text-xl font-bold">{stats?.totalUsers ?? "..."}</h3>
//           </CardContent>
//         </Card>
//         <Card>
//           <CardContent className="p-4">
//             <p className="text-sm text-gray-600">Total Rooms</p>
//             <h3 className="text-xl font-bold">{stats?.totalRooms ?? "..."}</h3>
//           </CardContent>
//         </Card>
//         <Card>
//           <CardContent className="p-4">
//             <p className="text-sm text-gray-600">Total Roommates</p>
//             <h3 className="text-xl font-bold">{stats?.totalRoommates ?? "..."}</h3>
//           </CardContent>
//         </Card>
//       </div>

//       <div className="bg-white p-4 rounded-xl shadow">
//         <h2 className="text-lg font-semibold mb-4">Users by Role</h2>
//         <ResponsiveContainer width="100%" height={300}>
//           <BarChart data={chartData}>
//             <XAxis dataKey="name" />
//             <YAxis allowDecimals={false} />
//             <Tooltip />
//             <Bar dataKey="value" fill="#2563eb" radius={[4, 4, 0, 0]} />
//           </BarChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;











// app/admin/dashboard/page.jsx
// export default function AdminDashboard() {
//   return (
//     <div>
//       <h1 className="text-3xl font-bold mb-6">Dashboard Overview</h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         <div className="bg-white rounded-lg shadow p-4">
//           <h2 className="text-lg font-semibold">Total Users</h2>
//           <p className="text-2xl mt-2 font-bold text-blue-700">0</p>
//         </div>
//         <div className="bg-white rounded-lg shadow p-4">
//           <h2 className="text-lg font-semibold">Total Rooms</h2>
//           <p className="text-2xl mt-2 font-bold text-blue-700">0</p>
//         </div>
//         <div className="bg-white rounded-lg shadow p-4">
//           <h2 className="text-lg font-semibold">Total Roommates</h2>
//           <p className="text-2xl mt-2 font-bold text-blue-700">0</p>
//         </div>
//       </div>

//       {/* Recent signups / listings table (optional placeholder) */}
//       <div className="mt-10">
//         <h2 className="text-xl font-bold mb-4">Recent Signups</h2>
//         <div className="bg-white shadow rounded-lg overflow-x-auto">
//           <table className="min-w-full">
//             <thead>
//               <tr className="bg-gray-100 text-left text-sm font-semibold text-gray-600">
//                 <th className="py-3 px-4">Name</th>
//                 <th className="py-3 px-4">Email</th>
//                 <th className="py-3 px-4">Role</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td className="py-3 px-4">—</td>
//                 <td className="py-3 px-4">—</td>
//                 <td className="py-3 px-4">—</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }





"use client";
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/app/admin/components/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import AnalyticsOverview from "@/app/admin/components/AnalyticsOverview";

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalUsers: 120,
    totalRooms: 35,
    totalRoommates: 52,
    userRoles: {
      admin: 5,
      landlord: 45,
      seeker: 70,
    },
    recentUsers: [
      { id: 1, name: "Ross G.", role: "seeker", joined: "2024-06-01" },
      { id: 2, name: "Joey T.", role: "landlord", joined: "2024-06-02" },
      { id: 3, name: "Chandler B.", role: "landlord", joined: "2024-06-02" },
      { id: 4, name: "Rachel N.", role: "landlord", joined: "2024-06-02" },
      { id: 5, name: "Phebie B.", role: "landlord", joined: "2024-06-02" },
      { id: 6, name: "Monica G.", role: "landlord", joined: "2024-06-02" },

      // ... more
    ],
    recentListings: [
      { id: 1, title: "Modern Flat in Bole", type: "room", posted: "2024-06-03" },
      { id: 2, name: "Kalemwork", type: "roommate", posted: "2024-06-04" },
      // ... more
    ],
  });

  const chartData = [
    { name: "Admins", value: stats.userRoles.admin },
    { name: "Landlords", value: stats.userRoles.landlord },
    { name: "Seekers", value: stats.userRoles.seeker },
  ];
  const [analytics, setAnalytics] = useState(null);

  // useEffect(() => {
  //   const fetchAnalytics = async () => {
  //     const res = await fetch("http://localhost:5000/api/admin/analytics", {
  //       headers: {
  //         Authorization: `Bearer ${localStorage.getItem("token")}`,
  //       },
  //     });
  //     const data = await res.json();
  //     setAnalytics(data);
  //   };

  //   fetchAnalytics();
  // }, []);


  useEffect(() => {
    // Dummy mock data instead of fetching
    const dummyData = {
      signupData: [
        { _id: "2024-01", count: 10 },
        { _id: "2024-02", count: 18 },
        { _id: "2024-03", count: 25 },
        { _id: "2024-04", count: 20 },
        { _id: "2024-05", count: 32 },
        { _id: "2024-06", count: 28 },
        { _id: "2024-07", count: 40 },
      ],
      roomByRegion: [
        { _id: "Addis Ababa", count: 12 },
        { _id: "Adama", count: 7 },
        { _id: "Bahir Dar", count: 10 },
        { _id: "Hawassa", count: 5 },
      ],
      genderDist: [
        { _id: "Male", count: 30 },
        { _id: "Female", count: 45 },
      ],
    };

    setTimeout(() => {
      setAnalytics(dummyData);
    }, 800); // simulate loading
  }, []);

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-blue-800">Admin Dashboard</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card><CardContent className="p-4"><p className="text-sm">Total Users</p><h3 className="text-2xl font-bold">{stats.totalUsers}</h3></CardContent></Card>
        <Card><CardContent className="p-4"><p className="text-sm">Total Rooms</p><h3 className="text-2xl font-bold">{stats.totalRooms}</h3></CardContent></Card>
        <Card><CardContent className="p-4"><p className="text-sm">Total Roommates</p><h3 className="text-2xl font-bold">{stats.totalRoommates}</h3></CardContent></Card>
      </div>

      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-blue-50">
          <CardContent className="p-4">
            <p className="text-sm text-blue-700">Total Users</p>
            <h3 className="text-2xl font-bold text-blue-900">{stats.totalUsers}</h3>
          </CardContent>
        </Card>

        <Card className="bg-indigo-50">
          <CardContent className="p-4">
            <p className="text-sm text-indigo-700">Total Rooms</p>
            <h3 className="text-2xl font-bold text-indigo-900">{stats.totalRooms}</h3>
          </CardContent>
        </Card>

        <Card className="bg-green-50">
          <CardContent className="p-4">
            <p className="text-sm text-green-700">Total Roommates</p>
            <h3 className="text-2xl font-bold text-green-900">{stats.totalRoommates}</h3>
          </CardContent>
        </Card>
      </div> */}


      {/* Chart */}
      {/* <div className="bg-white rounded-xl shadow p-4">
        <h2 className="text-lg font-semibold mb-4">Users by Role</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}><XAxis dataKey="name" /><YAxis /><Tooltip /><Bar dataKey="value" fill="#2563eb" /></BarChart>
        </ResponsiveContainer>
      </div> */}

      {/* AnalyticsOverview */}
      {/* <div className="bg-white rounded-xl shadow p-4">
        <h2 className="text-lg font-semibold mb-4">Analytics Overview</h2>
        <div className="p-6 space-y-6">
          {analytics ? (
            <AnalyticsOverview data={analytics} />
          ) : (
            <p className="text-gray-500">Loading analytics...</p>
          )}
        </div>
      </div> */}


      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Users by Role Chart */}
        <div className="bg-white rounded-xl shadow p-4">
          <h2 className="text-lg font-semibold mb-4">Users by Role</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#2563eb" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Analytics Overview */}
        <div className="bg-white rounded-xl shadow p-6">
          {/* <h2 className="text-lg font-semibold mb-4">Analytics Overview</h2> */}
          <h2 className="text-lg font-semibold mb-4">User Signups Over Time</h2>

          
          <div className="p-4">
            {analytics ? (
              <AnalyticsOverview data={analytics} />
            ) : (
              <p className="text-gray-500">Loading analytics...</p>
            )}
          </div>
        </div>
      </div>



      {/* Recent Signups / Listings */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-semibold mb-2">Recent Users</h2>
          <ul className="space-y-2 text-sm">
            {stats.recentUsers.map((user) => (
              <li key={user.id} className="flex justify-between border-b py-1">
                <span>{user.name} - <em>{user.role}</em></span>
                <span>{user.joined}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-semibold mb-2">Recent Listings</h2>
          <ul className="space-y-2 text-sm">
            {stats.recentListings.map((item) => (
              <li key={item.id} className="flex justify-between border-b py-1">
                <span>{item.title || item.name} - <em>{item.type}</em></span>
                <span>{item.posted}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
