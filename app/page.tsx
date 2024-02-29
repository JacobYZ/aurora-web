"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}>
      <div className="h-full flex flex-col justify-center px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 ">
        {/* IMAGE CONTAINER */} {/* Need to add lg:flex-row to its parenet */}
        {/* <div className="h-1/2 lg:h-full lg:w-1/2 relative ">
          <Image
            src="/hero.png"
            alt="hero"
            layout="fill"
            objectFit="contain"
          />
        </div> */}
        {/* TEXT CONTAINER */}
        <div className="h-1/2 sm:w-3/5 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-bold">
            Your Business Deserves a Stunning Website
          </h1>
          {/* DESCRIPTION */}
          <p className="md:text-xl">
            Aurora Web delivers custom-crafted websites tailored to your brand
            and goals. Attract new customers and boost your online presence.
          </p>
          {/* BUTTONS */}
          <div className="flex gap-4 w-full">
            <Link href="/showcase">
              <button className="p-4 rounded-lg ring-1 ring-white bg-white text-black">
                View Our Work
              </button>
            </Link>
            <Link href="/contact">
              <button className="p-4 rounded-lg ring-1 ring-white">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
