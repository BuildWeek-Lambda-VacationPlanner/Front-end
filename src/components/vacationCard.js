import React from 'react'
import '../travelForm.css'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import axios from 'axios';

const VacationCard = (props) => {
    console.log(props)
    const InputLabel = styled.p`
        font-size: 1.2rem;
        font-family: 'Oswald', sans-serif;
    `
    const Edit = styled.button`
        font-size: 1rem;
        border-radius: .5rem;
        font-family: 'Oswald', sans-serif;
        background-color: black;
        color: white;   
    `
    const Card = styled.div`
        border: 2px solid black;
        width: 60%;
        margin-left: 17%;
        margin-top: 4rem; 
        margin-bottom: 4rem;
        padding: 3%;
    `

    return (
        <Card>
            <h1>Your Trip to {props.destination}</h1>
            <InputLabel>Departure Date: {props.startRange}</InputLabel>
            <InputLabel>Leaving Day: {props.endRange}</InputLabel>
            <InputLabel>Planned Activities: {props.activity}</InputLabel>
            <InputLabel>Approximate Cost: {props.cost}</InputLabel>
            <InputLabel>Description: {props.description}</InputLabel>
            <InputLabel>Comments: {props.comments}</InputLabel>
            <Link to='/newTrip'><Edit>Edit Details</Edit></Link>

        </Card>
    )
}


export default VacationCard
