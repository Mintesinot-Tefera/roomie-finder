
// "use client";
// import { useEffect } from "react";
// import { useRouter } from "next/navigation";

// const DashboardPage = () => {
//   const router = useRouter();

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       router.push("/signin");
//     }
//   }, []);

//   return <div>Dashboard content here</div>;
// };

// export default DashboardPage;






// "use client";
// import { useEffect, useState } from "react";

// const DashboardPage = () => {
//   const [user, setUser] = useState(null);
//   const token = typeof window !== "undefined" && localStorage.getItem("token");

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const res = await fetch("http://localhost:5000/api/user/profile", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         const data = await res.json();
//         setUser(data);
//       } catch (err) {
//         console.error("Failed to fetch profile", err);
//       }
//     };

//     fetchProfile();
//   }, [token]);

//   if (!user) return <div>Loading...</div>;

//   return (
//     <div className="max-w-xl mx-auto p-6">
//       <h1 className="text-2xl font-bold mb-4">Welcome, {user.fullname}</h1>
//       <p><strong>Email:</strong> {user.email}</p>
//       <p><strong>Location:</strong> {user.location}</p>
//       <p><strong>Budget:</strong> {user.budget}</p>
//     </div>
//   );
// };

// export default DashboardPage;








// "use client";
// import { useEffect, useState } from "react";
// import useAuthRedirect from "@/hooks/useAuthRedirect";

// const DashboardPage = () => {
//   const isLoading = useAuthRedirect();
//   // useAuthRedirect(); // Protect the page

//   const [user, setUser] = useState(null);
//   const token = typeof window !== "undefined" && localStorage.getItem("token");

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const res = await fetch("http://localhost:5000/api/user/profile", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         credentials: "include",

//         });
//         const data = await res.json();
//         setUser(data);
//       } catch (err) {
//         console.error("Failed to fetch profile", err);
//       }
//     };

//     fetchProfile();
//   }, [token]);

//   if (!user) return <div>Loading...</div>;


//   if (isLoading) return <div className="text-center mt-10">Checking session...</div>;

//   return (
//     <div className="max-w-xl mx-auto p-6">
//       <h1 className="text-2xl font-bold mb-4">Welcome, {user.fullname}</h1>
//       <p><strong>Email:</strong> {user.email}</p>
//       <p><strong>Location:</strong> {user.location}</p>
//       <p><strong>Budget:</strong> {user.budget}</p>
//     </div>
//   );
// };

// export default DashboardPage;




"use client";

import { useEffect, useState } from "react";
import useAuthRedirect from "@/hooks/useAuthRedirect";
import useRoleGuard from "@/hooks/useRoleGuard";


const DashboardPage = () => {
  const isLoading = useAuthRedirect(); // redirect if not logged in
  const [user, setUser] = useState(null);
  const [fetching, setFetching] = useState(true);
  useRoleGuard(["seeker"]);


  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/user/profile", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include", // ✅ Required to send HTTP-only cookie
        });

        if (!res.ok) {
          console.error("Failed to fetch profile:", res.statusText);
          return;
        }

        const data = await res.json();
        setUser(data);
      } catch (err) {
        console.error("Error fetching profile:", err);
      } finally {
        setFetching(false);
      }
    };

    fetchProfile();
  }, []);

  if (isLoading || fetching) {
    return <div className="text-center mt-10">Loading your dashboard...</div>;
  }

  if (!user) {
    return <div className="text-center text-red-500">User not found or unauthorized</div>;
  }

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Welcome, {user.fullname}</h1>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Location:</strong> {user.location || "N/A"}</p>
      <p><strong>Budget:</strong> {user.budget || "N/A"}</p>
    </div>
  );
};

export default DashboardPage;
