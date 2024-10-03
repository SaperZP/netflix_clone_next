"use client";

import { ReactNode, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

const PrivateLayout = ({ children }: { children: ReactNode }) => {
  const { user } = useAuth();
  const router = useRouter();


  useEffect(() => {
    if (!user) {
      router.replace("/login");
    } else {
      router.replace("/profile");
    }
  }, [router, user]);

  return (
    <div>
      <section className="bg-cover-image">{children}</section>
    </div>
  );
};

export default PrivateLayout;
