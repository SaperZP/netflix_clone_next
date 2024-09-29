"use client";
import { profileImages } from "@/constants/contants";
import UserCard from "./UserCard";
import { useAuth } from "@/context/AuthContext";

const ProfileList = () => {
  const { user } = useAuth();
  return (
    <div className="mt-10 flex flex-col items-center justify-center gap-8 md:flex-row">
      {profileImages.map((image, index) => (
        <UserCard
          key={index}
          image={index === 0 && user?.photoURL ? user.photoURL : image}
          name={
            index === 0 && user?.displayName
              ? user.displayName
              : `Guest-${index + 1}`
          }
        />
      ))}
    </div>
  );
};

export default ProfileList;
