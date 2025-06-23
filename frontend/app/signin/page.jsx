// // app/signin/page.jsx
// "use client";
// import AuthForm from "@/components/AuthForm";

// const SignInPage = () => {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
//       <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-6">
//         <h1 className="text-2xl font-bold mb-4 text-center">Sign in to RoomieFinder</h1>
//         <AuthForm type="signin" />
//       </div>
//     </div>
//   );
// };

// export default SignInPage;


// "use client";
// import AuthForm from "@/components/AuthForm";

// const SignInPage = () => {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
//       <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-6">
//         <h1 className="text-2xl font-bold mb-6 text-center">Sign in to RoomieFinder</h1>
        
//         {/* Google Sign-In Button */}
//         <button
//           onClick={() => alert("Google Sign-In coming soon")} // Replace with real logic
//           className="w-full flex items-center justify-center gap-3 text-sm font-medium border border-gray-300 rounded-md px-4 py-2 hover:bg-gray-100 mb-4"
//         >
//           <img
//             src="https://www.svgrepo.com/show/475656/google-color.svg"
//             alt="Google"
//             className="w-5 h-5"
//           />
//           Continue with Google
//         </button>

//         {/* Email/Password Form */}
//         <AuthForm type="signin" />
//       </div>
//     </div>
//   );
// };

// export default SignInPage;






"use client";
import AuthForm from "@/components/AuthForm";

const SignInPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white flex items-center justify-center px-4">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* Left: Welcome Back Section */}
        <div className="hidden md:flex flex-col items-center justify-center bg-gray-100 text-blue-800 p-8 space-y-4">
          <h2 className="text-3xl font-bold">Welcome Back!</h2>
          <p className="text-center text-blue-700">
            Sign in to continue discovering roommates and rooms that match your lifestyle.
          </p>
          <img
            src="/login1.svg" // Replace with a different illustration
            alt="Sign in"
            className="w-60"
          />
        </div>

        {/* Right: Form */}
        <div className="p-8 md:p-12">
          <h1 className="text-2xl font-bold mb-6 text-blue-800 text-center">
            Sign in to your RoomieFinder Account
          </h1>

         {/* Google Sign-In Button */}
        <button
          onClick={() => alert("Google Sign-In coming soon")} // Replace with real logic
          className="w-full flex items-center justify-center gap-3 text-sm font-medium border border-gray-300 rounded-md px-4 py-2 hover:bg-gray-100 mb-4"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5"
          />
          Continue with Google
        </button>

          <AuthForm type="signin" />
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
