import React from "react";
import styled from "styled-components";
import CartItem from "../../molecules/cartItem";
import { useSelector } from "react-redux";

const CartItemList = styled.div`
  padding: 20px 0;

  p {
    padding: 0 20px;
  }
`;

export default (props) => {
  const cartProducts = useSelector((state) => state.cartProducts);
  const cartIsEmpty = useSelector((state) => state.cartIsEmpty);
  const theme = useSelector((state) => state.theme);

  return (
    <CartItemList className="cartItemList">
      {cartIsEmpty && <p>{theme.cartIsEmpty}</p>}
      {!cartIsEmpty && (
        <>
          {cartProducts.map((item, i) => (
            <CartItem
              key={i}
              title={item.name}
              price={item.price}
              id={item.imageID}
            />
          ))}
        </>
      )}
    </CartItemList>
  );
};
