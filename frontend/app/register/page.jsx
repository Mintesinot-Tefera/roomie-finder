// "use client";

// import { useRouter } from "next/navigation";

// const RegisterLandingPage = () => {
//   const router = useRouter();

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-white px-4">
//       <div className="bg-white rounded-xl shadow-lg p-10 space-y-8 max-w-2xl w-full text-center">
//         <h1 className="text-3xl font-bold text-blue-800">Create Your Account</h1>
//         <p className="text-gray-600">Choose your role to start registration:</p>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <button
//             onClick={() => router.push("/registerseeker")}
//             className="bg-blue-700 hover:bg-blue-800 text-white py-3 px-6 rounded-lg text-lg transition"
//           >
//             Register as Seeker
//           </button>
//           <button
//             onClick={() => router.push("/registerlandlord")}
//             className="bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg text-lg transition"
//           >
//             Register as Landlord
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RegisterLandingPage;



"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";

const RegisterLandingPage = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white flex items-center justify-center px-4">
      <div className="max-w-5xl w-full bg-white rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* Left: Illustration and Welcome Message */}
        <div className="bg-blue-700 text-white flex flex-col justify-center items-center p-8 space-y-6">
          <h2 className="text-2xl font-bold">Welcome to RoomieFinder</h2>
          <p className="text-center text-blue-100 text-sm max-w-xs">
            Whether you're searching for a roommate or listing your property, we’re here to connect you with the perfect match.
          </p>
          {/* <Image
            src="/register-illustration.svg" // Replace with your own SVG or image
            alt="Welcome"
            width={250}
            height={250}
          /> */}
        </div>

        {/* Right: Role Selection */}
        <div className="flex flex-col justify-center p-10 space-y-8">
          <h3 className="text-xl font-semibold text-center text-blue-800">Get Started</h3>

          <button
            onClick={() => router.push("/registerlandlord")}
            className="bg-blue-600 hover:bg-blue-700 text-white w-full py-4 rounded-lg text-lg font-semibold flex items-center justify-center gap-2 transition-all duration-200"
          >
            <span>🏠</span> Register as Landlord
          </button>

          <button
            onClick={() => router.push("/registerseeker")}
            className="bg-emerald-600 hover:bg-emerald-700 text-white w-full py-4 rounded-lg text-lg font-semibold flex items-center justify-center gap-2 transition-all duration-200"
          >
            <span>🧍‍♂️</span> Register as Room Seeker
          </button>

          <p className="text-sm text-center text-gray-600 mt-4">
            Already have an account?{" "}
            <a href="/signin" className="text-blue-600 font-medium hover:underline">
              Sign in here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterLandingPage;
