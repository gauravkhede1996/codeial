import {UPDATE_POSTS} from './actionTypes';
import { APIurls } from '../helpers/urls';
export function fetchPosts() {
    return (dispatch) => {
        const url = APIurls.fetchPosts();
        fetch(url).then((response)=> response.json()).then((data)=> {
            dispatch(updatePosts(data));
        });
        
    }
}
export function updatePosts(posts){
    return {
        type: UPDATE_POSTS,
        posts,
    }
}