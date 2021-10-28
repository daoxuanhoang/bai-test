import * as types from "../constants/actionTypes";

const s4 = () => {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
};
const generateID = () => {
  return (
    s4() +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    "-" +
    s4()
  );
};
var data = JSON.parse(localStorage.getItem("users"));
var initialState = data ? data : [];
var myReducer = (state = initialState, action) => {
  var id = "";
  var index = -1;
  switch (action.type) {
    case types.LIST_ALL:
      return state;
    case types.SAVE_USER:
      var user = {
        id: action.user.id,
        name: action.user.name,
        dayofbirth: action.user.dayofbirth,
        gender: action.user.gender === true ? true : false,
        daycreate: action.user.daycreate,
      };
      if(!user.id) {
        user.id = generateID();
        state.push(user)
      }
      else{
        id = user.id;
        index = state.findIndex((state) => state.id === id );
        state[index] = user;
      }
      localStorage.setItem("users", JSON.stringify(state));
      return [...state];
    case types.DELETE_USER:
      id = action.id;
      index = state.findIndex((state) => state.id === id);
      state.splice(index, 1);
      localStorage.setItem("users", JSON.stringify(state));
      return [...state];
    default:
      return state;
  }
};

export default myReducer;
