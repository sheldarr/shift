const express = require('express');
const fs = require('fs');

const patientsRouter = new express.Router();

patientsRouter.get('/patient', (request, response, next) => {
    fs.readFile('./var/data/patients.json', 'utf8', (error, data) => {
        if (error) {
            return next(error);
        }

        response.json(JSON.parse(data));
    });
});

patientsRouter.get('/patient/:id', (request, response, next) => {
    fs.readFile('./var/data/patients.json', 'utf8', (error, data) => {
        if (error) {
            return next(error);
        }

        const patients = JSON.parse(data);

        const patient = patients.find((patient) => {
            return patient.id === request.params.id;
        });

        response.json(patient);
    });
});

patientsRouter.post('/patient/', (request, response, next) => {
    fs.readFile('./var/data/patients.json', 'utf8', (error, data) => {
        if (error) {
            return next(error);
        }

        const patients = JSON.parse(data);

        patients.push(request.body);

        fs.writeFile('./var/data/patients.json', JSON.stringify(patients));

        response.sendStatus(200);
    });
});

patientsRouter.delete('/patient/:id', (request, response, next) => {
    fs.readFile('./var/data/patients.json', 'utf8', (error, data) => {
        if (error) {
            return next(error);
        }

        const patients = JSON.parse(data);

        const patient = patients.find((patient) => {
            return patient.id === request.params.id;
        });

        patients.splice(patients.indexOf(patient), 1);

        fs.writeFile('./var/data/patients.json', JSON.stringify(patients));

        response.sendStatus(200);
    });
});

patientsRouter.post('/patient/:id/menu', (request, response, next) => {
    fs.readFile('./var/data/patients.json', 'utf8', (error, data) => {
        if (error) {
            return next(error);
        }

        const patients = JSON.parse(data);

        const patient = patients.find((patient) => {
            return patient.id === request.params.id;
        });

        patient.menus.push(request.body);

        fs.writeFile('./var/data/patients.json', JSON.stringify(patients));

        response.sendStatus(200);
    });
});

patientsRouter.get('/patient/:patientId/menu/:menuId', (request, response, next) => {
    fs.readFile('./var/data/patients.json', 'utf8', (error, data) => {
        if (error) {
            return next(error);
        }

        const patients = JSON.parse(data);

        const patient = patients.find((patient) => {
            return patient.id === request.params.patientId;
        });

        const menu = patient.menus.find((menu) => {
            return menu.id === request.params.menuId;
        });

        response.json(menu);
    });
});

module.exports = patientsRouter;
