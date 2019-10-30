import { combineReducers } from "redux-immutable";

import { todolist } from "../components/TodoList/store";
import { home } from '../components/Home/store'

const reducer = combineReducers({
    home,
    todolist
})

export default reducer