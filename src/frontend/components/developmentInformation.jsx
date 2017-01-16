'use strict';

import React from 'react';
import {Panel} from 'react-bootstrap';

const DevelopmentInformation = React.createClass({
    render() {
        return (process.env.NODE_ENV === 'production'
            ? null
            : (
                <Panel header={'Development Information'}>
                    <p>{`process.env.NODE_ENV=${process.env.NODE_ENV}`}</p>
                    <p>{`userAgent=${navigator.userAgent}`}</p>
                    <p>{`platform=${navigator.platform}`}</p>
                    <p>{`languages=${navigator.languages}`}</p>
                </Panel>
            ));
    }
});

export default DevelopmentInformation;
