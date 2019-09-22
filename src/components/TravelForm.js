import React from 'react'
import styled from 'styled-components'
import {withFormik, Form, Field} from 'formik'

const TravelForm = () => {
    const addDestination = () =>{

    }
    const addActivity = () => {

    }
    
    return (
        <Form>
            <h1>Add Your Vacation Details</h1>
            <div className='forms'>
                <label>
                    <span>Destination/s  </span>
                    <Field type='text' name='vacation'/>
                    <button onClick={addDestination}>+</button> 
                </label><br/>
                <label>
                    <span>Date Range  </span>
                    <Field type='date' name='startRange' /> to <Field type='date' name='endRange'/>    
                </label>
                <h3>Activities</h3>
                <Field type='text' name='activity'/>
                <h3>Notes</h3>
                <Field type='text' name='notes'/>
            </div>
            <button type='submit'>Add Vacation</button>
        </Form>
    )
}



export default withFormik({
    mapPropsToValues: (values) => {
        return{
            vacation: values.vacation || '',
            startRange: values.startRange || '',
            endRange: values.endRange || '',
            activity: values.activity || '',
            notes: values.notes || '',
        }
    }, 
    handleSubmit: (values)=>{
        console.log(values)
    }
})(TravelForm)