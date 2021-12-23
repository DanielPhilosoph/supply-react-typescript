import React from "react";
import { Card, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  CombinedStateInterface,
  SupplyItemInterface,
} from "../Interfaces/Interfaces";

export default function Form() {
  const usersState = useSelector(
    (state: CombinedStateInterface) => state.users
  );
  const supplyState = useSelector(
    (state: CombinedStateInterface) => state.supply
  );

  const navigate = useNavigate();
  console.log(usersState);
  return (
    <Card className="formCard">
      <Card.Header as="h3">{usersState.name}</Card.Header>
      <Card.Body>
        <Card.Title>Company: {usersState.company}</Card.Title>
        <Card.Text>Last report on: {usersState.date}</Card.Text>
        <br />
        <h5>Status:</h5>
        {supplyState.map((supplyItem: SupplyItemInterface, i: Number) => {
          return (
            <div key={`status${i}`} className="supplyStatusFormDiv">
              <span>Supply name: {supplyItem.supplyName}</span>
              <br />
              <span>Full amount: {supplyItem.fullAmount}</span>
              <br />
              <span>Current amount: {supplyItem.currentAmount}</span>
              <br />
              <span>
                Missing: {supplyItem.fullAmount - supplyItem.currentAmount}
              </span>
            </div>
          );
        })}
        {/* id: 2,
    currentAmount: 0,
    fullAmount: 13,
    supplyName: "Covid-19 tests", */}
        <Button
          variant="primary"
          onClick={() => {
            navigate("/");
          }}
        >
          Back to home
        </Button>
      </Card.Body>
    </Card>
  );
}
