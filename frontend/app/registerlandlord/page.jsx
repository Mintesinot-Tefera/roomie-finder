
"use client";
import LandlordRegisterForm from "../../components/LandlordRegister";
// import AuthForm from "@/components/AuthForm";


const RegisterPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center px-4">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* Left: Welcome / Branding */}
        <div className="hidden md:flex flex-col items-center justify-center bg-blue-800 text-white p-8 space-y-4">
          <h2 className="text-3xl font-bold">Welcome to RoomieFinder</h2>
          <p className="text-center">
            List your room and connect with ideal roommates effortlessly. Sign up and start renting faster!
          </p>
          <img
            src="/signup1.svg" // Replace with an actual SVG or image
            alt="Illustration"
            className="w-35 h-35"
          />
        </div>

        {/* Right: Form */}
        <div className="p-8 md:p-12">
          <h1 className="text-2xl font-bold mb-6 text-blue-800 text-center">
            Create your Landlord Account
          </h1>
          {/* <AuthForm type="register" /> */}
          <LandlordRegisterForm />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
