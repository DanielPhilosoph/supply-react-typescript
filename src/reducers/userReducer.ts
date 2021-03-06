import { ActionUserInterface, UserInterface } from "../Interfaces/Interfaces";

const user = {
  name: "daniel",
  company: "RGB",
  date: "12-12-2021",
};

export default function usersReducer(
  state: UserInterface = user,
  action: ActionUserInterface
) {
  switch (action.type) {
    case "SUBMIT_FORM":
      const updatedUser = {
        name: action.payload.name,
        company: action.payload.company,
        date: action.payload.date,
      };
      console.log(updatedUser);
      return updatedUser;

    default:
      return state;
  }
}
