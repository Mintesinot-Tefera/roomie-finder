"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const AuthForm = ({ type }) => {
    const router = useRouter();
    const [form, setForm] = useState({
        fullName: "",
        gender: "",
        age: "",
        location: "",
        budget: "",
        email: "",
        password: "",
    });



    const [errors, setErrors] = useState({});
    const [generalError, setGeneralError] = useState("");


    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setGeneralError(""); // Clear error on new input

    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors({});
        setGeneralError("");


        const endpoint =
            type === "register"
                ? "http://localhost:5000/api/auth/register"
                : "http://localhost:5000/api/auth/login";


        try {
            // Simple frontend validation
            const newErrors = {};
            if (type === "register") {
                if (!form.fullName.trim()) newErrors.fullName = "Full Name is required";
                if (!form.gender) newErrors.gender = "Gender is required";
                if (!form.age) newErrors.age = "Age is required";
                if (!form.location) newErrors.location = "Location is required";
                if (!form.budget) newErrors.budget = "Budget is required";
            }
            if (!form.email) newErrors.email = "Email is required";
            if (!form.password) newErrors.password = "Password is required";

            if (Object.keys(newErrors).length > 0) {
                setErrors(newErrors);
                return;
            }



            const res = await fetch(endpoint, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(
                    type === "register"
                        ? form
                        : { email: form.email, password: form.password }
                ),
            });

            const data = await res.json();

            if (!res.ok) {
                setGeneralError(data.message || "Something went wrong");
                return;
            }

            if (type === "signin" && data.token) {
                localStorage.setItem("token", data.token);
            }

            router.push("/");
        } catch (err) {
            setGeneralError("Network error. Please try again.");
        }
    }
        return (
            <form onSubmit={handleSubmit} className="space-y-4">
                {type === "register" && (
                    <>
                        <input
                            type="text"
                            name="fullName"
                            placeholder="Full Name"
                            value={form.fullName}
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
                            type="number"
                            name="budget"
                            placeholder="Monthly Budget"
                            value={form.budget}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border rounded-md"
                        />
                    </>
                )}

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

                <button
                    type="submit"
                    className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded"
                >
                    {type === "signin" ? "Sign In" : "Register"}
                </button>


                <div className="flex justify-between text-sm mt-2">
                    {type === "signin" ? (
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
                    ) : (
                        <p>
                            Already have an account?{" "}
                            <a href="/signin" className="text-blue-600 hover:underline">
                                Sign in
                            </a>
                        </p>
                    )}
                </div>
            </form>

        );
    };


export default AuthForm;
