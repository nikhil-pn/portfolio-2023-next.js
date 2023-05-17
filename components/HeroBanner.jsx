"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Wrapper from "./Wrapper";
import { useFollowPointer } from "./useFollowPointer";
import Space from "./Space";

const HeroBanner = () => {
  const [showCatMenu, setShowCatMenu] = useState(false);
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);

  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
        setShow("-translate-y-[180px]");
      } else {
        setShow("");
      }
    } else {
      setShow("translate-y-0");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);
  return (
    <div
      id="hero"
      className="w-full h-[100vh] relative bg-[#f6f6f6]    overflow-hidden"
    >
      {/* BACKGROUND ELEMENTS FOR DESKTOP START */}
      <motion.span
        ref={ref}
        animate={{ x, y }}
        className="hidden md:block  md:w-[1120px] 2xl:w-[1420px] md:h-[1119px] 2xl:h-[1419px] absolute md:left-[1000px] 2xl:left-[1309px] -top-[709px]"
      />

      <Wrapper>
        {/* NAVBAR START */}
        <motion.div
          className=" md:flex items-center justify-between mt-[40px] 2xl:mt-[63px] relative"
          initial={{ y: -200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }} 
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          <div
            className={`text-[8px]  fixed z-50 items-center gap-[6px]   right-8 ${show} `}
          >
            <Space
              showCatMenu={showCatMenu}
              setShowCatMenu={setShowCatMenu}
            ></Space>
          </div>
        </motion.div>

        {/* BIG HEADING START */}
        <div className="flex flex-col justify-center items-center h-screen">
          <motion.div
            className="flex justify-center text-center mt-14 mb-10 relative"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-[50px] text-black/90 md:-mt-16 md:text-[120px] 2xl:text-[189px] leading-[50px] md:leading-[125px]  2xl:leading-[192px] font-oswald uppercase">
              I Am A FullStack
              <br className="invisible md:visible" />
              Developer
            </h1>
          </motion.div>
          {/* BIG HEADING END */}

          {/* INTRO START */}
          <motion.div
            className="block sm:hidden text-black/90  flex-col mb-10 text-center md:text-left text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] relative"
            initial={{ y: 300, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            <div className="max-w-[510px]">
              “If something is important enough, even if the odds are stacked
              against you, you should still do it.” -{" "}
              <span className="font-semibold">Elon Musk</span>
            </div>
          </motion.div>
        </div>
      </Wrapper>
    </div>
  );
};

export default HeroBanner;
