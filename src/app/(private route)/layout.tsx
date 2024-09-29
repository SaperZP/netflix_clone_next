"use client";
import { ReactNode, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

const PrivateLayout = ({ children }: { children: ReactNode }) => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, [router, user]);

  return (
    <div>
      <section className="bg-cover-image">
        <div className="overlay flex h-full flex-col items-center justify-center gap-3 p-5">
          {children}
        </div>
      </section>
    </div>
  );
};

export default PrivateLayout;
