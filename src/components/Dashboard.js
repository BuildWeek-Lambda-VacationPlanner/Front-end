import React from 'react'
import styled from 'styled-components'
import {withFormik, Field} from 'formik'
import {Link} from 'react-router-dom';

const Dashboard = (props) => {
    const displayCommentForm = () => {
        const commentForm = <Field/>
        return 
    }

    return (
        <div>
            <div>
                {/* ON this ptag a click event will be used to open a full view of the vacation */}
                <Link to={`/vacations/:id`}>Vacation to {props.vacation}, on {props.startRange} to {props.endRange}</Link>
                <div>
                    {/* this will be a bar accross where a like button, comment button with a click event that opens a form to comment and an add user component */}
                    <button>Like button</button>
                    <button onClick={displayCommentForm}>Comment button</button>
                    <label>
                        <span>Type User to Add Here</span>
                        <Field type='text' name='addUser' placeHolder='Type User Here'/>  
                    </label>
                    
                </div>
            </div>
        </div>
    )
}



export default withFormik({
    mapPropsToValues: (values) => {
        return{
            addUser: values.addUser || '',
        }
    },
    handleSubmit: (values)=> {
        console.log(values)
    }
})(Dashboard)
