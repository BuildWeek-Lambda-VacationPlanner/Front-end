import React, {useEffect, useState} from 'react'
import axios from 'axios'
import VacationCardItem from './VacationCardItem'
import styled from 'styled-components'

function VacationCard(props) {

  const Comment = styled.p `
  font-family: 'Oswald', sans-serif;
  font size: 1.3rem;
  `
    const destination = props.match.params.id
    const vacationId = Number(destination)
    console.log(props)
    const [comments, setComments] = useState([])
    const token = localStorage.getItem('token')
    console.log(token)
    useEffect((token)=>{
        axios.get('https://vacation-planner-bw.herokuapp.com/api/vacations/comments', {headers: {'Authorization' : token }})
          .then(res=> {
            setComments(res.data)
          })
          .catch(err=> {
            console.log(err)
          })
    },[])
    console.log(vacationId)
    const selectedVacation = props.vacations.filter(vacation => vacationId === vacation.id )
    console.log(selectedVacation)
    const selectedComments = comments.filter(comment => vacationId === comment.vacations_id)
    console.log(selectedComments)
    return (
        <div>

            {selectedVacation.map(vacation => <VacationCardItem key={vacation.id} id={vacation.id} destination={vacation.destination} start_date={vacation.start_date} end_date={vacation.end_date} description={vacation.description} cost={vacation.cost} activities={vacation.activities} />)}
            {selectedComments.map(comment => 
            <div>
                <Comment key={comment.id}>{comment.comment}</Comment>
            </div>)}
        </div>
    )
}
export default VacationCard
