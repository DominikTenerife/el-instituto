'use client';

import { useEffect, useCallback, useState, Suspense } from 'react';
import { useRouter } from 'next/navigation';
import { User } from 'firebase/auth';
import { auth } from '@/firebaseConfig';
import dynamic from 'next/dynamic';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { setLoggedIn, setLoggedOut } from '@/redux/slices/authSlice';

// Dynamically import FirebaseAuthUI with no SSR
const FirebaseAuthUI = dynamic(
  () => import('./FirebaseAuthUI'),
  { ssr: false }
);

const Login = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const currentUsername = useSelector((state: RootState) => state.auth.currentUsername);
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  const handleAuthStateChange = useCallback((user: User | null) => {
    if (user) {
      dispatch(setLoggedIn({ username: user.displayName || user.email || 'Unknown User' }));
      router.push('/');
    } else {
      dispatch(setLoggedOut());
    }
  }, [dispatch, router]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(handleAuthStateChange);
    return () => unsubscribe();
  }, [handleAuthStateChange]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Sign in to Your Account
        </h1>
        <Suspense fallback={<div>Loading authentication...</div>}>
          <FirebaseAuthUI />
        </Suspense>
      </div>
      <div className="absolute top-4 right-4">
        {isLoggedIn ? (
          <p>Current User: {currentUsername}</p>
        ) : (
          <p>No user logged in</p>
        )}
      </div>
    </div>
  );
};

export default Login;