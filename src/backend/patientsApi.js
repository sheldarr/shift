const express = require('express');
const fs = require('fs');
const winston = require('winston');

const router = new express.Router();

router.get('/patient', (request, response) => {
    fs.readFile('./var/data/patients.json', 'utf8', (error, data) => {
        if (error) {
            winston.error(error);
        }

        response.json(JSON.parse(data));
    });
});

router.get('/patient/:id', (request, response) => {
    fs.readFile('./var/data/patients.json', 'utf8', (error, data) => {
        if (error) {
            winston.error(error);
        }

        const patients = JSON.parse(data);

        const patient = patients.find((patient) => {
            return patient.id == request.params.id;
        });

        response.json(patient);
    });
});

router.post('/patient/', (request, response) => {
    fs.readFile('./var/data/patients.json', 'utf8', (error, data) => {
        if (error) {
            winston.error(error);
        }

        const patients = JSON.parse(data);

        patients.push(request.body);

        fs.writeFile('./var/data/patients.json', JSON.stringify(patients));

        response.sendStatus(200);
    });
});

router.delete('/patient/:id', (request, response) => {
    fs.readFile('./var/data/patients.json', 'utf8', (error, data) => {
        if (error) {
            winston.error(error);
        }

        const patients = JSON.parse(data);

        const patient = patients.find((patient) => {
            return patient.id == request.params.id;
        });

        patients.splice(patients.indexOf(patient), 1);

        fs.writeFile('./var/data/patients.json', JSON.stringify(patients));

        response.sendStatus(200);
    });
});

router.post('/patient/:id/menu', (request, response) => {
    fs.readFile('./var/data/patients.json', 'utf8', (error, data) => {
        if (error) {
            winston.error(error);
        }

        const patients = JSON.parse(data);

        const patient = patients.find((patient) => {
            return patient.id == request.params.id;
        });

        patient.menus.push(request.body);

        fs.writeFile('./var/data/patients.json', JSON.stringify(patients));

        response.sendStatus(200);
    });
});

router.get('/patient/:patientId/menu/:menuId', (request, response) => {
    fs.readFile('./var/data/patients.json', 'utf8', (error, data) => {
        if (error) {
            winston.error(error);
        }

        const patients = JSON.parse(data);

        const patient = patients.find((patient) => {
            return patient.id == request.params.patientId;
        });

        const menu = patient.menus.find((menu) => {
            return menu.id == request.params.menuId;
        });

        response.json(menu);
    });
});

module.exports = router;
