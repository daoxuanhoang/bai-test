import { combineReducers } from 'redux';
import usersReducer from './users';
import isDisplayFromReducer from './isDisplayForm';
import userEditingReducer from './itemEditing';
import filterTableReducer from './filterTable';
import searchReducer from './search';
import sortReducer from './sort';

const myReducer = combineReducers({
    users: usersReducer,
    isDisplayForm: isDisplayFromReducer,
    userEditing: userEditingReducer,
    filterTable: filterTableReducer,
    search: searchReducer,
    sort: sortReducer
})

export default myReducer;