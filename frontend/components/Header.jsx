// "use client";
// import Link from "next/link";
// import { useState } from "react";
// import { Menu, X } from "lucide-react";

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => setIsOpen(!isOpen);

//   return (
//     <header className="bg-white shadow-md">
//       <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
//         {/* Logo */}
//         <Link href="/" className="text-2xl font-bold text-blue-600">
//           RoomieFinder
//         </Link>

//         {/* Desktop Nav */}
//         <nav className="hidden md:flex space-x-6 text-sm text-gray-700 font-medium ml-16">
//           <Link href="/">Home</Link>
//           <Link href="/about">About</Link>
//           <Link href="/browse">Find Roommates</Link>
//           <Link href="/contact">Contact</Link>
//         </nav>

//         {/* Search Bar */}
//         <div className="hidden md:block mx-6 flex-1 max-w-md">
//           <input
//             type="text"
//             placeholder="Search for rooms or roommates..."
//             className="w-full px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring focus:ring-blue-300"
//           />
//         </div>

//         {/* Auth Buttons (Desktop) */}
//         <div className="hidden md:flex space-x-2">
//           <Link href="/signin">
//             <button className="px-4 py-2 border border-blue-800 text-blue-800 rounded hover:bg-blue-50 transition">
//               Login
//             </button>
//           </Link>
//           <Link href="/register">
//             <button className="px-4 py-2 bg-blue-800 text-white rounded hover:bg-blue-900 transition">
//               Sign Up
//             </button>
//           </Link>
//         </div>

//         {/* Hamburger Menu Button */}
//         <button onClick={toggleMenu} className="md:hidden ml-auto">
//           {isOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden px-4 pb-4 space-y-3 text-sm font-medium text-gray-700">
//           <Link href="/" onClick={toggleMenu}>Home</Link>
//           <Link href="/about" onClick={toggleMenu}>About</Link>
//           <Link href="/browse" onClick={toggleMenu}>Find Roommates</Link>
//           <Link href="/contact" onClick={toggleMenu}>Contact</Link>
//           <div className="pt-2 border-t">
//             <Link href="/signin" onClick={toggleMenu}>
//               <button className="w-full py-2 border border-blue-800 text-blue-800 rounded hover:bg-blue-50 transition mb-2">
//                 Login
//               </button>
//             </Link>
//             <Link href="/register" onClick={toggleMenu}>
//               <button className="w-full py-2 bg-blue-800 text-white rounded hover:bg-blue-900 transition">
//                 Sign Up
//               </button>
//             </Link>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;






// "use client";
// import { useState } from "react";
// import Link from "next/link";
// import { Menu, X } from "lucide-react";

// const Header = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
//   const closeSidebar = () => setSidebarOpen(false);

//   return (
//     <>
//       <header className="bg-white shadow-md fixed w-full z-50">
//         <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
//           {/* Logo */}
//           <Link href="/" className="text-2xl font-bold text-blue-600">
//             RoomieFinder
//           </Link>

//           {/* Desktop Nav */}
//           <nav className="hidden md:flex space-x-6 text-sm text-gray-700 font-medium ml-16">
//             <Link href="/">Home</Link>
//             <Link href="/about">About</Link>
//             <Link href="/browse">Find Roommates</Link>
//             <Link href="/contact">Contact</Link>
//           </nav>

//           {/* Search Bar */}
//           <div className="hidden md:block mx-6 flex-1 max-w-md">
//             <input
//               type="text"
//               placeholder="Search..."
//               className="w-full px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring focus:ring-blue-300"
//             />
//           </div>

//           {/* Auth Buttons (Desktop) */}
//           <div className="hidden md:flex space-x-2">
//             <Link href="/signin">
//               <button className="px-4 py-2 border border-blue-800 text-blue-800 rounded hover:bg-blue-50 transition">
//                 Login
//               </button>
//             </Link>
//             <Link href="/register">
//               <button className="px-4 py-2 bg-blue-800 text-white rounded hover:bg-blue-900 transition">
//                 Sign Up
//               </button>
//             </Link>
//           </div>

