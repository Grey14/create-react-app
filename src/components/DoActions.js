import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Input, Button
} from 'reactstrap';

const DoActions = ({ filterKey, getAllStudents, clearStudents, filterStudents }) => {
    let input;
    return (
        <div>
            <Button onClick={() => getAllStudents()} color="success">Get Data</Button>{' '}
            <Button onClick={() => clearStudents()}>Clear</Button>{' '}
            <hr />
            {/* <Input type="text"
             onChange={filterStudents}
             value={filterKey}
             /> */}
            <input className="form-control" ref={node => {
                input = node
            }}
                onChange={() => filterStudents(input.value)}
                placeholder="filter"
            />
        </div>
    )
}

export default DoActions