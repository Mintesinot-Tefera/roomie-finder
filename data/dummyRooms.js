// data/dummyRooms.js
import room1 from '@/public/room1.jpg'
import room2 from '@/public/room2.jpg'
import room3 from '@/public/room3.jpg'
import room5 from '@/public/room5.jpg'



const dummyRooms = [
    {
      id: "r1",
      title: "Spacious Flat in Bole",
      location: "Bole, Addis Ababa",
      price: 7000,
      bedrooms: 2,
      description: "Fully furnished flat, includes water and Wi-Fi. Quiet neighborhood.",
      imageUrl: room1 
     },
    {
      id: "r2",
      title: "Modern Studio Apartment",
      location: "CMC, Addis Ababa",
      price: 5000,
      bedrooms: 1,
      description: "Modern studio perfect for students or remote workers.",
      imageUrl: room2
    },
    {
      id: "r3",
      title: "Cozy Shared Room in Lideta",
      location: "Lideta",
      price: 3500,
      bedrooms: 1,
      description: "Shared room in a friendly environment. Females only.",
      imageUrl: room3
    },
    {
      id: "r4",
      title: "Cozy Shared Room in Lideta",
      location: "Mexico",
      price: 2500,
      bedrooms: 1,
      description: "Shared room in a friendly environment. Females only.",
      imageUrl: room5
    },
  ];
  
  export default dummyRooms;
  