import { useEffect } from "react";
import { useRouter } from "next/navigation";

const useRoleGuard = (allowedRoles = []) => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    if (!token || !allowedRoles.includes(role)) {
      router.push("/unauthorized"); // create this page
    }
  }, []);
};

export default useRoleGuard;
