import React ,{useContext}from 'react'

import {DELETE_EVENT,ADD_OPERATION_LOG} from '../actions/index'
import AppContext from '../context/AppContext'

const Event = ({event}) => {
    const {dispatch} = useContext(AppContext)

    const deleteEvent = (e) =>{
        if(!window.confirm(`Do you realy delete this event? (id=${event.id})`)){
            return
        }
                  
        e.preventDefault()

        dispatch({
            type: DELETE_EVENT,
            id: event.id
        })

        dispatch({
            type: ADD_OPERATION_LOG,
            description: `Delete a event (id = ${event.id})`
        })
    }

    return(
        <tr>
            <td>{event.id}</td>
            <td>{event.title}</td>
            <td>{event.body}</td>
            <td><button className="btn btn-danger" onClick={deleteEvent}>Delete</button></td>
        </tr>
    )
}

export default Event