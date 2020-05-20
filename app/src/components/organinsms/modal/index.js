import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import ModalTitle from "../../atoms/modalTitle";
import ModalText from "../../atoms/modalText";
import ModalButton from "../../atoms/modalButton";

const Modal = styled.div`
  position: fixed;
  width: 100% !important;
  max-width: 100% !important;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
`;

const ModalContainer = styled.div`
  position: fixed;
  background: white;
  width: 80%;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  padding: 20px;
`;

const ModalRowCenter = styled.span`
  text-align: center;
  display: block;
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
    <Modal className="modal">
      <ModalContainer className="modalContainer">
        <ModalTitle>OBRIGADO!!!</ModalTitle>
        <ModalText>Você ganhou 15% de cashback do valor total!</ModalText>
        <ModalRowCenter>
          <ModalButton onClick={() => closeModal()}>fechar</ModalButton>
        </ModalRowCenter>
      </ModalContainer>
    </Modal>
  );
};
