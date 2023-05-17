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
              desc="
              I thrive on crafting visually stunning and premium frontend websites, leveraging Next.js, React.js, Tailwind CSS, JavaScript, and TypeScript to ensure efficient and scalable development for an exceptional user experience."
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
              desc="When constructing a robust backend, I prioritize security, scalability, and handling edge cases, employing Node.js, Express, Python, and databases such as SQLite and MongoDB to store data efficiently."
              data={["Node", "Express JS", "SQL", "Mongo DB", "Python"]}
            />
            <Service
              num="3"
              title="Android"
              desc="I thoroughly enjoy developing native Android apps using the React Native library, enabling swift development, while leveraging Firestore and Redux for data storage and Firebase for authentication purposes."
              data={["React Native", "Android Studio", "Firebase", "SQLite"]}
            />
            <Service
              num="4"
              title="Blockchain"
              desc="As a firm believer in the transformative potential of blockchain technology, I am dedicated to continually advancing my skills in Solidity, Hardhat, DApps, Etc development to contribute to the future revolution of blockchain."
              data={["Solidity", "HardHat", "Dapps"]}
            />
          </div>
        </div>
      </Wrapper2>
    </div>
  );
};

export default MoreDetails;
