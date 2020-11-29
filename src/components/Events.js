import React from 'react'

import Event from './Event'

const Events = ({state, dispatch}) =>{
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
                    state.map((event, index) => {return(<Event event={event} dispatch={dispatch} key={index} />)}) 
                }
                 </tbody>
             </table>
        </>
    )
}

export default Events