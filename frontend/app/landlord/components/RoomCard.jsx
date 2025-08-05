"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ConfirmModal from "./ConfirmModal";



const statusColors = {
  Pending: "bg-yellow-100 text-yellow-800",
  Approved: "bg-green-100 text-green-800",
  Rejected: "bg-red-100 text-red-800",
};

const RoomCard = ({ room }) => {
  const router = useRouter();

  const [showConfirm, setShowConfirm] = useState(false);


  const handleDelete = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/rooms/${room._id}`, {
        method: "DELETE",
        credentials: "include",
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to delete");

      alert("Room deleted successfully");

      if (router.refresh) {
        router.refresh(); // for App Router
      } else if (router.replace) {
        router.replace(router.asPath); // for Pages Router
      }
    } catch (err) {
      alert(err.message);
    }
  };

  // const handleDelete = async () => {
  //     const confirmed = window.confirm("Are you sure you want to delete this room?");
  //     if (!confirmed) return;

  //     try {
  //       const res = await fetch(`http://localhost:5000/api/rooms/${room._id}`, {
  //         method: "DELETE",
  //         // headers: {
  //         //   Authorization: `Bearer ${sessionStorage.getItem("token")}`,
  //         // },
  //           credentials: "include", // important for cookies

  //       });

  //       const data = await res.json();

  //       if (!res.ok) throw new Error(data.message || "Failed to delete");

  //       alert("Room deleted successfully");
  //       // Optionally reload or remove from state
  //       router.reload(); // or use mutate() if using SWR
  //     } catch (err) {
  //       alert(err.message);
  //     }
  //   };


  return (
    <div className="border rounded-lg shadow-sm p-4 bg-white">
      {room.images && room.images.length > 0 && (
        <img
          src={room.images[0]}
          // src={room.images[2]}
          alt={room.title}
          className="w-full h-40 object-cover rounded mb-3"
        />
      )}
      {/* {room.imageUrl && (
        <img
          src={room.imageUrl}
          alt={room.title}
          className="w-full h-40 object-cover rounded mb-3"
        />
      )} */}
      <h3 className="text-lg font-semibold">{room.title}</h3>
      <p className="text-gray-500">{room.location}</p>
      <p className="text-sm text-gray-600 mb-2">${room.rent} / month</p>
      {/* <div className={`inline-block px-2 py-1 text-xs font-medium rounded ${statusColors[room.status]}`}>
        {room.status}
      </div> */}
      <div
        className={`inline-block px-2 py-1 text-xs font-medium rounded ${statusColors[room.status.charAt(0).toUpperCase() + room.status.slice(1)]
          }`}
      >
        {room.status}
      </div>
      <div className="mt-4 flex gap-4">
        <Link href={`/landlord/rooms/edit/${room._id}`} className="text-blue-600 text-sm hover:underline">
          Edit
        </Link>

        {/* <button
          onClick={handleDelete}
          className="text-red-600 text-sm hover:underline"
        >
          Delete
        </button> */}


        <button
          onClick={() => setShowConfirm(true)}
          className="text-red-600 text-sm hover:underline"
        >
          Delete
        </button>

        <ConfirmModal
          isOpen={showConfirm}
          onClose={() => setShowConfirm(false)}
          onConfirm={handleDelete}
        />

      </div>
    </div>
  );
};

export default RoomCard;
