// // app/room/[id]/page.jsx
// import { notFound } from "next/navigation";

// const dummyRooms = [
//   { id: "1", title: "Cozy Shared Room", location: "Bole", price: 5000, imageUrl: "/room1.jpg" },
//   // add more dummy rooms
// ];

// const RoomDetailPage = ({ params }) => {
//   const room = dummyRooms.find((r) => r.id === params.id);

//   if (!room) return notFound();

//   return (
//     <div className="max-w-3xl mx-auto p-6">
//       <h1 className="text-2xl font-bold mb-4">{room.title}</h1>
//       <img src={room.imageUrl} alt={room.title} className="rounded-lg mb-4" />
//       <p><strong>Location:</strong> {room.location}</p>
//       <p><strong>Price:</strong> {room.price} ETB/month</p>
//     </div>
//   );
// };

// export default RoomDetailPage;





import { notFound } from "next/navigation";
import Image from "next/image";

const dummyRooms = [
  {
    id: "1",
    title: "Cozy Shared Room",
    location: "Bole, Addis Ababa",
    price: 5000,
    availability: "Available now",
    images: ["/room1.jpg", "/room2.jpg", "/room3.jpg"],
    description:
      "Spacious and bright shared room located in the heart of Bole. Close to public transport, shopping malls, and restaurants. Ideal for students or young professionals.",
  },
  // Add more rooms if needed
];

const RoomDetailPage = ({ params }) => {
  const room = dummyRooms.find((r) => r.id === params.id);
  if (!room) return notFound();

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">{room.title}</h1>
        <p className="text-gray-600">{room.location}</p>
      </div>

      {/* Image Carousel Style */}
      <div className="flex gap-4 overflow-x-auto mb-6">
        {room.images.map((url, index) => (
          <div key={index} className="min-w-[300px] h-60 relative rounded-lg overflow-hidden shadow">
            <Image
              src={url}
              alt={`Room image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* Room Info */}
      <div className="bg-blue-50 p-6 rounded-xl shadow-md mb-6">
        <p className="text-lg text-gray-700 mb-2">
          <strong>💵 Price:</strong> {room.price} ETB/month
        </p>
        <p className="text-lg text-gray-700 mb-2">
          <strong>📅 Availability:</strong> {room.availability}
        </p>
      </div>

      {/* Description */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Room Description</h2>
        <p className="text-gray-700 leading-relaxed">{room.description}</p>
      </div>

      {/* Buttons */}
      <div className="flex gap-4">
        <button className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-2 rounded shadow transition">
          📞 Contact Owner
        </button>
        <button className="border border-blue-800 text-blue-800 hover:bg-blue-50 px-6 py-2 rounded shadow transition">
          📆 Schedule Visit
        </button>
      </div>
    </div>
  );
};

export default RoomDetailPage;
