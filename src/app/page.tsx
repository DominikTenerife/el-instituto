// src/app/page.tsx
'use client';

import Image from 'next/image';
import UserStatus from '@/components/UserStatus';

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 relative">
      <div className="text-center flex flex-col items-center justify-center">
        <Image
          src="/images/logo-black-transparent-img.png"
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
      </div>
      <UserStatus />
    </div>
  );
}
