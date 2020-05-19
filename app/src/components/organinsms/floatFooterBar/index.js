import React from "react";
import styled from "styled-components";
import CartFixed from "../../molecules/cartFixed";

const FloatFooterBar = styled.div`
  max-width: 100% !important;
`;

export default (props) => {
  return (
    <FloatFooterBar className="floatFooterBar">
      <CartFixed />
    </FloatFooterBar>
  );
};
