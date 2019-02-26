import * as types from './actionTypes';
import axios from 'axios';
import qs from 'qs';

import { beginAjaxCall, ajaxCallError } from '../actions/ajaxStatusActions'

axios.defaults.baseURL = 'http://35.196.217.205:3000';

export function loadTicketsSuccess(tickets) {
 return {
  type: types.LOAD_TICKETS_SUCCESS,
  tickets
 };
}

export function loadPickupsSuccess(pickups) {
  return {
   type: types.LOAD_PICKUPS_SUCCESS,
   pickups
  };
 }

export function updateTicketSuccess(ticket) {
 return {
  type: types.UPDATE_TICKET_SUCCESS,
  ticket
 };
}

export function createTicketSuccess(ticket) {
 return {
  type: types.CREATE_TICKET_SUCCESS,
  ticket
 };
}

export function loadTickets() {
 return function (dispatch) {
  dispatch(beginAjaxCall());
  axios.get('/users').then((response) => {
    axios.get('/pickup').then((pickupResponse) => {
      var pickupList = [];
      pickupResponse.data.forEach(function(pickup){
        pickupList.push({lat: pickup[0], lng: pickup[1]});
      });
      dispatch(loadTicketsSuccess({users: response.data, pickups: pickupList}));
    }).catch(err => {
      dispatch(ajaxCallError());
      throw err;
    });
  }).catch(err => {
    dispatch(ajaxCallError());
    throw err;
  });
 };
}

export function loadPickups() {
  return function (dispatch) {
   dispatch(beginAjaxCall());
   axios.get('/pickup').then((response) => {
     var pickupList = [];
     response.data.forEach(function(pickup){
       pickupList.push({lat: pickup[0], lng: pickup[1]});
     });
    dispatch(loadPickupsSuccess(pickupList));
   }).catch(err => {
     dispatch(ajaxCallError());
     throw err;
   });
  };
 }

export function saveTicket(ticket) {
 return function (dispatch) {
  dispatch(beginAjaxCall());
  if (!ticket.ticketNo) {
   // new ticket
   return axios.post('/newTicket?' + qs.stringify(ticket), {}).then((response) => {
    dispatch(createTicketSuccess(response.data.result));
   }).catch(err => {
    dispatch(ajaxCallError());
    throw err;
   });
  } else {
   // update ticket
   return axios.put('/updateTicket', {ticket: ticket}).then((response) => {
    dispatch(updateTicketSuccess(response.data.result));
   }).catch(err => {
    throw err;
   });
  }
 };
}
