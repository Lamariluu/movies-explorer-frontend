//import { useState, useCallback } from 'react';

//const useForm = () => {
//  const [formState, setFormState] = useState({
//    values: {},
//    errors: {},
//    isFormValid: false,
//  });

//  const handleChange = (event) => {
//    const name = event.target.name;
//    const value = event.target.value;

//    setFormState((prevFormState) => ({
//      ...prevFormState,
//      values: {
//        ...prevFormState.values,
//        [name]: value,
//      },
//      errors: {
//        ...prevFormState.errors,
//        [name]: event.target.validationMessage,
//      },
//      isFormValid: event.target.closest('form').checkValidity(),
//    }));
//  };

//  const resetForm = useCallback(
//    (newValues = {}, newErrors = {}, newIsFormValid = false) => {
//      setFormState({
//        values: newValues,
//        errors: newErrors,
//        isFormValid: newIsFormValid,
//      });
//    },
//    []
//  );

//  return {
//    values: formState.values,
//    errors: formState.errors,
//    handleChange,
//    isFormValid: formState.isFormValid,
//    resetForm,
//  };
//};

//export default useForm;


import { useState, useCallback } from 'react';

const useForm = () => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setValues({
      ...values,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: event.target.validationMessage,
    });

    setIsFormValid(event.target.closest('form').checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsFormValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsFormValid(newIsFormValid);
    },
    [setValues, setErrors, setIsFormValid]
  );

  return {
    values,
    errors,
    handleChange,
    isFormValid,
    resetForm,
  };
};

export default useForm;