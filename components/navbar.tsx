"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import NavLink from "./navLink";
import { motion } from "framer-motion";
const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/showcase", label: "Showcase" },
  { href: "/contact", label: "Contact" },
];
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const topVariants = {
    closed: { rotate: 45, backgroundColor: "rgb(0,0,0)" },
    open: { rotate: 0 },
  };
  const centerVariants = {
    closed: { opacity: 1 },
    open: { opacity: 0 },
  };
  const bottomVariants = {
    closed: { rotate: -45, backgroundColor: "rgb(0,0,0)" },
    open: { rotate: 0 },
  };
  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
      {/* LINKS */}
      <div className="hidden md:flex gap-4 w-1/3">
        {links.map((link) => (
          <NavLink
            link={link}
            key={link.href}
          />
        ))}
      </div>
      {/* LOGO */}
      <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
        <Link
          href="/"
          className="text-sm bg-white rounded-md p-1 font-semibold flex items-center justify-center">
          <span className="text-black mx-[0.2rem]">Aurora</span>
          <span className="w-11 h-8 rounded bg-black items-center justify-center flex">
            Web
          </span>
        </Link>
      </div>
      {/* SOCIAL MEDIA */}
      <div className="hidden md:flex gap-4 w-1/3">
        <Link href="/">
          <Image
            src="/github.png"
            alt="github"
            width={24}
            height={24}
          />
        </Link>
        <Link href="/">
          <Image
            src="/linkedin.png"
            alt="linkedin"
            width={24}
            height={24}
          />
        </Link>
        <Link href="/">
          <Image
            src="/twitter.png"
            alt="twitter"
            width={24}
            height={24}
          />
        </Link>
        <Link href="/">
          <Image
            src="/facebook.png"
            alt="facebook"
            width={24}
            height={24}
          />
        </Link>
        <Link href="/">
          <Image
            src="/instagram.png"
            alt="instagram"
            width={24}
            height={24}
          />
        </Link>
        <Link href="/">
          <Image
            src="/pinterest.png"
            alt="pinterest"
            width={24}
            height={24}
          />
        </Link>
      </div>
      {/* RESPONSIVE MENU */}
      <div className="md:hidden">
        {/* MENU BUTTON */}
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen((prev) => !prev)}>
          <motion.div
            variants={topVariants}
            animate={open ? "open" : "closed"}
            className="w-10 h-1 bg-white rounded origin-left"></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "open" : "closed"}
            className="w-10 h-1 bg-white rounded"></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? "open" : "closed"}
            className="w-10 h-1 bg-white rounded origin-left"></motion.div>
        </button>
        {/* MENU LIST */}
        {open && (
          <div className="absolute top-0 left-0 w-screen h-screen bg-white text-black flex flex-col items-center justify-center gap-8 text-4xl">
            {links.map((link) => (
              <Link
                href={link.href}
                key={link.href}
                className="">
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
