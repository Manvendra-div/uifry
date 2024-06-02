import logo from "@/assets/logo.svg";
import Image from "next/image";
import Link from "next/link";
export default function NavBar() {
  return (
    <header className="sticky top-0 p-5 w-full flex justify-center items-center z-10">
      <div className="flex justify-between items-center w-[85%] text-lg backdrop-blur-md bg-white/20 p-2 rounded-full">
        <div className="flex justify-between items-center w-[60%]">
        <Image src={logo} placeholder="empty" alt="urify" />
        <div className="flex justify-between items-center w-[70%]">
          <Link href={"/"} className="text-[#FF5555] font-extrabold">Home</Link>
          <Link href={"/"}>About Us</Link>
          <Link href={"/"}>Pricing</Link>
          <Link href={"/"}>Features</Link>
        </div>
        </div>
        <Link href={"/"} className="px-10 py-3 bg-black text-white rounded-md text-base">Download</Link>
      </div>
    </header>
  );
}
