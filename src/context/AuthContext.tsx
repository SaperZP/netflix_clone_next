"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup
} from "@firebase/auth";
import { auth } from "@/auth/fierbase";
import { useRouter } from "next/navigation";

type AuthProviderProps = {
  children: React.ReactNode;
};

interface User {
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
}

type AuthContextType = {
  user: User | null;
  signUp: (
    email: string,
    password: string,
    displayName: string,
  ) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  logOut: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  const signUp = async (
    email: string,
    password: string,
    displayName: string,
  ) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser!, { displayName });
      router.push("/profile");
      toast.success(`User ${displayName} registered successfully.`);
    } catch (error) {
      toast.error((error as Error).message);
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/profile");
      toast.success("Logged in successfully.");
    } catch (error) {
      toast.error((error as Error).message);
    }
  };

  const logOut = async () => {
    try {
      await signOut(auth);
      toast.success("Logged out successfully.");
    } catch (error) {
      toast.error((error as Error).message);
    }
  };

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      router.push("/profile");
      toast.success("Logged In Successfully!");
    } catch (error) {
      toast.error((error as Error).message);
    }
  };

  const resetPassword = async (email: string) => {
    try {
      await sendPasswordResetEmail(auth, email);
      toast.success("Please check your email!");
    } catch (error) {
      toast.error((error as Error).message);
    }
  };

  const authContextOutput = {
    user,
    signUp,
    signIn,
    signInWithGoogle,
    logOut,
    resetPassword,
  };

  useEffect(() => {
    const storedUser = sessionStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        const { email, displayName, photoURL, metadata } = currentUser;
        const lastSignInTime = new Date(metadata.lastSignInTime!).getTime();
        const currentTime = Date.now();
        const timeDiff = currentTime - lastSignInTime;

        if (timeDiff < 1000 * 60 * 10) {
          const newUser = {
            email,
            displayName,
            photoURL,
          };

          setUser(newUser);
          sessionStorage.setItem("user", JSON.stringify(newUser));
        } else {
          setUser(null);
          sessionStorage.clear();
        }
      } else {
        setUser(null);
        sessionStorage.clear();
      }
    });
  }, []);

  return (
    <AuthContext.Provider value={authContextOutput}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
export const useAuth = () => useContext(AuthContext);
