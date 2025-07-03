"use client";
import { useEffect, useState } from "react";
import RoomTable from "@/components/RoomTable";

const RoomListPage = () => {
  const [rooms, setRooms] = useState([]);

  const fetchRooms = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/admin/rooms", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const data = await res.json();
      setRooms(data);
    } catch (err) {
      console.error("Failed to fetch rooms", err);
    }
  };

  useEffect(() => {
    fetchRooms();
  }, []);

  const handleApprove = async (id) => {
    // TODO: Call backend to approve room
    console.log("Approve", id);
  };

  const handleDelete = async (id) => {
    // TODO: Call backend to delete room
    console.log("Delete", id);
  };

  const handleEdit = (id) => {
    // Redirect to edit page
    console.log("Edit", id);
  };

  return (
    <div className="p-6">
      <RoomTable
        rooms={rooms}
        onApprove={handleApprove}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    </div>
  );
};

export default RoomListPage;
