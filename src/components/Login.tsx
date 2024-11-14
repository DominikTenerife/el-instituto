// src/components/Login.tsx
'use client';
import { useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { User } from 'firebase/auth';
import { auth } from '@/firebaseConfig';
import FirebaseAuthUI from './FirebaseAuthUI';

const Login = () => {
  const router = useRouter();

  // Handle auth state changes
  const handleAuthStateChange = useCallback((user: User | null) => {
    if (user) {
      // User is signed in, redirect to dashboard or home
      router.push('/');
    }
  }, [router]);

  useEffect(() => {
    // Set up authentication listener
    const unsubscribe = auth.onAuthStateChanged(handleAuthStateChange);

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [handleAuthStateChange]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Sign in to Your Account
        </h1>
        <FirebaseAuthUI />
      </div>
    </div>
  );
};

export default Login;