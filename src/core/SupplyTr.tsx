import React from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";

import { validateCurrentAmount } from "../helpers/functions";
import { SupplyItemInterface } from "../Interfaces/Interfaces";

interface Props {
  index: number;
  supply: SupplyItemInterface;
}

function SupplyTr({ index, supply }: Props) {
  const currentAmount = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const onBlur = () => {
    if (currentAmount.current) {
      const response = validateCurrentAmount(
        parseInt(currentAmount.current.value),
        supply.fullAmount
      );

      if (response.valid) {
        dispatch({
          type: "EDIT_CURRENT_AMOUNT_SUPPLY_ITEM",
          payload: {
            id: supply.id,
            currentAmount: currentAmount.current.value,
          },
        });
      } else {
        currentAmount.current.value = supply.currentAmount.toString();
      }
    }
  };

  return (
    <tr>
      <td>{index}</td>
      <td>{supply.supplyName}</td>
      <td>{supply.fullAmount}</td>
      <td>
        <input
          ref={currentAmount}
          className="listInput"
          type="number"
          defaultValue={supply.currentAmount}
          onBlur={onBlur}
        ></input>
      </td>
      <td>{supply.fullAmount - supply.currentAmount}</td>
    </tr>
  );
}

export default SupplyTr;
