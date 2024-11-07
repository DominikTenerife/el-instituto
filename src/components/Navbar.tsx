// src/app/Navbar.tsx
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4">
        <li>
          <Link href="/" className="text-white">Home</Link>
        </li>
        <li>
          <Link href="/upload" className="text-white">Upload</Link>
        </li> 
        <li>
          <Link href="/counter" className="text-white">Counter</Link>
        </li>
      </ul>
    </nav>
  );
}