import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'reactstrap';

const StudentList = ({ students }) => (
    <Table>
        <thead>
            <tr>
                <th >#</th>
                <th >姓名</th>
                <th >身高</th>
                <th >體重</th>
                <th >BMI</th>
                <th >備註</th>
            </tr>
        </thead>
        <tbody>
            {   
                students.map((item, index) => (
                    <tr key={index}> 
                        <th scope="row">{index + 1}</th>
                        <td>{item.Name}</td>
                        <td>{item.Height}</td>
                        <td>{item.Weight}</td>
                        <td>{item.BMI}</td>
                        <td>{item.Memo}</td>
                    </tr>
                ))
            }
        </tbody>
    </Table>
)

//   ProductItem.propTypes = {
//     product: PropTypes.shape({
//       title: PropTypes.string.isRequired,
//       price: PropTypes.number.isRequired,
//       inventory: PropTypes.number.isRequired
//     }).isRequired,
//     onAddToCartClicked: PropTypes.func.isRequired
//  }

export default StudentList

