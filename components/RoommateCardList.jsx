import Image from 'next/image';
import img1 from '@/public/img1.jpg'

const RoommateCardList = ({ roommates }) => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {/* {roommates.map((roommate, index) => ( */}
        {/* <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden"> */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          
          <Image 
            src={img1} 
            // alt={roommate.name}
            alt={'image'} 

            width={200} 
            height={150} 
            className="object-cover w-full h-48"
          />
          <div className="p-4">

            <h3 className="text-lg font-semibold text-gray-800">{'Ross'}</h3>
            <p className="text-sm text-gray-600 mt-1">{'Washington DC'}</p>
            <p className="text-sm text-gray-500 mt-1">Age: {'33'}</p>
            <p className="text-sm text-gray-500 mt-1">Budget: ${'400k'}</p>
            {/* <h3 className="text-lg font-semibold text-gray-800">{roommate.name}</h3>
            <p className="text-sm text-gray-600 mt-1">{roommate.location}</p>
            <p className="text-sm text-gray-500 mt-1">Age: {roommate.age}</p>
            <p className="text-sm text-gray-500 mt-1">Budget: ${roommate.budget}</p> */}
          </div>
        </div>
      {/* ))} */}
    </div>
  );
};

export default RoommateCardList;
