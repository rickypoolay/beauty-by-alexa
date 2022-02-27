import { animate, motion } from "framer-motion";
import Image from "next/image";
import { useContext } from "react";
import { INITIAL_LOADED } from "../context/page-load-actions";
import { pageLoadContext } from "../context/page-load-context";
import { LocationMarkerIcon } from "@heroicons/react/solid";
import Link from "next/link";

function DesktopLanding() {
  const { initialLoad, dispatch } = useContext(pageLoadContext);
  const container = {
    show: {
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const fadeInText = {
    hidden: { opacity: !initialLoad ? 0 : 1, y: !initialLoad ? 100 : 0 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.6, 0.01, -0.05, 0.95],
      },
    },
  };

  return (
    <motion.div className="text-custom-black relative text-center sm:text-left">
      {/* Info Container */}
      <motion.div variants={container} initial="hidden" animate="show">
        {/* Location */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center sm:justify-start mb-20 sm:mb-0 hover:underline  decoration-transparent "
          initial={{
            opacity: !initialLoad ? 0 : 1,
          }}
          animate={{ opacity: 1 }}
          transition={{
            ease: [0.6, 0.01, -0.05, 0.95],
            duration: 1,
            delay: 2,
          }}
          whileHover={{
            textDecorationColor: "black",
            transition: {
              delay: 0,
            },
          }}
          while
        >
          <LocationMarkerIcon className="w-3 h-3 hidden sm:block md:w-6 md:h-6 xl:w-8 xl:h-8 mb-1 mr-1.5" />
          <Link href="https://www.google.com/maps/place/The+Cove+Day+Spa/@40.0049002,-83.1546298,16z/data=!4m5!3m4!1s0x8838913810b6fe47:0x65998491897b689b!8m2!3d40.0044425!4d-83.1521731">
            5382 Roberts Rd. Hilliard, OH, 43026 | Cove Day Spa
          </Link>
        </motion.div>

        {/* Title */}
        <motion.h1 className="flex justify-center sm:justify-start mt-5 mb-1 lg:mt-10 lg:mb-5">
          {["Beauty", " ", "By", " ", "Alexa"].map((letter) => (
            <motion.span
              className={`${
                letter == " " && "mr-[10px] sm:mr-[14px] md:mr-8"
              } select-none text-[1.75rem] xs:text-[2.85rem] sm:text-[3.75rem] md:text-[4.65rem] lg:text-[6.5rem] xl:text-[8rem] uppercase xl:leading-[150px]`}
              variants={fadeInText}
              key={Math.random()}
            >
              {letter}
            </motion.span>
          ))}
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          initial={{ y: !initialLoad ? 100 : 0, opacity: !initialLoad ? 0 : 1 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.75,
            ease: [0.6, 0.01, -0.05, 0.95],
            duration: 1,
          }}
          className="mb-4 md:mb-8 mx-auto sm:mx-0 max-w-[275px] xs:max-w-[400px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px]"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aligiquam.
        </motion.p>

        {/* Button */}
        <motion.button
          initial={{ y: !initialLoad ? 100 : 0, opacity: !initialLoad ? 0 : 1 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              delay: 2,
              ease: [0.6, 0.01, -0.05, 0.95],
              duration: 1,
            },
          }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 5px 11px -3px rgba(0,0,0,0.5)",
            transition: {
              duration: 0.5,
              ease: [0.6, 0.01, -0.05, 0.95],
            },
          }}
          className="button px-5 py-3 text-xs xs:text-xl md:text-2xl md:px-10 md:py-6 lg:px-16 lg:py-8 lg:text-[1.75rem] xl:text-[2rem]"
        >
          Schedule
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

export default DesktopLanding;
