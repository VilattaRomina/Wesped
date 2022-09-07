import React from "react";
import Modal from "react-modal";
import { BodyStyle,DivStyle, ImageStyle, H2Style, H3Style } from "./BookingSStyled";
import logo from "../../ui/success-booking.png";
import ButtonC from "../../components/button/Button";
import {Link} from 'react-router-dom'

const modalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "1px solid #DFE4EA",
    boxShadow: "5px 5px 15px rgba(1, 1, 1, 0.3)",
    borderRadius: "8px 8px 8px 8px",
    backgroundColor: "#FFFFFF",
  },
};

const buttonStyles = {
  content: {
    position: "absolute",
    left: "0%",
    right: "0%",
    top: "0%",
    bottom: "0%",
    background: "#1DBEB4",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.12)",
    borderRadius: "5px",
  },
};

Modal.setAppElement("#root");

function BookingS() {
  
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <BodyStyle >
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={modalStyles}
        contentLabel="Example Modal"
      >
        <DivStyle>
          <ImageStyle src={logo} alt="Logo Success" />
          <H2Style>¡Muchas Gracias!</H2Style>
          <H3Style>Su reserva se ha realizado con éxito</H3Style>
          <Link to={'/'}>
          <ButtonC
            width="12.5rem"
            theme="secondary"
            onClick={closeModal}
            style={buttonStyles}
          >
            ok
          </ButtonC>
          </Link>
        </DivStyle>
      </Modal>
    </BodyStyle>
  );
}

export default BookingS;
