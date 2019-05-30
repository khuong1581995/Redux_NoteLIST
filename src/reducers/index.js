import { combineReducers } from 'redux';
import text from './text'
import tasks from './tasks'


const myReducer = combineReducers({
    text,
    tasks
})
export default myReducer;