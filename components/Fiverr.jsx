"use client";
import Div from "@/components/Div";
import Link from "next/link";
import Wrapper2 from "./Wrapper2";
import React from "react";
import Achievements from "./Achievements";
import Image from "next/image";

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
            <p>
              In 2019&#44; I ventured into freelancing&#44; exploring new
              opportunities and broadening my horizons. If you&#39;re interested in
              hiring me&#44; please visit my{" "}
              <Link href="https://www.fiverr.com/h3liosdesign" target="_blank">
                <span className="font-semibold text-green-300  cursor-pointer">
                  Fiverr.com
                </span>
              </Link>{" "}
              profile&#44; where you&#44;ll find a diverse range of high-quality
              services tailored to your needs. Whether it&#39;s software
              development or graphic design, I provide comprehensive solutions
              for your satisfaction. Feel free to discuss custom orders or
              unique projects with me. Let&#39;s collaborate and bring your
              ideas to life&#44; creating something truly remarkable together.
            </p>
          </div>
        </Div>
        <Link target="_blank" href="https://www.h3lios.in">
          <Image
            width="1200"
            height="800"
            alt="h3liosdesign fiverr image "
            className="hover:scale-105 duration-200"
            src="/533shots_so.webp"
          ></Image>
        </Link>
        <Achievements></Achievements>
      </Wrapper2>
    </div>
  );
};

export default Fiverr;
