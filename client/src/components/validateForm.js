export default function validateForm(values) {
  let errors = {};
  let date = new Date();

  // Card Number input validation
  if (!values.number) {
    errors.number = "*Card Number Is Required";
  } else if (values.number.length != 16) {
    errors.number = "*Card Number Must Be 16 Digits";
  }

  // exp date input validation
  if (!values.exp) {
    errors.exp = "*Expiration Date Required";
  }
  // create a validate logic if statement to ensure the date is greater than today's date

  // ccv validaiton
  if (!values.cvc) {
    errors.cvc = "*CVC/CVV Is Required";
  } else if (values.cvc.length > 4) {
    errors.cvc = "*CVC/CVV Can Only Be 3 or 4 Digits ";
  }

  if (!values.name) {
    errors.name = "*Cardholder's Name Is Required";
  }

  return errors;
}
