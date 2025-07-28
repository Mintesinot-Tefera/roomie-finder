// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useState } from "react";
// import classNames from "classnames";
// import { HiMenu, HiX } from "react-icons/hi";

// const landlordLinks = [
//   { name: "Dashboard", href: "/landlord/dashboard" },
//   { name: "My Rooms", href: "/landlord/rooms" },
//   { name: "Messages", href: "/landlord/messages" },
//   { name: "Profile", href: "/landlord/profile" },
// ];

// export default function LandlordLayout({ children }) {
//   const pathname = usePathname();
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   const toggleSidebar = () => setSidebarOpen((prev) => !prev);

//   return (
//     <div className="min-h-screen flex">
//       {/* Sidebar - mobile overlay */}
//       <div
//         className={classNames(
//           "fixed inset-y-0 left-0 w-64 bg-blue-900 text-white p-6 space-y-6 transform transition-transform duration-300 z-50 md:static md:translate-x-0",
//           {
//             "-translate-x-full": !sidebarOpen,
//             "translate-x-0": sidebarOpen,
//           }
//         )}
//       >
//         <div className="flex items-center justify-between md:hidden">
//           <h2 className="text-2xl font-bold">RoomieFinder</h2>
//           <button onClick={toggleSidebar}>
//             <HiX className="w-6 h-6" />
//           </button>
//         </div>

//         <h2 className="hidden md:block text-2xl font-bold mb-6">RoomieFinder</h2>

//         <nav className="space-y-2">
//           {landlordLinks.map((link) => (
//             <Link
//               key={link.href}
//               href={link.href}
//               onClick={() => setSidebarOpen(false)}
//               className={classNames(
//                 "block px-4 py-2 rounded hover:bg-blue-700",
//                 pathname === link.href && "bg-blue-700"
//               )}
//             >
//               {link.name}
//             </Link>
//           ))}
//         </nav>
//       </div>

//       {/* Overlay for mobile */}
//       {sidebarOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
//           onClick={toggleSidebar}
//         />
//       )}

//       {/* Main Content */}
//       <div className="flex-1 bg-gray-50 min-h-screen">
//         {/* Top Navbar (Mobile) */}
//         <div className="md:hidden bg-white px-4 py-3 shadow flex items-center justify-between">
//           <button onClick={toggleSidebar}>
//             <HiMenu className="w-6 h-6 text-blue-800" />
//           </button>
//           <h1 className="text-lg font-semibold text-blue-800">Landlord Panel</h1>
//           <div className="w-6" /> {/* Spacer */}
//         </div>

//         <main className="p-6">{children}</main>
//       </div>
//     </div>
//   );
// }




// "use client";

// import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation";
// import { useState, useEffect } from "react";
// import classNames from "classnames";
// import { HiMenu, HiX, HiUserCircle } from "react-icons/hi";

// const landlordLinks = [
//   { name: "Dashboard", href: "/landlord/dashboard" },
//   { name: "My Rooms", href: "/landlord/rooms" },
//   { name: "Messages", href: "/landlord/messages" },
//   { name: "Profile", href: "/landlord/profile" },
// ];

// export default function LandlordLayout({ children }) {
//   const pathname = usePathname();
//   const router = useRouter();

//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [fullname, setFullname] = useState("");

//   useEffect(() => {
//     // Get user info from localStorage (you can replace this with context later)
//     const stored = localStorage.getItem("fullname");
//     if (stored) setFullname(stored);
//   }, []);

//   const toggleSidebar = () => setSidebarOpen((prev) => !prev);
//   const toggleDropdown = () => setDropdownOpen((prev) => !prev);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("fullname");
//     router.push("/signin");
//   };

//   return (
//     <div className="min-h-screen flex">
//       {/* Sidebar */}
//       <div
//         className={classNames(
//           "fixed inset-y-0 left-0 w-64 bg-blue-900 text-white p-6 space-y-6 transform transition-transform duration-300 z-50 md:static md:translate-x-0",
//           {
//             "-translate-x-full": !sidebarOpen,
//             "translate-x-0": sidebarOpen,
//           }
//         )}
//       >
//         <div className="flex items-center justify-between md:hidden">
//           <h2 className="text-2xl font-bold">RoomieFinder</h2>
//           <button onClick={toggleSidebar}>
//             <HiX className="w-6 h-6" />
//           </button>
//         </div>

//         <h2 className="hidden md:block text-2xl font-bold mb-6">RoomieFinder</h2>

//         <nav className="space-y-2">
//           {landlordLinks.map((link) => (
//             <Link
//               key={link.href}
//               href={link.href}
//               onClick={() => setSidebarOpen(false)}
//               className={classNames(
//                 "block px-4 py-2 rounded hover:bg-blue-700",
//                 pathname === link.href && "bg-blue-700"
//               )}
//             >
//               {link.name}
//             </Link>
//           ))}
//         </nav>
//       </div>

