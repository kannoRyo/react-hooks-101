import React ,{useContext}from 'react'

import AppContext from '../context/AppContext'
import Event from './Event'

const Events = () =>{
    const {state} = useContext(AppContext)
    return(
        <>
            <h4>Events List</h4>
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>TITLE</th>
                    <th>BODY</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {
                    state.events.map((event, index) => {return(<Event event={event} key={index} />)}) 
                }
                 </tbody>
             </table>
        </>
    )
}

export default Events