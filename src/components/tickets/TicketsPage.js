import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'; 
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import ReactTable from 'react-table';
import "react-table/react-table.css";
import * as ticketActions from '../../actions/ticketActions';
import TicketList from './TicketList';
import Counts from './Counts';
import GMap from '../maps/GoogleMap';

var apiKey = 'AIzaSyBO-pYdGQggM2aTBx92adMwqECtv5SACW4';



import configureStore from '../../store/configureStore.dev';

const store = configureStore();

var getCounts = function(list){
  var counts = {
    'safe': 0,
    'help': 0,
    'emergency': 0
  }
  if(list && list.length >= 0){
    list.forEach(element => {
        counts[element.status]++;
    });
    return counts;  
  } else {
    return counts;
  }      
}

// var pickupMarkersList = [{ lat: -34.397, lng: 150.644 },{ lat: -31.397, lng: 150.644 },{ lat: -33.397, lng: 150.644 }];
class TicketsPage extends React.Component{
    
      constructor(props, context) {
        super(props, context);
        this.state={checked: false};
        this.redirectToCreateTicketPage = this.redirectToCreateTicketPage.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.updateCamps = this.updateCamps.bind(this);
      }

      componentWillMount() {
        this.props.actions.loadTickets();
        this.props.actions.loadPickups();
      }

      handleChange (e){
        this.setState({ checked: !this.state.checked });
      }

      updateCamps (event){
        var camps = event.target.value;
        if(camps != ''){
          this.setState({ camps: camps });
          store.dispatch(ticketActions.loadTickets(camps));
          this.props.actions.loadTickets(camps);
        }
      }

      redirectToCreateTicketPage(dsa){
        browserHistory.push('/ticket');
      }

      render() {
        const statusMap = {
          '1000': 'New'
        };
        const ticketSourceMap = {
          '1': 'App',
          '2': 'Whatsapp',
          '3': 'Call'
        };
        const { tickets, pickups } = this.props;
        return (
          <div>
            {/* <input type="submit"
                   value="Add Person"
                   className="btn btn-primary"
                   onClick={this.redirectToCreateTicketPage}
            /> */}
            
            <div className="custom-control custom-checkbox">
              <input type="checkbox" onChange={this.handleChange} checked={this.state.checked} />
              <label className="custom-control-label" >Color by Status</label>
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">Number of Relief Camps: </span>
              </div>
              <input value={this.state.camps} className="form-control" onChange={this.updateCamps} aria-describedby="basic-addon1"/>
            </div>

            <GMap
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAfhq9uX2bmNNbLXgQHnG8f5U8y__dwlCY&v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `400px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
              markersList={tickets.users}
              pickupMarkersList = {tickets.pickups}
              camps = {tickets.camps}
              mode = {this.state.checked}
            />
            <Counts counts = {getCounts(tickets.users)} />
            <TicketList tickets={tickets.users} />
          </div>
        );
      }
}

TicketsPage.propTypes = {
  actions: PropTypes.object.isRequired,
  tickets: PropTypes.object.isRequired,
  pickups: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    tickets: state.tickets,
    pickups: state.pickups
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions : bindActionCreators(ticketActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TicketsPage);