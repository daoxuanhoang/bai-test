import * as types from '../constants/actionTypes';

var initialState = {
  name: '',
  gender: -1
};
var myReducer = (state = initialState, action) => {
    switch (action.type) {
      case types.FILTER_TABLE:
        return {
          name: action.filter.name,
          gender: parseInt(action.filter.gender, 10)
        };
        default:
            return state;
    }
};

export default myReducer;