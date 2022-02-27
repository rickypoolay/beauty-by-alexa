import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import { useContext, useEffect } from "react";
import CardBig from "../components/CardBig";
import CardSmall from "../components/CardSmall";
import DesktopLanding from "../components/DesktopLanding";
import LeftLine from "../components/LeftLine";
import Navbar from "../components/Navbar";
import {
  INITIAL_LOADED,
  INITIAL_NOT_LOADED,
} from "../context/page-load-actions";
import { pageLoadContext } from "../context/page-load-context";

export default function Home() {
  const { initialLoad, dispatch } = useContext(pageLoadContext);

  const container = {
    show: {
      transition: {
        staggerChildren: 0.25,
        delayChildren: 2,
      },
    },
  };

  const card = {
    hidden: {
      y: !initialLoad ? 100 : 0,
      opacity: !initialLoad ? 0 : 1,
      marginBottom: 10,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.75,
        ease: [0.6, 0.01, -0.05, 0.95],
      },
    },
  };

  return (
    <div>
      <Head>
        <title>Lorem Ipsum</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* BACKGROUND FLOWERS */}
      <div className="absolute  w-[100px] h-[100px] top-[325px] xs:w-[175px] xs:h-[175px] xs:top-[350px] sm:w-[200px] sm:h-[200px] sm:top-[375px] md:w-[300px] md:h-[300px] md:top-[425px] lg:w-[300px] lg:h-[300px] lg:top-[550px]  left-0 -z-30 drop-shadow-md">
        <Image
          priority
          src={"/images/Flower-2.png"}
          layout="fill"
          objectFit="contain"
          alt=""
        />
      </div>
      <div className="absolute right-0 w-[125px] h-[125px] top-[280px] xs:w-[175px] xs:h-[175px] xs:top-[300px] sm:w-[250px] sm:h-[250px] sm:top-[200px] md:w-[325px] md:h-[325px] md:top-[225px] lg:w-[400px] lg:h-[400px] drop-shadow-md -z-30">
        <Image
          priority
          src={"/images/Flower-1.png"}
          layout="fill"
          objectFit="contain"
          alt=""
        />
      </div>

      <motion.div
        initial={{
          y: !initialLoad ? -200 : 0,
          position: "sticky",
          zIndex: "50",
        }}
        animate={{ y: 0, top: 0 }}
        transition={{
          ease: [0.6, 0.01, -0.05, 0.95],
          delay: 2,
          duration: 0.75,
        }}
        onAnimationComplete={() => {
          dispatch({
            type: INITIAL_LOADED,
          });
        }}
      >
        <Navbar />
      </motion.div>
      <main>
        {/* Left Line */}
        <motion.div
          initial={{ opacity: !initialLoad ? 0 : 1, zIndex: -50 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <LeftLine />
        </motion.div>
        <section className="space-y-1">
          <div className="mb-[7.5rem] mt-[1rem] xs:mb-[10rem] sm:mt-[4rem] md:mb-[15rem] ">
            <DesktopLanding />
          </div>

          <motion.div variants={container} animate="show" initial="hidden">
            <motion.div variants={card}>
              <CardSmall
                title={"Services"}
                desc={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam."
                }
                img={
                  "https://images.unsplash.com/photo-1600634999623-864991678406?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                }
                toRoute={"/services"}
              />
            </motion.div>
            <motion.div variants={card}>
              <CardSmall
                title={"Gallery"}
                desc={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam."
                }
                img={
                  "https://images.unsplash.com/photo-1620794108927-28b6f31f1a7b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
                }
                toRoute={"/gallery"}
              />
            </motion.div>
            <motion.div variants={card} a>
              <CardSmall
                title={"About"}
                desc={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam."
                }
                img={
                  "https://images.unsplash.com/photo-1578747763484-51b21a33e4fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"
                }
                toRoute={"/about"}
              />
            </motion.div>
          </motion.div>
        </section>
      </main>
    </div>
  );
}
