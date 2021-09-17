export default function validateForm(values) {
  let errors = {};
  let date = new Date();
  let numberRegex = new RegExp("^[0-9]+$");

  // Card Number input validation
  if (!values.number) {
    errors.number = "*Card Number Is Required";
  } else if (values.number.length !== 16) {
    errors.number = "*Card Number Must Be 16 Digits";
  } else if (!values.number.match(numberRegex)) {
    errors.number = "*Card Number Must Contain Only Numbers";
  }
  // exp date input validation
  if (!values.exp) {
    errors.exp = "*Expiration Date Required";
  }
  // TODO: create a validate logic if statement to ensure the date is greater than today's date
  // ccv validaiton
  if (!values.cvc) {
    errors.cvc = "*CVC/CVV Is Required";
  } else if (values.cvc.length > 4) {
    errors.cvc = "*CVC/CVV Can Only Be 3 or 4 Digits ";
  } else if (!values.cvc.match(numberRegex)) {
    errors.cvc = "*CVC/CVV Must Contain Only Numbers";
  }
  // name validation
  if (!values.name) {
    errors.name = "*Cardholder's Name Is Required";
  }

  if (!values.first) {
    errors.first = "*First Name is Required";
  }

  return errors;
}
