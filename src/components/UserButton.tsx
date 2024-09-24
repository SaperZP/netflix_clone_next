"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

export default function UserButton() {
  const { user, logOut } = useAuth();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src={user?.photoURL || "/images/default-slate.png"} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {!user && (
          <>
            <DropdownMenuItem>
              <Link href="/login"> Login</Link>
            </DropdownMenuItem>

            <DropdownMenuItem>
              <Link href="/register"> Register</Link>
            </DropdownMenuItem>
          </>
        )}
        {user && (
          <>
            <DropdownMenuItem asChild>
              <Link href="/profile" className="cursor-pointer">
                {" "}
                Profile
              </Link>
            </DropdownMenuItem>

            <DropdownMenuItem>
              <span className="cursor-pointer" onClick={() => logOut()}>
                {" "}
                Logout
              </span>
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
