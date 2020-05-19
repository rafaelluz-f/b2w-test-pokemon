import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { HashLink as Link } from "react-router-hash-link";

const CartFixed = styled.div`
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


  .cartFixedInner {
    max-width: 1200px;
    margin: 0 auto;
  }

  .cartFixedMessage {
    text-align: center;
    color: #fff;
    text-transform: uppercase;
    font-size: 13px;
  }

  .cartFixedLink {
    text-align:center;
    a{
      margin-top:10px;
      background: none;
      border: 2px solid #fff;
      color: #fff;
      padding: 10px 20px;
      border-radius: 5px;
      color:#fff;
      text-decoration:none;
  }

  }

  @media(min-width:768px){
    height:5%;

    .cartFixedLink a{
      display:none;
    }
  }
`;

export default (props) => {
  const cartProducts = useSelector((state) => state.cartProducts);
  const theme = useSelector((state) => state.theme);

  return (
    <>
      {cartProducts.length > 0 && (
        <CartFixed
          degradeColor1={theme.degradeColor1}
          degradeColor2={theme.degradeColor2}
          className="cartFixed"
        >
          <div className="cartFixedInner">
            <p className="cartFixedMessage">{`Você tem ${cartProducts.length} pokemon no carrinho`}</p>
            <p className="cartFixedLink">
              <Link to="/#yourAnchorTag">Ver Carrinho</Link>
            </p>
          </div>
        </CartFixed>
      )}
    </>
  );
};
