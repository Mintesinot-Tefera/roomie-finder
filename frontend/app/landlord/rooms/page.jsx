"use client";

import RoomCard from "../components/RoomCard";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import useAuthRedirect from "@/hooks/useAuthRedirect";



// const dummyRooms = [
//   {
//     _id: "1",
//     title: "Modern Studio",
//     location: "Addis Ababa",
//     price: 3500,
//     imageUrl: "/room1.jpg",
//     status: "Pending",
//   },
//   {
//     _id: "2",
//     title: "Shared Apartment",
//     location: "Bole",
//     price: 2500,
//     imageUrl: "/room2.jpg",
//     status: "Approved",
//   },
//   {
//     _id: "3",
//     title: "Luxury Room",
//     location: "Kazanchis",
//     price: 4500,
//     imageUrl: "/room3.jpg",
//     status: "Rejected",
//   },
// ];



const RoomListPage = () => {
  const router = useRouter();
  const [user, setUser] = useState(null);

  const [rooms, setRooms] = useState([]);
  // const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [fetching, setFetching] = useState(true);
  const isLoading = useAuthRedirect(); // redirect if not logged in


  const handleNavigate = () => {
    router.push("/landlord/rooms/create");
  };

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
          credentials: "include", // Send cookies for auth
        });
        if (!res.ok) throw new Error(data.message || "Failed to fetch rooms");

        const data = await res.json();
        setRooms(data);
      } catch (err) {
        console.error("Error fetching landlord rooms:", err.message);
        // setError(err.message);
      } finally {
        setFetching(false);
      }
    };

    fetchData();
  }, []);

   if (isLoading || fetching) {
    return <div className="text-center mt-10">Loading your dashboard...</div>;
  }
  // if (loading) return <p className="p-6">Loading...</p>;

  // if (error) {
  //   router.push("/signin");
  //   return null;
  // }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">My Room Listings</h1>
      <button
        onClick={handleNavigate}
        className="bg-blue-600 text-white px-4 py-2 rounded mb-2"
      >
        + Create New Room
      </button>

      {rooms.length === 0 ? (
        <p className="text-gray-500">You haven't created any rooms yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {rooms.map((room) => (
            <RoomCard key={room._id} room={room} />
          ))}
        </div>
      )}
    </div>
  );
};

export default RoomListPage;
