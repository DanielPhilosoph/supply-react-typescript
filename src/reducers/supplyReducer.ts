import {
  SupplyItemInterface,
  ActionSupplyInterface,
} from "../Interfaces/Interfaces";

import uniqid from "uniqid";

const initialSupply = [
  {
    id: "1",
    currentAmount: 0,
    fullAmount: 10,
    supplyName: "Blood tests",
  },
  {
    id: "2",
    currentAmount: 0,
    fullAmount: 13,
    supplyName: "Covid-19 tests",
  },
];

export default function supplyReducer(
  state: SupplyItemInterface[] = initialSupply,
  action: ActionSupplyInterface
) {
  switch (action.type) {
    case "ADD_SUPPLY_ITEM":
      return [
        ...state,
        {
          id: uniqid(),
          currentAmount: action.payload.currentAmount,
          fullAmount: action.payload.fullAmount,
          supplyName: action.payload.supplyName,
        },
      ];
    case "EDIT_CURRENT_AMOUNT_SUPPLY_ITEM":
      return state.map((supplyItem) => {
        if (supplyItem.id === action.payload.id) {
          supplyItem.currentAmount = action.payload.currentAmount;
        }
        return supplyItem;
      });

    default:
      return state;
  }
}
