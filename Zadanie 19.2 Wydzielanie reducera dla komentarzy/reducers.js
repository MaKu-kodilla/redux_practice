import { combineReducers } from 'redux';
import comments from './comments.js';
import users from './users.js'

const initialState = {
    comments: [],
    users: []
}
const app = combineReducers({
    comments
});