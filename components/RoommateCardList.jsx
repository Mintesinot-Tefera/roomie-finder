"use client";
import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import RoommateCard from "./RoommateCard";

const RoommateCardList = ({ roommates }) => {
  const scrollContainerRef = useRef();

  const scroll = (direction) => {
    const { scrollLeft, clientWidth } = scrollContainerRef.current;
    scrollContainerRef.current.scrollTo({
      left: direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative px-4 py-6 w-full">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Recommended Roommates</h2>
      </div>

      <div className="relative">
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow"
        >
          <ArrowLeft />
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow"
        >
          <ArrowRight />
        </button>

        <div
          ref={scrollContainerRef}
          className="overflow-x-auto scroll-smooth pr-6"
        >
          <div className="grid grid-rows-2 grid-flow-col auto-cols-[minmax(250px,_1fr)] gap-4">
            {roommates.map((roommate) => (
              <RoommateCard key={roommate.id} roommate={roommate} />
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-end mt-4">
        <button className="text-blue-600 font-medium hover:underline">
          View All →
        </button>
      </div>
    </div>
  );
};

export default RoommateCardList;
