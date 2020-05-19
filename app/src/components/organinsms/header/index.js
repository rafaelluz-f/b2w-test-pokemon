import React from "react";
import styled from "styled-components";
import AppLogo from "../../molecules/appLogo";

const Header = styled.header`
  text-align: center;
  display: block;
  overflow: hidden;
  padding: 0 15px;
`;

export default (props) => {
  return (
    <Header className="header">
      <AppLogo />
    </Header>
  );
};
