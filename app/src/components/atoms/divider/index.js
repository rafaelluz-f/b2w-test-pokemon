import React from "react";
import styled from "styled-components";

const Divider = styled.div`
  border-top: 1px solid ${(props) => (props.color ? props.color : `black`)};
  width: ${(props) => (props.width ? props.width : `100%`)};
  margin: 5px auto;
`;

export default (props) => {
  return (
    <Divider className="divider" color={props.color} width={props.width} />
  );
};
