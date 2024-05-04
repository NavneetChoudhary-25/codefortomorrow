import { 
    FETCH_POSTS_FAILURE, 
    FETCH_POSTS_REQUEST, 
    FETCH_POSTS_SUCCESS, 
    REMOVE_POST,
    SET_CURRENT_PAGE,
    fetchPosts
} from "../actions/postActions";


const initialState = {
    loading: false,
    posts: [],
    error: null,
    currentPage:0
};

const postReducer =(state =initialState, action) => {
    switch (action.type) {
        case FETCH_POSTS_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_POSTS_SUCCESS:
            return {
                ...state,
                loading:false,
                posts: action.payload
            };
        case FETCH_POSTS_FAILURE:
            return {
                ...state,
                loading:false,
                fetchPosts: action.payload
            };
        case REMOVE_POST:
            return {
                ...state,
                posts:state.posts.filter(post=>post.id !== action.payload)
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentpage: action.payload
            };
        default:
            return state;
    }
};

export default postReducer;