import React, { useRef } from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";

import { validateSupplyItem } from "../helpers/functions";

export default function AddItem() {
  const supplyName = useRef<HTMLInputElement | undefined>();
  const fullAmount = useRef<HTMLInputElement | undefined>();
  const currentAmount = useRef<HTMLInputElement | undefined>();
  const errorLabel = useRef<HTMLLabelElement | undefined>();
  const dispatch = useDispatch();

  const onAddClick = () => {
    const response = validateSupplyItem(
      supplyName.current.value,
      fullAmount.current.value,
      currentAmount.current.value
    );
    if (response.valid) {
      errorLabel.current.innerText = "";
      dispatch({
        type: "ADD_SUPPLY_ITEM",
        payload: {
          supplyName: supplyName.current.value,
          fullAmount: fullAmount.current.value,
          currentAmount: currentAmount.current.value,
        },
      });
    } else {
      errorLabel.current.innerText = response.message;
    }
  };

  return (
    <Form className="addItemForm">
      <div>
        <h2>Add Item</h2>
      </div>
      <div>
        <label className="errorLabel" ref={errorLabel}></label>
      </div>
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm="3">
          Supply name
        </Form.Label>
        <Col sm="10">
          <Form.Control
            ref={supplyName}
            type="text"
            placeholder="Supply name"
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm="3">
          Full amount
        </Form.Label>
        <Col sm="10">
          <Form.Control ref={fullAmount} type="number" placeholder="10" />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm="3">
          Current amount
        </Form.Label>
        <Col sm="10">
          <Form.Control ref={currentAmount} type="number" placeholder="10" />
        </Col>
        <Col sm="10" className="addItemColButton">
          <Button variant="primary" onClick={onAddClick}>
            Add item
          </Button>
        </Col>
      </Form.Group>
    </Form>
  );
}
