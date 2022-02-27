import { ArrowRightIcon } from "@heroicons/react/solid";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import LeftLine from "../components/LeftLine";
import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import ServiceCard from "../components/ServiceCard";
import { servicesData } from "../data";

function Services() {
  const [selected, setSelected] = useState(servicesData[0]);

  return (
    <div>
      <Navbar />
      <main>
        <LeftLine />
        <section>
          <PageHeader
            title={"Services"}
            info={"Find what you need and prices."}
          />
          <div className="flex space-x-10 overflow-x-auto overflow-y-hidden p-2 text-custom-black text-xl sticky top-16 mb-5 whitespace-nowrap border-b border-custom-black z-20 bg-custom-background">
            {/* maps every object/category creating a button. Within this button it has an onclick of setting that specific category object of data to send to the useState 'selected'.*/}

            {servicesData.map((category) => (
              <button
                onClick={() => setSelected(category)}
                className={`whitespace-nowrap capitalize ${
                  // Underline if selected
                  selected.categoryTitle == category.categoryTitle &&
                  "underline"
                }`}
                key={category.categoryTitle}
              >
                {category.categoryTitle}
              </button>
            ))}
          </div>
          {/* Checks to see if the selected category has any data/services. If not then show text saying so, else map out all services.  */}
          {selected.services?.length == 0 ||
          selected.services == null ||
          selected.services == undefined ? (
            <p className="mx-auto text-custom-black mt-5 text-center">
              No services for
              <span className="capitalize font-bold">
                {" " + selected.categoryTitle}
              </span>{" "}
              at this time.
            </p>
          ) : (
            <div className="grid items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-5">
              {selected.services?.map((item) => (
                <ServiceCard
                  key={Math.random()}
                  title={item?.title}
                  info={item?.info}
                  price={item?.price}
                  img={item?.img}
                />
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default Services;