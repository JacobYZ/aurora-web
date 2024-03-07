"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}>
      <div className="h-full flex flex-col justify-center lg:flex-row md:gap-4 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 ">
        {/* IMAGE CONTAINER */} 
        <div className="h-1/2 lg:h-full lg:w-1/2 relative ">
          <Image
            src="/hero.svg"
            alt="hero"
            layout="fill"
            objectFit="contain"
          />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-2 md:gap-8 items-center justify-center">
          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-bold">
            Your Local Launceston Web Design Partner
          </h1>
          {/* DESCRIPTION */}
          <p className="md:text-xl">
            Proudly serving Launceston and the surrounding Tasmanian
            communities, Aurora Web understands the unique needs of local
            businesses. We&apos;re passionate about helping Launceston
            businesses thrive online. Contact us for a free consultation and see
            how we can elevate your brand.
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
