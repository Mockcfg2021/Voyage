export default function validate(values) {
  let errors = {};
  //first name and last name should not be empty
  if (!values.userName) {
    errors.userName = "User Name Required";
  } else if (values.userName.length <= 2) {
    errors.userName = "User Name length insufficient ";
  } else if (!/\w/.test(values.userName)) {
    errors.userName =
      "User Name can only contain letters,numbers and underscore";
  }
  if (!values.email) {
    errors.email = "Email address is required";
  } else if (
    !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)
  ) {
    errors.email = "Email address is invalid";
  }
  //password
  if (!values.password) {
    errors.password = "Password is required";
  }
  //the string to be more than 8 chars
  else if (values.password.length < 8) {
    errors.password = "Password length insufficient";
  }

  if (!values.number) {
    errors.number = "Contact Number is required";
  } else if (!/^\d{10}$/.test(values.number)) {
    errors.number = "Contact Number is invalid";
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = "Confirm Password is required";
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = "Passwords don't match";
  }
  return errors;
}
