// app/roommate/[id]/page.jsx
import { notFound } from "next/navigation";

const dummyRoommates = [
  { id: "1", name: "Sara", location: "Addis Ababa", age: 23, budget: 3000, imageUrl: "/rm1.jpg" },
  // add more dummy data
];

const RoommateDetailPage = ({ params }) => {
  const roommate = dummyRoommates.find((r) => r.id === params.id);

  if (!roommate) return notFound();

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">{roommate.name}</h1>
      <img src={roommate.imageUrl} alt={roommate.name} className="rounded-lg mb-4" />
      <p><strong>Location:</strong> {roommate.location}</p>
      <p><strong>Age:</strong> {roommate.age}</p>
      <p><strong>Budget:</strong> {roommate.budget} ETB</p>
    </div>
  );
};

export default RoommateDetailPage;
