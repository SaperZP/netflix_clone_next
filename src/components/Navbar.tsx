import Link from "next/link";
import Image from "next/image";
import UserButton from "./UserButton";
export default function Navbar() {
  return (
    <nav className="main-nav">
      <Link href="/">
        <div className="relative h-4 lg:h-7 w-20">
          <Image src="/images/logo.png" alt="" fill />
        </div>
      </Link>
      <UserButton/>
    </nav>
  );
}
