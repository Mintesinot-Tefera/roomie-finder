// // app/roommate/[id]/page.jsx
// import { notFound } from "next/navigation";

// const dummyRoommates = [
//   { id: "1", name: "Sara", location: "Addis Ababa", age: 23, budget: 3000, imageUrl: "/rm1.jpg" },
//   // add more dummy data
// ];

// const RoommateDetailPage = ({ params }) => {
//   const roommate = dummyRoommates.find((r) => r.id === params.id);

//   if (!roommate) return notFound();

//   return (
//     <div className="max-w-3xl mx-auto p-6">
//       <h1 className="text-2xl font-bold mb-4">{roommate.name}</h1>
//       <img src={roommate.imageUrl} alt={roommate.name} className="rounded-lg mb-4" />
//       <p><strong>Location:</strong> {roommate.location}</p>
//       <p><strong>Age:</strong> {roommate.age}</p>
//       <p><strong>Budget:</strong> {roommate.budget} ETB</p>
//     </div>
//   );
// };

// export default RoommateDetailPage;




import { notFound } from "next/navigation";
import Image from "next/image";

const dummyRoommates = [
  {
    id: "1",
    name: "Sara",
    location: "Addis Ababa",
    age: 23,
    budget: 3000,
    imageUrls: ["/rm1.jpg", "/rm2.jpg", "/rm3.jpg"],
    description:
      "Hi! I'm Sara, a 23-year-old graphic designer looking for a friendly and tidy roommate in Addis Ababa. I enjoy cooking, reading, and quiet evenings. Budget is around 3000 ETB.",
  },
  // add more dummy data...
];

const RoommateDetailPage = ({ params }) => {
  const roommate = dummyRoommates.find((r) => r.id === params.id);

  if (!roommate) return notFound();

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4 text-blue-800">{roommate.name}</h1>

      {/* Image Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        {roommate.imageUrls.map((url, index) => (
          <div key={index} className="w-full h-48 relative rounded overflow-hidden shadow">
            <Image
              src={url}
              alt={`Image ${index + 1} of ${roommate.name}`}
              layout="fill"
              objectFit="cover"
            />
          </div>
        ))}
      </div>

      {/* Info Section */}
      <div className="space-y-2 mb-6 text-gray-700">
        <p><strong>📍 Location:</strong> {roommate.location}</p>
        <p><strong>🎂 Age:</strong> {roommate.age}</p>
        <p><strong>💸 Budget:</strong> {roommate.budget} ETB/month</p>
      </div>

      {/* Description */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">About Me</h2>
        <p className="text-gray-700 leading-relaxed">{roommate.description}</p>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4">
        <button className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-2 rounded shadow transition">
          💬 Message
        </button>
        <button className="border border-blue-800 text-blue-800 hover:bg-blue-50 px-6 py-2 rounded shadow transition">
          ⭐ Rate
        </button>
      </div>
    </div>
  );
};

export default RoommateDetailPage;
