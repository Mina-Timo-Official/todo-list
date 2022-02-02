
const initState = {
    todos:[],
    isLoading:undefined,
    error:undefined,
    modelVisable:false
}

export function todoReducer(state=initState, action){
    switch(action.type){
        case 'ADD_TODO':
            // console.log(state, action.payload)
            return {
                ...state,
                todos:[...state.todos, action.payload]
            }
        case 'CHANGE_VISBILE':
            return {
                ...state,
                modelVisable: !state.modelVisable
            }

        // case todoActions.ADD_TODO:
        //     return {
        //         ...state,
        //         todos:[...state.todos, action.payload]
        //     }
        default:
            return state
    }
}

// const todoReducers = combineReducers(todoReducer)

// export default todoReducers;