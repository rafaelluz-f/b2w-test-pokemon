import React from "react";
import styled from "styled-components";
import Divider from "../../atoms/divider";
import usePokemonImage from "../../../hooks/usePokemonImage";
import Loader from "../../atoms/loader";
import CartItemImage from "../../atoms/cartItemImage";
import CartItemName from "../../atoms/cartItemName";
import CartItemPrice from "../../atoms/cartItemPrice";

const CartItem = styled.div`
  display: flex;
  width: 100%;
  flex-flow: row wrap;

  span {
    display: block;
  }
  padding: 10px 15px 0;

  &:last-child {
    .divider {
      display: none;
    }
  }
`;

const CartItemColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;

  & + .column {
    span {
      margin-left: 10px;
      text-align: left;
    }
  }

  @media (min-width: 576px) and (max-width: 992px), (min-width: 1200px) {
    flex-direction: row;
    align-items: center;
    & + .column {
      flex-grow: 1;
      span {
        flex: 1;
      }
      span + span {
        text-align: right;
      }
    }
  }
`;

export default (props) => {
  const [imageIsLoaded, image] = usePokemonImage(props.id);

  return (
    <CartItem className="cartItem row">
      <CartItemColumn className="column">
        <span className="image">
          {!imageIsLoaded && <Loader width="50px" />}
          {imageIsLoaded && <CartItemImage alt="Pokemon" src={image} />}
        </span>
      </CartItemColumn>
      <CartItemColumn className="column">
        <CartItemName>{props.title}</CartItemName>
        <CartItemPrice>{props.price}</CartItemPrice>
      </CartItemColumn>
      <Divider />
    </CartItem>
  );
};
