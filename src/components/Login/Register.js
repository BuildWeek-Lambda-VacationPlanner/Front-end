import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { withFormik, Form, Field } from 'formik';

import styled from 'styled-components';

const Register = (props) => {
  const [newUsers, setNewUsers] = useState([]);
  const [newInputs, setNewInputs] = ({
    "username": '',
    "password": ''
  });

  const handleSubmit = event => {
    event.preventDefault();
    console.log("Register", newUsers);
    axios
      .post('https://vacation-planner-bw.herokuapp.com/api/users/register', newInputs)
      .then(resreg => {
        console.log("Register Response", resreg)
        setNewUsers(resreg.data.results)
        props.history.push('/dashboard')
      })
      .catch(errreg => {
        console.log('Register Error', errreg)
      })
  };

  const handleChanges = event => {
    setNewInputs({...newInputs, [event.target.name]: event.target.value})
  }

  useEffect(() => {
    if (props.status) {
      setNewUsers([...newUsers, props.status])
    }

    console.log("Register Props", props);
    axios
      .post('https://vacation-planner-bw.herokuapp.com/api/users/register')
      .then(resreg => {
        // console.log("Register Response", reslog)
        setNewUsers(resreg.data.results)
      })
      .catch(errreg => {
        console.log('Register Error', errreg)
      })
  }, [props.status]);

  return(
    <section className="register">
        <div>
        {/* TODO: add alert for both fields, validate user input */}
          <Form>
            <Field 
              type='text' 
              name='username'
              placeholder='Username'
              value={newInputs.username}
              onChange={handleChanges}
            />
            <Field 
              type='password'
              name='password'
              placeholder='password'
              value={newInputs.password}
              onChange={handleChanges}
            />
          </Form>
            <SubmitBtn onClick={handleSubmit}>Submit</SubmitBtn>
        </div>
    </section>
  );
};

const registerWithRouter = withRouter(Register);

export default withFormik({
  mapPropsToValues: (info) => {
    return {
      username: info.username || '',
      password: info.password || ''
    }
  }
})(registerWithRouter);

const SubmitBtn = styled.button`
  text-decoration: none;
  font-size: 1rem;
  border-radius: .5rem;
  background: #e77727;
  color: whitesmoke;
`;