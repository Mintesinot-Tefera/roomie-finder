"use client";

import RoomCard from "../components/RoomCard";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
// import useAuthRedirect from "@/hooks/useAuthRedirect";
// import useRoleGuard from "@/hooks/useRoleGuard";
// import { useAuth } from '@/context/AuthContext';
import LoadingSpinner from '@/components/LoadingSpinner';



const RoomListPage = () => {
  const router = useRouter();

  // const { user, loading } = useAuth(); // global user context
  // const [user, setUser] = useState(null);

  const [rooms, setRooms] = useState([]);

  // const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");
  const [fetching, setFetching] = useState(true);

  // useAuthRedirect();
  // useRoleGuard(["landlord"]);

  const handleNavigate = () => {
    router.push("/landlord/rooms/create");
  };


  useEffect(() => {
    // if (!loading && user) {
    const fetchRooms = async () => {
      try {
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
    fetchRooms();
  }

    // }, [loading, user]);

    , []);


  // if (loading || fetching) {

  if (fetching) {
    return <LoadingSpinner />
    // return <div className="text-center mt-10">Loading your dashboard...</div>;
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
