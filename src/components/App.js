import React ,{useReducer} from 'react'
import reducer from '../reducers'
import AppContext from '../context/AppContext'

import Events from './Events'
import EventForm from './EventForm'

const App = () => {
  const initialState = {
    events: [] ,
    operationLogs: []
  }
  const [state, dispatch] = useReducer(reducer,initialState)

  return (
    <AppContext.Provider value={{state,dispatch}}>
    <div className="container-fluid">
      <EventForm/>
      <Events/>
    </div>
    </AppContext.Provider>
  )
}

export default App
