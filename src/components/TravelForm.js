import React, {useState, useEffect} from 'react'
import {styled} from 'styled-components'
import {withFormik, Form, Field} from 'formik'
import VacationCard from './vacationCard.js'
import axios from 'axios'

const TravelForm = ({status}) => {
    const [vacations, setVacations] = useState([])
    const addDestination = () =>{

    }
    const addActivity = () => {

    }
    useEffect(()=>{
        if(status) {
            setVacations([...vacations, status])
        }
    }, [status])
    vacations.map(vacation=>(
        <VacationCard 
            data={vacation}
        />
    ))
    return (
        <>
        <Form>
            <h1>Add Your Vacation Details</h1>
            <div className='forms'>
                <label>
                    <span>Destination/s  </span>
                    <Field type='text' name='destination'/>
                    <button onClick={addDestination}>+</button> 
                </label><br/>
                <label>
                    <span>Date Range:  </span>
                    <Field type='date' name='startRange' /> to <Field type='date' name='endRange'/>    
                </label><br/>
                <label>
                    <span>Anticipated Cost: </span>
                    <Field type='number' name='cost'/>
                </label>
                <h3>Activities</h3>
                <Field type='text' name='activity'/><button>+</button>
                <h3>Notes</h3>
                <Field type='text' name='description'/>
            </div>
            <button type='submit'>Add Vacation</button>
        </Form>
        <div>
            {vacations.map(vacation=>(
                <VacationCard 
                    data={vacation}
                />
            ))}
        </div>
        </>
    )
}



export default withFormik({
    mapPropsToValues: (values) => {
        return{
            destination: values.destination || '',
            startRange: values.startRange || '',
            endRange: values.endRange || '',
            cost: values.cost || '',
            activity: values.activity || '',
            description: values.description || '',
        }
    }, 
    handleSubmit: (values, {setStatus})=>{
        console.log(values)
        axios.post('https://reqres.in/api/vacations', values)
            .then((res)=>{
                setStatus(res.data)
                
            })
            .catch((err)=> {
                console.log(err)
            }) 
    }
})(TravelForm)