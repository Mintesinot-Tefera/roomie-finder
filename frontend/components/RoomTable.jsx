"use client";
import { useState } from "react";

const RoomTable = ({ rooms, onApprove, onDelete, onEdit }) => {
  const [search, setSearch] = useState("");

  const filteredRooms = rooms.filter((room) =>
    room.title.toLowerCase().includes(search.toLowerCase()) ||
    room.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Room Listings</h2>
        <input
          type="text"
          placeholder="Search rooms..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-3 py-2 rounded w-64 text-sm"
        />
      </div>

      <table className="w-full table-auto text-sm border">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left">Title</th>
            <th className="px-4 py-2 text-left">Location</th>
            <th className="px-4 py-2 text-left">Price</th>
            <th className="px-4 py-2 text-left">Status</th>
            <th className="px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredRooms.length > 0 ? (
            filteredRooms.map((room) => (
              <tr key={room._id} className="border-t">
                <td className="px-4 py-2">{room.title}</td>
                <td className="px-4 py-2">{room.location}</td>
                <td className="px-4 py-2">${room.price}</td>
                <td className="px-4 py-2">
                  <span
                    className={`text-xs font-medium px-2 py-1 rounded ${
                      room.status === "approved"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {room.status}
                  </span>
                </td>
                <td className="px-4 py-2 space-x-2">
                  {room.status === "pending" && (
                    <button
                      onClick={() => onApprove(room._id)}
                      className="text-blue-600 hover:underline"
                    >
                      Approve
                    </button>
                  )}
                  <button
                    onClick={() => onEdit(room._id)}
                    className="text-emerald-600 hover:underline"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete(room._id)}
                    className="text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} className="text-center py-4 text-gray-500">
                No rooms found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default RoomTable;
