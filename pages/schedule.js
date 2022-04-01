import Head from "next/head";
import Image from "next/image";
import LeftLine from "../components/LeftLine";
import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import ScheduleStep from "../components/Step";
import { motion } from "framer-motion";

function Schedule() {
  return (
    <div>
      <Head>
        <title>Beauty By Alexa | Schedule</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main>
        <LeftLine />
        <section className="text-custom-black">
          <PageHeader title={"Schedule"} />

          <h2 className="my-2 sm:block xs:my-8 text-center">
            Please follow the steps below
          </h2>

          <div className="flex flex-col sm:flex-row-reverse gap-5 items-center justify-between">
            <div className="relative w-full h-[200px] sm:h-[50vh] sm:max-w-[50%]">
              <Image
                src={"/gifs/scheduling-instructions.gif"}
                layout="fill"
                objectFit="contain"
                alt=""
              />
            </div>

            <div>
              <div className="my-2 xs:my-5 flex flex-col space-y-2">
                <ScheduleStep
                  number={1}
                  info={
                    <p className="step-text">
                      Click on a drop down menu that displays{" "}
                      <strong>&quot;All Providers&quot;</strong>
                    </p>
                  }
                />
                <ScheduleStep
                  number={2}
                  info={
                    <p className="step-text">
                      Select <strong>&quot;Alexa&quot;</strong>
                    </p>
                  }
                />
                <ScheduleStep
                  number={3}
                  info={
                    <p className="step-text">
                      Click <strong>&quot;Add to visit&quot;</strong> for your
                      desired service.
                    </p>
                  }
                />
                <ScheduleStep
                  number={4}
                  info={
                    <p className="step-text">
                      Select <strong>&quot;Alexa&quot;</strong> as a provider.
                    </p>
                  }
                />
                <ScheduleStep
                  number={5}
                  info={
                    <p className="step-text">
                      Click <strong>&quot;Choose date and time&quot;</strong> to
                      schedule
                    </p>
                  }
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center flex-col items-center mb-5">
            <motion.a
              className="button w-full sm:w-60 mx-auto py-4 sm:py-6 text-center"
              href="https://www.schedulicity.com/scheduling/tcw3sb/services"
              target="_blank"
              rel="noreferrer"
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 5px 11px -3px rgba(0,0,0,0.5)",
                transition: {
                  duration: 0.5,
                  ease: [0.6, 0.01, -0.05, 0.95],
                },
              }}
            >
              Okay
            </motion.a>
            <p className="mt-1 text-sm italic text-center max-w-[250px]">
              <strong>You will be redirected to Schedulicity</strong> to
              schedule your appointment with Alexa!
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Schedule;
