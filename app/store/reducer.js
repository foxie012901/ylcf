import { combineReducers } from "redux-immutable";

import { todolist } from "../components/TodoList/store";
import { home } from "../components/Home/store";
import {shangjia} from "../components/ShangJia/store";
import {login} from "../components/Login/store";
const reducer = combineReducers({
    home,
    todolist,
    shangjia,
    login
})

export default reducer
