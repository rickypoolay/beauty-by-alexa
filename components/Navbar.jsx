import { MenuIcon } from "@heroicons/react/solid";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

function Navbar() {
  const router = useRouter();

  return (
    <nav className="border-b border-b-custom-black bg-custom-background text-custom-black sticky top-0 z-50">
      <div className="flex px-8 py-4 justify-center items-center mx-auto max-w-7xl sm:grid sm:grid-cols-3">
        {/* Logo */}
        <h1
          className="cursor-pointer mr-auto text-base border border-custom-black px-1 justify-self-center sm:mx-0 self-center uppercase"
          onClick={() => {
            router.push("/");
          }}
        >
          Beauty By Alexa
        </h1>

        {/* Mobile Icon */}
        <MenuIcon className="w-8 h-8 cursor-pointer sm:hidden" />

        {/* Desktop List */}
        <div className="hidden sm:flex  space-x-5 items-center -order-1">
          <button
            className="cursor-pointer font-extralight"
            onClick={() => router.push("/")}
          >
            Home
          </button>
          <button
            onClick={() => router.push("/services")}
            className="font-extralight cursor-pointer"
          >
            Services
          </button>
          <button
            onClick={() => router.push("/gallery")}
            className="font-extralight cursor-pointer"
          >
            Gallery
          </button>
        </div>

        <ul className="hidden sm:flex font-extralight space-x-3 justify-end items-center">
          <button
            className="font-extralight cursor-pointer"
            onClick={() => router.push("/about")}
          >
            About
          </button>
          <button className="button px-4 py-1">Schedule</button>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
