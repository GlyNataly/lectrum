//Core
import { put, apply } from 'redux-saga/effects';

//Instruments
import { api } from '../../../../REST';
import { postActions } from '../../actions';

export function* fetchPosts () {
    try {
        const response = yield apply(api, api.posts.fetch);  
        const { data }= yield apply(response, response.json);

        if (response.status !== 200) {
            throw new Error(message);
        }
        yield put(postActions.fillPosts(data));
    } catch (error) {
        yield put(postActions.emitError(error, error.message));
    } 
};
