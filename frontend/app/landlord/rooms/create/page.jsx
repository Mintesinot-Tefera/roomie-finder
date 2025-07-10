"use client";
import { useState } from "react";

const CreateRoomPage = () => {
  const [form, setForm] = useState({
    title: "",
    location: "",
    price: "",
    amenities: "",
    availability: true,
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleImageChange = (e) => {
    setForm({ ...form, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", form);
    alert("Room created (dummy)");
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-xl font-bold mb-4">Create New Room Listing</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Room Title"
          className="w-full border rounded p-2"
        />
        <input
          name="location"
          value={form.location}
          onChange={handleChange}
          placeholder="Location"
          className="w-full border rounded p-2"
        />
        <input
          name="price"
          type="number"
          value={form.price}
          onChange={handleChange}
          placeholder="Rent Price"
          className="w-full border rounded p-2"
        />
        <input
          name="amenities"
          value={form.amenities}
          onChange={handleChange}
          placeholder="Amenities (comma separated)"
          className="w-full border rounded p-2"
        />
        <label className="block">
          <span className="text-sm">Available?</span>
          <input
            type="checkbox"
            name="availability"
            checked={form.availability}
            onChange={handleChange}
            className="ml-2"
          />
        </label>
        <input
          type="file"
          name="image"
          onChange={handleImageChange}
          accept="image/*"
          className="w-full"
        />

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateRoomPage;
