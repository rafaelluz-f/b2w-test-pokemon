import React from "react";
import styled from "styled-components";

const CardFieldInput = styled.input`
  font-size: 11px;
  text-transform: uppercase;
  padding: 5px;
`;
export default (props) => {
  return (
    <CardFieldInput
      className="cardFieldInput"
      onChange={props.function}
      type="text"
      value={props.value || ""}
    />
  );
};
