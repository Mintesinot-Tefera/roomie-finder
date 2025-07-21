"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const LandlordRegisterForm = () => {
    const router = useRouter();
    const [form, setForm] = useState({
        fullname: "",
        company: "",
        phone: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [errors, setErrors] = useState("");
    const [generalError, setGeneralError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setGeneralError("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setErrors({});
        setGeneralError("");

        const endpoint = "http://localhost:5000/api/auth/register"

        try {

            const newErrors = {};

            if (!form.fullname?.trim()) newErrors.fullname = "Full Name is required";
            if (!form.phone) newErrors.phone = "Phone number is required";
            if (!form.email) newErrors.email = "Email is required";
            else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Invalid email";
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
                body: JSON.stringify({ ...form, role: "landlord" }),
            });
            const data = await res.json();
            if (!res.ok) {
                setGeneralError(data.message || "Something went wrong");
                return;
            }
            router.push("/verify-pending");
        } catch {
            setGeneralError("Network error. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        // <div className="min-h-screen flex items-center justify-center bg-blue-50 px-4">
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-md space-y-4">
            <input
                type="text"
                name="fullname"
                placeholder="Full Name"
                required
                value={form.fullname}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md"
            />
            <input
                type="text"
                name="company"
                placeholder="Company (Optional)"
                value={form.company}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md"
            />
            <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
                value={form.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md"
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                required value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md"
            />
            <input type="password"
                name="password"
                placeholder="Password"
                required
                value={form.password}
                onChange={handleChange}
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
            {generalError && 
            <p className="text-red-500 text-sm text-center">
                {generalError}
                </p>}
            <button type="submit" className="bg-blue-700 text-white w-full py-2 rounded">
                {loading ? "Registering..." : "Register as Landlord"}
            </button>
            <p className="text-sm text-center">
                Already have an account? <a href="/signin" className="text-blue-600 hover:underline">Sign In</a>
            </p>
        </form>
        // </div>
    );
};

export default LandlordRegisterForm;
