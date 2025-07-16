"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    email: "",
    password: ""
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [generalError, setGeneralError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    // setErrors("");
    setGeneralError(""); // Clear error on new input
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});
    setGeneralError("");

    const endpoint = "http://localhost:5000/api/auth/login"

    try {
      const newErrors = {};

      if (!form.email) newErrors.email = "Email is required";
      if (!form.password) newErrors.password = "Password is required";

      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
      }

      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        setGeneralError(data.message || "Login failed");
        return
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.user.role);


      if (data.user.role === "admin") {
        router.push("/admin/dashboard");
      } else if (data.user.role === "landlord") {
        router.push("/landlord/dashboard");
      } else {
        router.push("/seeker");
      }
      // router.push("/");
    } catch {
      setGeneralError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* input fields... */}
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

      {generalError && (
        <div className="text-red-600 text-sm text-center mb-2">
          {generalError}
        </div>
      )}

      <button type="submit" className="bg-blue-700 text-white py-2 px-4 rounded w-full">
        {loading ? "Signing in..." : "Sign In"}
      </button>
      {/* {errors && <p className="text-red-500 text-sm text-center">{errors}</p>} */}

      <div className="flex justify-between text-sm mt-2">
        <>
          <p>
            Don't have an account?{" "}
            <a href="/register" className="text-blue-600 hover:underline">
              Register
            </a>
          </p>
          <a href="/forgot-password" className="text-blue-600 hover:underline">
            Forgot password?
          </a>
        </>
      </div>
    </form>
  );
};

export default LoginForm;
