import axios from 'axios';

export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';
export const REMOVE_POST = 'REMOVE_POST';
export const fetchPostsRequest = () => ({ type:FETCH_POSTS_REQUEST});
export const fetchPostsSuccess = posts => ({ type:FETCH_POSTS_SUCCESS, payload:posts});
export const fetchPostsFailure = () => ({ type:FETCH_POSTS_FAILURE, payload:error});
export const removePost = postId => ({type:REMOVE_POST, payload:postId});

export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const setCurrentPage = page => ({ type: SET_CURRENT_PAGE, payload: page});

export const fetchPosts = ()=> {
    return async dispatch => {
        dispatch(fetchPostsRequest());
        try {
            const response =await axios.get('https://jsonplaceholder.typicode.com/posts');
            dispatch(fetchPostsSuccess(response.data));
            
        } catch (error){
            dispatch(fetchPostsFailure(error.message));
        }
    }
}


