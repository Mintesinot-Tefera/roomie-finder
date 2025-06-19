"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const AuthForm = ({ type }) => {
    const router = useRouter();
    const [form, setForm] = useState({ email: "", password: "" });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Placeholder auth logic (replace with API call or credentials provider)
        if (form.email && form.password) {
            console.log(`${type} with`, form);
            router.push("/dashboard"); // redirect after success
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring"
            />
            <input
                type="password"
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring"
            />
            <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
            >
                {type === "signin" ? "Sign In" : "Register"}
            </button>


            <div className="flex justify-between text-sm mt-2">
                {type === "signin" ? (
                    <>
                        <p>
                            Don't have an account?{" "}
                            <a href="/register" className="text-blue-600 hover:underline">Register</a>
                        </p>
                        <a href="/forgot-password" className="text-blue-600 hover:underline">Forgot password?</a>
                    </>
                ) : (
                    <p>
                        Already have an account?{" "}
                        <a href="/signin" className="text-blue-600 hover:underline">Sign in</a>
                    </p>
                )}
            </div>




        </form>
    );
};

export default AuthForm;
