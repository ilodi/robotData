import React from "react";
import TopAbout from "./about/TopAbout";
import BottomAbout from "./about/BottomAbout";

const About = ({ iconAboutA, logo, iconAboutB }) => {
  return (
    <>
      <TopAbout />
      <BottomAbout
        logo={logo}
        iconAboutA={iconAboutA}
        iconAboutB={iconAboutB}
      />
    </>
  );
};

export default About;
