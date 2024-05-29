import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { addUrl } from "./Redux/SliceProducts";
import { useDispatch } from "react-redux";

function ModalAdd({ modalShow, typeContent, handleClose }) {
  const [valueInput, setValueInput] = useState("");

  const handleValueInput = (e) => {
    setValueInput(e.target.value);
  };
  const dispatch = useDispatch();
  const handleSubmit = (value) => {
    dispatch(addUrl({ type: typeContent, value }));
    handleClose();
  };

  return (
    <Modal
      show={modalShow}
      onHide={handleClose}
      animation={true}
      autoFocus={true}
    >
      <Modal.Header closeButton>
        <Modal.Title>Add {typeContent} url</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <label htmlFor="input" className="form-label opacity-75">
          Add url:
        </label>
        <input
          type="text"
          name="input"
          id="input"
          className="form-control w-75"
          placeholder="Please add url ...."
          onChange={(e) => {
            handleValueInput(e);
          }}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="primary"
          onClick={() => {
            handleSubmit(valueInput);
          }}
        >
          Add Url
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalAdd;
