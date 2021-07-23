import { useState, useEffect } from "react";
const useForm = (initialState, validate, fn) => {
  const [errors, setErrors] = useState({});
  const [fields, setFields] = useState(initialState);
  const [submit, setSubmit] = useState(false);
  useEffect(() => {
    let isMounted = true;
    if (submit) {
      const noErrors = Object.keys(errors).length === 0;
      if (noErrors) {
        fn();
      }
      isMounted && setSubmit(false);
    }
    return () => (isMounted = false);
  }, [submit]);
  const handleChange = (e) => {
    setFields({
      ...fields,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(fields);
    setErrors(validationErrors);
    setSubmit(true);
  };
  return { errors, handleChange, handleSubmit, fields, setFields };
};

export default useForm;
