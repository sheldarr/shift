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

    removeNotification (notification) {
        const notifications = this.state.notifications;

        notifications.splice(this.state.notifications.indexOf(notification), 1);

        this.setState(notifications);
    },

    render () {
        return (
            <div>
                {this.state.notifications.map((notification) => {
                    return (
                        <Alert bsStyle={notification.type} key={notification.id} onDismiss={this.removeNotification.bind(this, notification)}>
                            <span>{notification.message}</span>
                        </Alert>
                    );
                })}
            </div>
        );
    }
});

export default Notifications;
