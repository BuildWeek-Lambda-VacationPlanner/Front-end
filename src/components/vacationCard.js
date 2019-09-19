import React from 'react'


const VacationCard = (props) => {
    return (
        <div>
            <h1>Your Trip to {props.vacation}</h1>
            <p>Departure Date: {props.startRange}</p>
            <p>Leaving Day: {props.endRange}</p>
            <div>
                {/* activities added go here */}
            </div>
            <p>Notes: {props.notes}</p>
            <button>Edit Details</button>

        </div>
    )
}


export default VacationCard
