import React, { useEffect, useRef } from "react";
import { Form, Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { validationWorkerForm } from "../helpers/functions";
import { ValidationResponse } from "../Interfaces/Interfaces";

interface Props {
  buttonRef: React.RefObject<HTMLButtonElement>;
}

export default function WorkerForm({ buttonRef }: Props): JSX.Element {
  const nameR = useRef<HTMLInputElement>(null);
  const companyR = useRef<HTMLInputElement>(null);
  const dateR = useRef<HTMLInputElement>(null);
  const errorLabel = useRef<HTMLLabelElement>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.addEventListener("click", onSubmitClick);
    }
  });

  const onSubmitClick = () => {
    if (
      nameR.current &&
      companyR.current &&
      dateR.current &&
      errorLabel.current
    ) {
      const response: ValidationResponse = validationWorkerForm(
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
        errorLabel.current.innerText = response.message ? response.message : "";
      }
    }
  };

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
