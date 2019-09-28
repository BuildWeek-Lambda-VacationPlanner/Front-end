import React, {useEffect, useState} from 'react'
import axios from 'axios'
import VacationCardItem from './VacationCardItem'


function VacationCard(props) {
    const destination = props.match.params.id
    const vacationId = destination
    console.log(props)
    const [comments, setComments] = useState([])
    const token = localStorage.getItem('token')
    useEffect(()=>{
        axios.get('https://vacation-planner-bw.herokuapp.com/api/vacations/comments', {headers: {'Authorization' : token }})
          .then(res=> {
            setComments(res.data)
          })
          .catch(err=> {
            console.log(err)
          })
    },[])
    
    const selectedVacation = props.vacations.filter(vacation => destination == vacation.id )
    console.log(selectedVacation)
    const selectedComments = comments.filter(comment => vacationId == comment.vacations_id)
    console.log(selectedComments)
    return (
        <div>
            {selectedVacation.map(vacation => <VacationCardItem id={vacation.id} destination={vacation.destination} start_date={vacation.start_date} end_date={vacation.end_date} description={vacation.description} cost={vacation.cost} activities={vacation.activities} key={vacation.destination}/>)}
            {selectedComments.map(comment => 
            <div>
                <p>{comment.comment}</p>
            </div>)}
        </div>
    )
}

export default VacationCard
