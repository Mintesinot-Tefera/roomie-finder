"use client";

import Link from "next/link";

const statusColors = {
  Pending: "bg-yellow-100 text-yellow-800",
  Approved: "bg-green-100 text-green-800",
  Rejected: "bg-red-100 text-red-800",
};

const RoomCard = ({ room }) => {
  return (
    <div className="border rounded-lg shadow-sm p-4 bg-white">
      {room.images && room.images.length > 0 && (
        <img
          src={room.images[0]}
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
        className={`inline-block px-2 py-1 text-xs font-medium rounded ${
          statusColors[room.status.charAt(0).toUpperCase() + room.status.slice(1)]
        }`}
      >
        {room.status}
      </div>
      <div className="mt-4 flex gap-4">
        <Link href={`/landlord/rooms/edit/${room._id}`} className="text-blue-600 text-sm hover:underline">
          Edit
        </Link>
        <button className="text-red-600 text-sm hover:underline">Delete</button>
      </div>
    </div>
  );
};

export default RoomCard;
