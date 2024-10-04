import { ReactNode } from "react";
import ProtectionProvider from "@/providers/protectionProvider";

const PrivateLayout = ({ children }: { children: ReactNode }) => {
  return (
    <ProtectionProvider>
      <section className="bg-cover-image">{children}</section>
    </ProtectionProvider>
  );
};

export default PrivateLayout;
