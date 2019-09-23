import React from 'react';
import { Form, Field } from 'formik';

const Register = () => {
  return(
    <div>
      <Form>
        {/* TODO: add alert for both fields, validate user input */}
        <Field 
          type='email' 
          name='email' 
          placeholder='example@blank.com' 
        />
        <Field 
          type='password'
          name='password'
          placeholder='password'
        />
      </Form>
    </div>
  );
};

export default Register;