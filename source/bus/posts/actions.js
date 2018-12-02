//Types
import { FETCH_POSTS_ASYNC, FILL_POSTS, CREATE_POSTS_ASYNC } from './types';

//Instruments
import { api } from '../../REST';

export const fillPosts = (posts) => {
    return {
        type:    FILL_POSTS,
        payload: posts,
    };
};

export const fetchPostsAsync = () => async (dispatch, getState) => {
    dispatch({
        type: FETCH_POSTS_ASYNC,
    });

    const response = await api.posts.fetch();    
    const result = await response.json();

    dispatch(fillPosts(result.data));
};


export const createPostAsync = (comment) => async (dispatch, getState) => {
    const response = await api.posts.create(comment);  
    const result = await response.json();
  
    dispatch({
        type: CREATE_POSTS_ASYNC,
        payload: result.data,
    });
};