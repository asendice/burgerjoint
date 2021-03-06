import { useState, useEffect } from "react";

const useForm = (validate) => {
  const [values, setValues] = useState({
    number: "",
    exp: "",
    cvc: "",
    name: "",
  });

  const [errors, setErrors] = useState({});
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    
  };

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
