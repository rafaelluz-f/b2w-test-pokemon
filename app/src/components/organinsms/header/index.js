import React from "react";
import styled from "styled-components";
import AppLogo from "../../molecules/appLogo";

const Header = styled.header`
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
  return (
    <Header className="header">
      <AppLogo />
    </Header>
  );
};
