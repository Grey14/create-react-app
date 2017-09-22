import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getAllStudents, clearStudents, filterStudents } from '../actions/index'
import StudentList from '../components/StudentList';
import DoActions from '../components/DoActions';

const StudentContainer = ({ students, filterKey, getAllStudents, clearStudents, filterStudents }) => (
    <div className="card border-secondary">
        <div className="card-header">
            資料表
      </div>
        <div className="card-block">
            <DoActions
                //filterKey={filterKey}
                getAllStudents={getAllStudents}
                clearStudents={clearStudents}
                filterStudents={filterStudents} />
            <StudentList students={students} />
        </div>
    </div >
)
// 準備綁定用的mapStateToProps方法，
// 將store中的students屬性綁到這個元件的props.students屬性上
const mapStateToProps = state => ({
    students: state.students,
    //filterKey: state.filterKey
})

// 準備綁定用的DispatchToProps方法，
const mapDispatchToProps = (dispatch) => (
    bindActionCreators({ getAllStudents, clearStudents, filterStudents }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(StudentContainer)