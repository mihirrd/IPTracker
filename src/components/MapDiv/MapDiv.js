import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker} from 'google-maps-react';
import styles from './MapDiv.module.css'
import dotenv from 'dotenv'



export class MapDiv extends Component {
    
  
    render() {
        return (
          <Map
            key={this.props.latlong}
            className = {styles.container}
            google={this.props.google}
            zoom={14}
            initialCenter={
              {
                lat: this.props.latlong[0],
                lng: this.props.latlong[1]
              }
            }
          >
           <Marker/>
          </Map>
        );
      }
}

export default GoogleApiWrapper({
  apiKey: dotenv.config({API_KEY : '../apikey_config/config.env'})
})(MapDiv);