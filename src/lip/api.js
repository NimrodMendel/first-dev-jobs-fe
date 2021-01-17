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

export const signUpNewUser = async (obj) => {
  let result;
  await axios
    .post(`${baseUrl}/api/users/signup`, { user: obj })
    .then(async function (response) {
      result = response.data;
    })
    .catch(function (error) {
      console.error(error);
    });
  return result;
};

export const loginUser = async (loginObject) => {
  let result;
  await axios
    .post(`${baseUrl}/api/users/login`, { user: loginObject })
    .then(function (response) {
      result = response.data;
    })
    .catch(function (error) {
      console.error(error);
    });
  return result;
};
