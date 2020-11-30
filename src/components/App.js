import React ,{useReducer,useState} from 'react'
import reducer from '../reducers'
import AppContext from '../context/AppContext'

import Events from './Events'
import EventForm from './EventForm'

const App = () => {
  const [state, dispatch] = useReducer(reducer,[])

  return (
    <>
    <AppContext.Provider value={{state,dispatch}}>
    <div className="container-fluid">
      <EventForm/>
      <Events/>
    </div>
    </AppContext.Provider>
    </>
  )
}

export default App;
