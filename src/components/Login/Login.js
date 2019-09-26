import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

import { withFormik, Form, Field } from 'formik';

const Login = (props) => {
  const [users, setUsers] = useState([]);
  const [inputs, setInputs] = useState({
    username: '',
    password: ''
  });

  const handleSubmit = event => {
    event.preventDefault();
    console.log("Login", users);
    axios
      .post('https://vacation-planner-bw.herokuapp.com/api/users/login', inputs)
      .then(reslog => {
        console.log("Login Response", reslog)
        setUsers(reslog.data.results)
        props.history.push('/dashboard/card')
      })
      .catch(errlog => {
        console.log('Login Error', errlog)
      })
  };

  const handleChanges = event => {
    setInputs({...inputs, [event.target.name]: event.target.value})
  }

  useEffect(() => {
    if (props.status) {
      setUsers([...users, props.status])
    }

    console.log("Login Props", props);
    axios
      .post('https://vacation-planner-bw.herokuapp.com/api/users/login')
      .then(reslog => {
        // console.log("Login Response", reslog)
        setUsers(reslog.data.results)
      })
      .catch(errlog => {
        console.log('Login Error', errlog)
      })
  }, [props.status]);

  return(
    <section className="login">
        <div>
          <Form>
            <Field 
              type='text' 
              name='username'
              placeholder='Username'
              value={inputs.username}
              onChange={handleChanges}
            />
            <Field 
              type='password'
              name='password'
              placeholder='password'
              value={inputs.password}
              onChange={handleChanges}
            />
          </Form>
            <button onClick={handleSubmit}>Login</button>
          <Link to='/register'>
            <button>Register</button>
          </Link>
        </div>
    </section>
  );
};

const loginWithRouter = withRouter(Login);

export default withFormik({
  mapPropsToValues: (info) => {
    return {
      username: info.username || '',
      password: info.password || ''
    }
  }
})(loginWithRouter);