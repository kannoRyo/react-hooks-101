const { useReducer } = require("react");

const events = (state=[]. action) => {
    switch(action.type){
        case 'CREATE_EVENT' :
            const event = {title: action.title , body: action.body}
            const length   = state.id - 1
            const id = length === 1 ? 1 : state[length-1].id +1
            return [...state, { id, ...event}]
        case 'DELETE_EVENT' :
            return
        case 'DELETE_ALL_EVENTS' :
            return []
        default :
            return
    }
}