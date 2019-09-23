import React from 'react'
import styled from 'styled-components'

import {withFormik, Form, Field} from 'formik'
import axios from 'axios'
import {Link} from 'react-router-dom';

const Dashboard = (props) => {
    const DashboardContainer = styled.div`
        width: 70%;
        margin-left: 15%
    `
    const TopBox = styled.div`
        border: 3px solid black;
        width: 100%;
    `
    const CommentBox = styled.div`
        border-bottom: 3px solid white;
        border-left: 3px solid white;
        border-right: 3px solid white;
        width: 100%;
        border-radius: 5px;
        padding-top: 1rem;
        padding-bottom: .5rem;
        background-color: grey;
    `
    const SubmitButton = styled.button`
        font-size: 1rem;
        border-radius: .5rem;
        font-family: 'Oswald', sans-serif;
        margin-right: 1rem;
        background-color: black;
        color: white
    `
    const Span = styled.span`
        color: white;
        font-family: 'Oswald', sans-serif;
        font-size: 1.1rem
    `
    return (
        <DashboardContainer>
            <h1>Your Current Vacations 🏖️</h1>
                <TopBox>
                    <Link to={`/card/:id`}><h1 className='destinationTitle'>Vacation to {props.vacation}, on {props.startRange} til {props.endRange} </h1></Link>

                </TopBox>
                <CommentBox>
                    <Form>
                        <label>
                            <Span>Add User:  </Span>
                            <Field type='text' name='addUser' placeHolder='Type User Here'/> <SubmitButton type='submit'>Add</SubmitButton>  
                        </label>
                            <Span>Add Comment:  </Span>
                            <Field type='text' name='comment' placeHolder='Type Comments Here'/> <SubmitButton type='submit'>Submit</SubmitButton>
                    </Form>
                    
                </CommentBox>
                

        </DashboardContainer>
    )
}



export default withFormik({
    mapPropsToValues: (values) => {
        return{
            addUser: values.addUser || '',
            comment: values.comment || '',
        }
    },
    handleSubmit: (values, {setStatus})=> {
        console.log(values)
        axios.post('https://vacation-planner-bw.herokuapp.com/api/vacations', values)
            .then((res)=>{
                setStatus(res.data)
                
            })
            .catch((err)=> {
                console.log(err)
            }) 
    }
})(Dashboard)
