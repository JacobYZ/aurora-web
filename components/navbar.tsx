import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* LOGO */}
      <div>
        <Link
          href="/"
          className="text-sm bg-white rounded-md p-1 font-semibold flex items-center justify-center">
          <span className="text-black mx-[0.2rem]">Aurora</span>
          <span className="w-11 h-8 rounded bg-black items-center justify-center flex">
            Web
          </span>
        </Link>
      </div>
      {/* RESPONSIVE MENU */}
      <div>2</div>
    </div>
  );
};

export default Navbar;
