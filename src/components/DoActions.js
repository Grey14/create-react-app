import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Input, Button
} from 'reactstrap';

const DoActions = ({ filterKey, getAllStudents, clearStudents, filterStudents }) => (
    <div>
        <Button onClick={() => getAllStudents()} color="success">Get Data</Button>{' '}
        <Button onClick={() => clearStudents()}>Clear</Button>
        <hr />
        <Input type="text"
            value={filterKey}
            onChange={filterStudents}
            placeholder="filter" />
    </div>
)

export default DoActions