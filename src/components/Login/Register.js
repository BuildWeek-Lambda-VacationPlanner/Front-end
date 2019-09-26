import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

import { withFormik, Form, Field } from 'formik';

const Register = (props) => {
  const [newUsers, setNewUsers] = useState({
    "username": '',
    "password": ''
  });

  const handleSubmit = event => {
    event.preventDefault();
    console.log("Register", newUsers);
    axios
      .post('https://vacation-planner-bw.herokuapp.com/api/users/register', newUsers)
      .then(reslog => {
        console.log("Register Response", reslog)
        setNewUsers(reslog.data.results)
        props.history.push('/dashboard')
      })
      .catch(errlog => {
        console.log('Register Error', errlog)
      })
  };

  const handleChanges = event => {
    setNewUsers({...newUsers, [event.target.name]: event.target.value})
  }

  useEffect(() => {
    if (props.status) {
      setNewUsers([...newUsers, props.status])
    }

    console.log("Register Props", props);
    axios
      .post('https://vacation-planner-bw.herokuapp.com/api/users/register')
      .then(reslog => {
        // console.log("Register Response", reslog)
        setNewUsers(reslog.data.results)
      })
      .catch(errlog => {
        console.log('Register Error', errlog)
      })
  }, [props.status]);

  return(
    <section className="login">
        <div>
        {/* TODO: add alert for both fields, validate user input */}
          <Form>
            <Field 
              type='text' 
              name='username'
              placeholder='Username'
              value={newUsers.username}
              onChange={handleChanges}
            />
            <Field 
              type='password'
              name='password'
              placeholder='password'
              value={newUsers.password}
              onChange={handleChanges}
            />
          </Form>
            <button onClick={handleSubmit}>Submit</button>
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