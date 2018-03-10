import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

import Map from "../components/Map";

class Dashboard extends Component {
  state = {
    markers: [
      { id: 1, lat: 52.488656, lng: -1.887221 },
      { id: 2, lat: 52.474615, lng: -1.887489 },
      { id: 3, lat: 52.495865, lng: -1.887112 }
    ]
  };

  render() {
    return <Map markers={this.state.markers} />;
  }
}

export default Dashboard;
