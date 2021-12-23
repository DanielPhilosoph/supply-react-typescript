import React, { useEffect, useRef } from "react";
import { Form, Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { validationWorkerForm } from "../helpers/functions";

export default function WorkerForm({ buttonRef }) {
  const nameR = useRef<HTMLInputElement>();
  const companyR = useRef<HTMLInputElement>();
  const dateR = useRef<HTMLInputElement>();
  const errorLabel = useRef<HTMLLabelElement>();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    buttonRef.current.addEventListener("click", onSubmitClick);
  });

  const onSubmitClick = () => {
    const response = validationWorkerForm(
      nameR.current.value,
      companyR.current.value,
      dateR.current.value
    );
    if (response.valid) {
      dispatch({
        type: "SUBMIT_FORM",
        payload: {
          name: nameR.current.value,
          company: companyR.current.value,
          date: dateR.current.value,
        },
      });
      navigate("/form");
    } else {
      errorLabel.current.innerText = response.message;
    }
  };

  console.log(buttonRef);
  return (
    <Form className="workerForm">
      <div>
        <h2>Worker</h2>
      </div>
      <div>
        <label ref={errorLabel} className="errorLabel"></label>
      </div>
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm="3">
          Name
        </Form.Label>
        <Col sm="10">
          <Form.Control ref={nameR} type="text" placeholder="Name" />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm="3">
          Company
        </Form.Label>
        <Col sm="10">
          <Form.Control ref={companyR} type="text" placeholder="Company" />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm="3">
          Date
        </Form.Label>
        <Col sm="10">
          <Form.Control ref={dateR} type="date" placeholder="Date" />
        </Col>
      </Form.Group>
    </Form>
  );
}
