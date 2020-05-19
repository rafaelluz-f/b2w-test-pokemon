import React from "react";
import styled from "styled-components";

const ModalTitle = styled.h1`
  text-align: center;
`;

export default (props) => {
  return <ModalTitle className="modalTitle">{props.children}</ModalTitle>;
};
