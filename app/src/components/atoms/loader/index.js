import React from "react";
import styled from "styled-components";
import loader from "../../../assets/images/loader.gif";

const Loader = styled.img``;
export default (props) => {
  return <Loader className="loader" alt="Loader" src={loader} />;
};
