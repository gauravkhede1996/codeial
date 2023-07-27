import { AUTHENTICATE_USER, CLEAR_AUTH_STATE, LOGIN_FAILED, LOGIN_START, LOGIN_SUCCESS, LOG_OUT, SIGNUP_FAILED, SIGNUP_START, SIGNUP_SUCCESS } from "../actions/actionTypes";

const initialAuthState = {
    user:{},
    error:null,
    inProgress:false,
    isLoggedin: false,
}
export default function auth(state=initialAuthState,action) {
    switch(action.type) {
        case LOGIN_START:
        case SIGNUP_START:
            return {
                ...state,
                error:null,
                inProgress:true,
                isLoggedin:false,
            }
        case LOGIN_SUCCESS:
        case SIGNUP_SUCCESS:
            return {
                ...state,
                isLoggedin: true,
                inProgress: false,
                error: null,
                user: action.user,
            }
        case LOGIN_FAILED:
        case SIGNUP_FAILED:
            return {
                ...state,
                isLoggedin: false,
                inProgress: false,
                error:action.error,
            }
        case AUTHENTICATE_USER:
            console.log(action.user);
            return{
                ...state,
                isLoggedin: true,
                user:action.user,
            }
        case LOG_OUT:
            return {
                ...state,
                user:{},
                isLoggedin: false,
            }
        case CLEAR_AUTH_STATE:
            return {
                ...state,
                error: null,
            }
        default:
            return state;
    }

}