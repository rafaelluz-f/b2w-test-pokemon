import React from "react";
import styled from "styled-components";

const CardFieldCheckBox = styled.input`
  font-size: 11px;
  text-transform: uppercase;
  padding: 5px;
`;
export default (props) => {
  return (
    <CardFieldCheckBox
      className="cardFieldCheckBox"
      onChange={() => {
        props.onChange();
      }}
      type="checkbox"
      checked={props.checked ? 1 : 0}
      placeholder={props.placeholder}
    />
  );
};
