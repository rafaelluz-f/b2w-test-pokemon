import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import AppLogoImage from "../../atoms/appLogoImage";

const AppLogo = styled.span`
  text-align: center;
  display: block;
  overflow: hidden;
  padding: 0 15px;
`;
export default (props) => {
  const themeName = useSelector((state) => state.theme.themeName);

  const logoByTheme = require("../../../assets/images/logo-" +
    themeName +
    ".png");

  return (
    <AppLogo className="appLogo">
      <AppLogoImage alt="AppLogo" src={logoByTheme} />
    </AppLogo>
  );
};
