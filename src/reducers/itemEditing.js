import * as types from '../constants/actionTypes';

var initialState = {
  id: '',
  name: '',
  dayofbirth: '',
  gender: false,
  daycreate: ''
};
var myReducer = (state = initialState, action) => {
    switch (action.type) {
      case types.UPDATE_USER:
        return action.userEditting;
        default:
            return state;
    }
};

export default myReducer;