import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

function EmailCart({
  showModal,
  handleFbEmail,
  handleSubmitEmail,
  vaildMessage,
}) {
  return (
    <Modal show={showModal}>
      <Modal.Body closeButton>
        <Modal.Title>Please Enter your Email</Modal.Title>
        <Form onSubmit={(e) => handleSubmitEmail(e)}>
          <Form.Group controlId='formBasicPassword'>
            <Form.Control
              type='email'
              placeholder='Enter email here'
              onChange={(e) => handleFbEmail(e)}
              required
            />
            {vaildMessage ? (
              <small className='text-danger'> Enter the vaild Email</small>
            ) : null}
          </Form.Group>
          <Button className='left-f1' onClick={(e) => handleSubmitEmail(e)}>
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default EmailCart;
