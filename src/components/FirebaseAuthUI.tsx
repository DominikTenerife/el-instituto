// src/components/FirebaseAuthUI.tsx
import { useEffect, useState } from 'react';
import { EmailAuthProvider } from 'firebase/auth';
import { auth } from '@/firebaseConfig';
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';

const uiConfig: firebaseui.auth.Config = {
  callbacks: {
    signInSuccessWithAuthResult: function(authResult: any, redirectUrl?: string) {
      return true;
    },
    uiShown: function() {
      const loader = document.getElementById('loader');
      if (loader) loader.style.display = 'none';
    },
  },
  signInFlow: 'popup',
  signInSuccessUrl: '/',
  signInOptions: [
    EmailAuthProvider.PROVIDER_ID,
  ],
  tosUrl: '/terms-of-service',
  privacyPolicyUrl: '/privacy-policy',
};

const FirebaseAuthUI = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let ui: firebaseui.auth.AuthUI;

    const initializeUI = async () => {
      // Ensure we're on the client side
      if (typeof window !== 'undefined') {
        // Wait for the firebaseui-auth-container to be available in the DOM
        await new Promise(resolve => setTimeout(resolve, 0));

        try {
          ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth);
          
          const container = document.getElementById('firebaseui-auth-container');
          if (container) {
            ui.start('#firebaseui-auth-container', uiConfig);
          }
        } catch (error) {
          console.error('Error initializing FirebaseUI:', error);
        } finally {
          setIsLoading(false);
        }
      }
    };

    initializeUI();

    return () => {
      if (ui) {
        ui.delete();
      }
    };
  }, []);

  // Return a placeholder during SSR
  if (typeof window === 'undefined') {
    return null;
  }

  return (
    <div className="w-full">
      {isLoading && (
        <div id="loader" className="text-center py-4">
          Loading...
        </div>
      )}
      <div id="firebaseui-auth-container" className="w-full" />
    </div>
  );
};

export default FirebaseAuthUI