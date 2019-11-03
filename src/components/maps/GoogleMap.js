import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import PropTypes from 'prop-types';

var size = 20;
var camp_size = 35
var arr = [];

let colors = [
  'mm_20_gray',
  'mm_20_green',
  'mm_20_orange',
  'mm_20_purple',
  'mm_20_red',
  'mm_20_white',
  'mm_20_yellow',
  'mm_20_black',
  'mm_20_blue',
  'mm_20_brown'
];

const MapWithAMarker = withScriptjs(withGoogleMap(props =>
    <div>
    <GoogleMap
      defaultZoom={3}
      defaultCenter={{lat: 40.8036968, lng: -77.8655457}}
    >
        {/* {props.markersList.map((marker) =>{
            return (
                <Marker
                key={Math.random()}
                icon = {{url : marker.status == 0 ?'http://maps.google.com/mapfiles/ms/icons/green.png': marker.status == 2 ?'http://maps.google.com/mapfiles/ms/icons/yellow.png':'http://maps.google.com/mapfiles/ms/icons/red.png',
                scaledSize : {
                    width: 20,
                    height: 20
                  }}}
                position={{lat:marker.latitude, lng: marker.longitude}}
                />    
            );        
        })} */}
        {props.pickupMarkersList.map((marker, index) =>{
            return (
                <Marker
                key={Math.random()}
                // icon = {{url : !props.mode ? marker.cluster == 0 ?'http://maps.google.com/mapfiles/ms/icons/green.png': marker.cluster == 1 ?'http://maps.google.com/mapfiles/ms/icons/blue.png':'http://maps.google.com/mapfiles/ms/icons/red.png' : 
                icon = {{url : !props.mode ? 'http://labs.google.com/ridefinder/images/' + colors[marker.cluster%10] + '.png' : 
                marker.status == 'safe' ?'http://maps.google.com/mapfiles/ms/icons/green.png': marker.status == 'help' ?'http://maps.google.com/mapfiles/ms/icons/yellow.png':'http://maps.google.com/mapfiles/ms/icons/red.png',
                scaledSize : {
                    width: size,
                    height: size
                  }}}
                position={{lat:marker.lat, lng: marker.lng}}
                />    
            );      
        })}

        {props.camps.map((marker, index) =>{
            return (
                <Marker
                key={Math.random()}
                icon = {{url : 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=' + (index+1) + '|00FFFF|000000',
                scaledSize : {
                    width: camp_size,
                    height: camp_size
                  }}}
                position={{lat:marker.latitude, lng: marker.longitude}}
                />    
            );      
        })}

    </GoogleMap>
    </div>
  ));

  MapWithAMarker.propTypes = {
};

export default MapWithAMarker;

