import { useState, useEffect } from "react";

const useDeliveryForm = (validate) => {
  const [values, setValues] = useState({
    first: "",
    last: "",
    ptn: "",
    address: "",
    apt: "",
    city: "",
    state: "",
    zip: "",
    instructions: "",
  });

  const [errors, setErrors] = useState({});


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

  return { handleChange, handleSubmit, values, errors,  };
};

export default useDeliveryForm;
