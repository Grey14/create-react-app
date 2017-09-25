import React from 'react';
import Dropdown from 'react-dropdown'

const DropdownList = ({ options , onSelectChange }) => {
    return (
        <div>
            <Dropdown options={options}
                onChange={onSelectChange}
                // value={defaultOption}
                placeholder="Select an option" />
        </div>
    )
}

export default DropdownList;