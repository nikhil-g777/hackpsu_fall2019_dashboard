import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'; 
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import ReactTable from 'react-table';
import "react-table/react-table.css";
import * as ticketActions from '../../actions/ticketActions';
import TicketList from './TicketList';
import GMap from '../maps/GoogleMap';

var apiKey = 'AIzaSyBO-pYdGQggM2aTBx92adMwqECtv5SACW4';


var getCounts = function(list){
  var counts = {
    Safe: 0,
    Help: 0,
    Emergency: 0
  }
  if(list && list.length >= 0){
    list.forEach(element => {
      switch (element.status) {
        case 0:
          counts.Safe++;
          break;
        case 2:
          counts.Help++;
          break;
        case 6:
          counts.Emergency++;
          break;
        default:
          break;
      }
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
        this.redirectToCreateTicketPage = this.redirectToCreateTicketPage.bind(this);
      }

      componentWillMount() {
        this.props.actions.loadTickets();
        this.props.actions.loadPickups();
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
            <GMap
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBO-pYdGQggM2aTBx92adMwqECtv5SACW4&v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `400px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
              markersList={tickets.users}
              pickupMarkersList = {tickets.pickups}
              counts = {getCounts(tickets.users)}
            />
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
  console.log(state);
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