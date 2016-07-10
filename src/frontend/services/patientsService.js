'use strict';

const patientsService = {
    getAll () {
        return fetch('http://localhost:3030/api/patient', {
            method: 'get'
        }).then((response) => {
            return response.json();
        });
    },

    getById (id) {
        return fetch(`http://localhost:3030/api/patient/${id}`, {
            method: 'get'
        }).then((response) => {
            return response.json();
        });
    },

    create (patient) {
        return fetch('http://localhost:3030/api/patient', {
            body: JSON.stringify(patient),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'post'
        });
    },

    delete (id) {
        return fetch(`http://localhost:3030/api/patient/${id}`, {
            method: 'delete'
        });
    }
};

export default patientsService;
