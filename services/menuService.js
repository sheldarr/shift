'use strict';

const menuService = {
    create (patientId, menu) {
        return fetch(`http://localhost:3030/api/patient/${patientId}/menu`, {
            body: JSON.stringify(menu),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'post'
        });
    },

    getById (patientId, menuId) {
        return fetch(`http://localhost:3030/api/patient/${patientId}/menu/${menuId}`, {
            method: 'get'
        }).then((response) => {
            return response.json();
        });
    }
};

export default menuService;
