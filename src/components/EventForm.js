import React , {useState}from 'react'

import {
  CREATE_EVENT,
  DELETE_ALL_EVENTS
} from '../actions/index'

const EventForm = ({state,dispatch}) =>{
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
  
    const addEvent = (e) =>{
      e.preventDefault()
  
      console.log(title)
      console.log(body)
  
      dispatch({
        type: CREATE_EVENT,
        title,
        body
      })
  
      setTitle('')
      setBody('')
  
    }
  
    const deleteAllEvent = (e) =>{
      if(!window.confirm('Do you realy delete all events?')){
        return
      }
  
      e.preventDefault();
      dispatch({
        type: DELETE_ALL_EVENTS,
      })
    }
    return(
    <>
        <h4>Form for Creating Event</h4>
        <form>
        <div className="form-group">
        <label htmlFor="formEventTitle">Title</label>
        <input type="text" class="form-control" id="formEventTitle" value={title}  onChange={e => setTitle(e.target.value)}/>
        </div>
        <div className="form-group">
        <label htmlFor="formEventBody">Body</label>
        <input type="text" class="form-control"　id="formEventBody" value={body}  onChange={e => setBody(e.target.value)}/>
        </div>
        </form>

        <button className="btn btn-primary" onClick={addEvent} disabled={title === '' || body === ''}>Create Event</button>
        <button className="btn btn-danger" onClick={deleteAllEvent} disabled={!(state.length)}>Delete All Event</button>
    </>
    )
}

export default EventForm