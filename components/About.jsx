"use client";
import Div from "@/components/Div";
import Wrapper from "@/components/Wrapper";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import Wrapper2 from "./Wrapper2";

//bg-[#F2F2F2]

const About = () => {
  return (
    <div
      id="About"
      className="w-full py-[50px] md:py-[100px] bg-black  relative overflow-hidden"
    >
      <Wrapper2>
        {/* <Div className="mb-10 relative">
          <div className="flex text-center justify-center gap-2 md:gap-0 md:flex-col text-[40px] md:text-[90px] 2xl:text-[120px] leading-[40px] md:leading-[95px] 2xl:leading-[123px] font-oswald uppercase mb-2 text-[#111111]">
            Behind the Brand
          </div>

          <div className="text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] text-black text-center max-w-[1000px] mx-auto">
            If you're interested in shopping on{" "}
            <Link href="https://fiverr.com/h3liosdesign" target="_blank">
              <span className="text-green-400 cursor-pointer">Fiverr.com</span>
            </Link>
            , be sure to check out our page! We offer a variety of high-quality
            products and services that are sure to meet your needs.
          </div>
        </Div> */}
        {/* SECTION HEADING END */}

        {/* <Link target="_blank" href="https://www.fiverr.com/h3liosdesign">
          <img
            className="hover:scale-105 duration-200"
            src="/assets/533shots_so.png"
          ></img>
         
        </Link>
        <Div className=" mt-10 relative mb-10   ">
          <div className="flex text-center  justify-center gap-2 md:gap-0 md:flex-col text-[20px] md:text-[45px] 2xl:text-[60px] leading-[20px] md:leading-[40px] 2xl:leading-[60px] font-oswald uppercase mb-2 text-[#111111]">
            What's Next
          </div>
          <div className="text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] text-black text-center max-w-[1000px] mx-auto">
            H3lios.in is gearing up to enter the exciting world of blockchain
            technology later this year. We are committed to leveraging this
            cutting-edge technology. Stay tuned for more updates as we continue
            to make progress towards our launch!
          </div>
        </Div>
        <img
          className="hover:scale-105 duration-200"
          src="/assets/511shots_so.png"
        ></img>

        <Div className=" mt-10 relative mb-10 ">
          <div className="flex text-center justify-center gap-2 md:gap-0 md:flex-col text-[20px] md:text-[45px] 2xl:text-[60px] leading-[20px] md:leading-[40px] 2xl:leading-[60px] font-oswald uppercase mb-2 text-[#111111]">
            Connect With Us
          </div>
          <div className="text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] text-black text-center max-w-[1000px] mx-auto">
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
          <img
            className="hover:scale-105 duration-200"
            src="/assets/713shots_so.png"
          ></img>
        </Link> */}

        <Div className=" mt-10 mb-10 relative">
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
        <button className="bg-[#f6f6f6] mt-4 rounded-none h-[48px] w-full   justify-center text-[16px] text-black  transition-transform active:scale-[0.95]">
          Download CV
        </button>
        {/* <div className="text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] text-#f6f6f6 text-center max-w-[1000px] mx-auto">
            If you're interested in shopping on{" "}
            <Link href="https://fiverr.com/h3liosdesign" target="_blank">
              <span className="text-green-400 cursor-pointer">Fiverr.com</span>
            </Link>
            , be sure to check out our page! We offer a variety of high-quality
            products and services that are sure to meet your needs.
          </div> */}
        {/* <section className="flex justify-center items-center w-full">
          <div className=" bg w-full">
            <div className=" md:w-[500px] w-full bg-black mx-auto hover:scale-105 duration-200">
              <motion.video loop autoPlay muted playsInline>
                <source src="/assets/ntecend.mp4" type="video/mp4" />
              </motion.video>
            </div>
          </div>
        </section> */}
      </Wrapper2>
    </div>
  );
};

export default About;
