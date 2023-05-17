"use client";
import React from "react";
import { FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import Wrapper2 from "./Wrapper2";
import { scrollTo } from "@/utils/helper";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-14 pb-3">
      <Wrapper2 className="flex justify-between flex-col md:flex-row gap-[50px] md:gap-0">
        {/* LEFT START */}
        <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] flex-col md:flex-row">
          {/* NORMAL MENU START */}
          <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] shrink-0">
            {/* MENU START */}
            <div className="flex flex-col gap-2">
              <div className="font-oswald font-medium uppercase text-sm">
                Nikhil Pn
              </div>
              <div
                className="text-xs text-white/[0.5] hover:text-white cursor-pointer"
                onClick={() => {
                  scrollTo("About");
                }}
              >
                About
              </div>

              <div
                className="text-xs text-white/[0.5] hover:text-white cursor-pointer"
                onClick={() => {
                  scrollTo("Skills");
                }}
              >
                Skills
              </div>

              <div
                className="text-xs text-white/[0.5] hover:text-white cursor-pointer"
                onClick={() => {
                  scrollTo("Projects");
                }}
              >
                Projects
              </div>

              <div
                className="text-xs text-white/[0.5] hover:text-white cursor-pointer"
                onClick={() => {
                  scrollTo("H3lios");
                }}
              >
                H3lios
              </div>
            </div>
            {/* MENU END */}
          </div>
          {/* NORMAL MENU END */}
        </div>
        {/* LEFT END */}

        {/* RIGHT START */}
        <div className="flex gap-4 justify-center md:justify-start">
          <div
            className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer"
            onClick={() => {
              window.open("https://instagram.com/h3liosdesign", "_blank");
            }}
          >
            <FaInstagram size={20} />
          </div>

          <div
            className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer"
            onClick={() => {
              window.open("https://youtube.com/ntecphones", "_blank");
            }}
          >
            <FaYoutube size={20} />
          </div>

          <div
            className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer"
            onClick={() => {
              window.open("https://twitter.com/NikhilEth", "_blank");
            }}
          >
            <FaTwitter size={20} />
          </div>
        </div>
        {/* RIGHT END */}
      </Wrapper2>
      <Wrapper2 className="flex justify-between mt-10 flex-col md:flex-row gap-[10px] md:gap-0">
        {/* LEFT START */}
        <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer text-center md:text-left">
          © 2023 Nikihilpn.com, Inc. All Rights Reserved
        </div>
        {/* LEFT END */}

        {/* RIGHT START */}
        <div className="flex gap-2 md:gap-5 text-center md:text-left flex-wrap justify-center">
          <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
            Guides
          </div>
          <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
            Terms of Sale
          </div>
          <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
            Terms of Use
          </div>
          <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
            Privacy Policy
          </div>
        </div>
        {/* RIGHT END */}
      </Wrapper2>
    </footer>
  );
};

export default Footer;
