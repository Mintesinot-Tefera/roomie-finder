import Footer from '@/components/Footer';
import Header from '@/components/Header';
import RoommateCardList from '@/components/RoommateCardList';
import dummyRoommates from '@/data/dummyRoommates';
import RoomCard from "@/components/RoomCard";
import dummyRooms from "@/data/dummyRooms";

export default function Home() {
  return (
    <div>
      <Header/>

      <RoommateCardList roommates={dummyRoommates}/>

      <section className="px-4 py-6 space-y-6">
      <h2 className="text-xl font-bold">Available Rooms</h2>
      {dummyRooms.map((room) => (
        <RoomCard key={room.id} room={room} />
      ))}
    </section>
    
      <Footer/>
    </div>
  );
}
