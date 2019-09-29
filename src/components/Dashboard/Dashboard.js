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
    return (
        <div>
            <div>
                <NavBar />
            </div>
            <h1>{props.userName}'s Current Vacations <span role='img' aria-label='beach'>🏖️</span></h1>
            {props.vacations.map(vacation => <DashboardItem key={vacation.destination} destination={vacation.destination} id={vacation.id} start_date={vacation.start_date} end_date={vacation.end_date} /> )}
            <Link to='/newtrip'><Button>Add Trip</Button></Link>
        </div>
    )
}



export default Dashboard
