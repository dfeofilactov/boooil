import * as ActionTypes from '../../constants/actionTypes';

export const SELECT_MENU_ITEM = (index) => {
    return {
        type: ActionTypes.SELECT_MENU_ITEM,
        index,
    };
};
