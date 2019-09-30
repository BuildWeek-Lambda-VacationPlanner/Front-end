import React from 'react'
import DashboardItem from './DashboardItem'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import NavBar from '../NavBar/NavBar';


const Dashboard = (props) => {   
    const Button = styled.button`
        background-color: orange;
        height: 2rem;
        font-size: 1.2rem;
        color: white;
        border: 3px solid orange;
    `
    const Header = styled.h1`
        background-color: #e77727;
        color: white;
        padding-top: 1rem;
        padding-bottom: 1rem;
        border: 1px solid black;
    `
    const Line = styled.h1`
        border-bottom: 2px solid black;
    `

    return (
        <div>
            <div>
                <NavBar />
            </div>
            <Header>{props.userName}'s Current Vacations <span role='img' aria-label='beach'>🏖️</span></Header>
            <Line></Line>
            {props.vacations.map(vacation => <DashboardItem key={vacation.id} destination={vacation.destination} id={vacation.id} start_date={vacation.start_date} end_date={vacation.end_date} /> )}
            <Link to='/newtrip'><Button>Add Trip</Button></Link>
        </div>
    )
}



export default Dashboard
