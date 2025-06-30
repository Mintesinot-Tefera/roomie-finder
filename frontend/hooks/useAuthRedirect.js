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




"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const useAuthRedirect = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/signin");
    } else {
      setIsLoading(false); // User is authenticated
    }
  }, [router]);

  return isLoading;
};

export default useAuthRedirect;
