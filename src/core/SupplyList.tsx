import React from "react";
import { Table } from "react-bootstrap";

import { useSelector } from "react-redux";
import { CombinedStateInterface } from "../Interfaces/Interfaces";
import SupplyTr from "./SupplyTr";

export default function SupplyList() {
  const state = useSelector((state: CombinedStateInterface) => state.supply);
  console.log(state);
  return (
    <div className="supplyList">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Supply name</th>
            <th>Full amount</th>
            <th>Current amount</th>
            <th>Missing</th>
          </tr>
        </thead>
        <tbody>
          {state.map((supplyItem, i) => {
            return (
              <SupplyTr
                key={"supplyItem" + i + 1}
                index={i + 1}
                supply={supplyItem}
              />
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
