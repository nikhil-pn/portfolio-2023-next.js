import React from "react";

//importing typewriter-effect
import Typewriter from "typewriter-effect";

function TypewriterComp() {
  return (
    <div className="App  ">
      <Typewriter
        options={
          {
            
            // loop: true,
            // cursor: "|"	
          }
        }
        onInit={(typewriter) => {
          typewriter
            .typeString("I Am A FullStack Developer")

            .pauseFor(1000)
            .deleteAll()
            .typeString("I'm A Graphic Designer")

            .pauseFor(1000)
            .deleteAll()
            .typeString("I'm A Freelancer")
            .pauseFor(1000)
            .deleteAll()

            .typeString("i am iron man")

            .start();
        }}
      />
    </div>
  );
}

export default TypewriterComp;
