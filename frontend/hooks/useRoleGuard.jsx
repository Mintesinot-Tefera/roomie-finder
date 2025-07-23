// import { useEffect } from "react";
// import { useRouter } from "next/navigation";

// const useRoleGuard = (allowedRoles = []) => {
//   const router = useRouter();

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     const role = localStorage.getItem("role");

//     if (!token || !allowedRoles.includes(role)) {
//       router.push("/unauthorized"); // create this page
//     }
//   }, []);
// };

// export default useRoleGuard;



"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const useRoleGuard = (allowedRoles = []) => {
  const router = useRouter();

  useEffect(() => {
    const checkRole = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/user/profile", {
          credentials: "include",
        });

        if (!res.ok) {
          router.push("/signin");
          return;
        }

        const data = await res.json();
        if (!allowedRoles.includes(data.role)) {
          router.push("/unauthorized");
        }

      } catch (err) {
        router.push("/signin");
      }
    };

    checkRole();
  }, [router]);
};

export default useRoleGuard;
andlord/dashboard