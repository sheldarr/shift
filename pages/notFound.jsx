'use strict';

import {Panel} from 'react-bootstrap';
import React from 'react';

module.exports = React.createClass({
    render () {
        return (
            <Panel header="404">
                {'Page not found :('}
            </Panel>
        );
    }
});
