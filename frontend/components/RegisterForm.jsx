"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    fullName: "", gender: "", age: "", location: "", budget: "", email: "", password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) return setError(data.message || "Registration failed");
      router.push("/verify-pending"); // or custom route
    } catch {
      setError("Network error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* all input fields... */}
      <button type="submit" className="bg-blue-700 text-white py-2 px-4 rounded w-full">
        {loading ? "Registering..." : "Register"}
      </button>
      {error && <p className="text-red-500 text-sm text-center">{error}</p>}
    </form>
  );
};

export default RegisterForm;
