import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface LinkProps {
  href: string;
  label: string;
}

interface ResponsiveMenuProps {
  links: LinkProps[];
}

const ResponsiveMenu: React.FC<ResponsiveMenuProps> = ({ links }) => {
  const [open, setOpen] = useState(false);

  const topVariants = {
    closed: { rotate: 0 },
    open: { rotate: 45, backgroundColor: "rgb(0,0,0)" },
  };

  const centerVariants = {
    closed: { opacity: 1 },
    open: { opacity: 0 },
  };

  const bottomVariants = {
    closed: { rotate: 0 },
    open: { rotate: -45, backgroundColor: "rgb(0,0,0)" },
  };

  const listVariants = {
    closed: { x: "100vw" },
    open: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    closed: { x: -10, opacity: 0 },
    open: { x: 0, opacity: 1 },
  };

  return (
    <div className="md:hidden">
      <button
        aria-label="Menu"
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
      {open && (
        <motion.div
          variants={listVariants}
          initial="closed"
          animate="open"
          className="absolute top-0 left-0 w-screen h-screen bg-stone-300 text-black flex flex-col items-center justify-center gap-8 text-4xl z-40">
          {links.map((link: LinkProps) => (
            <motion.div
              variants={listItemVariants}
              key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default ResponsiveMenu;
