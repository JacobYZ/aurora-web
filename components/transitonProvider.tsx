"use client";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./navbar";
import { usePathname } from "next/navigation";
interface TransitonProviderProps {
  children: React.ReactNode;
}
const TransitonProvider: React.FC<TransitonProviderProps> = ({ children }) => {
  const pathName = usePathname();
  return (
    <AnimatePresence mode="wait">
      <div
        key={pathName}
        className="w-screen h-screen bg-gradient-to-b from-stone-800 to-stone-500 text-white">
        <motion.div
          className="h-screen w-screen fixed bg-white rouned-b-[100px] z-40"
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        <motion.div
          className="fixed m-auto top-0 bottom-0 left-0 right-0 w-fit h-fit text-8xl cursor-default text-black font-bold z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}>
          {pathName}
        </motion.div>
        <motion.div
          className="h-screen w-screen fixed bg-white rouned-t-[100px] bottom-0 z-40"
          initial={{ height: "140vh" }}
          animate={{ height: "0vh", transition: { delay: 0.5 } }}
        />
        <div className="h-24">
          <Navbar />
        </div>
        <div className="h-[calc(100vh - 6rem)]"></div>
        {children}
      </div>
    </AnimatePresence>
  );
};

export default TransitonProvider;
