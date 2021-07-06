import * as constants from "../action/types";

const initialState = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    data: {},
};

const UpdatePassword = (state = initialState, action) => {
    switch (action.type) {
        case constants.UPDATE_PASSWORD_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false,
                isSuccess: false,
            };
        case constants.UPDATE_PASSWORD_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                isSuccess: true,
                ...action.payload.response,
            };
        case constants.UPDATE_PASSWORD_ERROR:
            return {
                ...state,
                isLoading: false,
                isError: true,
                isSuccess: false,
                ...action.payload.response,
            };
        default:
            return {
                ...state,
            };
    }
};
export default UpdatePassword;