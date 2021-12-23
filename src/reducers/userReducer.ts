const user = {
  name: "daniel",
  company: "RGB",
  date: "12-12-2021",
};

export default function usersReducer(state = user, action) {
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
