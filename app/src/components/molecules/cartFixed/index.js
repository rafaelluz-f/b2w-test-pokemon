import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import CartFixedButton from "../../atoms/cartFixedButton";
import CartFixedMessage from "../../atoms/cartFixedMessage";

const CartFixedContainer = styled.div`
 background: ${(props) =>
   props.degradeColor1 ? props.degradeColor1 : `black`};
    background: -moz-linear-gradient(top,  ${(props) =>
      props.degradeColor1 ? props.degradeColor1 : `black`} 0%, ${(props) =>
  props.degradeColor2 ? props.degradeColor2 : `black`} 48%, ${(props) =>
  props.degradeColor1 ? props.degradeColor1 : `black`} 100%);
    background: -webkit-linear-gradient(top,  ${(props) =>
      props.degradeColor1 ? props.degradeColor1 : `black`} 0%,${(props) =>
  props.degradeColor2 ? props.degradeColor2 : `black`} 48%,${(props) =>
  props.degradeColor1 ? props.degradeColor1 : `black`} 100%);
    background: linear-gradient(to bottom,  ${(props) =>
      props.degradeColor1 ? props.degradeColor1 : `black`} 0%,${(props) =>
  props.degradeColor2 ? props.degradeColor2 : `black`} 48%,${(props) =>
  props.degradeColor1 ? props.degradeColor1 : `black`} 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=${(
      props
    ) => (props.degradeColor1 ? props.degradeColor1 : `black`)}, endColorstr=${(
  props
) => (props.degradeColor1 ? props.degradeColor1 : `black`)},GradientType=0 );
  position: fixed;
  height: 15%;
  width: 100%;
  max-width: 100% !important;
  bottom: 0;
  box-shadow: 1px -10px 12px rgba(0,0,0,0.3);

  @media(min-width:768px){
    height:5%;
  }
`;

const CartFixedContainerLimit = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export default (props) => {
  const cartProducts = useSelector((state) => state.cartProducts);
  const theme = useSelector((state) => state.theme);

  return (
    <>
      {cartProducts.length > 0 && (
        <CartFixedContainer
          degradeColor1={theme.degradeColor1}
          degradeColor2={theme.degradeColor2}
          className="cartFixedContainer"
        >
          <CartFixedContainerLimit className="cartFixedContainerLimit">
            <CartFixedMessage>{`Você tem ${cartProducts.length} pokemon no carrinho`}</CartFixedMessage>
            <CartFixedButton link="#cart" />
          </CartFixedContainerLimit>
        </CartFixedContainer>
      )}
    </>
  );
};
