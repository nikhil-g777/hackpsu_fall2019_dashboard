import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function ticketReducer(state = initialState.tickets, action) {
 switch (action.type) {
  case types.LOAD_TICKETS_SUCCESS:
    console.log(action);
   return action.tickets;

   case types.LOAD_PICKUPS_SUCCESS:
   console.log(action);
   console.log('!!!!!!')
   console.log(action.pickups);
  return action.pickups;


  case types.CREATE_TICKET_SUCCESS:
   return [
    ...state,
    Object.assign({}, action.ticket)
   ];

  case types.UPDATE_TICKET_SUCCESS:
   return [
    ...state.filter(ticket=> ticket.ticketNo !== action.ticket.ticketNo),
    Object.assign({}, action.ticket)
   ];
  default:
   return state;

 }
}
