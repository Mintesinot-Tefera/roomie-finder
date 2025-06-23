// "use client";
// import { useState } from "react";
// import { useRouter } from "next/navigation";

// const AuthForm = ({ type }) => {
//     const router = useRouter();
//     const [form, setForm] = useState({ email: "", password: "" });

//     const handleChange = (e) => {
//         setForm({ ...form, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         // Placeholder auth logic (replace with API call or credentials provider)
//         if (form.email && form.password) {
//             console.log(`${type} with`, form);
//             router.push("/dashboard"); // redirect after success
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit} className="space-y-4">
//             <input
//                 type="email"
//                 name="email"
//                 placeholder="Email"
//                 value={form.email}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring"
//             />
//             <input
//                 type="password"
//                 name="password"
//                 placeholder="Password"
//                 value={form.password}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring"
//             />
//             {/* <button
//                 type="submit"
//                 className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
//             >
//                 {type === "signin" ? "Sign In" : "Register"}
//             </button> */}



//             <button
//                 type="submit"
//                 className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded"
//             >
//                 {type === "signin" ? "Sign In" : "Register"}
//             </button>







//             <div className="flex justify-between text-sm mt-2">
//                 {type === "signin" ? (
//                     <>
//                         <p>
//                             Don't have an account?{" "}
//                             <a href="/register" className="text-blue-600 hover:underline">Register</a>
//                         </p>
//                         <a href="/forgot-password" className="text-blue-600 hover:underline">Forgot password?</a>
//                     </>
//                 ) : (
//                     <p>
//                         Already have an account?{" "}
//                         <a href="/signin" className="text-blue-600 hover:underline">Sign in</a>
//                     </p>
//                 )}
//             </div>

//         </form>
//     );
// };

// export default AuthForm;




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

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (type === "register") {
            console.log("Register with:", form);
        } else {
            console.log("Sign in with:", {
                email: form.email,
                password: form.password,
            });
        }

        router.push("/dashboard"); // or redirect to homepage
    };

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
            <input
                type="password"
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-md"
            />

            {/* <button
        type="submit"
        className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-4 rounded"
      >
        {type === "signin" ? "Sign In" : "Register"}
      </button> */}

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
