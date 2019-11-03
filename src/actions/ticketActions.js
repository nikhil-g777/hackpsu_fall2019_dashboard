import * as types from './actionTypes';
import axios from 'axios';
import qs from 'qs';

import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyBAoIjxZR9CvPQ4gXAT9Qb0P6lJvNM8aM4",
  authDomain: "headsup-disaster-doxqbm.firebaseapp.com",
  databaseURL: "https://headsup-disaster-doxqbm.firebaseio.com",
  projectId: "headsup-disaster--doxqbm",
  storageBucket: "headsup-disaster--doxqbm.appspot.com",
  messagingSenderId: "341702821046",
  appId: "1:341702821046:web:70b4598e9fc3ad1ae65217",
  measurementId: "G-KBVJQ8CJ5B"
};

firebase.initializeApp(firebaseConfig);
// storageBucket: "YOUR_APP.appspot.com",          // Storage

var ref = firebase.database().ref("People")

import { beginAjaxCall, ajaxCallError } from '../actions/ajaxStatusActions'

axios.defaults.baseURL = 'http://3.208.95.192:3000';

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

export function loadTickets(camps=3) {
 return function (dispatch) {
  dispatch(beginAjaxCall());
  var pickupList = [];

    axios.get('/cluster?camps='+camps).then((pickupResponse) => {
      pickupResponse.data.people.forEach(function(location){
        pickupList.push({lat: location.latitude, lng: location.longitude, cluster: location.cluster, status: location.status});
      });
      ref.on('value', function(dataSnapshot) {
        var data = dataSnapshot.val()
        var users = []
    
        for(var person in data){
          // pickupList.push({
          //   lat: parseFloat(data[person].latitude), 
          //   lng: parseFloat(data[person].longitude)
          // });
          users.push(data[person])
        }
        // pickupList.push({lat: 40.8036968, lng: -77.8655457})
    
        dispatch(loadTicketsSuccess({users: users, pickups: pickupList, camps: pickupResponse.data.camps}));        
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
    axios.get('/cluster?camps=3').then((response) => {
     var pickupList = [];
     response.data.people.forEach(function(location){
       pickupList.push({lat: location.latitude, lng: location.longitude, cluster: location.cluster});
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
