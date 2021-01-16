import axios from "axios";

const baseUrl = `http://localhost:5000`;

export const validatePasswords = (obj, userPasswordConfirmation) => {
  if (obj.userPassword !== userPasswordConfirmation) {
    return "passwords don't match";
  } else if (obj.userPassword.length < 4) {
    return "passwords must be at least 4 characters long";
  } else {
    return null;
  }
};
