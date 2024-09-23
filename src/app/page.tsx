import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const HomePage = () => {
  const currentUser = false;

  return (
    <main className="bg-cover-image">
      <div className="overlay flex h-full flex-col justify-center items-center gap-3 text-center">
        <h1 className="text-5xl font-extrabold">
          Unlimited movies TV shows and more
        </h1>
        <p>Watch anywhere, Cancel anytime</p>

        <Link
          className={cn(
            buttonVariants({ variant: "destructive" }),
            "max-w-[250px] text-center",
          )}
          href={currentUser ? "/profile" : "/login"}
        >
          Get started
        </Link>
      </div>
    </main>
  );
};

export default HomePage;
