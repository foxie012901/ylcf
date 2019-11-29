import { combineReducers } from "redux-immutable";

import { todolist } from "../components/TodoList/store";
import { home } from "../components/Home/store";
import {shangjia} from "../components/ShangJia/store";
import {login} from "../components/Login/store";
import {shangjialist} from "../components/ShangjiaList/store";
import {shoplistpicker} from "../components/ShopListPicker/store";
import { bindcar } from "../components/BindCar/store";
import { mailroll } from '../components/MailRoll/store';
import { my } from "../components/My/store";
import {shangjiamessage} from "../components/ShangJiaMessage/store";
import {reserveproject} from "../components/ReserveProject/store";
import {childservicesdetailstitle} from '../components/ChildServicesDetailsTitle/store';
import {childservicesdetails} from '../components/ChildServicesDetails/store';
const reducer = combineReducers({
    home,
    todolist,
    shangjia,
    login,
    shangjialist,
    shoplistpicker,
    bindcar,
    mailroll,
    my,
    shangjiamessage,
    reserveproject,
    childservicesdetailstitle,
    childservicesdetails
})

export default reducer