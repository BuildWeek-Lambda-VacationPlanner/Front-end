import React from 'react'
import '../travelForm.css'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const VacationCardItem = ({destination, start_date, end_date, description, cost, activities, messages }) => {
    const InputLabel = styled.p`
        font-size: 1.2rem;
        font-family: 'Oswald', sans-serif;
    `
    const Return = styled.button`
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
            <h1>Your Trip to {destination}</h1>
            <InputLabel>Departure Date: {start_date}</InputLabel>
            <InputLabel>Leaving Day: {end_date}</InputLabel>
            <InputLabel>Planned Activities: {activities}</InputLabel>
            <InputLabel>Approximate Cost: ${cost}</InputLabel>
            <InputLabel>Description: {description}</InputLabel>
            <InputLabel>Messages: {messages}</InputLabel>
            <Link to='/dashboard'><Return>Back to dashboard</Return></Link>
        </Card>
    )
}


export default VacationCardItem
