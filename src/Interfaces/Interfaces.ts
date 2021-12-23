export interface SupplyItemInterface {
  id: String;
  currentAmount: number;
  fullAmount: number;
  supplyName: String;
}

export interface ActionSupplyInterface {
  type: String;
  payload: {
    currentAmount: number;
    fullAmount?: number;
    supplyName?: any;
    id?: String;
  };
}

export interface UserInterface {
  name: String;
  company: String;
  date: String;
}

export interface ActionUserInterface {
  users: any;
  type: String;
  payload: UserInterface;
}

export interface CombinedStateInterface {
  users: UserInterface;
  supply: SupplyItemInterface[];
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
