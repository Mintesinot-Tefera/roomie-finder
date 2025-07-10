"use client";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const EditRoomPage = () => {
  const { id } = useParams(); // e.g., room ID from URL
  const router = useRouter();

  const [formData, setFormData] = useState({
    title: "",
    location: "",
    price: "",
    amenities: "",
    availability: "Available",
    status: "Pending",
  });

  useEffect(() => {
    // TODO: Replace this with actual fetch from your backend
    const fetchRoom = async () => {
      // Simulating API response with dummy data
      const room = {
        title: "Spacious 2-Bedroom Apartment",
        location: "Addis Ababa",
        price: 7500,
        amenities: "WiFi, Laundry, Kitchen",
        availability: "Available",
        status: "Approved",
      };

      setFormData(room);
    };

    fetchRoom();
  }, [id]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Replace this with actual PUT or PATCH request
      console.log("Room updated:", { id, ...formData });

      alert("Room updated successfully!");
      router.push("/landlord/rooms");
    } catch (err) {
      console.error("Failed to update room", err);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4 text-blue-800">Edit Room</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Room Title"
          className="w-full border p-2 rounded"
          required
        />

        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="Location"
          className="w-full border p-2 rounded"
          required
        />

        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Monthly Rent"
          className="w-full border p-2 rounded"
          required
        />

        <textarea
          name="amenities"
          value={formData.amenities}
          onChange={handleChange}
          placeholder="Amenities (comma-separated)"
          className="w-full border p-2 rounded"
          rows={3}
        />

        <select
          name="availability"
          value={formData.availability}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        >
          <option value="Available">Available</option>
          <option value="Unavailable">Unavailable</option>
        </select>

        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        >
          <option value="Pending">Pending</option>
          <option value="Approved">Approved</option>
          <option value="Rejected">Rejected</option>
        </select>

        <button
          type="submit"
          className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800"
        >
          Update Room
        </button>
      </form>
    </div>
  );
};

export default EditRoomPage;
