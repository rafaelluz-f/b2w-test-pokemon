import React from "react";
import styled from "styled-components";

const AppLogoImage = styled.img`
  margin-top: 20px;
  width: 100%;
  max-width: 500px;
`;
export default (props) => {
  return (
    <AppLogoImage className="appLogoImage" alt={props.alt} src={props.src} />
  );
};
