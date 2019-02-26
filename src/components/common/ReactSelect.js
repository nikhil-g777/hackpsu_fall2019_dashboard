/*eslint-disable no-undef*/
import React from 'react';
import PropTypes from 'prop-types';
import VirtualizedSelect from 'react-virtualized-select';
import 'react-select/dist/react-select.css';
import 'react-virtualized/styles.css';
import 'react-virtualized-select/styles.css';
import createFilterOptions from 'react-select-fast-filter-options';

let filterOptions;

class ReactSelect extends React.Component{
    constructor(props, context){
        super(props, context);
        this.state = {
            selectedOption: ''
          };
        // filterOptions = createFilterOptions({options: this.props.list});
        // this.handleChange = this.handleChange.bind(this);
    }
    componentWillReceiveProps(nextProps) {
        return this.setState({ selectedOption: nextProps.selectedOption});
      }
    // handleChange (selectedOption) {
    //     return this.setState({ selectedOption });
    // }

    render() {
        const { selectedOption } = this.state;
        const value = selectedOption && selectedOption.value;
          return (
            <VirtualizedSelect
            name="form-field-name"
            value={value}
            onChange={this.props.handleChange}
            // onChange={this.handleChange}
            // options={[
            //     { value: 'one', label: 'One' },
            //     { value: 'two', label: 'Two' }
            //   ]}
            // filterOptions={filterOptions}
            options = {this.props.list}
          />
          );
      }
}

ReactSelect.propTypes = {
    list: PropTypes.array.isRequired,
    placeholder: PropTypes.string.isRequired,
    handleChange: PropTypes.func,
    selectedOption: PropTypes.object.isRequired
};

export default ReactSelect;