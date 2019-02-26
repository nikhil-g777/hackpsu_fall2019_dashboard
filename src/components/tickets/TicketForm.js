import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';
import NumberInput from '../common/NumberInput';
import SelectNumberInput from '../common/SelectNumberInput';
import ReactSelect from '../common/ReactSelect';

class TicketForm extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = { 
            selectedOption: {}
        };
        this.handleChange = this.handleChange.bind(this);
      }
    
    componentDidMount() {
        if( this.props.ticket.CustomerId ) {
            let CustomerId = this.props.ticket.CustomerId.toString();
            let selectedOption = this.props.userList.filter((option) => { return option.value == CustomerId;})[0];  
            this.setState({selectedOption});    
        }
    }


    handleChange (selectedOption) {
        // this.props.reactSelectChange({target: {name:'CustomerId', value: parseInt(selectedOption.value)}});
        // this.props.onChange({target: {name:'email', value: selectedOption.label.split('-')[2]}});
        this.props.reactSelectChange({CustomerId: parseInt(selectedOption.value), email: selectedOption.label.split('-')[2]});
        this.setState((prevState, currentProps) => {
          return Object.assign({}, prevState, {selectedOption});
        });      
    }
// const TicketForm = ({ticket, statusList, ticketSourceList, onChange, onSave, saving, errors}) => {
    render() {
        let {ticket, statusList, ticketSourceList, onChange, reactSelectChange, onSave, saving, errors} = this.props;

    return (
        <form>
            <h1>Manage ticket</h1>
            <TextInput
                name="Title"
                label="Title"
                value={ticket.Title}
                onChange={onChange}
                error={errors.Title} />
            
            <TextInput
                name="logdetails"
                label="Description"
                value={ticket.logdetails}
                onChange={onChange}
                error={errors.logdetails} />
            
            {/* <NumberInput
                name="CustomerId"
                label="Customer Id"
                value={ticket.CustomerId}
                onChange={onChange}
                error={errors.CustomerId} /> */}
            <span style={{fontWeight: 'bold'}}>Customer Id</span>
            <ReactSelect list={this.props.userList} placeholder="" handleChange={this.handleChange} selectedOption={this.state.selectedOption}/>
            <br />

            <TextInput
                name="Pert Id"
                label="Pert Id"
                value={ticket.pert_id}
                onChange={onChange}
                error={errors.logdetails} />

            <TextInput
                name="email"
                label="Email"
                value={ticket.email}
                onChange={onChange}
                error={errors.email} />

            <SelectNumberInput
                name="status"
                label="Status"
                value={ticket.status}
                options={statusList}
                onChange={onChange} 
                error={errors.status} />

            <SelectNumberInput
                name="ticket_source"
                label="Ticket Source"
                value={ticket.ticket_source}
                options={ticketSourceList}
                onChange={onChange}
                error={errors.ticket_source} />

            <TextInput
                name="MobileNo"
                label="Mobile Number"
                value={ticket.MobileNo}
                onChange={onChange}
                error={errors.MobileNo} />  

            <input 
                type="submit"
                disabled={saving}
                value={saving ? 'Saving...' : 'Save'}
                className="btn btn-primary"
                onClick={onSave} 
                />
        </form>
    );
    }
}

TicketForm.propTypes = {
    ticket: PropTypes.object.isRequired,
    statusList: PropTypes.array.isRequired,
    ticketSourceList: PropTypes.array.isRequired,
    onSave: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    reactSelectChange: PropTypes.func.isRequired,
    saving: PropTypes.bool,
    userList: PropTypes.array,
    errors: PropTypes.object
};

export default TicketForm;