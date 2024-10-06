import React from "react";
import SectionWrapper from "../SectionWrapper";
import HeaderTop from "./HeaderTop";
import HeaderMain from "./HeaderMain";

const Header = () => {
  return <SectionWrapper className="fixed top-0 right-0 left-0 z-50">
    <HeaderTop />
    <HeaderMain />
  </SectionWrapper>
};

export default Header;

