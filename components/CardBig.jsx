import Image from "next/image";
import { motion } from "framer-motion";

function CardBig() {
  return (
    <div className="">
      <div className="relative h-[22rem] sm:h-[30rem] text-center  flex justify-center items-end">
        <Image
          className="-z-20 sm:object-[0,-140px]"
          src={
            "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80"
          }
          layout="fill"
          objectFit="cover"
          alt=""
        />
        <div className="px-8 w-full">
          <motion.h1 animate={{}} className="mb-2">
            Lorem Ipsum
          </motion.h1>
          <motion.p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam
          </motion.p>
          <button className="button px-8 py-1 mb-8">Elit</button>
        </div>
      </div>
    </div>
  );
}

export default CardBig;
