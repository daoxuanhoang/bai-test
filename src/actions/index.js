import * as types from '../constants/actionTypes';

export const listAll = () => {
    return {
        type: types.LIST_ALL
    }
};

export const saveUser = (user) => {
    return {
        type: types.SAVE_USER,
        user: user,
    }
};

export const toggleForm = () => {
    return {
        type: types.TOGGLE_FORM
    }
};

export const closeForm = () => {
    return {
        type: types.CLOSE_FORM
    }
};

export const openForm = () => {
    return {
        type: types.OPEN_FORM
    }
};

export const updateStatus = (id) => {
    return {
        type: types.UPDATE_STATUS,
        id
    }
};

export const deleteuser = (id) => {
    return {
        type: types.DELETE_USER,
        id
    }
};

export const updateuser= (userEditting) => {
    return {
        type: types.UPDATE_USER,
        userEditting
    }
}; 

export const filterTable = (filter) => {
    return {
        type: types.FILTER_TABLE,
        filter //filter -> filterName and filterStatus
    }
};

export const searchuser = (keyword) => {
    return {
        type: types.SEARCH,
        keyword
    }
};

export const sortuser = (sort) => {
    return {
        type: types.SORT,
        sort // sort -> sortBy and sortValue
    }
};