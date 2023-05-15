// "use client"

// import React from "react";
// import Wrapper2 from "./Wrapper2";
// import Link from "next/link";
// import { motion } from "framer-motion";

// const Ntec = () => {
//   return (
//     <Wrapper2>
//       <div>
//         <div className="text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] text-#f6f6f6 text-center max-w-[1000px] mx-auto">
//           If you're interested in shopping on{" "}
//           <Link href="https://fiverr.com/h3liosdesign" target="_blank">
//             <span className="text-green-400 cursor-pointer">Fiverr.com</span>
//           </Link>
//           , be sure to check out our page! We offer a variety of high-quality
//           products and services that are sure to meet your needs.
//         </div>
//         <section className="flex justify-center items-center w-full">
//           <div className=" bg w-full">
//             <div className=" md:w-[500px] w-full bg-black mx-auto hover:scale-105 duration-200">
//               <motion.video loop autoPlay muted playsInline>
//                 <source src="/assets/ntecend.mp4" type="video/mp4" />
//               </motion.video>
//             </div>
//           </div>
//         </section>
//       </div>
//     </Wrapper2>
//   );
// };

// export default Ntec;

"use client";
import Div from "@/components/Div";
import Wrapper from "@/components/Wrapper";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import Wrapper2 from "./Wrapper2";

const Ntec = () => {
  return (
    <div
      id="contact"
      className="w-full py-[50px] -mt-16 md:py-[100px] bg-black  relative overflow-hidden"
    >
      <Wrapper2>
        <Div className=" mt-10 mb-10 relative">
          <div className="flex text-center  justify-center gap-2 md:gap-0 md:flex-col text-[20px] md:text-[45px] 2xl:text-[60px] leading-[20px] md:leading-[40px] 2xl:leading-[60px] font-oswald uppercase mb-10 text-[#f6f6f6]">
            <h2>Part of the journey is the End</h2>
          </div>
          <div className="text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] text-# text-center max-w-[1000px] mx-auto ">
            <p>
              It is with heavy hearts that we announce the closure of our
              YouTube channel & Affiliate services, Ntec Phone, on June 10,
              2020. We are deeply grateful for the overwhelming support and love
              that our community has shown us over the years. It has been an
              incredible journey, and we could not have done it without you.
              Thank you for being a part of the Ntec Phone family, and we hope
              that our content has brought value to your shopping experience.
            </p>
          </div>
        </Div>

        <section className="flex justify-center items-center w-full">
          <div className=" bg w-full">
            <div className=" md:w-[500px] w-full bg-black mx-auto hover:scale-105 duration-200">
              <motion.video loop autoPlay muted playsInline>
                <source src="/ntecend.mp4" type="video/mp4" />
              </motion.video>
            </div>
          </div>
        </section>
      </Wrapper2>
    </div>
  );
};

export default Ntec;
