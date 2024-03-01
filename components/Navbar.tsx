"use client";
import Link from "next/link";
import Image from "next/image";
import NavLink from "./NavLink";
import ResponsiveMenu from "./ResponsiveMenu";
import { NAV_LINKS, SOCIAL_MEDIA_LINKS } from "@/app/constants";

const Navbar = () => {
  return (
    <div className="relative h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
      {/* LINKS */}
      <div className="hidden md:flex gap-4 w-1/3">
        {NAV_LINKS.map((link) => (
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
        {SOCIAL_MEDIA_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.src}>
            <Image
              src={link.src}
              alt={link.alt}
              width={24}
              height={24}
            />
          </Link>
        ))}
      </div>
      <ResponsiveMenu links={NAV_LINKS} />
    </div>
  );
};

export default Navbar;
