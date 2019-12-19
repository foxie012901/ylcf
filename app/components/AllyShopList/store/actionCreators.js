import { actionTypes } from "./";
import { fromJS } from "immutable";

export const initAllyShopListJson = Json =>({
    type:actionTypes.INIT_SHOP_LIST_JSON,
    Json
})