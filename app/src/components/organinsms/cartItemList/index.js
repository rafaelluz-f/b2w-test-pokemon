import React from "react";
import styled from "styled-components";
import CartItem from "../cartItem";
import { useSelector, useDispatch } from "react-redux";

const CartItemList = styled.div`
  padding: 20px 0;
`;

export default (props) => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cartProducts);

  console.log(cartProducts);

  // dispatch({
  //   type: "ADD_CART_PRODUCT",
  //   payload: { name, price, imageID },
  // });

  return (
    <CartItemList className="CartItemList">
      {!cartProducts === [] && "nenhum produto adicionado"}
      <CartItem
        title={cartProducts[0].name}
        price={cartProducts[0].price}
        id={cartProducts[0].id}
      />
      <CartItem />
      <CartItem />
    </CartItemList>
  );
};
