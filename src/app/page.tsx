// src/app/page.tsx
"use client";

import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center flex flex-col items-center justify-center">
        <Image
        src= "/images/logo-black-transparent-img.png"
        alt="Logo"
        width={250}
        height={125}
        className="rounded-md mb-4"
         />
        
        <h3 className="text-2xl font-semibold mb-4 italic">Your Spanish Tutor</h3>
        <Image
          src="/images/teenagers.png"
          alt="Teenagers"
          width={300}
          height={200}
          className="rounded-md mb-4"
        />
        <div className="flex space-x-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Login
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
            Signup
          </button>
        </div>
      </div>
    </div>
  );
}
