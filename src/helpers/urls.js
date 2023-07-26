export const API_ROOT= 'http://127.0.0.1:8001';

export const APIurls = {
    login: () => `${API_ROOT}/user-signin/create-session`,
    signup: () => `${API_ROOT}/user-signUp/create`,
    fetchPosts: () => `https://jsonplaceholder.typicode.com/posts`
}