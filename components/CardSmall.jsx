import { ArrowRightIcon } from "@heroicons/react/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
function CardSmall({ title, desc, toRoute, img }) {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);

  const onHoverTextFadeUp = {
    show: {
      y: isHovered ? 0 : 50,
      opacity: isHovered ? 1 : 0,
    },
  };

  const offHoverTextFadeUp = {
    show: {
      y: !isHovered ? 0 : 50,
      opacity: !isHovered ? 1 : 0,
    },
  };

  return (
    <motion.button
      whileHover={() => {
        setIsHovered(true);
      }}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative py-6 cursor-pointer flex justify-center items-center h-[150px] md:h-[225px] lg:h-[275px] overflow-hidden w-full text-left rounded-sm"
      onClick={() => router.push(toRoute)}
    >
      <Image
        className="-z-20 brightness-[35%]"
        src={img}
        layout="fill"
        objectFit="cover"
        alt=""
      />

      {/* inActive Information */}
      <motion.div
        className={`hidden ${
          isHovered ? "flex md:hidden" : "md:flex"
        } px-4 justify-center items-center w-full`}
      >
        <motion.div
          variants={offHoverTextFadeUp}
          animate={"show"}
          transition={{
            duration: !isHovered ? 0.25 : 0,
            ease: [0.6, 0.01, -0.05, 0.95],
          }}
        >
          <h3 className="">{title}</h3>
        </motion.div>
      </motion.div>

      {/* On Hover Information */}
      <motion.div
        className={`${isHovered ? "md:flex" : ""} hidden
        px-12 justify-between items-center w-full`}
      >
        <motion.div className="w-2/3">
          <motion.h3
            variants={onHoverTextFadeUp}
            animate="show"
            transition={{
              duration: isHovered ? 0.5 : 0,
              ease: [0.6, 0.01, -0.05, 0.95],
            }}
          >
            {title}
          </motion.h3>
          <motion.p
            variants={onHoverTextFadeUp}
            animate="show"
            transition={{
              duration: isHovered ? 0.5 : 0,

              ease: [0.6, 0.01, -0.05, 0.95],
              delay: 0.075,
            }}
          >
            {desc}
          </motion.p>
        </motion.div>
        <motion.div
          animate={{ x: isHovered ? 0 : "250%" }}
          transition={{
            ease: [0.6, 0.01, -0.05, 0.95],
            duration: isHovered ? 0.5 : 0,
          }}
        >
          <ArrowRightIcon className="rounded-full border w-8 h-8 p-1 md:mr-10 md:w-10 md:h-10" />
        </motion.div>
      </motion.div>

      {/* Mobile no animations and display text */}

      <motion.div
        className={`
        px-12 flex justify-between items-center w-full md:hidden`}
      >
        <motion.div className="w-2/3">
          <motion.h3>{title}</motion.h3>
          <motion.p>{desc}</motion.p>
        </motion.div>
        <motion.div>
          <ArrowRightIcon className="rounded-full border w-8 h-8 p-1 md:mr-10 md:w-10 md:h-10" />
        </motion.div>
      </motion.div>
    </motion.button>
  );
}

export default CardSmall;
