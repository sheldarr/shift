const _ = require('lodash');
const express = require('express');
const fs = require('fs');
const router = express.Router();

router.get('/patient', (req, res) => {
    fs.readFile('./data/patients.json', 'utf8', (err, data) => {
        if (err) {
            console.log(err);
        }

        res.json(JSON.parse(data));
    });
});

router.get('/patient/:id', (req, res) => {
    fs.readFile('./data/patients.json', 'utf8', function (err, data) {
        if (err) {
            console.log(err);
        }

        const patients = JSON.parse(data);

        const patient = _.find(patients, patient => patient.id == req.params.id);

        res.json(patient);
    });
});

router.post('/patient/', function (req, res) {
    fs.readFile('./data/patients.json', 'utf8', (err, data) => {
        if (err) {
            console.log(err);
        }

        const patients = JSON.parse(data);

        patients.push(req.body);

        fs.writeFile('./data/patients.json', JSON.stringify(patients));

        res.sendStatus(200);
    });
});

router.delete('/patient/:id', (req, res) => {
    fs.readFile('./data/patients.json', 'utf8', (err, data) => {
        if (err) {
            console.log(err);
        }

        const patients = JSON.parse(data);

        _.remove(patients, patient => patient.id == req.params.id);

        fs.writeFile('./data/patients.json', JSON.stringify(patients));

        res.sendStatus(200);
    });
});

router.post('/patient/:id/menu', (req, res) => {
    fs.readFile('./data/patients.json', 'utf8', (err, data) => {
        if (err) {
            console.log(err);
        }

        const patients = JSON.parse(data);

        const patient = _.find(patients, (patient) => patient.id == req.params.id);

        patient.menus.push(req.body);

        fs.writeFile('./data/patients.json', JSON.stringify(patients));

        res.sendStatus(200);
    });
});

router.get('/patient/:patientId/menu/:menuId', (req, res) => {
    fs.readFile('./data/patients.json', 'utf8', (err, data) => {
        if (err) {
            console.log(err);
        }

        const patients = JSON.parse(data);

        const patient = _.find(patients, patient => patient.id == req.params.patientId);

        const menu = _.find(patient.menus, menu => menu.id == req.params.menuId);

        res.json(menu);
    });
});

module.exports = router;
