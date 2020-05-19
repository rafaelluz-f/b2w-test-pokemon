import React from "react";
import styled from "styled-components";
import loader from "../../../assets/images/loader.gif";

const Loader = styled.img`
  width: ${(props) => (props.width ? props.width : ``)};
`;
export default (props) => {
  return (
    <Loader width={props.width} className="loader" alt="Loader" src={loader} />
  );
};
