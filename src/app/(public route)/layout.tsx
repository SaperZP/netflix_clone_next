import { ReactNode } from "react";

const PublicLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <main className="bg-cover-image">
        <div className="overlay flex h-full flex-col items-center justify-center gap-3 p-5">
          {children}
        </div>
      </main>
    </div>
  );
};

export default PublicLayout;
