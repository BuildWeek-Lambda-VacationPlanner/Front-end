
import React from 'react'
import styled from 'styled-components'
import {withFormik, Form, Field} from 'formik'
import {Link} from 'react-router-dom'
import axios from 'axios'
import * as yup from 'yup';
import '../travelForm.css'

const TravelForm = ({ touched, errors}) => {
    const Button = styled.button`
        font-size: 1rem;
        border-radius: .5rem;
        font-family: 'Oswald', sans-serif;
        background-color: #f5ab16;
        height: 2rem;
        margin: 1rem;
    `

    return (
        <div className='container'>
        
            <Form>
                <div className='form'>
                <h1>Add Your Vacation Details <span aria-label='sun' role='img'>🔆</span></h1>

                    <label>
                        <span className='label'>Destination:  </span>
                        <Field className='form' type='text' name='destination'/>
                        {touched.destination && errors.destination && <p className='error'>{errors.destination}</p>} 
                    </label><br/>
                    <label>
                        <span className='label'>Date Range:  </span>
                        <Field className='form' type='date' placeholder='Start Date' name='start_date' /> <span className='label'>to</span> <Field type='date' name='end_date'/>    
                        {touched.start_date && errors.start_date && <p className='error'>{errors.start_date}</p>}
                        {touched.end_date && errors.end_date && <p className='error'>{errors.end_date}</p>}
                    </label><br/>
                    <label>
                        <span className='label'>Anticipated Cost: </span>
                        <Field className='form' type='number' name='cost'/>
                    </label>
                    <h3>Activities</h3>
                    <Field type='text' className='form' name='activities'/>
                    <h3>Description</h3>
                    <Field component='textarea' className='form' name='description'/>
                    {touched.description && errors.description && <p className='error'>{errors.description}</p>}
                <br></br>
                <Button type='submit'>Add Vacation</Button>
                <Link to='/dashboard'><Button>To Dashboard</Button></Link>
               </div> 
            </Form>
            
        </div>
    )
}



export default withFormik({
    mapPropsToValues: (values) => {
        return{
            destination: values.destination || '',
            user_id: localStorage.getItem('id'),
            start_date: values.start_date || '',
            end_date: values.end_date || '',
            cost: values.cost || 0,
            activities: values.activities || '',
            description: values.description || '',
        }
    }, 
    validationSchema: yup.object().shape({
        destination: yup.string().required('✔️Destination Field Must Be Filled Out'),
        start_date: yup.string().required('✔️Start Field Must Be Filled Out'),
        end_date: yup.string().required('✔️End Field Must Be Filled Out'),
        description: yup.string().required('✔️Description Must Be Filled Out')
    }),
    handleSubmit: (values)=>{
        console.log(values)
        axios.post('https://vacation-planner-bw.herokuapp.com/api/vacations', values)
            .then((res)=>{
                console.log(res.data)
                
            })
            .catch((err)=> {
                console.log(err)
            })
    },
})(TravelForm)