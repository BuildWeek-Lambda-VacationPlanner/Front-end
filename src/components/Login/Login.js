import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { withFormik, Form, Field } from 'formik';

const Login = (props) => {
  const [user, setUser] = useState([]);

  const handleSubmit = event => {
    event.preventDefault();
    console.log("Login", user);
  
  };

  useEffect(() => {
    axios
      .get('https://vacation-planner-bw.herokuapp.com/api/users/login')
      .then(reslog => {
        console.log("Login Response", reslog)
        // setUser(reslog.data.results)
      })
      .catch(errlog => {
        console.log('Login Error', errlog)
      })
  }, []);

  return(
    <div className="login">
      {console.log(user)}
      <Form>
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
      <Link to='/dashboard/card'>
        <button>Login</button>
      </Link>
      <Link to='/register'>
        <button>Register</button>
      </Link>
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