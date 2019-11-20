import { combineReducers } from "redux-immutable";

import { todolist } from "../components/TodoList/store";
import { home } from "../components/Home/store";
import {shangjia} from "../components/ShangJia/store";
import {login} from "../components/Login/store";
import {shangjialist} from "../components/ShangjiaList/store";
import {shoplistpicker} from "../components/ShopListPicker/store";
const reducer = combineReducers({
    home,
    todolist,
    shangjia,
    login,
    shangjialist,
    shoplistpicker
})

export default reducer
