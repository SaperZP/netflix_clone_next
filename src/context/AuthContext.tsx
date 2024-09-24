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
} from "@firebase/auth";
import { auth } from "@/auth/fierbase";
import { useRouter } from "next/navigation";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

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
  logOut: () => void;
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

  const logOut = () => {
    signOut(auth);
    toast.success("Logged out successfully.");
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
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        const { email, displayName, photoURL } = currentUser;
        setUser({ email, displayName, photoURL });
        sessionStorage.setItem(
          "user",
          JSON.stringify({ email, displayName, photoURL }),
        );
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
