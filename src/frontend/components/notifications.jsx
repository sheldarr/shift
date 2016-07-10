'use strict';

import {Alert} from 'react-bootstrap';
import React from 'react';

import notificationsService from '../services/notificationsService';

const Notifications = React.createClass({
    getInitialState () {
        return {
            notifications: []
        };
    },

    componentWillMount () {
        notificationsService.register(this.addNotification);
    },

    addNotification (notification) {
        const notifications = this.state.notifications;

        notifications.push(notification);

        this.setState(notifications);
    },

    render () {
        return (
            <div>
                {this.state.notifications.map((notification) => {
                    return <Alert bsStyle={notification.type} key={notification.id}>{notification.message}</Alert>;
                })}
            </div>
        );
    }
});

export default Notifications;
