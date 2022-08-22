import React from "react";
import { Modal, Button } from "react-bootstrap";

const Biodata = ({ show, data = {}, onHide }) => {
  const handleClose = () => onHide(false);

  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    qualification,
    comments,
    ...address
  } = data || {};
  console.log(data);

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{`${firstName} ${lastName}`}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row">
          <div className="col-12 h5">Email</div>
          <div className="col-12 mb-2">{email}</div>
          <div className="col-12 h5">Phone</div>
          <div className="col-12 mb-2">{phoneNumber}</div>
          <div className="col-12 h5">Qualification</div>
          <div className="col-12 mb-2">{qualification}</div>
        </div>
        <div className="row">
          <div className="col-12 h5">Address</div>
          <div className="col-12">{address.address1}</div>
          <div className="col-12">{address.address2}</div>
          <div className="col-12">{`${address.city} - ${address.state}`}</div>
          <div className="col-12">{`${address.country} - ${address.zipCode}`}</div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Biodata;
