import React, { Component } from 'react';
import Dropdown from 'react-dropdown'

class DropdownList extends Component {
    constructor(props) {
        super(props);
        this._onSelect = this._onSelect.bind(this)
    }

    _onSelect(option) {
        //const { onSelectChange } = this.props;
        this.props.onSelectChange(option.label);
    }

    render() {
        const { options, selected } = this.props;
        return (
            <div>
                <Dropdown options={options}
                    onChange={this._onSelect}
                    value={selected}
                    placeholder="Select an option" />
            </div>
        )
    }
}

export default DropdownList