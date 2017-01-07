'use strict';

import toastr from 'toastr';

const options = {
    closeButton: true,
    closeDuration: 300,
    extendedTimeOut: 1000,
    progressBar: true,
    timeout: 5000
};

const toastsService = {
    success(message, title) {
        toastr.success(message, title ? title : '', options);
    },
    info(message, title) {
        toastr.info(message, title ? title : '', options);
    },
    warning(message, title) {
        toastr.warning(message, title ? title : '', options);
    },
    error(message, title) {
        toastr.error(message, title ? title : '', options);
    }
};

export default toastsService;
