"use client";
import React, { useState } from "react";
import { projects, filters } from "../utils/data";
import Div from "./Div";
import { loadGetInitialProps } from "next/dist/shared/lib/utils";
import Wrapper from "./Wrapper";
import Wrapper2 from "./Wrapper2";

const Portfolio = () => {
  const [selectedTag, setSelectedTag] = useState("all");
  const [projectData, setProjectData] = useState(projects);

  const filterHandler = (tag) => {
    setSelectedTag(tag);
    let filteredProjects = [];
    if (tag === "all") {
      filteredProjects = projects;
    } else {
      filteredProjects = projects.filter((p) => p.tags.includes(tag));
    }
    setProjectData(filteredProjects);
  };

  return (
    <div
      id="Projects"
      className="w-full py-[50px] md:py-[100px] bg-black  relative overflow-hidden"
    >
      <Wrapper2>
        {/* SECTION HEADING START */}
        <Div className="mt-10 mb-10 relative">
          <div className="flex text-center  justify-center gap-2 md:gap-0 md:flex-col text-[20px] md:text-[45px] 2xl:text-[60px] leading-[20px] md:leading-[40px] 2xl:leading-[60px] font-oswald uppercase mb-10 text-[#f6f6f6]">
            <h2>projects</h2>
          </div>
          <div className="text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] text-# text-center max-w-[1000px] mx-auto">
            I take great pleasure in developing cutting-edge real-life
            applications across various categories. Feel free to explore my
            portfolio, categorized into frontend, backend, Android apps, and
            blockchain projects. Your valuable feedback on these projects would
            be highly appreciated.
          </div>
        </Div>
        {/* SECTION HEADING END */}

        {/* FILTER TAGS START */}
        <Div className="flex justify-start md:justify-center gap-[10px] mb-[50px] overflow-auto">
          {filters.map((item, index) => (
            <div
              key={index}
              className={`bg-[#252525] rounded-lg py-[10px] px-[17px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] cursor-pointer whitespace-nowrap ${
                selectedTag === item.id ? "bg-[#f6f6f6] text-black" : ""
              }`}
              onClick={() => filterHandler(item.id)}
            >
              {item.name}
            </div>
          ))}
        </Div>
        {/* FILTER TAGS START */}

        {/* PROJECTS GRID START */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {projectData.map((item, index) => {
            return (
              <Div key={index} className="flex flex-col gap-4 cursor-pointer">
                <div className="bg-black rounded-[20px] aspect-video overflow-hidden">
                  <img
                    src={item.image.src}
                    className="transition-transform hover:-translate-y-[25%] hover:duration-1000 ease-linear"
                  />
                </div>
                <div className="text-[20px] 2xl:text-[24px] text-[#CCCCCC] text-center">
                  {item.name.src}
                </div>
              </Div>
            );
          })}
        </div>
        {/* PROJECTS GRID END */}
      </Wrapper2>
    </div>
  );
};

export default Portfolio;
