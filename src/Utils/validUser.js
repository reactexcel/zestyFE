//Check if valid user is Registering

export const isValidUser = (signUp) => {
  const {
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
  } = signUp;
  if (
    firstName !== "" &&
    lastName !== "" &&
    email !== "" &&
    password !== "" &&
    confirmPassword !== "" &&
    confirmPassword === password
  ) {
    return true;
  } else {
    return false;
  }
};
