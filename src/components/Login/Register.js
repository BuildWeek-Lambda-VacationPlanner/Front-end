import React, { useState } from 'react';
import axios from 'axios';
import { withFormik, Form, Field } from 'formik';

import styled from 'styled-components';

const Register = () => {
  const [newUsers, setNewUsers] = useState({
    username: null,
    password: null,
    token: null
  });

  const handleSubmit = event => {
    event.preventDefault();
    axios
      .get('https://vacation-planner-bw.herokuapp.com/api/users/register',newUsers)
      .then(resreg => {
        console.log("Register Response", resreg)
      })
      .catch(errreg => {
        console.log('Register Error', errreg)
      })
  };

  return(
    <section className="register">
        <div>
          <p>Please add your username and password to register below!</p>
        {/* TODO: add alert for both fields, validate user input */}
          <Form>
            <Field 
              type='text' 
              name='username'
              placeholder='Username'
              // value={newInputs.username}
              // onChange={handleChanges}
            />
            <Field 
              type='password'
              name='password'
              placeholder='password'
              // value={newInputs.password}
              // onChange={handleChanges}
            />
          </Form>
            <SubmitBtn onClick={handleSubmit}>Submit</SubmitBtn>
        </div>
    </section>
  );
};

export default withFormik({
  mapPropsToValues: (items) => {
    return {
      username: items.username || '',
      password: items.password || ''
    }
  }
})(Register);

const SubmitBtn = styled.button`
  text-decoration: none;
  font-size: 1rem;
  border-radius: .5rem;
  background: #e77727;
  color: whitesmoke;
`;