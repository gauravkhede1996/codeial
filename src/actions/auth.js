import { APIurls } from "../helpers/urls";
import { getFormBody } from "../helpers/utils";
import { AUTHENTICATE_USER, CLEAR_AUTH_STATE, LOGIN_FAILED, LOGIN_START, LOGIN_SUCCESS, LOG_OUT, SIGNUP_FAILED, SIGNUP_START, SIGNUP_SUCCESS } from "./actionTypes";

export function startLogin () {
    return {
        type: LOGIN_START,
    };
}
export function loginFailed (errorMessage) {
    return {
        type: LOGIN_FAILED,
        error: errorMessage,
    };
}
export function loginSuccess (user) {
    return {
        type: LOGIN_SUCCESS,
        user,
    };
}

export function login(email,password) {
    return (dispatch) => {
        dispatch(startLogin());
        const url = APIurls.login();
        console.log(url," is the url");
        fetch(url, {
            method:'POST',
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: getFormBody({email, password})
        })
        .then(response => response.json())
        .then((data) => {
            console.log(data," DATA");
            if(data.success){
                //save the user 
                localStorage.setItem('user',JSON.stringify(data.user));
                dispatch(loginSuccess(data))
                return;
            }
            dispatch(loginFailed(data.message));
        })
    }
}

export function signup (email,password,confirmPassword,name) {
    return (dispatch) => {
        dispatch(startSignup());
        const url = APIurls.signup();
        fetch(url, {
            method:'POST',
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: getFormBody({email, password, confirm_password: confirmPassword,name})
        })
        .then(response => response.json())
        .then((data) => {
            console.log(data," DATA");
            if(data.success){
                //save the user 
                dispatch(signupSuccessfull(data))
                return;
            }
            dispatch(signupFailed(data.message));
        })
    }
}

export function startSignup () {
    return {
        type: SIGNUP_START,
    };
}

export function signupSuccessfull (user) {
    return {
        type: SIGNUP_SUCCESS,
        user,
    };
}

export function signupFailed (errorMessage) {
    return {
        type: SIGNUP_FAILED,
        message: errorMessage,
    };
}

export function authenticateUser (user) {
    return {
        type: AUTHENTICATE_USER,
        user,
    }
}

export function logoutUser() {
    return {
        type: LOG_OUT,
    }
}

export function clearAuthState() {
    return {
        type:CLEAR_AUTH_STATE,
    }
}