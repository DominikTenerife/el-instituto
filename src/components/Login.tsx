'use client';

import { useEffect, useCallback, Suspense } from 'react';
import { useRouter } from 'next/navigation';
import { User } from 'firebase/auth';
import { auth } from '@/firebaseConfig';
import dynamic from 'next/dynamic';

// Dynamically import FirebaseAuthUI with no SSR
const FirebaseAuthUI = dynamic(
  () => import('./FirebaseAuthUI'),
  { ssr: false }
);

const Login = () => {
  const router = useRouter();

  const handleAuthStateChange = useCallback((user: User | null) => {
    if (user) {
      router.push('/');
    }
  }, [router]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(handleAuthStateChange);
    return () => unsubscribe();
  }, [handleAuthStateChange]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Sign in to Your Account
        </h1>
        <Suspense fallback={<div>Loading authentication...</div>}>
          <FirebaseAuthUI />
        </Suspense>
      </div>
    </div>
  );
};

export default Login;