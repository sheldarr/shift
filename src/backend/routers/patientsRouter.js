const express = require('express');
const fs = require('fs-extra');
const uuid = require('uuid');

const patientsRouter = new express.Router();

patientsRouter.get('/patient', (request, response, next) => {
    fs.readJson('./data/patients.json', 'utf8', (error, patients) => {
        if (error) {
            return next(error);
        }

        response.json(patients);
    });
});

patientsRouter.get('/patient/:id', (request, response, next) => {
    fs.readJson('./data/patients.json', 'utf8', (error, patients) => {
        if (error) {
            return next(error);
        }

        const patient = patients.find((patient) => {
            return patient.id === request.params.id;
        });

        if (!patient) {
            response.sendStatus(404);
            return;
        }

        response.json(patient);
    });
});

patientsRouter.post('/patient/', (request, response, next) => {
    fs.readJson('./data/patients.json', 'utf8', (error, patients) => {
        if (error) {
            return next(error);
        }

        const patient = request.body;

        const validationErrors = [];

        if (!patient.name) {
            validationErrors.push('name');
        }

        if (!patient.surname) {
            validationErrors.push('surname');
        }

        if (!patient.dateOfBirth) {
            validationErrors.push('dateOfBirth');
        }

        if (!patient.telephone) {
            validationErrors.push('telephone');
        }

        if (!patient.email) {
            validationErrors.push('email');
        }

        if (!patient.sex) {
            validationErrors.push('sex');
        }

        if (validationErrors.length) {
            response.status(400).json(validationErrors);
            return;
        }

        patient.id = uuid.v4();

        patients.push(patient);

        fs.writeJson('./data/recipes.json', patients);

        response.status(201).json(patient);
    });
});

patientsRouter.delete('/patient/:id', (request, response, next) => {
    fs.readJson('./data/patients.json', 'utf8', (error, patients) => {
        if (error) {
            return next(error);
        }

        const patient = patients.find((patient) => {
            return patient.id === request.params.id;
        });

        if (!patient) {
            response.sendStatus(404);
            return;
        }

        patients.splice(patients.indexOf(patient), 1);

        fs.writeJson('./data/patients.json', patients);

        response.sendStatus(200);
    });
});

patientsRouter.post('/patient/:id/menu', (request, response, next) => {
    fs.readJson('./data/patients.json', 'utf8', (error, patients) => {
        if (error) {
            return next(error);
        }

        const patient = patients.find((patient) => {
            return patient.id === request.params.id;
        });

        patient.menus.push(request.body);

        fs.writeJson('./data/patients.json', patients);

        response.sendStatus(200);
    });
});

patientsRouter.get('/patient/:patientId/menu/:menuId', (request, response, next) => {
    fs.readJson('./data/patients.json', 'utf8', (error, patients) => {
        if (error) {
            return next(error);
        }

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
