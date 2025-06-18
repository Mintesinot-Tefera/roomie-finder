// import Image from 'next/image';
import img1 from '@/public/img1.jpg'

// const RoommateCardList = ({ roommates }) => {
//   return (
//     <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
//       {/* {roommates.map((roommate, index) => ( */}
//         {/* <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden"> */}
//         <div className="bg-white shadow-md rounded-lg overflow-hidden">
          
//           <Image 
//             src={img1} 
//             // alt={roommate.name}
//             alt={'image'} 

//             width={200} 
//             height={150} 
//             className="object-cover w-full h-48"
//           />
//           <div className="p-4">

//             <h3 className="text-lg font-semibold text-gray-800">{'Ross'}</h3>
//             <p className="text-sm text-gray-600 mt-1">{'Washington DC'}</p>
//             <p className="text-sm text-gray-500 mt-1">Age: {'33'}</p>
//             <p className="text-sm text-gray-500 mt-1">Budget: ${'400k'}</p>
//             {/* <h3 className="text-lg font-semibold text-gray-800">{roommate.name}</h3>
//             <p className="text-sm text-gray-600 mt-1">{roommate.location}</p>
//             <p className="text-sm text-gray-500 mt-1">Age: {roommate.age}</p>
//             <p className="text-sm text-gray-500 mt-1">Budget: ${roommate.budget}</p> */}
//           </div>
//         </div>
//       {/* ))} */}
//     </div>
//   );
// };

// export default RoommateCardList;








// components/RoommateCard.jsx
// import Image from 'next/image';

// const RoommateCard = ({ roommates }) => {
//   return (
//     <div className="px-4 py-6">
//       <h2 className="text-xl font-semibold mb-4">Recommended Roommates</h2>

//       <div className="flex overflow-x-auto space-x-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
//         {roommates.map((roommate, index) => (
//           <div
//             key={index}
//             className="min-w-[250px] bg-white shadow-md rounded-lg overflow-hidden flex-shrink-0"
//           >
//             <Image
//               // src={roommate.imageUrl}
//               src={img1}

//               alt={roommate.name}
//               width={300}
//               height={200}
//               className="object-cover w-full h-40"
//             />
//             <div className="p-3">
//               <h3 className="text-md font-bold text-gray-800">{roommate.name}</h3>
//               <p className="text-sm text-gray-600">{roommate.location}</p>
//               <p className="text-xs text-gray-500">Age: {roommate.age}</p>
//               <p className="text-xs text-gray-500">Budget: ${roommate.budget}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RoommateCard;





import Image from "next/image";

const RoommateCard = ({ roommate }) => {
  return (
    <div className="min-w-[250px] bg-white shadow-md rounded-lg overflow-hidden flex-shrink-0">
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
