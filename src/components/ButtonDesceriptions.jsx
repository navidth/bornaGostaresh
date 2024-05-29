"use client";

import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function ButtonDesceriptions() {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => {
    setShowModal(false);
  };
  return (
    <div>
      <button
        className="btn btn-primary mx-4"
        onClick={() => {
          setShowModal(true);
        }}
      >
        Description
      </button>
      <Modal
        dir="rtl"
        show={showModal}
        onHide={handleClose}
        animation={true}
        autoFocus={true}
      >
        <Modal.Header dir="rtl" className="d-flex justify-content-center">
          <Modal.Title className="text-center fw-bolder">توضیحات پروژه</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5 className="text-center">لینک های کمکی</h5>
          <div className="p-3">
            <strong> لینک برای عکس آنلاین</strong>
            <p className="text-primary">https://picsum.photos/200/300</p>
          </div>
          <div className="p-3">
            <strong>لینک برای ویدیو آنلاین</strong>
            <p className="text-primary">
              https://test-videos.co.uk/bigbuckbunny/mp4-h264
            </p>
          </div>
          <hr />
          <strong className="fs-5 p-3"> کتابخانه ها : </strong>
          <p
            className="text-danger fs-5  p-3"
            style={{ letterSpacing: "0.4mm" }}
          >
            react-bootstrap , redux, redux-toolkit, react-sweetalert2
          </p>
          <strong className="text-dark p-3">
            *** استفاده از redux برای پروژه کوچیک لازم نیست ولی برای تمیز بودن
            بیشتر کد ها استفاده شده است***
          </strong>
          <strong className="fs-5  p-3 d-block">
            *** با نگه داشتن کلیک و کشیدن ماوس میتوانید عکس هارا جابجا کنید در
            صفحه ***
          </strong>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center">
          <Button variant="danger" className="px-3" onClick={handleClose}>
            close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ButtonDesceriptions;
