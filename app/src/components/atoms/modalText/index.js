import React from "react";
import styled from "styled-components";

const ModalText = styled.h1`
  text-align: center;
`;

export default (props) => {
  return <ModalText className="modalText">{props.children}</ModalText>;
};
