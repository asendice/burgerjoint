export default function validateDeliveryForm(values) {
  let errors = {};
  let numberRegex = new RegExp("^[0-9]+$");

  // first Name validation
  if (!values.first) {
    errors.first = "*First Name is Required";
  }
  // last Name validation
  if (!values.last) {
    errors.last = "*Last Name is Required";
  }
  // ptn validation
  if (!values.ptn) {
    errors.ptn = "*Phone Number is Required";
  }
  // address validation
  if (!values.address) {
    errors.address = "*Address is Required";
  }
  // city validation
  if (!values.city) {
    errors.city = "*City is Required";
  }
  // state validation
  if (!values.state) {
    errors.state = "*State is Required";
  }
  // zip validation
  if (!values.zip) {
    errors.zip = "*Postal Code is Required";
  }

  return errors;
}
