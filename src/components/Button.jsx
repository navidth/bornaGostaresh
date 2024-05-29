"use client";
import { useState } from "react";
import ModalAdd from "./ModalAdd";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";

function Buttons() {
  const [modalShow, setModalshow] = useState(false);
  const [content, setContent] = useState([]);
  const [typeContent, setTypeContent] = useState("");

  const handleOpenModal = (type) => {
    setModalshow(true);
    setTypeContent(type);
  };

  const handleClose = () => {
    setModalshow(false);
  };

  return (
    <>
      <div className="d-flex mx-2 py-3">
        <button
          type="button"
          onClick={() => {
            handleOpenModal("image");
          }}
          className="btn btn-outline-dark mx-3"
        >
          Add image
        </button>
        <button
          type="button"
          onClick={() => {
            handleOpenModal("video");
          }}
          className="btn btn-outline-dark mx-3"
        >
          Add video
        </button>
        <button
          type="button"
          onClick={() => {
            handleOpenModal("paragraph");
          }}
          className="btn btn-outline-dark mx-3"
        >
          Add paragraph
        </button>
        <button
          type="button"
          onClick={() => {
            handleOpenModal("scroll-text");
          }}
          className="btn btn-outline-dark mx-3"
        >
          Add scroll text
        </button>
      </div>
      <ModalAdd
        modalShow={modalShow}
        typeContent={typeContent}
        handleClose={handleClose}
      />
    </>
  );
}

export default Buttons;
