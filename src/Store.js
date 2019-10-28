import React from 'react'
import io from 'socket.io-client'

export const CTX = React.createContext();

const initialState= {
    general: [
        {from: 'bot', msg: 'Send a Message'}
    ],
    topic2: [
        {from: 'bot', msg: 'Send a Message'}
    ],
}

function reducer(state, action){
    const { from, msg, topic } = action.payload
    switch(action.type){
        case 'RECEIVE MESSAGE':
            return {
                ...state,
                [topic]: [
                    ...state[topic],
                    {from, msg}
                ]
            }
        default:
         return state
    }
}

const sendChatAction = (value) => {
    socket.emit('chat message', value)
}

let socket

function Store(props) {
    const [allChats, dispatch] = React.useReducer(reducer, initialState);
    if(!socket) {
        socket = io(':3001')
        socket.on('chat message', msg => {
            dispatch({type: 'RECEIVE MESSAGE', payload: msg})
        })
    }
    const user = 'MyName'+ Math.random(1,10)
    return (
        <CTX.Provider value={{allChats, sendChatAction, user}}>
            {props.children}
        </CTX.Provider>
    )
}

export default Store
