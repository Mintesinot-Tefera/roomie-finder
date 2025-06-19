// import Link from 'next/link';

// const Header = () => {
//   return (
//     <header className="bg-white shadow-md">
//       <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
//         {/* Logo */}
//         <Link href="/">
//           <span className="text-2xl font-bold text-blue-600">RoomieFinder</span>
//         </Link>

//         {/* Navigation */}
//         <nav className="hidden md:flex space-x-6 text-sm text-gray-700 font-medium">
//           <Link href="/">Home</Link>
//           <Link href="/about">About</Link>
//           <Link href="/browse">Find Roommates</Link>
//           <Link href="/contact">Contact</Link>
//         </nav>

//         {/* Auth Buttons */}
//         <div className="space-x-4">
//           <Link href="/signin">
//             <button className="px-4 py-2 border border-blue-800 text-blue-800 rounded hover:bg-blue-50 transition">Login</button>
//           </Link>
//           <Link href="/register">
//             <button className="px-4 py-2 bg-blue-800 text-white rounded hover:bg-blue-900 transition">Sign Up</button>
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;




import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <span className="text-2xl font-bold text-blue-600">RoomieFinder</span>
        </Link>


        <nav className="hidden md:flex space-x-6 text-sm text-gray-700 font-medium ml-16">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/browse">Find Roommates</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {/* Search Bar */}
        <div className="hidden md:block mx-6 flex-1 max-w-md">
          <input
            type="text"
            placeholder="Search for rooms or roommates..."
            className="w-full px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        {/* Auth Buttons */}
        <div className="space-x-4">
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
      </div>
    </header>
  );
};

export default Header;
