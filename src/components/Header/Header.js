import React from "react";
import { DummySpace, HeaderContainer, HeaderIcon, HeaderTitle } from "./style";
import { CONSTANT_DATA } from "../../constant";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
  return (
    <HeaderContainer>
      <DummySpace />
      <HeaderTitle>{CONSTANT_DATA.header.title}</HeaderTitle>
      <HeaderIcon icon={faInfoCircle} color="#B2FFDA" />
    </HeaderContainer>
  );
};

export default Header;
