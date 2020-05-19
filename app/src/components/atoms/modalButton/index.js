import React from "react";
import styled from "styled-components";

const ModalButton = styled.button`
  background: #a22525;
  padding: 20px;
  color: #fff;
  border: 0;
  font-size: 20px;
  border-radius: 10px;
  cursor: pointer;
`;

export default (props) => {
  return (
    <ModalButton onClick={props.onClick} className="modalButton">
      {props.children}
    </ModalButton>
  );
};
