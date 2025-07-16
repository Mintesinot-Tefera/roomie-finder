"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    fullname: "",
    gender: "",
    age: "",
    location: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState("");
  const [generalError, setGeneralError] = useState("");
  const [loading, setLoading] = useState(false);


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    // setError("");
    setGeneralError(""); // Clear error on new input

  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});
    setGeneralError("");

    const endpoint = "http://localhost:5000/api/auth/register"

    try {
      // Simple frontend validation
      const newErrors = {};

      if (!form.fullname?.trim()) newErrors.fullname = "Full Name is required";
      if (!form.email) newErrors.email = "Email is required";
      else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Invalid email";
      if (!form.gender) newErrors.gender = "Gender is required";
      if (!form.age) newErrors.age = "Age is required";
      if (!form.location) newErrors.location = "Location is required";
      if (!form.password) newErrors.password = "Password is required";
      if (!form.confirmPassword) newErrors.confirmPassword = "Please confirm your password";
      if (form.password !== form.confirmPassword) newErrors.confirmPassword = "Passwords do not match";


      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
      }

          const { confirmPassword, ...userData } = form;


      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...userData,
          role: "seeker",
        }
        ),
      });
      const data = await res.json();
      // if (!res.ok) return setError(data.message || "Something went wrong");
      // router.push("/verify-pending"); // or custom route
      if (!res.ok) {
        setGeneralError(data.message || "Something went wrong");
        return;
      } else {
        // alert("Registration successful! Please check your email to verify your account.");
        // router.push("/signin");
        router.push("/verify-pending");
      }

    } catch {
      // setError("Network error");
      setGeneralError("Network error. Please try again.");

    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* all input fields... */}
      <>
        <input
          type="text"
          name="fullname"
          placeholder="Full Name"
          value={form.fullname}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md"
        />
        <select
          name="gender"
          value={form.gender}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md"
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={form.age}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md"
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={form.location}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md"
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={form.confirmPassword}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md"
        />
        {errors.confirmPassword && (
          <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
        )}
      </>
      {generalError && (
        <div className="text-red-600 text-sm text-center mb-2">
          {generalError}
        </div>
      )}
      <button type="submit" className="bg-blue-700 text-white py-2 px-4 rounded w-full">
        {loading ? "Registering..." : "Register"}
      </button>

      {/* {errors && <p className="text-red-500 text-sm text-center">{errors}</p>} */}

      <div className="flex justify-between text-sm mt-2">
        <p>
          Already have an account?{" "}
          <a href="/signin" className="text-blue-600 hover:underline">
            Sign in
          </a>
        </p>
      </div>
    </form>
  );
};

export default RegisterForm;
