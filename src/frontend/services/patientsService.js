'use strict';

import fetchService from './fetchService';

const patientsService = {
    getAll (callback) {
        return fetchService.get('http://localhost:3030/api/patient', callback);
    },

    getById (id, callback) {
        return fetchService.get(`http://localhost:3030/api/patient/${id}`, callback);
    },

    create (patient, callback) {
        return fetchService.post('http://localhost:3030/api/patient', patient, callback);
    },

    delete (id, callback) {
        return fetchService.delete(`http://localhost:3030/api/patient/${id}`, callback);
    }
};

export default patientsService;
