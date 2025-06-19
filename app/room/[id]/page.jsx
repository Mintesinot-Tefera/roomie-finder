// app/room/[id]/page.jsx
import { notFound } from "next/navigation";

const dummyRooms = [
  { id: "1", title: "Cozy Shared Room", location: "Bole", price: 5000, imageUrl: "/room1.jpg" },
  // add more dummy rooms
];

const RoomDetailPage = ({ params }) => {
  const room = dummyRooms.find((r) => r.id === params.id);

  if (!room) return notFound();

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">{room.title}</h1>
      <img src={room.imageUrl} alt={room.title} className="rounded-lg mb-4" />
      <p><strong>Location:</strong> {room.location}</p>
      <p><strong>Price:</strong> {room.price} ETB/month</p>
    </div>
  );
};

export default RoomDetailPage;
