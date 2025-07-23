// "use client";
// import { useEffect } from "react";
// import { useRouter } from "next/navigation";

// const useAuthRedirect = () => {
//   const router = useRouter();

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       router.push("/signin");
//     }
//   }, [router]);
// };

// export default useAuthRedirect;




// "use client";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";

// const useAuthRedirect = () => {
//   const router = useRouter();
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const token = localStorage.getItem("token");

//     if (!token) {
//       router.push("/signin");
//     } else {
//       setIsLoading(false); // User is authenticated
//     }
//   }, [router]);

//   return isLoading;
// };

// export default useAuthRedirect;


"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const useAuthRedirect = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/user/profile", {
          credentials: "include", // this sends the HTTP-only cookie
        });

        if (!res.ok) {
          router.push("/signin");
          return;
        }

        setIsLoading(false); // User is authenticated
      } catch (err) {
        router.push("/signin");
      }
    };

    checkAuth();
  }, [router]);

  return isLoading;
};

export default useAuthRedirect;
