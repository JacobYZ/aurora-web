"use client";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./Navbar";
import { usePathname } from "next/navigation";
interface TransitonProviderProps {
  children: React.ReactNode;
}
const TransitonProvider: React.FC<TransitonProviderProps> = ({ children }) => {
  const pathName = usePathname();
  const sectionTitle = pathName.substring(1).toUpperCase();

  // const [isMounted, setIsMounted] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsMounted(false);
  //   }, 800); // duration of the animation

  //   return () => clearTimeout(timer); // clean up on unmount
  // }, []);
  return (
    <AnimatePresence mode="wait">
      <div
        key={pathName}
        className="w-screen h-screen bg-gradient-to-b from-black to-stone-800 text-white">
        <Image
          src="/aurora.jpg"
          alt="background"
          layout="fill"
          quality={100}
        />
        <motion.div
          className="h-screen w-screen fixed bg-stone-200 rouned-b-[100px] z-20"
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        <motion.div
          className="fixed m-auto top-0 bottom-0 left-0 right-0 w-fit h-fit text-5xl lg:text-8xl cursor-default text-black font-bold z-30 text-center"
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 0, y: "-100vh" }}
          transition={{
            opacity: { duration: 0.8, ease: "easeOut" },
            y: { delay: 0.8, duration: 0 },
          }}>
          {sectionTitle === "" ? "AURORA WEB" : sectionTitle}
        </motion.div>
        <motion.div
          className="h-screen w-screen fixed bg-stone-200 rouned-t-[100px] bottom-0 z-10"
          initial={{ height: "140vh" }}
          animate={{ height: "0vh", transition: { delay: 0.5 } }}
        />
        <div className="h-24">
          <Navbar />
        </div>
        <div className="h-[calc(100vh-6rem)]">{children}</div>
      </div>
    </AnimatePresence>
  );
};

export default TransitonProvider;
