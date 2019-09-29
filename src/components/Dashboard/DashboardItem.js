import React from 'react'
import styled from 'styled-components'
import {withFormik, Form, Field} from 'formik'
import {Link} from 'react-router-dom';
import axios from 'axios'
import './dashboard.css'
function DashboardItem({destination, start_date, end_date, id}) {
    const TopBox = styled.div`
        border: 3px solid black;
        width: 100%;
        background-color: orange;
    `
    const SubmitButton = styled.button`
        font-size: 1rem;
        border-radius: .5rem;
        font-family: 'Oswald', sans-serif;
        margin-left: .5rem;
        height: 2rem;
        background-color: black;
        color: white
    `
    const Span = styled.span`
        color: white;
        font-family: 'Oswald', sans-serif;
        font-size: 1.1rem
    `
    const startMonthNYear = start_date.slice(5, 12)
    const startYear = start_date.slice(0,4)
    const startDate = `${startMonthNYear}-${startYear}`

    const endMonthNYear = end_date.slice(5, 12)
    const endYear = end_date.slice(0,4)
    const endDate = `${endMonthNYear}-${endYear}`

    return (
        <div>
            <TopBox>
                <Link to={`/card/${id}`}><h1 className='destinationTitle'>Vacation to {destination}, on {startDate} til {endDate} </h1></Link>

            </TopBox>
            <div className='commentBox'>
                <Form className='dashForm'>
                    <label>
                        <Span className='addUser'>Add User:  </Span>
                        <Field type='text' name='addUser' placeHolder='Type User Here'/>  
                    </label>
                    <SubmitButton type='submit'>Add</SubmitButton> <br></br>
                    <label>
                        <Span>Add Comment:  </Span>
                        <Field type='text' name='comment' placeHolder='Type Comments Here'/> 
                    </label>
                    <SubmitButton type='submit'>Submit</SubmitButton>   
                    
                </Form>
            </div>
        </div>
    )
}

export default withFormik({
    mapPropsToValues: (values) => {
        console.log(values)
        return{
            // addUser: values.addUser || '',
            comment : values.comment  || '',
            vacations_id: values.id
        }
    },
    handleSubmit: (values, vacationId)=> {
        axios.post('https://vacation-planner-bw.herokuapp.com/api/vacations/comments', values, {vacation_id: vacationId.props.id})
            .then((res)=>{
                console.log(res.data)
                
            })
            .catch((err)=> {
                console.log(err)
            }) 
    }
})(DashboardItem)
