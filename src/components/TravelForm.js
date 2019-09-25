
import React, {  useState, useEffect } from 'react'
import styled from 'styled-components'
import {withFormik, Form, Field} from 'formik'
import VacationCard from './VacationCard.js'
import axios from 'axios'
import * as yup from 'yup';
import '../travelForm.css'

const TravelForm = ({status, touched, errors}) => {
    const [vacations, setVacations] = useState([])
    const addDestination = () =>{
    
    }
    const addActivity = () => {

    }
    const Button = styled.button`
        font-size: 1rem;
        border-radius: .5rem;
        font-family: 'Oswald', sans-serif;
    `
    useEffect(()=>{
        if(status) {
            setVacations([...vacations, status])
        }
    }, [status])
    return (
        <div className='container'>
        <Form>
            <h1>Add Your Vacation Details 🔆</h1>
            <div className='forms'>
                <label>
                    <span className='label'>Destination:  </span>
                    <Field className='form' type='text' name='destination'/>
                    <Button onClick={addDestination}>+</Button>
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
                <Field type='text' className='form' name='activity'/><Button>+</Button>
                <h3>Description</h3>
                <Field type='textarea' className='form' name='description'/>
                {touched.description && errors.description && <p className='error'>{errors.description}</p>}
            </div>
            <Button className='submit' type='submit'>Add Vacation</Button>
        </Form>
        <div>
            {vacations.map(vacation=>(
                <VacationCard 
                destination={vacation.destination} 
                start_date={vacation.start_date}
                end_date={vacation.end_date}
                description={vacation.description}
                cost={vacation.cost}
                />
            ))}
        </div>
        </div>
    )
}



export default withFormik({
    mapPropsToValues: (values) => {
        return{
            destination: values.destination || '',
            user_id: 'jane',
            start_date: values.start_date || '',
            end_date: values.end_date || '',
            cost: values.cost || '',
            activities: values.activity || '',
            // description: values.description || '',
        }
    }, 
    validationSchema: yup.object().shape({
        destination: yup.string().required('✔️Destination Field Must Be Filled Out'),
        start_date: yup.string().required('✔️Start Field Must Be Filled Out'),
        end_date: yup.string().required('✔️End Field Must Be Filled Out'),
        description: yup.string().required('✔️Description Must Be Filled Out')
    }),
    handleSubmit: (values, {setStatus})=>{
        console.log(values)
        axios.post('https://vacation-planner-bw.herokuapp.com/api/vacations', values)
            .then((res)=>{
                setStatus(res.data)
                
            })
            .catch((err)=> {
                console.log(err)
            }) 
    }
})(TravelForm)