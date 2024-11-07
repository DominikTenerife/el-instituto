// src/components/Navbar.tsx
import Link from 'next/link';


export default function Navbar() {
  return (
    <nav>
    
        <Link href="/">Home</Link>
     
        <Link href="/upload">Upload</Link>
     
        <Link href="/counter">Counter</Link>
    </nav>
  );
     
}