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
  const config = useSelector((state) => state.theme);
  const graphImage = require("../../../assets/images/logo-" +
    config.themeName +
    ".png");

  return (
    <AppLogo className="appLogo">
      <img src={graphImage} />
    </AppLogo>
  );
};
