import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import CartFieldLabel from "../../atoms/cardFieldLabel";
import CardFieldInput from "../../atoms/cardFieldInput";
import CardFieldCheckBox from "../../atoms/cardFieldCheckBox";

const CartFields = styled.div``;

export default (props) => {
  const dispatch = useDispatch();
  const numberCard = useSelector((state) => state.numberCard);
  const [isChecked, setIsChecked] = useState(false);
  const [card, setCard] = useState();

  const handleNumberCard = (event) => {
    if ("" === card) {
      dispatch({
        type: "SET_NUMBER_CARD",
        payload: "",
      });
    }
    dispatch({
      type: "SET_NUMBER_CARD",
      payload: event.target.value,
    });
    setCard(event.target.value);
    if (localStorage.getItem("isRemember")) {
      localStorage.setItem("numberCard", event.target.value);
    }
  };

  const handleRemember = () => {
    if (!isChecked) {
      setIsChecked("checked");
      localStorage.setItem("isRemember", true);
      localStorage.setItem("numberCard", numberCard);
      return;
    }
    setIsChecked("");
    localStorage.removeItem("isRemember");
    localStorage.removeItem("numberCard");
  };

  useEffect(() => {
    if (localStorage.getItem("isRemember")) {
      setCard(localStorage.getItem("numberCard"));
      setIsChecked(localStorage.getItem("isRemember"));
      dispatch({
        type: "SET_NUMBER_CARD",
        payload: localStorage.getItem("numberCard"),
      });
    }
  }, [dispatch]);

  return (
    <CartFields className="cartFields">
      <p>
        <CartFieldLabel>Adicione o número do seu Cartão:</CartFieldLabel>
        <CardFieldInput function={handleNumberCard} value={card} />
      </p>
      <p>
        <CardFieldCheckBox
          onChange={handleRemember}
          placeholder={"Lembrar cartão"}
          checked={isChecked ? 1 : 0}
        />
        <CartFieldLabel>Lembrar Cartão</CartFieldLabel>
      </p>
    </CartFields>
  );
};
