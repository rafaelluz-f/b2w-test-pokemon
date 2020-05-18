import React from "react";
import styled from "styled-components";
import Divider from "../../atoms/divider";
import usePokemonImage from "../../../hooks/usePokemonImage";
import loader from "../../../assets/images/loader.gif";

const CartItem = styled.div`
  display: flex;
  width: 100%;
  flex-flow: row wrap;
  img {
    border: 1px solid #000;
    min-width: 50px;
    max-width: 50px;
    height: 50px;
  }
  span {
    display: block;
  }
  padding: 10px 15px 0;
  .image {
    flex: 0;
  }

  &:last-child {
    .divider {
      display: none;
    }
  }
`;

const Column = styled.div`
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
  const [imageIsLoaded, image, imageURL] = usePokemonImage(props.id);

  return (
    <CartItem className="cartItem row">
      <Column className="column">
        <span className="image">
          {!imageIsLoaded && <img src={loader} />}
          {imageIsLoaded && <img src={image} />}
        </span>
      </Column>
      <Column className="column">
        <span>{props.title}</span>
        <span>{props.price}</span>
      </Column>
      <Divider />
    </CartItem>
  );
};
