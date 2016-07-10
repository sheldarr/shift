import notificationsService from './services/notificationsService';
import uuid from 'node-uuid';

const notifyAboutErrors = (error) => {
    notificationsService.add({
        id: uuid.v4(),
        message: error,
        type: 'danger'
    });
};

export default notifyAboutErrors;

