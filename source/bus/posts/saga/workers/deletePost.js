//Core
import { put, apply } from 'redux-saga/effects';

//Instruments
import { api } from '../../../../REST';
import { postActions } from '../../actions';
import { uiActions } from '../../../ui/actions';

export function* deletePost ({ payload: postId }) {
    try {
        yield put(uiActions.startFetching());
        const response = yield apply(api, api.posts.remove, [postId]);  
        const result = yield apply(api, api.posts.fetch); 
        const { data }= yield apply(result, result.json);
        if (response.status !== 204) {
            throw new Error(message);
        }
        
        yield put(postActions.fillPosts(data));
    } catch (error) {
        yield put(uiActions.emitError(error, error.message));
    } finally {
        yield put(uiActions.stopFetching());
    }
};