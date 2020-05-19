import React from "react";
import styled from "styled-components";
import CartFixed from "../../molecules/cartFixed";

const FloatFooterBar = styled.div``;

export default (props) => {
  return (
    <FloatFooterBar className="floatFooterBar">
      <CartFixed />
    </FloatFooterBar>
  );
};
