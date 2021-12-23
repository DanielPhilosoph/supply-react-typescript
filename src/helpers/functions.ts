export const validateSupplyItem = (supplyName, fullAmount, currentAmount) => {
  if (supplyName && fullAmount && currentAmount) {
    if (isNaN(supplyName)) {
      if (supplyName.length > 3) {
        if (!isNaN(fullAmount) && fullAmount > 0) {
          if (!isNaN(currentAmount) && currentAmount > 0) {
            if (currentAmount <= fullAmount) {
              return { valid: true };
            } else {
              return {
                valid: false,
                message: "Current amount cant be bigger then full amount",
              };
            }
          } else {
            return {
              valid: false,
              message: "Current amount should be bigger then 0",
            };
          }
        } else {
          return {
            valid: false,
            message: "Full amount should be bigger then 0",
          };
        }
      } else {
        return { valid: false, message: "Supply name should be longer" };
      }
    } else {
      return { valid: false, message: "Supply name must be a string" };
    }
  } else {
    return { valid: false, message: "All fields are required" };
  }
};

export const validateCurrentAmount = (currentAmount, fullAmount) => {
  if (!isNaN(currentAmount) && currentAmount > 0) {
    if (fullAmount >= currentAmount) {
      return { valid: true };
    } else {
      return {
        valid: false,
        message: "Current amount should be smaller then full amount",
      };
    }
  } else {
    return {
      valid: false,
      message: "Current amount should be bigger then 0 / Not a number",
    };
  }
};

export const validationWorkerForm = (name, company, date) => {
  if (name && company && date) {
    if (isNaN(name)) {
      if (isNaN(company)) {
        if (name.length > 2) {
          if (company.length > 2) {
            return { valid: true };
          } else {
            return { valid: false, message: "Name is to short" };
          }
        } else {
          return { valid: false, message: "Name is to short" };
        }
      } else {
        return { valid: false, message: "Company must be only letters" };
      }
    } else {
      return { valid: false, message: "Name must be only letters" };
    }
  } else {
    return { valid: false, message: "Require all fields" };
  }
};
