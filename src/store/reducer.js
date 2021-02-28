import { combineReducers } from "redux";
import { reducer as aboutReducer } from "../views/about/store";


const reducer =  combineReducers({
    about: aboutReducer
})

export default reducer;