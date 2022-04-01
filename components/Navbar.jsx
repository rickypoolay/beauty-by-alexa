import { MenuIcon, XIcon } from "@heroicons/react/solid";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

function Navbar() {
  const router = useRouter();
  const [menuToggle, setMenuToggle] = useState(false);
  return (
    <nav className="border-b border-b-custom-black bg-custom-background text-custom-black sticky top-0 z-50 shadow-sm">
      <div className="flex px-8 py-4 justify-center items-center mx-auto max-w-7xl sm:grid sm:grid-cols-3">
        {/* Mobile Menu Icon */}
        <div
          className="h-8 w-8 cursor-pointer sm:hidden"
          onClick={() => setMenuToggle(true)}
        >
          <MenuIcon className="w-full h-full" />
        </div>

        {/* Mobile Menu */}

        <AnimatePresence>
          {menuToggle && (
            <motion.div className="absolute top-0 left-0 w-[100vw] h-[100vh] sm:hidden">
              {/* Dark Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ ease: "easeInOut", duration: 0.5 }}
                className="absolute w-full h-full z-30 top-0 left-0 bg-black bg-opacity-50 backdrop-blur-sm"
                onClick={() => setMenuToggle(false)}
              />

              {/* White Section Container */}
              <motion.section
                initial={{ x: -700 }}
                animate={{ x: 0 }}
                exit={{ x: -700 }}
                transition={{ ease: "easeInOut", duration: 0.5 }}
                className="px-8 py-4 z-50 bg-custom-background h-full w-[80%]"
              >
                <div className="flex items-center justify-between mb-10">
                  <button onClick={() => setMenuToggle(false)}>
                    <XIcon className="w-8 h-8 cursor-pointer" />
                  </button>
                  <p className="font-bold">BEAUTY BY ALEXA</p>
                </div>

                {/* Mobile Nav Links */}
                <div className=" flex flex-col space-y-10">
                  <Link passHref href={"/"}>
                    <a
                      className={`text-4xl ${
                        router.pathname == "/" && "underline"
                      } `}
                    >
                      Home
                    </a>
                  </Link>
                  <Link passHref href={"/services"}>
                    <a
                      className={`text-4xl ${
                        router.pathname == "/services" && "underline"
                      } `}
                    >
                      Services
                    </a>
                  </Link>
                  <Link passHref href={"/gallery"}>
                    <a
                      className={`text-4xl ${
                        router.pathname == "/gallery" && "underline"
                      } `}
                    >
                      Gallery
                    </a>
                  </Link>
                  <Link passHref href={"/about"}>
                    <a
                      className={`text-4xl ${
                        router.pathname == "/about" && "underline"
                      } `}
                    >
                      About
                    </a>
                  </Link>
                  {/* <Link
                    passHref
                    href={
                      "https://squareup.com/appointments/book/5srybhzsglb2ob/LVVGPZWA4433S/start"
                    }
                  > */}
                  <button
                    className={`button py-7 w-full text-4xl ${
                      router.pathname == "/schedule" && "underline"
                    }`}
                    onClick={() => router.push("/schedule")}
                  >
                    Schedule
                  </button>
                  {/* </Link> */}
                </div>
              </motion.section>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Logo */}
        <h1
          className="cursor-pointer ml-auto text-base border border-custom-black px-1 justify-self-center sm:mx-0 self-center uppercase select-none"
          onClick={() => {
            router.push("/");
          }}
        >
          Beauty By Alexa
        </h1>

        {/* Desktop List */}
        <div className="hidden sm:flex  space-x-5 items-center -order-1">
          <button
            onClick={() => router.push("/")}
            className="cursor-pointer font-extralight"
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
            onClick={() => router.push("/about")}
            className="font-extralight cursor-pointer"
          >
            About
          </button>

          {/* <Link
            passHref
            href={
              "https://squareup.com/appointments/book/5srybhzsglb2ob/LVVGPZWA4433S/start"
            }
          > */}
          <button
            className="button px-4 py-1"
            onClick={() => router.push("/schedule")}
          >
            Schedule
          </button>
          {/* </Link> */}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
