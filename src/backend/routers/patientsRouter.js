const express = require('express');
const fs = require('fs-extra');

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

        patients.push(request.body);

        fs.writeJson('./data/patients.json', patients);

        response.sendStatus(200);
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
