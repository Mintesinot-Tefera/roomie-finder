
// components/RoommateCardList.jsx
import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import RoommateCard from "./RoommateCard"; // Make sure this is your card component

const RoommateCardList = ({ roommates }) => {
  const scrollContainerRef = useRef();

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollAmount = clientWidth;
      scrollContainerRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full px-4 py-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Recommended Roommates</h2>
      </div>

      {/* Scrollable Container with Arrows */}
      <div className="relative">
        {/* Scroll Buttons */}
        <button
          onClick={() => scroll("left")}
          className="absolute z-10 left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow p-2"
        >
          <ArrowLeft size={20} />
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute z-10 right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow p-2"
        >
          <ArrowRight size={20} />
        </button>

        {/* Scrollable Card Grid */}
        <div
          ref={scrollContainerRef}
          className="overflow-x-auto scroll-smooth"
        >
          <div className="grid grid-rows-2 grid-flow-col auto-cols-[minmax(250px,_1fr)] gap-4 pr-8">
            {roommates.map((roommate) => (
              <RoommateCard key={roommate.id} roommate={roommate} />
            ))}
          </div>
        </div>
      </div>

      {/* View All Button */}
      <div className="flex justify-end mt-4">
        <button className="text-blue-600 font-medium hover:underline">
          View All →
        </button>
      </div>
    </div>
  );
};

export default RoommateCardList;
