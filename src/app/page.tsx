// src/app/page.tsx
"use client";

import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">This is El Instituto Home Page</h1>
        <Image
          src="/images/teenagers.png"
          alt="Teenagers"
          width={500}
          height={300}
          className="rounded-md"
        />
      </div>
    </div>
  );
}
