"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    if (!user) return;

    // Role-based redirect
    switch (user.role) {
      case "admin":
        router.replace("/admin/dashboard");
        break;
      case "landlord":
        router.replace("/landlord");
        break;
      case "seeker":
        router.replace("/seeker");
        break;
      default:
        break;
    }
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex flex-col justify-center items-center px-6 py-16">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Text Section */}
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-900 leading-tight">
            Find Your Ideal Roommate & Place — Effortlessly
          </h1>
          <p className="text-lg text-gray-600">
            RoomieFinder helps you connect with trusted roommates and find rooms tailored to your lifestyle.
          </p>
          <div className="space-x-4">
            <a
              href="/home"
              className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-lg shadow"
            >
              Get Started
            </a>
            <a
              href="/signin"
              className="inline-block border border-blue-700 text-blue-700 hover:bg-blue-50 font-semibold py-3 px-6 rounded-lg"
            >
              Sign In
            </a>
          </div>
        </div>

        {/* Illustration / Image Section */}
        <div className="flex justify-center">
          <img
            src="/roommates-hero.png"
            alt="RoomieFinder Illustration"
            className="w-full max-w-md"
          />
        </div>
      </div>

      {/* Features Section */}
      <section className="mt-20 text-center">
        <h2 className="text-2xl font-bold text-blue-900 mb-6">Why Choose RoomieFinder?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-gray-600 max-w-5xl">
          <div className="bg-white p-6 shadow rounded-lg">
            <img src="/match.png" alt="Match" className="w-16 mx-auto mb-4" />
            <h3 className="font-semibold text-lg text-blue-800 mb-2">Smart Matching</h3>
            <p>Get matched with people who share your budget, habits, and location preferences.</p>
          </div>
          <div className="bg-white p-6 shadow rounded-lg">
            <img src="/secure.png" alt="Secure" className="w-16 mx-auto mb-4" />
            <h3 className="font-semibold text-lg text-blue-800 mb-2">Verified Users</h3>
            <p>All users are verified via email, ensuring a safer housing search experience.</p>
          </div>
          <div className="bg-white p-6 shadow rounded-lg">
            <img src="/manage.png" alt="Manage" className="w-16 mx-auto mb-4" />
            <h3 className="font-semibold text-lg text-blue-800 mb-2">Easy Management</h3>
            <p>Manage your listings, update preferences, and message potential roommates easily.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
