"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

import Wrapper from "./Wrapper";
// import man from "../public/assets/man.png";
// import externalLinkIcon from "../assets/external-link-icon.png";
// import gmailIcon from "../assets/email-icon.png";
import { scrollTo } from "../utils/helper";
import { useFollowPointer } from "./useFollowPointer";
import Space from "./Space";
import TypewriterComp from "./TypeWriterComp";

const HeroBanner = () => {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);
  return (
    <div
      id="hero"
      className="w-full h-[100vh] relative bg-[#111111] overflow-hidden"
    >
      {/* BACKGROUND ELEMENTS FOR DESKTOP START */}
      <motion.span
        ref={ref}
        animate={{ x, y }}
        className="hidden md:block sec-1-bg-gradient-1-desktop md:w-[1120px] 2xl:w-[1420px] md:h-[1119px] 2xl:h-[1419px] absolute md:left-[1000px] 2xl:left-[1309px] -top-[709px]"
      />
      <span className="hidden md:block sec-1-bg-gradient-2-desktop md:w-[1120px] 2xl:w-[1420px] md:h-[1119px] 2xl:h-[1419px] absolute left-[105px] top-[672px] md:top-[500px] 2xl:top-[672px]" />
      {/* BACKGROUND ELEMENTS FOR DESKTOP END */}

      {/* BACKGROUND ELEMENTS FOR DESKTOP START */}
      <span className="md:hidden sec-1-bg-gradient-1-mobile absolute w-[212px] h-[211px] left-[285px] -top-[25px]" />
      <span className="md:hidden sec-1-bg-gradient-2-mobile absolute w-[636px] h-[635px] -left-[334px] top-[672px]" />
      {/* BACKGROUND ELEMENTS FOR DESKTOP END */}

      <Wrapper>
        {/* NAVBAR START */}
        <motion.div
          className=" md:flex items-center justify-between mt-[40px] 2xl:mt-[63px] relative"
          initial={{ y: -200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          <div className="flex text-[8px] absolute items-center gap-[6px] right-8">
            <Space></Space>
          </div>
        </motion.div>
        {/* NAVBAR END */}

        {/* BIG HEADING START */}
        <div className="flex flex-col justify-center items-center h-screen">
          <motion.div
            className="flex justify-center text-center mt-14 mb-10 relative"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-[50px] md:-mt-16 md:text-[120px] 2xl:text-[189px] leading-[50px] md:leading-[125px]  2xl:leading-[192px] font-oswald uppercase">
              {/* I Am A FullStacks
              <br className="invisible md:visible" />
              Developer */}
              <TypewriterComp></TypewriterComp>

            </h1>
          </motion.div>
          {/* BIG HEADING END */}

          {/* INTRO START */}
          <motion.div
            className="block sm:hidden  flex-col mb-10 text-center md:text-left text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] relative"
            initial={{ y: 300, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            <div className="font-light mb-4">
              👋 Hi, I Am <span className="font-semibold">John Doe</span>
            </div>
            <div className="max-w-[510px]">
              I create and maintain modern websites and applications. I solve
              all your business problems. Lorem Ipsum is simply dummy text of
              the printing and typesetting industry.
            </div>
          </motion.div>
        </div>
      </Wrapper>
    </div>
  );
};

export default HeroBanner;
