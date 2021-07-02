import { Map } from "immutable";

import { SET_TRUE, SET_FALSE } from "../actions/types";


const INITIAL_STATE = Map({
    value: null,
})

export default (state = INITIAL_STATE, action) => {
    switch( action.type ) {
        case SET_TRUE:
            return state.set("value", true)
        case SET_FALSE:
            return state.set("value", false)
        default:
            return state;
    }
};