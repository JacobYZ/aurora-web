"use client";
import Brain from "@/components/Brain";
import SignatureSVG from "@/components/SignatureSVG";
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import { useMemo, useRef } from "react";
import { SKILLS, EXPERIENCES } from "../constants";
import ScrollSVG from "@/components/ScrollSVG";
import Experience from "@/components/Experience";

const AboutPage = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: containerRef });
  const skillRef = useRef(null);
  // const isSkillRefInView = useInView(skillRef, {once:true});
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef(null);
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });
  const experiences = useMemo(
    () =>
      EXPERIENCES.map((experience, index) => (
        <Experience
          key={index}
          experience={experience}
        />
      )),
    []
  );
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}>
      {/* CONTAINER */}
      <div
        className="h-full overflow-scroll lg:flex"
        ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-3/4 lg:pr-0 xl:w-2/3">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            {/* BIOGRAPHY IMAGE */}
            <Image
              src="/Yu.png"
              alt=""
              width={112}
              height={112}
              className="w-28 h-28 rounded-full object-cover"
            />
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            {/* BIOGRAPHY DESC */}
            <p className="text-lg">
              I am a results-driven IT professional with a diverse background
              spanning software development, project management, and academia.
              My experience includes full-stack development, ERP system
              implementation, and collaborative work with international
              engineering teams. With a strong foundation in programming and a
              master&apos;s degree focused on machine learning, I am passionate
              about continuous learning and applying innovative solutions to
              real-world challenges.
            </p>
            {/* BIOGRAPHY QUOTE */}
            <span className="italic">
              &quot;The only way to do great work is to love what you do.&quot;
            </span>
            {/* BIOGRAPHY SIGN SVG*/}
            {/* <div className="self-end">
              <SignatureSVG />
            </div> */}
            <ScrollSVG />
          </div>
          {/* SKILLS CONTAINER */}
          <div
            className="flex flex-col gap-12 justify-center"
            ref={skillRef}>
            {/* SKILL TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : { x: "-300px" }}
              transition={{ delay: 0.2 }}
              className="text-2xl font-bold">
              SKILLS
            </motion.h1>
            {/* SKILL LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : { x: "-300px" }}
              className="flex gap-4 flex-wrap">
              {SKILLS.map((skill) => (
                <div
                  key={skill}
                  className="rounded p-2 text-sm cursor-pointer bg-white text-black hover:bg-black hover:text-white">
                  {skill}
                </div>
              ))}
            </motion.div>
            <ScrollSVG />
          </div>
          {/* EXPERIENCE CONTAINER */}
          <div
            className="flex flex-col gap-12 justify-center pb-48"
            ref={experienceRef}>
            {/* EXPERIENCE TITLE */}
            <motion.h1
              className="text-2xl font-bold"
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: 0 } : { x: "-300px" }}
              transition={{ delay: 0.2 }}>
              EXPERIENCE
            </motion.h1>
            {/* EXPERIENCE LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: 0 } : { x: "-300px" }}>
              {experiences}
            </motion.div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className="hidden lg:block w-1/4 sticky top-0 z-30 xl:w-1/3">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
