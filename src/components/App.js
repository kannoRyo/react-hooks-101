import React ,{useReducer,useState} from 'react'
import reducer from '../reducers'

const App = () => {
  const [state, dispatch] = useReducer(reducer,[])
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const addEvent = (e) =>{
    e.preventDefault()

    console.log(title)
    console.log(body)

    dispatch({
      type: 'CREATE_EVENT',
      title,
      body
    }) 

  }
  
  console.log({state})
  return (
    <>
    <div className="container-fluid">
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

      <button className="btn btn-primary" onClick={addEvent}>Create Event</button>
      <button className="btn btn-danger">Delete Event</button>

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
        </tbody>
      </table>
    </div>
    </>
  );
}

export default App;
