import React from "react";
import Wrapper2 from "./Wrapper2";
import Service from "./Service";

const MoreDetails = () => {
  return (
    <div>
      <Wrapper2>
        <div className="flex items-end justify-between flex-wrap-reverse py-[50px] md:py-[100px] relative mt-10">
          <div className=" flex flex-col gap-6 md:gap-10 ">
            <Service
              num="1"
              title="Front End "
              desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it"
              data={[
                "React.js",
                "Javascript",
                "Tailwind",
                "Typescript",
                "Next.js",
              ]}
            />
            <Service
              num="2"
              title="Back End"
              desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it"
              data={["Node", "Express JS", "SQL", "Mongo DB", "Python"]}
            />
            <Service
              num="3"
              title="Android"
              desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it"
              data={["React Native", "Android Studio", "Firebase", "SQLite"]}
            />
            <Service
              num="4"
              title="Blockchain"
              desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it"
              data={["Solidity", "HardHat"]}
            />
          </div>
        </div>
      </Wrapper2>
    </div>
  );
};

export default MoreDetails;
