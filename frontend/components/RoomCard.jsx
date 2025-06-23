// components/RoomCard.jsx
"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const RoomCard = ({ room }) => {
  const router = useRouter();

   const handleClick = () => {
    router.push(`/room/${room.id}`);
  };

  return (
    <div 
    onClick={handleClick}
    className="cursor-pointer hover:shadow-lg transition flex flex-col sm:flex-row bg-white rounded-2xl shadow-lg overflow-hidden w-full max-w-4xl"
    >
      <div className="relative h-60 sm:h-auto sm:w-1/3">
        <Image
          src={room.imageUrl}
          alt={room.title}
          layout="fill"
          objectFit="cover"
          className="rounded-l-2xl"
        />
        {/* <Image
        src={room.imageUrl}
        alt={room.title}
        width={500}
        height={300}
        className="object-cover w-full h-52"
      /> */}
      </div>

      <div className="flex flex-col justify-between p-5 sm:w-2/3">
        <div>
          <h3 className="text-xl font-semibold text-gray-800">{room.title}</h3>
          <p className="text-gray-500 text-sm mt-1">{room.location}</p>
          <p className="mt-3 text-sm text-gray-600">{room.description}</p>
        </div>

        <div className="mt-4 flex items-center justify-between text-sm text-gray-700">
          <span>Price: <span className="font-medium text-black">{room.price} ETB/month</span></span>
          <span>Bedrooms: {room.bedrooms}</span>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
