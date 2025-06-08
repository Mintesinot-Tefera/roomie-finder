import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-20">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: Brand */}
        <div>
          <h2 className="text-2xl font-bold text-blue-400">RoomieFinder</h2>
          <p className="mt-2 text-sm text-gray-400">
            Helping you find the perfect roommate, quickly and safely.
          </p>
          {/* Social Links */}
          <div className="flex gap-4 mt-4 text-blue-400">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="hover:text-white transition duration-300" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="hover:text-white transition duration-300" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="hover:text-white transition duration-300" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="hover:text-white transition duration-300" />
            </a>
          </div>
        </div>

        {/* Column 2: Navigation */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Navigation</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/browse">Find Roommates</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Column 3: Legal */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Legal</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="/terms">Terms of Service</Link></li>
            <li><Link href="/privacy">Privacy Policy</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="text-center text-xs text-gray-500 mt-10 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} RoomieFinder. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;




// import Link from 'next/link';
// import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 text-white py-10 mt-20">
//       <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
//         {/* Column 1: Brand */}
//         <div>
//           <h2 className="text-2xl font-bold text-blue-400">RoomieFinder</h2>
//           <p className="mt-2 text-sm text-gray-400">
//             Helping you find the perfect roommate, quickly and safely.
//           </p>
//           {/* Social Links */}
//           <div className="flex gap-4 mt-4 text-blue-400">
//             <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
//               <FaFacebookF className="hover:text-white transition duration-300" />
//             </a>
//             <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
//               <FaTwitter className="hover:text-white transition duration-300" />
//             </a>
//             <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
//               <FaInstagram className="hover:text-white transition duration-300" />
//             </a>
//             <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
//               <FaLinkedinIn className="hover:text-white transition duration-300" />
//             </a>
//           </div>
//         </div>

//         {/* Column 2: Navigation */}
//         <div>
//           <h4 className="text-lg font-semibold mb-3">Navigation</h4>
//           <ul className="space-y-2 text-sm text-gray-300">
//             <li><Link href="/">Home</Link></li>
//             <li><Link href="/about">About</Link></li>
//             <li><Link href="/browse">Find Roommates</Link></li>
//             <li><Link href="/contact">Contact</Link></li>
//           </ul>
//         </div>

//         {/* Column 3: Legal */}
//         <div>
//           <h4 className="text-lg font-semibold mb-3">Legal</h4>
//           <ul className="space-y-2 text-sm text-gray-300">
//             <li><Link href="/terms">Terms of Service</Link></li>
//             <li><Link href="/privacy">Privacy Policy</Link></li>
//             <li><Link href="/faq">FAQ</Link></li>
//           </ul>
//         </div>
//       </div>

//       {/* Bottom Note */}
//       <div className="text-center text-xs text-gray-500 mt-10 border-t border-gray-700 pt-4">
//         © {new Date().getFullYear()} RoomieFinder. All rights reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;
