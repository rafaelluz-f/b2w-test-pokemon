import React from "react";
import styled from "styled-components";

const ProductButton = styled.div`
  background: #048ca4;
  background: -moz-linear-gradient(top, #048ca4 1%, #1959e2 100%);
  background: -webkit-linear-gradient(top, #048ca4 1%, #1959e2 100%);
  background: linear-gradient(to bottom, #048ca4 1%, #1959e2 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#048ca4', endColorstr='#1959e2',GradientType=0 );
  border-radius: 0 0 10px 10px;

  a,
  span {
    display: block;
    text-align: center;
    color: #fff;
    font-weight: bold;
    padding: 10px;
    font-size: 19px;
    cursor: pointer;
  }
`;

export default (props) => {
  return (
    <ProductButton className="productButton">
      <a onClick={() => console.log("teste")}>
        <span>COMPRAR</span>
      </a>
    </ProductButton>
  );
};
