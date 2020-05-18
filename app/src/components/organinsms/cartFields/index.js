import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";

const CartFields = styled.div`
  label {
    font-size: 11px;
    text-transform: uppercase;
  }
`;

export default (props) => {
  const dispatch = useDispatch();
  const numberCard = useSelector((state) => state.numberCard);
  const [isChecked, setIsChecked] = useState(false);
  const [card, setCard] = useState();
  const numberCardStorage = 0;

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
      setIsChecked(true);
      localStorage.setItem("isRemember", true);
      localStorage.setItem("numberCard", numberCard);
      return;
    }
    setIsChecked(false);
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
  }, []);

  return (
    <CartFields className="cartFields">
      <p>
        <label>Adicione o numero do seu Cartão:</label>
        <input onChange={handleNumberCard} type="text" value={card} />
      </p>
      <p>
        <input
          onChange={handleRemember}
          type="checkbox"
          placeholder="Lembrar cartão"
          checked={isChecked}
        />
        <label for="horns">Lembrar Cartão</label>
      </p>
    </CartFields>
  );
};
