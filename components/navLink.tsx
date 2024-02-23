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
  console.log(pathName);
  return (
    <Link
      className={`rounded p-1 cursor-pointer ${
        pathName === link.href && "bg-white text-black"
      }`}
      href={link.href}>
      {link.label}
    </Link>
  );
};

export default NavLink;
