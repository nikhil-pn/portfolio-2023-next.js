"use client";
import Div from "@/components/Div";
import Link from "next/link";
import Wrapper2 from "./Wrapper2";
import React from "react";

const H3lios = () => {
  return (
    <div
      id="H3lios"
      className="w-full py-[50px] md:py-[100px] bg-black  relative overflow-hidden"
    >
      <Wrapper2>
        <Div className=" mt-10  relative mb-10">
          <div className="flex text-center  justify-center gap-2 md:gap-0 md:flex-col text-[20px] md:text-[45px] 2xl:text-[60px] leading-[20px] md:leading-[40px] 2xl:leading-[60px] font-oswald uppercase mb-10 text-[#f6f6f6]">
            <h2>check out h3lios.in</h2>
          </div>
          <div className="text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] text-# text-center max-w-[1000px] mx-auto ">
            <p className="mb-4">
              <Link href="https://www.h3lios.in" target="_blank">
                <span className="font-semibold text-teal-200  cursor-pointer">
                  H3lios.in
                </span>
              </Link>{" "}
              is a dynamic e-commerce website that I created, offering a wide
              range of products, including full-stack apps and graphic designs.
              With a strong reputation for excellence, I have had the privilege
              of working with over 100 international clients, all of whom have
              provided exceptional 5-star ratings.
            </p>
          </div>
        </Div>
        <Link target="_blank" href="https://www.h3lios.in">
          <img
            alt="h3lios.in image "
            className="hover:scale-105 duration-200"
            src="/513shots_so.png"
          ></img>
        </Link>
      </Wrapper2>
    </div>
  );
};

export default H3lios;
