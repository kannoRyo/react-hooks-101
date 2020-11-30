import React from 'react'

import {DELETE_EVENT} from '../actions/index'

const Event = ({event, dispatch}) => {
    const deleteEvent = (e) =>{
        if(!window.confirm(`Do you realy delete this event? (id=${event.id})`)){
            return
        }
                  
        e.preventDefault()

        dispatch({
            type: DELETE_EVENT,
            id: event.id
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