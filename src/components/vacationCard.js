import React from 'react'


const VacationCard = (props) => {
    console.log(props)
    return (
        <div>
            <h1>Your Trip to {props.destination}</h1>
            <p>Departure Date: {props.startRange}</p>
            <p>Leaving Day: {props.endRange}</p>
            <div>
                {/* activities added go here */}
            </div>
            <p>Approximate Cost: {props.cost}</p>
            <p>Description: {props.description}</p>
            <button>Edit Details</button>

        </div>
    )
}


export default VacationCard
