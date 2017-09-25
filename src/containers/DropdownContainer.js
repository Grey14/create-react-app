import React from 'react';
import { connect } from 'react-redux'
import { onSelectChange } from '../actions/index'
import DropdownList from '../components/DropdownList'
import SelectedItem from '../components/SelectedItem'

const DropdownContainer = ({dropdowns,selectedValue,onSelectChange}) => {
    //console.log(dropdowns);
    return (
        <div>
            <DropdownList options={dropdowns}
                onSelectChange={onSelectChange}>
            </DropdownList>
            <SelectedItem selectedValue={selectedValue}>
            </SelectedItem>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        dropdowns: state.dropdowns,
        selected:state.selected
    };
};

export default connect(mapStateToProps, { onSelectChange })(DropdownContainer)