import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { withFormik, Form, Field } from 'formik';

import styled from 'styled-components';

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
        localStorage.setItem('token', reslog.data.token)
        localStorage.setItem('user', reslog.data.message)
        localStorage.setItem('id', reslog.data.user_id)
        props.history.push('/dashboard')
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
            <LoginBtn onClick={handleSubmit}>Login</LoginBtn>
          <Link to='/register'>
            <LoginBtn>Register</LoginBtn>
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

const LoginBtn = styled.button`
  text-decoration: none;
  font-size: 1rem;
  border-radius: .5rem;
  background: #e77727;
  color: whitesmoke;
  box-shadow: 0 3px 6px #f88a3b, 0 3px 6px #492642;
`;
