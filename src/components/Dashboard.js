import React from 'react'
import DashboardItem from './DashboardItem'

const Dashboard = (props) => {
    
    
    return (
        <div>
            <h1>Your Current Vacations 🏖️</h1>
            {props.vacations.map(vacation => <DashboardItem destination={vacation.destination} id={vacation.id} start_date={vacation.start_date} end_date={vacation.end_date} /> )}
        </div>
    )
}



export default Dashboard
