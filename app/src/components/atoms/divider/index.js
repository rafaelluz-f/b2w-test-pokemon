import React from "react";
import styled from "styled-components";

const Divider = styled.div`
  border-top: 1px solid #c9c9c9;
  width: 180px;
  margin: 5px auto;
`;

export default (props) => {
  return <Divider className="divider" />;
};
