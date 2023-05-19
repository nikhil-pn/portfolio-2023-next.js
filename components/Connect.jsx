"use client";
import React from "react";
import Wrapper2 from "./Wrapper2";
import Div from "./Div";
import Link from "next/link";
import Image from "next/image";

const Connect = () => {
  return (
    <div className="w-full py-[50px] md:py-[100px] bg-black  relative overflow-hidden">
      <Wrapper2>
        <Div className=" mt-5 relative mb-10  ">
          <div className="flex text-[#f6f6f6] text-center justify-center gap-2 md:gap-0 md:flex-col text-[20px] md:text-[45px] 2xl:text-[60px] leading-[20px] md:leading-[40px] 2xl:leading-[60px] font-oswald uppercase mb-2 ">
            Connect With Me
          </div>
          <div className=" text-[#f6f6f6] text-[16px] 2xl:text-[20px]  leading-[24px] 2xl:leading-[32px] text-center max-w-[1000px] mx-auto">
            We would love for you to connect with us on our social media handles
            and stay up-to-date with the latest news and updates from H3lios.in.
            Follow us on
            <Link href="https://instagram.com/h3liosdesign" target="_blank">
              <span className="text-blue-500 cursor-pointer"> Instagram</span>
            </Link>{" "}
            to join our community and be a part of the conversation.
          </div>
        </Div>

        <Link href="https://instagram.com/h3liosdesign" target="_blank">
          <Image
            alt="connect with nikhil pn social media instagram"
            width="1200"
            height="800"
            className="hover:scale-105 duration-200"
            src="/713shots_so.webp"
          ></Image>
        </Link>
      </Wrapper2>
    </div>
  );
};
export default Connect;
