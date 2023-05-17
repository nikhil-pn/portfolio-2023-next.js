"use client";
import React from "react";
import { useTransform, useScroll } from "framer-motion";
import { dataClient } from "@/utils/data";
import Div from "./Div";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Wrapper2 from "./Wrapper2";

const Testimonials = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 4500], [1000, 0], { clamp: false });
  const y2 = useTransform(scrollY, [0, 4500], [2000, 0], { clamp: false });
  return (
    <div
      className="w-full -mt-16 py-[50px] md:py-[100px] bg-black relative overflow-hidden"
      id="clients"
    >
      <Wrapper2>
        {/* SECTION HEADING START */}
        <Div className="mb-10 relative">
          <div className="flex text-center  justify-center gap-2 md:gap-0 md:flex-col text-[20px] md:text-[45px] 2xl:text-[60px] leading-[20px] md:leading-[40px] 2xl:leading-[60px] font-oswald uppercase mb-10 text-[#f6f6f6]">
            Client Says
          </div>
          <div className="text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] text-#f6f6f6 text-center">
            Our clients from all around the world speak for us! Take a look at
            what they have to say about our work and services. We pride
            ourselves on delivering exceptional results that exceed
            expectations, and our satisfied international clients are a
            testament to our commitment to excellence. See for yourself why
            clients from all over the globe keep coming back - read their
            reviews today!
          </div>
        </Div>
        {/* SECTION HEADING END */}

        {/* CAROUSEL START */}
        <Div className="bg-black w-full md:w-[834px] rounded-[20px] mx-auto relative mb-[50px]">
          <Carousel
            className="clientCarousel"
            autoPlay={true}
            infiniteLoop={true}
            showThumbs={false}
          >
            {/* SLIDE START */}
            {dataClient?.map((item) => (
              <div
                className="text-black flex items-center flex-col px-[25px] md:px-[50px] py-[50px]"
                key={Math.random(1)}
              >
                <div className="mb-[25px]">
                  <img
                    src={item.image}
                    className="w-[80px] h-[80px] max-w-[80px] rounded-full"
                  />
                  <div className="font-bold">{item.name}</div>
                  <div className="text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] text-[#f6f6f6] text-center">
                    {item.country}
                  </div>
                </div>
                <div className="text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px]  text-[#f6f6f6]  text-center">
                  {item.review}
                </div>
              </div>
            ))}

            {/* SLIDE END */}
          </Carousel>
        </Div>
        {/* CAROUSEL END */}
      </Wrapper2>
    </div>
  );
};

export default Testimonials;
