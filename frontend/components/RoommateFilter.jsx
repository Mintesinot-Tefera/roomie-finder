// // components/RoommateFilter.jsx
// "use client";
// import { useState } from "react";

// const RoommateFilter = ({ filters, onFilterChange }) => {
//   const [selected, setSelected] = useState(filters);

//   const handleChange = (key, value) => {
//     const updated = {
//       ...selected,
//       [key]: selected[key].includes(value)
//         ? selected[key].filter((v) => v !== value)
//         : [...selected[key], value],
//     };
//     setSelected(updated);
//     onFilterChange(updated);
//   };

//   return (
//     <aside className="w-full md:w-1/4 p-4 bg-gray-50 rounded-xl shadow">
//       <h3 className="text-lg font-semibold mb-4">Filter Roommates</h3>

//       <div className="mb-4">
//         <p className="font-medium mb-2">Gender</p>
//         {["Male", "Female"].map((gender) => (
//           <label key={gender} className="block text-sm">
//             <input
//               type="checkbox"
//               checked={selected.gender.includes(gender)}
//               onChange={() => handleChange("gender", gender)}
//               className="mr-2"
//             />
//             {gender}
//           </label>
//         ))}
//       </div>

//       <div className="mb-4">
//         <p className="font-medium mb-2">Location</p>
//         {["Bole", "CMC", "Lideta", "Yeka"].map((loc) => (
//           <label key={loc} className="block text-sm">
//             <input
//               type="checkbox"
//               checked={selected.location.includes(loc)}
//               onChange={() => handleChange("location", loc)}
//               className="mr-2"
//             />
//             {loc}
//           </label>
//         ))}
//       </div>

//       <div className="mb-4">
//         <p className="font-medium mb-2">Budget</p>
//         {[3000, 5000, 7000].map((price) => (
//           <label key={price} className="block text-sm">
//             <input
//               type="checkbox"
//               checked={selected.budget.includes(price)}
//               onChange={() => handleChange("budget", price)}
//               className="mr-2"
//             />
//             Up to {price} ETB
//           </label>
//         ))}
//       </div>
//     </aside>
//   );
// };

// export default RoommateFilter;




"use client";
import { useState, useEffect } from "react";

const RoommateFilter = ({ filters, onFilterChange, matchCount }) => {
  const [selected, setSelected] = useState(filters);

  useEffect(() => {
    setSelected(filters);
  }, [filters]);

  const handleChange = (key, value) => {
    const updated = {
      ...selected,
      [key]: selected[key].includes(value)
        ? selected[key].filter((v) => v !== value)
        : [...selected[key], value],
    };
    setSelected(updated);
    onFilterChange(updated);
  };

  const clearFilters = () => {
    const reset = { gender: [], location: [], budget: [] };
    setSelected(reset);
    onFilterChange(reset);
  };

  return (
    <aside className="w-full md:w-1/4 p-4 bg-gray-50 rounded-xl shadow space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Filter Roommates</h3>
        <button
          onClick={clearFilters}
          className="text-sm text-red-600 hover:underline"
        >
          Clear
        </button>
      </div>

      {/* Match count */}
      <p className="text-sm text-gray-600">{matchCount} matches found</p>

      {/* Gender */}
      <div>
        <p className="font-medium mb-1">Gender</p>
        {["Male", "Female"].map((gender) => (
          <label key={gender} className="block text-sm">
            <input
              type="checkbox"
              checked={selected.gender.includes(gender)}
              onChange={() => handleChange("gender", gender)}
              className="mr-2"
            />
            {gender}
          </label>
        ))}
      </div>

      {/* Location */}
      <div>
        <p className="font-medium mb-1">Location</p>
        {["Bole", "CMC", "Lideta", "Yeka"].map((loc) => (
          <label key={loc} className="block text-sm">
            <input
              type="checkbox"
              checked={selected.location.includes(loc)}
              onChange={() => handleChange("location", loc)}
              className="mr-2"
            />
            {loc}
          </label>
        ))}
      </div>

      {/* Budget */}
      <div>
        <p className="font-medium mb-1">Budget</p>
        {[3000, 5000, 7000].map((price) => (
          <label key={price} className="block text-sm">
            <input
              type="checkbox"
              checked={selected.budget.includes(price)}
              onChange={() => handleChange("budget", price)}
              className="mr-2"
            />
            Up to {price} ETB
          </label>
        ))}
      </div>
    </aside>
  );
};

export default RoommateFilter;
