// import Footer from '@/components/Footer';
// import Header from '@/components/Header';
// import RoommateCardList from '@/components/RoommateCardList';
// import dummyRoommates from '@/data/dummyRoommates';
// import RoomCard from "@/components/RoomCard";
// import dummyRooms from "@/data/dummyRooms";

// export default function Home() {
//   return (
//     <div>
//       <Header/>

//       <RoommateCardList roommates={dummyRoommates}/>

//       <section className="px-4 py-6 space-y-6">
//       <h2 className="text-xl font-bold">Available Rooms</h2>
//       {dummyRooms.map((room) => (
//         <RoomCard key={room.id} room={room} />
//       ))}
//     </section>
    
//       <Footer/>
//     </div>
//   );
// }



"use client";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RoommateCardList from "@/components/RoommateCardList";
import RoommateFilter from "@/components/RoommateFilter";
import dummyRoommates from "@/data/dummyRoommates";
import RoomCard from "@/components/RoomCard";
import dummyRooms from "@/data/dummyRooms";

export default function Home() {
  // const [filters, setFilters] = useState({
  //   gender: [],
  //   location: [],
  //   budget: [],
  // });


  const [filters, setFilters] = useState<FilterType>({
  gender: [],
  location: [],
  budget: [],
});

  // const handleFilterChange = (updatedFilters) => {
  //   setFilters(updatedFilters);
  // };

  const handleFilterChange = (updatedFilters: {
  gender: string[];
  location: string[];
  budget: number[];
}) => {
  setFilters(updatedFilters);
};


  const filteredRoommates = dummyRoommates.filter((r) => {
    const genderMatch = filters.gender.length === 0 || filters.gender.includes(r.gender);
    const locationMatch = filters.location.length === 0 || filters.location.includes(r.location);
    const budgetMatch = filters.budget.length === 0 || filters.budget.some((b) => r.budget <= b);
    return genderMatch && locationMatch && budgetMatch;
  });

  return (
    <div>
      <Header />

      <div className="px-4 py-6 max-w-7xl mx-auto flex flex-col md:flex-row gap-6">
        {/* Left Filter Panel */}
        <RoommateFilter filters={filters} onFilterChange={handleFilterChange} matchCount={undefined} />

        {/* Right Roommate List */}
        <div className="w-full md:w-3/4">
          <RoommateCardList roommates={filteredRoommates} />
        </div>
      </div>

      {/* Rooms Section */}
      <section className="px-4 py-6 space-y-6 max-w-7xl mx-auto">
        <h2 className="text-xl font-bold">Available Rooms</h2>
        {dummyRooms.map((room) => (
          <RoomCard key={room.id} room={room} />
        ))}
      </section>

      <Footer />
    </div>
  );
}
