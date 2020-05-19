import React from "react";
import styled from "styled-components";

const AppLogo = styled.img`
  margin-top: 20px;
  width: 100%;
  max-width: 500px;
`;
export default (props) => {
  return <AppLogo alt={props.alt} src={props.src} />;
};
