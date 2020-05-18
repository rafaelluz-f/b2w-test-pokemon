import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

const CartButton = styled.div`
  button {
    background: green;
    color: #fff;
    font-weight: 900;
    text-transform: uppercase;
    font-size: 32px;
    padding: 25px 20px;
    width: 100%;
    border: none;
    cursor: pointer;
  }
  .disabled {
    background: #a22525;
    cursor: default;
  }
`;

export default (props) => {
  const dispatch = useDispatch();
  const numberCard = useSelector((state) => state.numberCard);
  const cartProducts = useSelector((state) => state.cartProducts);
  const theme = useSelector((state) => state.theme);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (numberCard) {
      setDisabled();
      return;
    }
    setDisabled(true);
  }, [numberCard]);

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
        {cartProducts.length === 0 && (
          <button
            className="disabled"
            onClick={() => alert(theme.cartNeedsProducts)}
          >
            FINALIZAR
          </button>
        )}
        {disabled && cartProducts.length !== 0 && (
          <button
            className="disabled"
            onClick={() => alert(theme.cartNeedsCardNumber)}
          >
            FINALIZAR
          </button>
        )}
        {!disabled && <button onClick={() => checkout()}>FINALIZAR</button>}
      </CartButton>
    </>
  );
};
