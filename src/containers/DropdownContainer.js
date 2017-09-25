import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getAllDropdowns, onSelectChange } from '../actions/index'
import DropdownList from '../components/DropdownList'
import SelectedItem from '../components/SelectedItem'

const DropdownContainer = ({ dropdowns, selected, getAllDropdowns, onSelectChange }) => {
    getAllDropdowns();
    return (
        <div>
            <DropdownList options={dropdowns}
                selected={selected}
                onSelectChange={onSelectChange}>
            </DropdownList>
            <SelectedItem selectedValue={selected}>
            </SelectedItem>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        dropdowns: state.dropdowns,
        selected: state.selected
    };
};

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({ getAllDropdowns, onSelectChange }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(DropdownContainer)