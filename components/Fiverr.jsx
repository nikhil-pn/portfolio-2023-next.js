"use client";
import Div from "@/components/Div";
import Link from "next/link";
import Wrapper2 from "./Wrapper2";
import React from "react";
import Achievements from "./Achievements";
import MoreDetails from "./MoreDetails";

const Fiverr = () => {
  return (
    <div
      id="hireme"
      className="w-full -mt-10 py-[50px] md:py-[100px] bg-black  relative overflow-hidden"
    >
      <Wrapper2>
        <Div className="mb-10 relative">
          <div className="flex text-center  justify-center gap-2 md:gap-0 md:flex-col text-[20px] md:text-[45px] 2xl:text-[60px] leading-[20px] md:leading-[40px] 2xl:leading-[60px] font-oswald uppercase mb-10 text-[#f6f6f6]">
            <h2>Hire me</h2>
          </div>
          <div className="text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] text-# text-center max-w-[1000px] mx-auto ">
            {/* <p className="mb-2">
              I'm Nikhil Pn, a Fullstack developer based in Kochi, India. With a
              passion for Technology and Entrepreneurship!
            </p>
            <p className="mb-2">
              In 2017, I established a prominent brand on YouTube called "Ntec
              Phones" which boasts an impressive subscriber base of over 32,000
              and an astounding total of 6 million plus views.Through this
              platform, I have leveraged my expertise and knowledge in
              smartphones to engage with a diverse audience.
            </p> */}
            {/* <p>
              If you're considering hiring me, I invite you to explore my
              profile on{" "}
              <Link href="https://www.fiverr.com/h3liosdesign">
                <span className="font-semibold text-teal-200  cursor-pointer">
                Fiverr.com
                </span>
              </Link>
              . Our page showcases a diverse range of high-quality products and
              services tailored to meet your specific requirements. From
              software development to graphic design.I am more than happy to
              discuss any custom orders or unique projects you may have in mind.
              Let's collaborate and bring your ideas to life!
            </p> */}
            <p>
              In 2019, I ventured into freelancing, exploring new opportunities
              and broadening my horizons. If you're interested in hiring me,
              please visit my{" "}
              <Link href="https://www.fiverr.com/h3liosdesign" target="_blank">
                <span className="font-semibold text-green-300  cursor-pointer">
                  Fiverr.com
                </span>
              </Link>{" "}
              profile, where you'll find a diverse range of high-quality
              services tailored to your needs. Whether it's software development
              or graphic design, I provide comprehensive solutions for your
              satisfaction. Feel free to discuss custom orders or unique
              projects with me. Let's collaborate and bring your ideas to life,
              creating something truly remarkable together.
            </p>
          </div>
        </Div>
        <Link target="_blank" href="https://www.h3lios.in">
          <img
            alt="h3liosdesing fiverr image "
            className="hover:scale-105 duration-200"
            src="/533shots_so.png"
          ></img>
        </Link>
        {/* <MoreDetails></MoreDetails> */}
        <Achievements></Achievements>
      </Wrapper2>
    </div>
  );
};

export default Fiverr;