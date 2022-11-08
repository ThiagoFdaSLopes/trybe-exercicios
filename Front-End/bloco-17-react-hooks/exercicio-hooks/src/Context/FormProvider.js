import FormContext from "./FormContext";
import React, { useState } from 'react';

function FormProvider({ children }){
  const [newUser, setNewUsers] = useState([]);

  const addNewUser = (n) => {
    console.log(n)
    setNewUsers([...newUser, n])
  }

  return (
    <FormContext.Provider value={{ newUser, addNewUser}}>
      { children }
    </FormContext.Provider>
  )
}

export default FormProvider;