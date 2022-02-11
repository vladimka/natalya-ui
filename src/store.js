import { createStore } from "redux";

const initialState = {
    messages : []
}

function reducer(state = initialState, action){
    switch(action.type){
        case 'APPEND_MESSAGE':
            return { messages : [...state.messages, action.message] }
        default:
            return state;
    }
}

export default createStore(reducer)