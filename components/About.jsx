"use client";
import Div from "@/components/Div";
import Wrapper from "@/components/Wrapper";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import Wrapper2 from "./Wrapper2";
import CallToAction from "./CallToAction";
import { AiOutlineCloudDownload } from "react-icons/ai";
// import Resume from "../../download/file-sample_150kB.pdf";

const About = () => {
  return (
    <div
      id="About"
      className="w-full py-[50px] md:py-[100px] bg-black  relative overflow-hidden"
    >
      <Wrapper2>
        <Div className=" mt-10 mb-10 relative ">
          <div className="flex text-center  justify-center gap-2 md:gap-0 md:flex-col text-[20px] md:text-[45px] 2xl:text-[60px] leading-[20px] md:leading-[40px] 2xl:leading-[60px] font-oswald uppercase mb-10 text-[#f6f6f6]">
            <h1>"The VOYAGE of Nikhil PN"</h1>
          </div>
          <div className="text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] text-# text-center max-w-[1000px] mx-auto ">
            <p className="mb-2">
              I'm Nikhil Pn, a Fullstack developer based in Kochi, India. With a
              passion for Technology and Entrepreneurship! In 2017, I
              established a prominent brand on YouTube called "Ntec Phones"
              which boasts an impressive subscriber base of over 32,000 and an
              astounding total of 6 million plus views.Through this platform, I
              have leveraged my expertise and knowledge in smartphones to engage
              with a diverse audience.
            </p>
            <p>
              I have guided individuals in selecting top-notch smartphones and
              established partnerships with renowned sponsors like Xiaomi,
              Alibaba, and Gearbest.com to offer these products through my
              platform. Additionally, I have ventured into affiliate marketing
              on Flipkart and Amazon to enhance revenue generation other than
              Youtube ad revenue.
            </p>
          </div>
        </Div>
        <Link target="_blank" href="https://www.linkedin.com/in/nikhilpn">
          <img
            alt="linkden profile image"
            className="hover:scale-105 duration-200"
            src="/826shots_so.png"
          ></img>
        </Link>
        {/* <button className="bg-[#f6f6f6] mt-4 rounded-none h-[48px] w-full   justify-center text-[16px] text-black  transition-transform active:scale-[0.95]">
          Download CV
        </button> */}

        <CallToAction
          text="Download CV"
          icon={<AiOutlineCloudDownload />}
          action={() => window.open("../download/file-sample_150kB.pdf")}
        ></CallToAction>
      </Wrapper2>
    </div>
  );
};

export default About;
