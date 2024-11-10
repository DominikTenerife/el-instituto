// src/app/page.tsx
"use client";

import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">El Instituto</h1>
        <h3 className="text-2xl font-semibold mb-4">Your Private Spanish School Tutor</h3>
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