//       {/* Overlay */}
//       {sidebarOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
//           onClick={toggleSidebar}
//         />
//       )}

//       {/* Main Content */}
//       <div className="flex-1 bg-gray-50 min-h-screen">
//         {/* Top Navbar */}
//         <div className="md:hidden bg-white px-4 py-3 shadow flex items-center justify-between">
//           <button onClick={toggleSidebar}>
//             <HiMenu className="w-6 h-6 text-blue-800" />
//           </button>
//           <h1 className="text-lg font-semibold text-blue-800">Landlord Panel</h1>

//           {/* User Icon / Menu */}
//           <div className="relative">
//             <button onClick={toggleDropdown}>
//               <HiUserCircle className="w-6 h-6 text-blue-800" />
//             </button>

//             {dropdownOpen && (
//               <div className="absolute right-0 mt-2 bg-white border rounded shadow-md z-50">
//                 <p className="px-4 py-2 text-sm text-gray-700">{fullname}</p>
//                 <Link
//                   href="/landlord/profile"
//                   className="block px-4 py-2 text-sm hover:bg-gray-100"
//                 >
//                   Profile
//                 </Link>
//                 <button
//                   onClick={handleLogout}
//                   className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
//                 >
//                   Logout
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>

//         <main className="p-6">{children}</main>
//       </div>
//     </div>
//   );
// }





"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { HiMenu, HiX, HiUserCircle, HiBell } from "react-icons/hi";
import classNames from "classnames";
import { useAuth } from "@/context/AuthContext"; 
import useAuthRedirect from "@/hooks/useAuthRedirect";
import useRoleGuard from "@/hooks/useRoleGuard";
import LoadingSpinner from "@/components/LoadingSpinner";

const landlordLinks = [
  { name: "Dashboard", href: "/landlord/dashboard" },
  { name: "My Rooms", href: "/landlord/rooms" },
  { name: "Applicants", href: "/landlord/applicants" },
  { name: "Messages", href: "/landlord/messages" },
  { name: "Profile", href: "/landlord/profile" },
  
];

export default function LandlordLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();

  const { user, loading } = useAuth(); // ✅ global auth check
  useAuthRedirect(); // ✅ redirect to signin if not logged in
  useRoleGuard(["landlord"]); // ✅ restrict to landlord role only

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [fullname, setFullname] = useState("");

  useEffect(() => {
    const name = localStorage.getItem("fullname");
    if (name) setFullname(name);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);
  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("fullname");
    router.push("/signin");
  };

  // ✅ protect layout from rendering until auth state is determined
  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside
        className={classNames(
          "fixed inset-y-0 left-0 w-64 bg-blue-900 text-white p-6 space-y-6 transform transition-transform duration-300 z-50 md:static md:translate-x-0",
          {
            "-translate-x-full": !sidebarOpen,
            "translate-x-0": sidebarOpen,
          }
        )}
      >
        <div className="flex items-center justify-between md:hidden">
          <h2 className="text-2xl font-bold">RoomieFinder</h2>
          <button onClick={toggleSidebar}>
            <HiX className="w-6 h-6" />
          </button>
        </div>

        <h2 className="hidden md:block text-2xl font-bold mb-6">RoomieFinder</h2>

        <nav className="space-y-2">
          {landlordLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setSidebarOpen(false)}
              className={classNames(
                "block px-4 py-2 rounded hover:bg-blue-700",
                pathname === link.href && "bg-blue-700"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Main */}
      <div className="flex-1 bg-gray-50 min-h-screen">
        {/* Top Navbar - for both mobile and desktop */}
        <header className="flex justify-between items-center bg-white px-4 py-3 shadow-md sticky top-0 z-40">
          <div className="flex items-center gap-4">
            {/* Hamburger menu for mobile */}
            <button onClick={toggleSidebar} className="md:hidden">
              <HiMenu className="w-6 h-6 text-blue-800" />
            </button>
            <h1 className="text-lg md:text-xl font-bold text-blue-800">Landlord Panel</h1>
          </div>

          <div className="flex items-center gap-4 relative" ref={dropdownRef}>
            {/* Notification icon */}
            <button title="Notifications" className="relative">
              <HiBell className="w-6 h-6 text-blue-800" />
              {/* You can show badge: */}
              {/* <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full" /> */}
            </button>

            {/* User Dropdown */}
            <button onClick={toggleDropdown} title="Account">
              <HiUserCircle className="w-7 h-7 text-blue-800" />
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-10 w-48 bg-white border rounded shadow z-50">
                <div className="px-4 py-2 text-sm text-gray-700">{fullname}</div>
                <Link
                  href="/landlord/profile"
                  onClick={() => setDropdownOpen(false)}
                  className="block px-4 py-2 text-sm hover:bg-gray-100"
                >
                  Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </header>

        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
