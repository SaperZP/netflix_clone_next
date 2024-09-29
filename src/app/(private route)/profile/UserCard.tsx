"use client";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useRouter } from "next/navigation";

type userCardProps = {
  name: string;
  image: string;
};

const UserCard = ({ name, image }: userCardProps) => {
  const router = useRouter();
  
  return (
    <div className="group flex cursor-pointer flex-col">
      <Card className="mx-auto w-44 p-0" onClick={() => router.push("/movies")}>
        <CardContent className="grouo-hover:pointer h-full w-full overflow-hidden border-2 border-transparent p-0 group-hover:border-white">
          <Image
            height={175}
            width={175}
            alt={`${name} image`}
            src={image}
            className="h-max w-full object-contain"
          />
        </CardContent>
      </Card>

      <div className="mt-4 text-center text-2xl text-gray-400 group-hover:text-white">
        {name}
      </div>
    </div>
  );
};

export default UserCard;
