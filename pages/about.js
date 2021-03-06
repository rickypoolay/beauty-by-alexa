import Head from "next/head";
import Image from "next/image";
import IconSocial from "../components/IconSocial";
import LeftLine from "../components/LeftLine";
import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import { AiFillInstagram, AiFillMail } from "react-icons/ai";
import { RiMapPin2Fill } from "react-icons/ri";
import { sanityClient, urlFor } from "../utils/sanity";

function About({ properties }) {
  const props = properties[0];

  return (
    <div>
      <Navbar />
      <Head>
        <title>Beauty By Alexa | About</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <LeftLine />
        <section>
          <PageHeader title={"About"} info={""} />

          <div className="mt-5 sm:grid sm:grid-cols-2 sm:mt-20 text-center sm:text-left">
            <div className="mx-auto relative w-2/4 sm:w-4/5 h-72 sm:max-w-sm sm:h-full overflow-hidden rounded-sm order-1 sm:my-auto mb-5">
              <Image
                src={`${urlFor(props.portraitImage).url()}`}
                alt=""
                layout="fill"
                objectFit="cover"
              />
            </div>

            <div className="text-custom-black">
              {/* Info Container */}
              <div className="sm:min-h-[300px]">
                <div className="mb-4">
                  <p className="order-1 mt-auto h-auto font-normal inline-block">
                    {props.jobTitle}
                  </p>
                  <h1 className="leading-[2.75rem] mb-4 md:mb-6 w-full">
                    {props.name}
                  </h1>
                </div>
                <p>{props.description}</p>
              </div>

              {/* Socials Container */}
              <div className="mt-14">
                <h3 className=" sm:text-[2.25rem] text-left mb-2">Contacts</h3>
                <div className="space-y-2">
                  <IconSocial
                    icon={<AiFillInstagram className="" />}
                    text={`@${props.contacts.instagram}`}
                    href={`https://www.instagram.com/${props.contacts.instagram}/`}
                  />

                  <IconSocial
                    icon={<AiFillMail className="" />}
                    text={`${props.contacts.email}`}
                  />

                  <IconSocial
                    icon={<RiMapPin2Fill className="sm:-mt-1" />}
                    text={`${props.contacts.address}`}
                    href={`${props.contacts.addressLink}`}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export const getServerSideProps = async () => {
  const query = '*[_type == "about"]';

  const properties = await sanityClient.fetch(query);

  if (!properties.length) {
    return {
      props: {
        properties: [],
      },
    };
  } else {
    return {
      props: {
        properties,
      },
    };
  }
};

export default About;
