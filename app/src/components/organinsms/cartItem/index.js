import React from "react";
import styled from "styled-components";
import imageSample from "../../../assets/images/productImageSample.png";
import Divider from "../../atoms/divider";

const CartItem = styled.div`
  display: flex;
  width: 100%;
  flex-flow: row wrap;
  img {
    border: 1px solid #000;
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
  return (
    <CartItem className="cartItem row">
      <Column className="column">
        <span className="image">
          <img src={imageSample} />
        </span>
      </Column>
      <Column className="column">
        <span>Charmander</span>
        <span>R$89,90</span>
      </Column>
      <Divider />
    </CartItem>
  );
};
