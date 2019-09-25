import React from 'react'
import VacationCardItem from './VacationCardItem'

function VacationCard(props) {
    const destination = props.match.params.id
    
    const selectedVacation = props.vacations.filter(vacation => destination === vacation.destination )
    return (
        <div>
            {selectedVacation.map(vacation => <VacationCardItem destination={vacation.destination} start_date={vacation.start_date} end_date={vacation.end_date} description={vacation.description} cost={vacation.cost} activities={vacation.activities} comments={vacation.comments} key={vacation.destination} />)}
        </div>
    )
}

export default VacationCard
