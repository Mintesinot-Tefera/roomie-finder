import { useState } from "react";

const RoomForm = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    rent: "",
    location: "",
    amenities: "",
    // availableFrom: "",
    availability: true,
    images: [], // You may allow one or multiple image uploads
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // const handleChange = (e) => {
  //   setForm({ ...form, [e.target.name]: e.target.value });
  // };


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


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
   

      const res = await fetch("http://localhost:5000/api/rooms", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          ...form,
          amenities: form.amenities.split(",").map((a) => a.trim()),
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to create room");

      setMessage("Room created successfully!");
    } catch (err) {
      setMessage(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        name="title"
        value={form.title}
        onChange={handleChange}
        placeholder="Room Title"
        className="w-full border rounded p-2"
      />
      <textarea
        name="description"
        placeholder="Description"
        onChange={handleChange}
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
        name="rent"
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

      {/* <input name="availableFrom"
        type="date"
        onChange={handleChange}
        required /> */}

      <input
        type="file"
        name="image"
        onChange={handleImageChange}
        accept="image/*"
        className="w-full"
      />

      <button type="submit" disabled={loading} className="bg-blue-600 text-white px-4 py-2 rounded">
        {loading ? "Creating..." : "Create Room"}
      </button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default RoomForm;
