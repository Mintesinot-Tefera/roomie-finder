import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <span className="text-2xl font-bold text-blue-600">RoomieFinder</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6 text-sm text-gray-700 font-medium">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/browse">Find Roommates</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {/* Auth Buttons */}
        <div className="space-x-4">
          <Link href="/login">
            <button className="px-4 py-2 border border-blue-800 text-blue-800 rounded hover:bg-blue-50 transition">Login</button>
          </Link>
          <Link href="/register">
            <button className="px-4 py-2 bg-blue-800 text-white rounded hover:bg-blue-900 transition">Sign Up</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
