'use strict';

import fetchService from './fetchService';

const menuService = {
    create (patientId, menu, callback) {
        return fetchService.post(`http://localhost:3030/api/patient/${patientId}/menu`, menu, callback);
    },

    getById (patientId, menuId, callback) {
        return fetchService.get(`http://localhost:3030/api/patient/${patientId}/menu/${menuId}`, callback);
    }
};

export default menuService;
