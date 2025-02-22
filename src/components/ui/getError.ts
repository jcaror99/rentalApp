import { GenericObject } from "definitions/types";

const getError = (Code: string) => {
  const errors: GenericObject = {
    passwordLength: "Password must be at least 5 characters long",
  };
  return errors[Code] || "Unknown Error";
};

export default getError;
