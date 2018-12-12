//Core
import { takeEvery, all, call } from 'redux-saga/effects';

//Types
import { types } from '../types';

//Workers
import { createPost, fetchPosts, deletePost } from './workers';

function* watchCreatePost () {
    yield takeEvery(types.CREATE_POST_ASYNC, createPost);
};

function* watchFetchPosts () {
    yield takeEvery(types.FETCH_POSTS_ASYNC, fetchPosts);
};

function* watchDeletePost () {
    yield takeEvery(types.REMOVE_POST_ASYNC, deletePost);
};

export function* watchPosts () {
    yield all([call(watchCreatePost), call(watchFetchPosts), call(watchDeletePost)]);
}

