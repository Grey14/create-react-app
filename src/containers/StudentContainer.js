import React, { Component } from 'react';
import {
    Input, Button
} from 'reactstrap';
import { connect } from 'react-redux'
import { getAllStudents } from '../actions/index'
import StudentList from '../components/StudentList';

const StudentContainer = ({ students, getAllStudents }) => (
    <div className="card border-secondary">
        <div className="card-header">
            資料表
      </div>
        <div className="card-block">
            <StudentList students={students} />
        </div>
    </div >
)
// <Button onClick={() => this.GetData()} color="success">Get Data</Button>{' '}
// <Button onClick={() => this.Clear()}>Clear</Button>
// <hr />
// <Input type="text" value={this.state.filterKey} onChange={this.ShowFilter} placeholder="filter" />

// 準備綁定用的mapStateToProps方法，
// 將store中的students屬性綁到這個元件的props.students屬性上
const mapStateToProps = state => ({
    students:state.students
})

export default connect(mapStateToProps, { getAllStudents })(StudentContainer)