import { combineReducers } from "redux-immutable";

import { todolist } from "../components/TodoList/store";
import { home } from "../components/Home/store";
import {shangjia} from "../components/ShangJia/store";

const reducer = combineReducers({
    home,
    todolist,
    shangjia
})

export default reducer
