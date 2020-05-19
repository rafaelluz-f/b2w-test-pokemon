import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

const ProductButton = styled.div`
  button {
    background: ${(props) =>
      props.degradeColor1 ? props.degradeColor1 : `black`};
    background: -moz-linear-gradient(
      top,
      ${(props) => (props.degradeColor1 ? props.degradeColor1 : `black`)} 0%,
      ${(props) => (props.degradeColor2 ? props.degradeColor2 : `black`)} 100%
    );
    background: -webkit-linear-gradient(
      top,
      ${(props) => (props.degradeColor1 ? props.degradeColor1 : `black`)} 0%,
      ${(props) => (props.degradeColor2 ? props.degradeColor2 : `black`)} 100%
    );
    background: linear-gradient(
      to bottom,
      ${(props) => (props.degradeColor1 ? props.degradeColor1 : `black`)} 0%,
      ${(props) => (props.degradeColor2 ? props.degradeColor2 : `black`)} 100%
    );
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=${(
      props
    ) => (props.degradeColor1 ? props.degradeColor1 : `black`)}, endColorstr=${(
  props
) => (props.degradeColor2 ? props.degradeColor2 : `black`)},GradientType=0 );
    border-radius: 0 0 10px 10px;
    display: block;
    text-align: center;
    color: #fff;
    font-weight: bold;
    padding: 20px;
    font-size: 19px;
    cursor: pointer;
    text-decoration: none;
    width: 100%;
    border: 0;
  }
`;

export default (props) => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);

  const addProductToCart = (name, price, imageID) => {
    dispatch({
      type: "ADD_CART_PRODUCT",
      payload: { name, price, imageID },
    });
    dispatch({
      type: "SET_CART_IS_EMPTY",
      payload: false,
    });
  };
  return (
    <ProductButton
      degradeColor1={theme.degradeColor1}
      degradeColor2={theme.degradeColor2}
      className="productButton"
    >
      <button
        onClick={() => addProductToCart(props.name, props.price, props.imageID)}
      >
        COMPRAR
      </button>
    </ProductButton>
  );
};
