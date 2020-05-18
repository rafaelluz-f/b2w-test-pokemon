import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
const CartButton = styled.div`
  background: #a22525;
  color: #fff;
  font-weight: 900;
  text-transform: uppercase;
  font-size: 32px;
  padding: 25px 20px;
  cursor: pointer;
`;

export default (props) => {
  const dispatch = useDispatch();
  const [isModalCheckout, setIsModalCheckout] = useState();

  const checkout = () => {
    dispatch({
      type: "SET_CART_IS_EMPTY",
      payload: true,
    });
    dispatch({
      type: "SET_CART_EMPTY",
    });
    dispatch({
      type: "SET_MODAL_OPENED",
      payload: true,
    });
  };

  return (
    <>
      <CartButton className="cartButton">
        <span onClick={() => checkout()}>FINALIZAR</span>
      </CartButton>
    </>
  );
};
