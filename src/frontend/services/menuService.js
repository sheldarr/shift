'use strict';

import fetchService from './fetchService';

const menuService = {
    create (patientId, menu) {
        return fetchService.post(`http://localhost:3030/api/patient/${patientId}/menu`, menu);
    },

    getById (patientId, menuId) {
        return fetchService.get(`http://localhost:3030/api/patient/${patientId}/menu/${menuId}`);
    }
};

export default menuService;
