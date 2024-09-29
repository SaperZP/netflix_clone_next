import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const NotFound = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-5">
      <Image src="/images/404-page-not-found.png" alt="not found page" />
      <p className="text-5xl text-red-500">Nothing Here !</p>
      <Link className={buttonVariants({ variant: "destructive" })} href="/">
        {" "}
        Back
      </Link>
    </div>
  );
};

export default NotFound;
