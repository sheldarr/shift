'use strict';

import fetchService from './fetchService';

const authService = {
    getUser (callback) {
        return fetchService.get('http://localhost:3030/auth/user', callback);
    },

    login(username, password, callback) {
        return fetchService.post('http://localhost:3030/auth/login', {username, password}, callback);
    },

    logout(callback) {
        return fetchService.post('http://localhost:3030/auth/logout', {}, callback);
    }
};

export default authService;
