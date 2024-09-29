import { MoonLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <MoonLoader color="red" />
    </div>
  );
};

export default Loading;
