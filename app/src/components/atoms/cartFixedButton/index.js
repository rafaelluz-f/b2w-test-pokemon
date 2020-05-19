import React from "react";
import styled from "styled-components";
import { HashLink as Link } from "react-router-hash-link";

const CartFixedButton = styled.p`
  text-align: center;

  a {
    margin-top: 10px;
    background: none;
    border: 2px solid #fff;
    color: #fff;
    padding: 10px 20px;
    border-radius: 5px;
    color: #fff;
    text-decoration: none;
  }

  @media (min-width: 768px) {
    a {
      display: none;
    }
  }
`;
export default (props) => {
  return (
    <CartFixedButton>
      <Link to={props.link}>Ver Carrinho</Link>
    </CartFixedButton>
  );
};
