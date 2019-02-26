import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import PropTypes from 'prop-types';

var size = 35;
var arr = [];

const MapWithAMarker = withScriptjs(withGoogleMap(props =>
    <div>
        <div>{JSON.stringify(props.counts)}</div>       
    <GoogleMap
      defaultZoom={3}
      defaultCenter={{lat: 40.8036968, lng: -77.8655457}}
    >
        {props.markersList.map((marker) =>{
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
        })}
        {props.pickupMarkersList.map((marker, index) =>{
            return (
                <Marker
                key={Math.random()}
                icon = {{url : 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=' + (index+1) + '|00FFFF|000000',
                scaledSize : {
                    width: size,
                    height: size
                  }}}
                position={{lat:marker.lat, lng: marker.lng}}
                />    
            );      
        })}
    </GoogleMap>
    </div>
  ));

  MapWithAMarker.propTypes = {
};

export default MapWithAMarker;

