import notificationsService from './notificationsService';
import uuid from 'node-uuid';

const checkForErrors = (response) => {
    if (!response.ok) {
        throw Error(response.statusText);
    }

    return response;
};

const parseAsJson = (response) => {
    return response.json();
};

const notifyAboutErrors = (error) => {
    notificationsService.add({
        id: uuid.v4(),
        message: error,
        type: 'danger'
    });
};

const fetchService = {
    get (url) {
        return fetch(url, {method: 'get'})
            .then(checkForErrors)
            .then(parseAsJson)
            .catch(notifyAboutErrors);
    },

    post (url, body) {
        const options = {
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'post'
        };

        return fetch(url, options)
            .then(checkForErrors)
            .then(notifyAboutErrors);
    }
};

export default fetchService;
