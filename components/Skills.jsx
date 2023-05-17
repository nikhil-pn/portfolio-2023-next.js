"use client";

import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";

import Wrapper from "./Wrapper";
import SkillIcon from "./SkillIcon";
import Service from "./Service";
import Portfolio from "./Portfolio";
import Achievements from "./Achievements";
import Div from "./Div";

// IMAGES
import sk1 from "../public/assets/nextjs-icon.png";
import sk2 from "../public/assets/css_tailwind_logo_icon_214735.png";
import sk3 from "../public/assets/react.png";
import sk7 from "../public/assets/redux.png";
import sk4 from "../public/assets/node.png";
import sk5 from "../public/assets/ex.png";
import sk6 from "../public/assets/sql.png";
import sk8 from "../public/assets/mongo.png";
import sk9 from "../public/assets/html.png";
import sk10 from "../public/assets/css1.png";
import sk12 from "../public/assets/js2.png";
import sk13 from "../public/assets/typescript.png";
import sk14 from "../public/assets/python.png";
import sk15 from "../public/assets/git.png";
import sk16 from "../public/assets/android.png";
import sk11 from "../public/assets/solidity.png";

// import pattern from "../public/assets/heading-pattern.png";
// import pe1 from "../public/assets/sec-3-p-e-1.png";
// import pe2 from "../public/assets/sec-3-p-e-2.png";
// import pe3 from "../public/assets/sec-3-p-e-3.png";
import Wrapper2 from "./Wrapper2";
import H3lios from "./H3lios";
import MoreDetails from "./MoreDetails";

const Skills = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1500], [1000, 0], { clamp: false });
  const y2 = useTransform(scrollY, [0, 2200], [1500, 0], { clamp: false });
  const y3 = useTransform(scrollY, [0, 2700], [2000, 0], { clamp: false });
  return (
    <div id="Skills" className="w-full py-[50px] md:py-[100px] bg-black  relative overflow-hidden">
      <Wrapper2>
        {/* SKILL ICONS START */}
        <Div className=" mt-10 mb-10 relative">
          <div className="flex text-center  justify-center gap-2 md:gap-0 md:flex-col text-[20px] md:text-[45px] 2xl:text-[60px] leading-[20px] md:leading-[40px] 2xl:leading-[60px] font-oswald uppercase mb-10 text-[#f6f6f6]">
            <h2>Teck Stacks</h2>
          </div>
          <div className="text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] text-# text-center max-w-[1000px] mx-auto">
            <p>
              I am consistently engaged in a dynamic exploration of cutting-edge
              technologies, ensuring that I stay updated and abreast of the
              latest trends in the ever-evolving tech landscape. My primary
              focus lies in the MERN stack, with particular fondness for Next.js
              and Tailwind CSS. Below are the tech tools and programming
              languages that I am proficient in and actively follow:
            </p>
          </div>
        </Div>
        <Div className="grid grid-cols-4 gap-3 md:grid-cols-6 lg:grid-cols-8 relative mb-10">
          <SkillIcon path={sk1} />
          <SkillIcon path={sk2} />
          <SkillIcon path={sk3} />
          <SkillIcon path={sk7} />
          <SkillIcon path={sk4} />
          <SkillIcon path={sk5} />
          <SkillIcon path={sk6} />
          <SkillIcon path={sk8} />
          <SkillIcon path={sk9} />
          <SkillIcon path={sk10} />
          <SkillIcon path={sk12} />
          <SkillIcon path={sk13} />
          <SkillIcon path={sk14} />
          <SkillIcon path={sk15} />
          <SkillIcon path={sk16} />
          <SkillIcon path={sk11} />
        </Div>
        {/* SKILL ICONS END */}
      </Wrapper2>
      <MoreDetails></MoreDetails>
      <Portfolio />
      <H3lios></H3lios>
    </div>
  );
};

export default Skills;
