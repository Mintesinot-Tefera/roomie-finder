"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/card";
import useAuthRedirect from "@/hooks/useAuthRedirect";
import useRoleGuard from "@/hooks/useRoleGuard";


// const dummyRooms = [
//   {
//     id: 1,
//     title: "Spacious Apartment in Bole",
//     status: "Approved",
//     rent: 12000,
//     location: "Bole",
//     amenities: ["WiFi", "Parking"],
//   },
//   {
//     id: 2,
//     title: "Shared Room in Gullele",
//     status: "Pending",
//     rent: 6000,
//     location: "Gullele",
//     amenities: ["Kitchen", "Laundry"],
//   },
// ];

const LandlordDashboard = () => {
  const [user, setUser] = useState(null);
  const [rooms, setRooms] = useState([]);

  // const [rooms, setRooms] = useState(dummyRooms);
  // const approvedRooms = rooms.filter((r) => r.status === "Approved").length;
  const isLoading = useAuthRedirect(); // redirect if not logged in
  const [fetching, setFetching] = useState(true);
  useRoleGuard(["landlord"]);



  useEffect(() => {
    const fetchData = async () => {
      try {
        // 1. Fetch user
        const userRes = await fetch("http://localhost:5000/api/user/profile", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        });

        if (!userRes.ok) {
          console.error("Failed to fetch profile:", userRes.statusText);
          return;
        }

        const userData = await userRes.json();
        setUser(userData);


        // 2. Fetch rooms created by landlord
        const res = await fetch("http://localhost:5000/api/rooms/landlord", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          credentials: "include", // important for cookies
        });

        if (!res.ok) throw new Error("Failed to fetch rooms");

        const roomData = await res.json();
        setRooms(roomData);
      } catch (err) {
        console.error("Error fetching landlord rooms:", err);
      } finally {
        setFetching(false);
      }
    };

    fetchData();
  }, []);

  const approvedRooms = rooms.filter((room) => room.status === "approved").length;


  if (isLoading || fetching) {
    return <div className="text-center mt-10">Loading your dashboard...</div>;
  }

  // if (!user) {
  //   return <div className="text-center text-red-500">User not found or unauthorized</div>;
  // }

  return (
    <div className="p-6 space-y-6">
      {/* <h1 className="text-2xl font-bold mb-4">My room, {user.fullname}</h1> */}

      <h1 className="text-2xl font-bold text-blue-800">Landlord Dashboard</h1>

      {/* Dashboard Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-blue-50">
          <CardContent className="p-4">
            <p className="text-sm text-gray-600">Total Listings</p>
            <h3 className="text-2xl font-bold">{rooms.length}</h3>
          </CardContent>
        </Card>
        <Card className="bg-green-50">
          <CardContent className="p-4">
            <p className="text-sm text-gray-600">Approved Listings</p>
            <h3 className="text-2xl font-bold">{approvedRooms}</h3>
          </CardContent>
        </Card>
        <Card className="bg-purple-50">
          <CardContent className="p-4">
            <p className="text-sm text-gray-600">Total Inquiries</p>
            <h3 className="text-2xl font-bold">5</h3>
          </CardContent>
        </Card>
      </div>

      {/* Room Listings Table */}
      <div className="bg-white rounded-lg shadow p-4 mt-6">
        <h2 className="text-lg font-semibold mb-4">My Room Listings</h2>
        <table className="min-w-full table-auto text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2">Location</th>
              <th className="px-4 py-2">Rent</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {rooms.map((room) => (
              <tr key={room._id} className="border-t">
                <td className="px-4 py-2">{room.title}</td>
                <td className="px-4 py-2">{room.location}</td>
                <td className="px-4 py-2">{room.rent} ETB</td>
                <td className="px-4 py-2">
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${room.status === "Approved"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                      }`}
                  >
                    {room.status}
                  </span>
                </td>
                <td className="px-4 py-2 space-x-2">
                  <button className="text-blue-600 hover:underline">Edit</button>
                  <button className="text-red-600 hover:underline">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LandlordDashboard;
