import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { withFormik, Form, Field } from 'formik';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    axios
      .get('https://vacation-planner-bw.herokuapp.com/api/users/login')
      .then(reslog => {
        console.log('Login Response', reslog)
      })
      .catch(errlog => {
        console.log('Register Error', errlog)
      })
  }, {});

  return(
    <div className="login">
      <Form>
        <label forhtml="username">Username:</label>
          <Field 
            type='email' 
            name='email' 
            placeholder='example@blank.com' 
          />
        <label forhtml="password">Password:</label>
          <Field 
            type='password'
            name='password'
            placeholder='password'
          />
      </Form>
    </div>
  );
};

export default withFormik({
  mapPropsToValues: (info) => {
    return {
      username: info.username || '',
      password: info.password || ''
    }
  }
})(Login);