import request from 'superagent';

const fetchService = {
    delete (url, callback) {
        return request
            .del(url)
            .set({'Accept-Language': navigator.browserLanguage | navigator.language})
            .end(callback);
    },

    get (url, callback) {
        return request
            .get(url)
            .set({'Accept-Language': navigator.browserLanguage | navigator.language})
            .end(callback);
    },

    post (url, body, callback) {
        return request
            .post(url)
            .set({'Accept-Language': navigator.browserLanguage | navigator.language})
            .send(body)
            .end(callback);
    }
};

export default fetchService;
