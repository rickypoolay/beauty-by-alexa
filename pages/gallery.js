import { XIcon } from "@heroicons/react/solid";
import { motion, transform } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import LeftLine from "../components/LeftLine";
import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import { galleryImages } from "../data";
function Gallery() {
  const [selectedIMG, setSelectedIMG] = useState();
  console.log(galleryImages.findIndex((item) => item.src == selectedIMG));

  return (
    <div className="relative">
      <Navbar />

      <main>
        <LeftLine />

        {/* Popup Image */}
        {selectedIMG && (
          <div className="fixed top-0 z-50 w-[100vw] h-[100vh]  flex justify-center items-center backdrop-blur-sm">
            <div
              className="absolute w-[100vw] h-[100vh] bg-custom-black bg-opacity-60 "
              onClick={() => setSelectedIMG()}
            />
            <XIcon
              className="w-10 h-10 absolute top-10 right-10 cursor-pointer"
              onClick={() => setSelectedIMG()}
            />
            <div className="relative w-3/4 h-3/4 bg-custom-black bg-opacity-20">
              <Image
                priority
                layout="fill"
                objectFit="contain"
                src={selectedIMG}
                alt=""
              />
            </div>
          </div>
        )}
        <section>
          <PageHeader title={"Gallery"} info={"Showcase of work"} />

          <div className="grid grid-cols-2 sm:grid-cols-3  gap-y-3 gap-x-3 justify-center items-center mt-5">
            {galleryImages.map((img) => (
              <motion.div
                className="relative rounded-sm min-w-[100px] w-full h-full overflow-hidden mx-auto p-3 cursor-pointer "
                key={img.src}
                whileHover={{
                  scale: 1.1,
                  transition: {
                    ease: [0.6, 0.01, -0.05, 0.95],
                  },
                }}
                onClick={() => setSelectedIMG(img.src)}
              >
                <div>
                  <Image
                    width={"100%"}
                    height={"100%"}
                    layout="responsive"
                    objectFit="cover"
                    src={img.src}
                    alt=""
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Gallery;
