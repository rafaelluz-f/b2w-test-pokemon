import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const AppLogo = styled.span`
  text-align: center;
  display: block;
  overflow: hidden;
  padding: 0 15px;

  img {
    margin-top: 20px;
    width: 100%;
    max-width: 500px;
  }
`;

export default (props) => {
  const themeName = useSelector((state) => state.theme.themeName);

  const logoByTheme = require("../../../assets/images/logo-" +
    themeName +
    ".png");

  return (
    <AppLogo className="appLogo">
      <img alt="AppLogo" src={logoByTheme} />
    </AppLogo>
  );
};
