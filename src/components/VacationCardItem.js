import React from 'react'
import '../travelForm.css'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const VacationCardItem = ({destination, start_date, end_date, description, cost, activities, comments }) => {
    const InputLabel = styled.p`
        font-size: 1.2rem;
        font-family: 'Oswald', sans-serif;
        color: white;
    `
    const Bold = styled.span`
        font-size: 1.3rem;
        color: black
    `
    const Destination = styled.span`
        color: silver;
        border: black;
        -webkit-text-stroke: 1px black;
    `
    const Return = styled.button`
        font-size: 1rem;
        border-radius: .5rem;
        font-family: 'Oswald', sans-serif;
        background-color: black;
        color: white;   
    `
    const Card = styled.div`
        border: 5px solid black;
        width: 60%;
        margin-left: 17%;
        margin-top: 1rem; 
        margin-bottom: 1rem;
        padding: 3%;
        background-color: #f5ab16;
    `
    const CommentsHeader = styled.h1`
        width: 40%;
        margin-left: 30%;
        background-color: black;
        color: white;
        font-family: 'Oswald', sans-serif;
    `
    console.log(comments)
    return (
        <>
        <Card>
            <h1>Your Trip to <Destination>{destination}</Destination></h1>
            <InputLabel><Bold>Departure Date:</Bold> {start_date}</InputLabel>
            <InputLabel><Bold>Leaving Day:</Bold> {end_date}</InputLabel>
            <InputLabel><Bold>Planned Activities:</Bold> {activities}</InputLabel>
            <InputLabel><Bold>Approximate Cost:</Bold> ${cost}</InputLabel>
            <InputLabel><Bold>Description:</Bold> {description}</InputLabel>
            <Link to='/dashboard'><Return>Back to dashboard</Return></Link>
        </Card>
        <CommentsHeader>Your Comments</CommentsHeader>
        </>
    )
}



export default VacationCardItem
