import notificationsService from './notificationsService';
import uuid from 'node-uuid';

const checkForErrors = (response) => {
    console.log(response.ok);
    console.log(response.status);

    if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
    }

    return response;
};

const parseAsJson = (response) => {
    return response.json();
};

const notifyAboutErrors = (error) => {
    console.log('notyfing error');
    console.log(JSON.stringify(error));

    // notificationsService.add({
    //     id: uuid.v4(),
    //     message: error.message,
    //     type: 'danger'
    // });
};

const fetchService = {
    delete (url) {
        return fetch(url, {
            headers: {
                'Accept-Language': navigator.browserLanguage | navigator.language
            },
            method: 'delete'
        })
        .then(checkForErrors)
        .then(parseAsJson)
        .catch(notifyAboutErrors);
    },

    get (url) {
        return fetch(url, {
            headers: {
                'Accept-Language': navigator.browserLanguage | navigator.language
            },
            method: 'get'
        })
        .then(checkForErrors)
        .then(parseAsJson)
        .catch(notifyAboutErrors);
    },

    post (url, body) {
        const options = {
            body: JSON.stringify(body),
            headers: {
                'Accept-Language': navigator.browserLanguage | navigator.language,
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
