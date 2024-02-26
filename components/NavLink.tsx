"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
interface LinkProps {
  href: string;
  label: string;
}

interface NavLinkProps {
  link: LinkProps;
}
const NavLink: React.FC<NavLinkProps> = ({ link }) => {
  const pathName = usePathname();
  return (
    <Link
      className={`rounded p-[0.375rem] cursor-pointer ${
        pathName === link.href && "bg-white text-black"
      }`}
      href={link.href}>
      {link.label}
    </Link>
  );
};

export default NavLink;
