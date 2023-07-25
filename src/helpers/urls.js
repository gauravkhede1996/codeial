export const API_ROOT= 'http://codeial.com:8000/api/v2';

export const APIurls = {
    login: () => `${API_ROOT}/users/login`,
    signup: () => `${API_ROOT}/users/signup`,
    fetchPosts: () => `https://jsonplaceholder.typicode.com/posts`
}