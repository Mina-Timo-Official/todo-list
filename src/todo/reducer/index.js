import * as todo from './todo.reducer'
import { combineReducers } from 'redux'


const todoReducers = combineReducers(todo)

export default todoReducers;