//           {/* Hamburger Icon */}
//           <button onClick={toggleSidebar} className="md:hidden">
//             <Menu size={24} />
//           </button>
//         </div>
//       </header>

//       {/* Overlay */}
//       {sidebarOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-40 z-40"
//           onClick={closeSidebar}
//         ></div>
//       )}

//       {/* Sidebar */}
//       <aside
//         className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 p-6 transform transition-transform duration-300 ${
//           sidebarOpen ? "translate-x-0" : "-translate-x-full"
//         }`}
//       >
//         <div className="flex justify-between items-center mb-6">
//           <h2 className="text-xl font-bold text-blue-800">Menu</h2>
//           <button onClick={closeSidebar}>
//             <X size={24} />
//           </button>
//         </div>

//         <nav className="flex flex-col space-y-4 text-gray-700 font-medium">
//           <Link href="/" onClick={closeSidebar}>Home</Link>
//           <Link href="/about" onClick={closeSidebar}>About</Link>
//           <Link href="/browse" onClick={closeSidebar}>Find Roommates</Link>
//           <Link href="/contact" onClick={closeSidebar}>Contact</Link>
//         </nav>

//         <div className="mt-6 border-t pt-4 space-y-2">
//           <Link href="/signin" onClick={closeSidebar}>
//             <button className="w-full py-2 border border-blue-800 text-blue-800 rounded hover:bg-blue-50 transition">
//               Login
//             </button>
//           </Link>
//           <Link href="/register" onClick={closeSidebar}>
//             <button className="w-full py-2 bg-blue-800 text-white rounded hover:bg-blue-900 transition">
//               Sign Up
//             </button>
//           </Link>
//         </div>
//       </aside>
//     </>
//   );
// };

// export default Header;





"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <>
      <header className="bg-white shadow-md fixed w-full z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            RoomieFinder
          </Link>

          <nav className="hidden md:flex space-x-6 text-sm text-gray-700 font-medium ml-16">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/browse">Find Roommates</Link>
            <Link href="/contact">Contact</Link>
          </nav>

          <div className="hidden md:block mx-6 flex-1 max-w-md">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          <div className="hidden md:flex space-x-2">
            <Link href="/signin">
              <button className="px-4 py-2 border border-blue-800 text-blue-800 rounded hover:bg-blue-50 transition">
                Login
              </button>
            </Link>
            <Link href="/register">
              <button className="px-4 py-2 bg-blue-800 text-white rounded hover:bg-blue-900 transition">
                Sign Up
              </button>
            </Link>
          </div>

          <button onClick={toggleSidebar} className="md:hidden">
            <Menu size={24} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {sidebarOpen && (
          <>
            {/* Overlay with fade animation */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-40 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeSidebar}
            />

            {/* Sidebar slide-in */}
            <motion.aside
              className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 p-6"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-blue-800">Menu</h2>
                <button onClick={closeSidebar}>
                  <X size={24} />
                </button>
              </div>

              <nav className="flex flex-col space-y-4 text-gray-700 font-medium">
                <Link href="/" onClick={closeSidebar}>Home</Link>
                <Link href="/about" onClick={closeSidebar}>About</Link>
                <Link href="/browse" onClick={closeSidebar}>Find Roommates</Link>
                <Link href="/contact" onClick={closeSidebar}>Contact</Link>
              </nav>

              <div className="mt-6 border-t pt-4 space-y-2">
                <Link href="/signin" onClick={closeSidebar}>
                  <button className="w-full py-2 border border-blue-800 text-blue-800 rounded hover:bg-blue-50 transition">
                    Login
                  </button>
                </Link>
                <div className="mt-1" ></div>
                <Link href="/register" onClick={closeSidebar}>
                  <button className="w-full py-2 bg-blue-800 text-white rounded hover:bg-blue-900 transition">
                    Sign Up
                  </button>
                </Link>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
