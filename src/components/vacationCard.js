import React from 'react'
import '../travelForm.css'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import axios from 'axios';

const VacationCard = ({vacations},{id}) => {
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
    const destination = 'California'
    
    const selectedVacation =vacations.filter(vacation => destination === vacation.destination )
    console.log(selectedVacation)
    return (
        <Card>
            <h1>Your Trip to {selectedVacation.destination}</h1>
            <InputLabel>Departure Date: {selectedVacation.startRange}</InputLabel>
            <InputLabel>Leaving Day: {selectedVacation.endRange}</InputLabel>
            <InputLabel>Planned Activities: {selectedVacation.activity}</InputLabel>
            <InputLabel>Approximate Cost: {selectedVacation.cost}</InputLabel>
            <InputLabel>Description: {selectedVacation.description}</InputLabel>
            <InputLabel>Comments: {selectedVacation.comments}</InputLabel>
            <Link to='/newTrip'><Edit>Edit Details</Edit></Link>

        </Card>
    )
}


export default VacationCard
