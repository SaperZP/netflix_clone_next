"use client";

import { useEffect } from "react";

const Error = ({ error }: { error: Error }) => {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className="mt-64 text-center">
      <h1 className="text-2xl text-red-500">
        {" "}
        {error.message || "Something went wrong!"}
      </h1>
    </div>
  );
};

export default Error;
