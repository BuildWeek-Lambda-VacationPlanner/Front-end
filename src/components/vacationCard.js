import React from 'react'
import TravelForm from './TravelForm.js'

const VacationCard = (props) => {
    console.log(props)
    return (
        <div>
            <h1>Your Trip to {props.data.destination}</h1>
            <p>Departure Date: {props.data.startRange}</p>
            <p>Leaving Day: {props.data.endRange}</p>
            <div>
                {/* activities added go here */}
            </div>
            <p>Approximate Cost: {props.data.cost}</p>
            <p>Description: {props.data.description}</p>
            <button>Edit Details</button>

        </div>
    )
}
<VacationCard/>

export default VacationCard
