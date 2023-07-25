import { LOGIN_FAILED, LOGIN_START, LOGIN_SUCCESS } from "../actions/actionTypes";

const initialAuthState = {
    user:{},
    error:null,
    inProgress:false,
    isLoggedin: false,
}
export default function auth(state=initialAuthState,action) {
    switch(action.type) {
        case LOGIN_START:
            return {
                ...state,
                error:null,
                inProgress:true,
                isLoggedin:false,
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedin: true,
                inProgress: false,
                error: null,
                user: action.user,
            }
        case LOGIN_FAILED:
            return {
                ...state,
                isLoggedin: false,
                inProgress: false,
                error:action.error,
            }
        default:
            return state;
    }

}