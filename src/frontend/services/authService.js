'use strict';

import fetchService from './fetchService';

const authService = {
    getUser (callback) {
        return fetchService.get('http://localhost:3030/auth/user', callback);
    }
};

export default authService;
