import React, { useRef } from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";

import { validateSupplyItem } from "../helpers/functions";

export default function AddItem() {
  const supplyName = useRef<HTMLInputElement>(null);
  const fullAmount = useRef<HTMLInputElement>(null);
  const currentAmount = useRef<HTMLInputElement>(null);
  const errorLabel = useRef<HTMLLabelElement>(null);
  const dispatch = useDispatch();

  const onAddClick = () => {
    if (
      supplyName.current &&
      fullAmount.current &&
      currentAmount.current &&
      errorLabel.current
    ) {
      let response;
      try {
        response = validateSupplyItem(
          supplyName.current.value,
          parseInt(fullAmount.current.value),
          parseInt(currentAmount.current.value)
        );
      } catch (error) {
        errorLabel.current.innerText =
          "Full amount and current amount must be numbers!";
      }
      if (response !== undefined) {
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
          errorLabel.current.innerText = response.message
            ? response.message
            : "";
        }
      }
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
