import {combineReducers} from "redux";
import {productDataReducer} from "../reducers";
const allReducers = combineReducers(
	{
		productDataReducer:productDataReducer
	}
);

export default allReducers;
