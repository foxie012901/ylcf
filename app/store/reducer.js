import { combineReducers } from "redux-immutable";

import { home } from "../components/Home/store";

const reducer = combineReducers({
    home:home
})

export default reducer