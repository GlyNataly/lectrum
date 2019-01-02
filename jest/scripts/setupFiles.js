// Mocks
import { LocalStorage } from './mocks/localStorage';
import { fetch } from './mocks/fetch';

const successMesasge = 'TEST_SUCCESS_MESSAGE.';
const errorMessage = 'TEST_ERROR_MESSAGE.';
const token = 'TEST_TOKEN';
const error = new Error(errorMessage);

const userProfile = {
    id:        'TEST_ID',
    avatar:    'TEST_AVATAR',
    firstName: 'Walter',
    lastName:  'White',
    token,
};

const credentials = {
    email:    'test@email.com',
    password: '1111',
    remember: true,
};

const responseDataSuccess = {
    data:    userProfile,
    message: successMesasge,
};

const responseDataFail = {
    message: errorMessage,
};

const fetchResponseSuccess = {
    status: 200,
    json:   jest.fn(() => Promise.resolve(responseDataSuccess)),
};

const fetchResponseFail401 = {
    status: 401,
    json:   jest.fn(() => Promise.resolve(responseDataFail)),
};

const fetchResponseFail400 = {
    status: 400,
    json:   jest.fn(() => Promise.resolve(responseDataFail)),
};

const url = 'https://www.url.com';

const users = [
    {
        id:        'TEST_ID',
        avatar:    'TEST_AVATAR',
        firstName: 'Walter',
        lastName:  'White',
    },
    {
        id:        'TEST_ID2',
        avatar:    'TEST_AVATAR2',
        firstName: 'Wally',
        lastName:  'Black',
    },
];

const newName = {
    firstName: 'Walter',
    lastName: 'White',
};

const newAvatar = ['avatar'];

const newPassword = {
    oldPassword: 12345,
    newPassword: 123456,
};

const emitError = {
    type: 'TEST_ERROR',
    payload: {},
    error: true,
    meta: 'TEST_META',
};

global.__ = {
    userProfile,
    errorMessage,
    token,
    error,
    responseDataSuccess,
    responseDataFail,
    fetchResponseSuccess,
    fetchResponseFail401,
    fetchResponseFail400,
    credentials,
    url,
    users,
    newAvatar,
    newName,
    newPassword,
    emitError,
};
global.fetch = fetch;
global.localStorage = new LocalStorage();
