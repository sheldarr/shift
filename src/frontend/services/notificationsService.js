'use strict';

const callbacks = [];

const notificationsService = {
    add (notification) {
        callbacks.forEach((callback) => {
            callback(notification);
        });
    },

    register (callback) {
        callbacks.push(callback);
    }
};

export default notificationsService;
