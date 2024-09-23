import Link from "next/link";
import ThemeToggler from "@/components/ThemeToggler";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="main-nav">
      <Link href="/">
        <div className="relative h-4 lg:h-7 w-20">
          <Image src="/images/logo.png" alt="logo" fill />
        </div>
      </Link>

      <ThemeToggler />
    </nav>
  );
};

export default Navbar;
