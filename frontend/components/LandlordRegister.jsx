"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const LandlordRegisterForm = () => {
    const router = useRouter();
    const [form, setForm] = useState({
        fullName: "",
        company: "",
        phone: "",
        email: "",
        password: "",
    });
    const [generalError, setGeneralError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setGeneralError("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await fetch("http://localhost:5000/api/auth/register", {
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
                name="fullName"
                placeholder="Full Name"
                required value={form.fullName}
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
                required value={form.phone}
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
                required value={form.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md"
            />
            {generalError && <p className="text-red-500 text-sm text-center">{generalError}</p>}
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
