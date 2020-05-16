import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const ProductButton = styled.div`
  background: ${(props) =>
    props.degradeColor1 ? props.degradeColor1 : `black`};
  background: -moz-linear-gradient(top, ${(props) =>
    props.degradeColor1 ? props.degradeColor1 : `black`} 1%, ${(props) =>
  props.degradeColor2 ? props.degradeColor2 : `black`} 100%);
  background: -webkit-linear-gradient(top, ${(props) =>
    props.degradeColor1 ? props.degradeColor1 : `black`} 1%, ${(props) =>
  props.degradeColor2 ? props.degradeColor2 : `black`} 100%);
  background: linear-gradient(to bottom, ${(props) =>
    props.degradeColor1 ? props.degradeColor1 : `black`} 1%, ${(props) =>
  props.degradeColor2 ? props.degradeColor2 : `black`} 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='${(
    props
  ) => (props.degradeColor1 ? props.degradeColor1 : `black`)}', endColorstr='${(
  props
) => (props.degradeColor2 ? props.degradeColor2 : `black`)}',GradientType=0 );
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
  const theme = useSelector((state) => state.theme);
  return (
    <ProductButton
      degradeColor1={theme.degradeColor1}
      degradeColor2={theme.degradeColor2}
      className="productButton"
    >
      <a onClick={() => console.log("teste")}>
        <span>COMPRAR</span>
      </a>
    </ProductButton>
  );
};
