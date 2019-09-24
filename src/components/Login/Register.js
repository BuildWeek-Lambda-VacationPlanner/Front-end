import React, { useState } from 'react';
import { Form, Field } from 'formik';

const Register = () => {
  const [newUser, setNewUser] = useState({
    "username": '',
    "password": ''
  });

  return(
    <div>
      <Form>
        {/* TODO: add alert for both fields, validate user input */}
        <Field 
          type='text' 
          name='username' 
          placeholder='Username'  
        />
        <Field 
          type='password'
          name='password'
          placeholder='password'
        />
      </Form>
      <button>Submit</button> 
    </div>
  );
};

export default Register;