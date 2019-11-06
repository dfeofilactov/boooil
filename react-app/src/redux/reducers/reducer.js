import { combineReducers } from 'redux';
import { createReducer } from 'redux-create-reducer';
import Immutable from 'seamless-immutable';
import * as ActionTypes from '../../constants/actionTypes';
// import Modules from '../../description/modules';
// import photos from '../../description/photos';

const initialState = Immutable({
    selectedMenuIndex: 0,
    loading: true,
});

const viewReducer = createReducer(initialState, {
    [ActionTypes.SELECT_MENU_ITEM](state, action) {
        return state.merge({
            selectedMenuIndex: action.index,
        });
    },
});

const mainReducer = combineReducers({ viewReducer });

export default mainReducer;
