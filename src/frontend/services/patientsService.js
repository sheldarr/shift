'use strict';

import fetchService from './fetchService';

const patientsService = {
    getAll () {
        return fetchService.get('http://localhost:3030/api/patient');
    },

    getById (id) {
        return fetchService.get(`http://localhost:3030/api/patient/${id}`);
    },

    create (patient) {
        return fetchService.post('http://localhost:3030/api/patient', patient);
    },

    delete (id) {
        return fetchService.delete(`http://localhost:3030/api/patient/${id}`);
    }
};

export default patientsService;
