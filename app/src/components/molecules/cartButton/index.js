import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import CartButtonDisabled from "../../atoms/cartButtonDisabled";
import CartButtonEnabled from "../../atoms/cartButtonEnabled";

const CartButton = styled.div``;

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
    <CartButton id="yourAnchorTag" className="cartButton">
      {cartProducts.length === 0 && (
        <CartButtonDisabled function={() => alert(theme.cartNeedsProducts)}>
          Finalizar
        </CartButtonDisabled>
      )}
      {disabled && cartProducts.length !== 0 && (
        <CartButtonDisabled function={() => alert(theme.cartNeedsCardNumber)}>
          Finalizar
        </CartButtonDisabled>
      )}
      {!disabled && cartProducts.length !== 0 && (
        <CartButtonEnabled function={() => checkout()}>
          FINALIZAR
        </CartButtonEnabled>
      )}
    </CartButton>
  );
};
