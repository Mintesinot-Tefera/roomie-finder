"use client";

import RoomCard from "../components/RoomCard";

const dummyRooms = [
  {
    _id: "1",
    title: "Modern Studio",
    location: "Addis Ababa",
    price: 3500,
    imageUrl: "/room1.jpg",
    status: "Pending",
  },
  {
    _id: "2",
    title: "Shared Apartment",
    location: "Bole",
    price: 2500,
    imageUrl: "/room2.jpg",
    status: "Approved",
  },
  {
    _id: "3",
    title: "Luxury Room",
    location: "Kazanchis",
    price: 4500,
    imageUrl: "/room3.jpg",
    status: "Rejected",
  },
];

const RoomListPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">My Room Listings</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {dummyRooms.map((room) => (
          <RoomCard key={room._id} room={room} />
        ))}
      </div>
    </div>
  );
};

export default RoomListPage;
