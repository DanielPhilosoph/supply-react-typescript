export interface SupplyItemInterface {
  id: string;
  currentAmount: number;
  fullAmount: number;
  supplyName: string;
}

export interface ActionSupplyInterface {
  type: string;
  payload: {
    currentAmount: number;
    fullAmount?: number;
    supplyName?: any;
    id?: string;
  };
}

export interface UserInterface {
  name: string;
  company: string;
  date: string;
}

export interface ActionUserInterface {
  users: any;
  type: string;
  payload: UserInterface;
}

export interface CombinedStateInterface {
  users: UserInterface;
  supply: SupplyItemInterface[];
}

export interface ValidationResponse {
  valid: boolean;
  message?: string;
}

// {
//     name: "daniel",
//     company: "RGB",
//     date: "12-12-2021",
//   }

// id: 1,
//     currentAmount: 0,
//     fullAmount: 10,
//     supplyName: "Blood tests",
