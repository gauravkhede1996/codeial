import {UPDATE_POSTS} from './actionTypes';
export function fetchPosts() {
    return (dispatch) => {
        const url = 'https://jsonplaceholder.typicode.com/posts';
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