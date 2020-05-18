import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

const Modal = styled.div`
  position: fixed;

  width: 100% !important;
  max-width: 100% !important;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);

  .modal-main {
    position: fixed;
    background: white;
    width: 80%;
    height: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 5px;
    padding: 20px;
  }
  h1,
  h2 {
    text-align: center;
  }

  p {
    text-align: center;
  }
  button {
    background: #a22525;
    padding: 20px;
    color: #fff;
    border: 0;
    font-size: 20px;
    border-radius: 10px;
    cursor: pointer;
  }
`;

export default (props) => {
  const dispatch = useDispatch();
  const isModalOpened = useSelector((state) => state.isModalOpened);

  const closeModal = () => {
    dispatch({
      type: "SET_MODAL_OPENED",
      payload: false,
    });
  };

  if (!isModalOpened) {
    return null;
  }
  return (
    <Modal>
      <div className="modal-main">
        <h1>OBRIGADO!!!</h1>
        <h2>Você ganhou 15% de cashback do valor total!</h2>
        <p>
          <button onClick={() => closeModal()}>fechar</button>
        </p>
      </div>
    </Modal>
  );
};
