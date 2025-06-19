// app/register/page.jsx
"use client";
import AuthForm from "@/components/AuthForm";

const RegisterPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">Create your RoomieFinder account</h1>
        <AuthForm type="register" />
      </div>
    </div>
  );
};

export default RegisterPage;
