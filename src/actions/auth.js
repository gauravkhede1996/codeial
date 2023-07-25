import { APIurls } from "../helpers/urls";
import { getFormBody } from "../helpers/utils";
import { LOGIN_START } from "./actionTypes";

export function startLogin () {
    return {
        type: LOGIN_START,
    };
}

export function login(email,password) {
    return (dispatch) => {
        const url = APIurls.login();
        fetch(url, {
            method:'POST',
            headers:{
                'Content-Type': 'application/x-wwww-form-urlencoded',
            },
            body: getFormBody({email, password})
        });
    }
}