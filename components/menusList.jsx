'use string';

import {Button, Table} from 'react-bootstrap';

import React from 'react';

module.exports = React.createClass({
    propTypes: {
        menus: React.PropTypes.array.isRequired,
        patientId: React.PropTypes.number.isRequired
    },

    render () {
        return (
            <Table hover striped>
                <thead>
                    <tr>
                        <td>{'Id'}</td>
                        <td>{'Name'}</td>
                        <td>{'Days'}</td>
                        <td>{'Start date'}</td>
                        <td />
                    </tr>
                </thead>
                <tbody>
                    {this.props.menus.map((menu) =>
                        <tr key={menu.id}>
                            <td>{menu.id}</td>
                            <td>{menu.name}</td>
                            <td>{menu.days}</td>
                            <td>{new Date(menu.startDate).toDateString()}</td>
                            <td>
                                <div className="pull-right">
                                    <Button bsStyle="primary" href={`#/patient/${this.props.patientId}/menu/${menu.id}`}>
                                        {'Edit'}
                                    </Button>
                                </div>
                            </td>
                        </tr>
                )}
                </tbody>
            </Table>
        );
    }
});
