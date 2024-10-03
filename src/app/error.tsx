"use client";

const Error = ({ error }: { error: Error }) => {
  return (
    <div className="mt-64 text-center">
      <h1 className="text-2xl text-red-500">
        {error.message || "Something went wrong!"}
      </h1>
    </div>
  );
};

export default Error;
