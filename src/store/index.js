import { combineReducers, createStore } from 'redux';
import todoReducers from '../todo/reducer';

// const rootReducer = combineReducers({
//     todoRoot:todoReducers
// })
  
// const initState = {
//     todos:[],
//     isLoading:undefined,
//     error:undefined,
    
// }

// const store = createStore(rootReducer)


// const store = 
export default createStore(todoReducers)
