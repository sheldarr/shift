'use strict';

import fetchService from './fetchService';

const authService = {
    getUser () {
        return fetchService.get('http://localhost:3030/auth/user');
    },

    logout () {
        return fetchService.post('http://localhost:3030/auth/logout');
    }
};

export default authService;

