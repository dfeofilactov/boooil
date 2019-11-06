import { combineReducers } from 'redux';
import { createReducer } from 'redux-create-reducer';
import Immutable from 'seamless-immutable';
import * as ActionTypes from '../../constants/actionTypes';

const initialState = Immutable({
    selectedMenuIndex: 0,
    loading: false,
});

const viewReducer = createReducer(initialState, {
    [ActionTypes.SHOW_LOADER](state) {
        return state.merge({
            loading: true,
        });
    },
    [ActionTypes.CLOSE_LOADER](state) {
        return state.merge({
            loading: false,
        });
    },
});

const mainReducer = combineReducers({ viewReducer });

export default mainReducer;
