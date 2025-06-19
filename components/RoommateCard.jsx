import Image from "next/image";
import { useRouter } from "next/navigation";  

const RoommateCard = ({ roommate }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/roommate/${roommate.id}`);
  };

  return (
    <div 
    onClick={handleClick}
    className="cursor-pointer min-w-[250px] bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition"
    // className="min-w-[250px] bg-white shadow-md rounded-lg overflow-hidden flex-shrink-0"
    >
      <Image
        src={roommate.imageUrl}
        alt={roommate.name}
        width={300}
        height={200}
        className="object-cover w-full h-40"
      />
      <div className="p-3">
        <h3 className="text-md font-bold text-gray-800">{roommate.name}</h3>
        <p className="text-sm text-gray-600">{roommate.location}</p>
        <p className="text-xs text-gray-500">Age: {roommate.age}</p>
        <p className="text-xs text-gray-500">Budget: {roommate.budget} ETB</p>
      </div>
    </div>
  );
};

export default RoommateCard;
