//Core
import { takeEvery, all, call } from 'redux-saga/effects';

//Types
import { types } from '../types';

//Workers
import { workers } from './workers';

function* watchWorker () {
    yield takeEvery(types.TYPE, worker);
};

function* watchFetchPost () {
    yield takeEvery(types.FETCH_POSTS_ASYNC, fetchPost);
};

export function* watchDomain () {
    yield all([call(watchWorker)]);
}

