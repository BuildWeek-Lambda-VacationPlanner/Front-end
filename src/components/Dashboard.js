import React from 'react'
import styled from 'styled-components'
import {withFormik, Form, Field} from 'formik'
import {Link} from 'react-router-dom';

const Dashboard = (props) => {
    const DashboardContainer = styled.div`
        width: 70%;
        margin-left: 15%
    `
    const TopBox = styled.div`
        border: 3px solid black;
        width: 100%;
    `
    const CommentBox = styled.div`
        border-bottom: 3px solid grey;
        border-left: 3px solid grey;
        border-right: 3px solid grey;
        width: 100%;
        border-radius: 5px;
        padding-top: 1rem;
        padding-bottom: .5rem;
    `
    return (
        <Form>
            <DashboardContainer>
                <TopBox>
                    <Link to={`/card/:id`}><h1 className=''>Vacation to {props.vacation}, on {props.startRange} til {props.endRange} </h1></Link>
                    <label>
                        <span>Type User to Add Here:  </span>
                        <Field type='text' name='addUser' placeHolder='Type User Here'/><button>Add</button>  
                    </label>
                </TopBox>
                <CommentBox>
                    <Field type='text' name='comment' placeHolder='Type Comments Here'/> <button>Submit</button>
                </CommentBox>
                

            </DashboardContainer>
        </Form>
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
